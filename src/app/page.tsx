import Cover from "./cover";
import Footer from "./footer";
import { SectionHeading, VideoEmbed } from "./common";
import { AgendaProvider, FutureEvents, PastEvents } from "./agenda";
import { fetchAgenda, stripMarkdownLinks, toISODate } from "./agenda-data";

export default async function Home() {
  // There is no 'use client' directive, so this is called only
  // once at build time!
  const agenda = await fetchAgenda();

  const eventsJsonLd = agenda.future.map((event) => ({
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: stripMarkdownLinks(event.Was),
    startDate: toISODate(event.Wann),
    location: {
      "@type": "Place",
      name: stripMarkdownLinks(event.Wo),
    },
    performer: {
      "@type": "MusicGroup",
      name: "YONO Streetband",
    },
  }));

  const bandPhoto = (
    <img
      src="/band_photo.jpg"
      alt="Die YONO Streetband am Zürichsee"
      width={1600}
      height={1200}
      className="mx-auto mb-6 rounded-xl shadow-lg"
    />
  );

  return (
    <div className="min-h-screen flex flex-col">
      {eventsJsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
        />
      )}
      <Cover />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4">
          <VideoEmbed youtubeId="NPwcvavqMbE" />

          <AgendaProvider initialData={agenda}>
            <SectionHeading title="Agenda" />
            <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg">
              Unsere nächsten Auftritte finden an folgenden Daten statt:
            </p>
            <FutureEvents />

            <SectionHeading title="Besetzung" />
            <section className="max-w-3xl mx-auto px-4 py-2 text-center">
              {bandPhoto}
              <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
                Die YONO Streetband besteht aus folgenden Musikern (von links
                nach rechts):
              </p>
              <ul className="list-disc list-inside space-y-2 text-left max-w-md mx-auto text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Pim Bulle</strong> - Tenor Saxophon
                </li>
                <li>
                  <strong>Daniel Welter</strong> - Schlagzeug
                </li>
                <li>
                  <strong>Christian Baumann</strong> - Trompete
                </li>
                <li>
                  <strong>Max Berger</strong> - Posaune
                </li>
                <li>
                  <strong>Stefan Venetz</strong> - Pauke
                </li>
                <li>
                  <strong>Luciano Marinello</strong> - Sousaphon
                </li>
                <li>
                  <strong>Lőrinc Màrton</strong> - Trompete
                </li>
                <li>
                  <strong>Michael Strecke</strong> - Bariton Saxophon
                </li>
              </ul>
            </section>

            <SectionHeading title="Vergangene Auftritte" />
            <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg">
              An folgenden Anlässen haben wir schon gespielt:
            </p>
            <PastEvents />
          </AgendaProvider>

          <SectionHeading title="Kontakt" />
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
            Wollen Sie uns für einen Anlass buchen oder haben sonst ein
            Anliegen? Kontaktieren Sie uns über{" "}
            <a
              href="mailto:yonostreetband@gmail.com"
              aria-label="Email"
              className="text-brand hover:text-brand-dark font-medium hover:underline"
            >
              yonostreetband@gmail.com
            </a>
            {""}.
          </p>

          <SectionHeading title="Über Uns" />
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
            Entstanden ist die <strong>YONO Streetband</strong> im Frühjahr
            2022. Danach wurde erst einmal fleissig geprobt, worauf dann im Juni
            2023 die ersten Auftritte durchgeführt wurden. Aufgrund einiger
            Austritte aus der Band konnten im folgenden Jahr keine Auftritte
            geplant und gespielt werden. Mit ein paar Neuzugängen Anfang 2025
            konnte die Besetzung wieder komplettiert werden. Im Sommer 2025
            fanden darauf die ersten Auftritte in neuer Besetzung statt.
          </p>
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
            Unser Repertoire ist sehr durchmischt, wir spielen Coverversionen
            von bekannten Stücken aus den Genres Pop, Funk, Rock, Hip-Hop und
            Jazz. Die Songs werden von Christian Baumann speziell für die
            Bandbesetzung arrangiert. Zu einigen Stücken haben wir{" "}
            <a
              href="https://musescore.com/user/36900198/sets/5455133"
              className="text-brand hover:text-brand-dark font-medium hover:underline"
            >
              die Noten auf MuseScore veröffentlicht.
            </a>{" "}
            Falls Sie noch einen besseren Eindruck unseres Repertoires wollen,
            können Sie uns gerne bei unserem nächsten Konzert besuchen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
