"use client";

import Link from "next/link";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const sheetId =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUVdKxsjIVa2D8WbMOZxLBm0-u0_V6-Ui8Ntxc5_mTxB3xBHgIRMXvuLE5pjzTW0F8C3-RvY2hT3jc/pub?output=csv";

const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
};

type EventList = { Wann: string; Wo: string; Was: string }[];
type DateData = { past: EventList; future: EventList };

export function parseMarkdownLinks(text: string) {
  const parts = [];
  let lastIndex = 0;
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const [, linkText, url] = match;

    // Push the text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Push the actual Next.js Link component
    parts.push(
      <Link
        key={match.index}
        href={url}
        className="text-brand hover:text-brand-dark font-medium hover:underline"
      >
        {linkText}
      </Link>,
    );

    lastIndex = regex.lastIndex;
  }

  // Push remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

/**
 * Parse Google Sheet CSV into dictionary.
 * @param text Raw text.
 */
function parseCSV(text: string): DateData {
  // Parse csv into objects
  const events = Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
  }).data as unknown as EventList;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  today.setDate(today.getDate() - 1); // Also keep yesterday's events in the future list

  const pastEvents: typeof events = [];
  const futureEvents: typeof events = [];

  // Separate by past / future
  for (const event of events) {
    const eventDate = parseDate(event.Wann);
    if (eventDate < today) {
      pastEvents.push(event);
    } else {
      futureEvents.push(event);
    }
  }

  // Sort each list by date ascending
  pastEvents.sort(
    (a, b) => parseDate(b.Wann).getTime() - parseDate(a.Wann).getTime(),
  );
  futureEvents.sort(
    (a, b) => parseDate(a.Wann).getTime() - parseDate(b.Wann).getTime(),
  );

  return { past: pastEvents, future: futureEvents };
}

/**
 * SheetData component.
 * Loads data in CSV form from Google Sheet API and displays it as table.
 * @returns React component.
 */
export const useAgenda = () => {
  const [data, setData] = useState<DateData>({ future: [], past: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const res = await fetch(sheetId);
        const text = await res.text();
        const parsed = parseCSV(text);
        setData(parsed);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching sheet:", err);
      }
    };

    fetchCSV();
  }, []);

  if (loading) {
    const loadingComp = <div className="p-6">Loading...</div>;
    return [loadingComp, loadingComp] as const;
  }

  return [
    <EventList data={data.future} key="future" />,
    <EventList data={data.past} key="past" />,
  ] as const;
};

const EventList = ({ data }: { data: EventList }) => {
  if (data.length == 0) {
    return <p className="text-center">No upcoming gigs planned yet.</p>;
  }
  return (
    <div className="overflow-x-auto rounded-xl shadow-md ring-1 ring-gray-200 dark:ring-gray-700">
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          <tr className="bg-brand">
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                className="px-4 py-3 text-left font-heading font-semibold text-white first:rounded-tl-xl last:rounded-tr-xl"
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="odd:bg-gray-50 dark:odd:bg-gray-800/50 hover:bg-brand/10 dark:hover:bg-brand/20 transition-colors"
            >
              {Object.entries(row).map((keyAndCell) => (
                <td
                  key={keyAndCell[0]}
                  className="px-4 py-3 border-t border-gray-200 dark:border-gray-700"
                >
                  {parseMarkdownLinks(keyAndCell[1])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
