"use client";

import Cover from "./cover";
import Footer from "./footer";
import { SectionHeading, VideoEmbed } from "./common";
import { useAgenda } from "./agenda";

export default function Home() {
  const [futureEvents, pastEvents] = useAgenda();

  const bandPhoto = (
    <img
      src="/band_photo.jpg"
      alt="Band Besetzung"
      className="mx-auto mb-6 w-108 md:w-148"
    />
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Cover />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4">
          <VideoEmbed youtubeId="SKNpbjA-w6k" />

          <SectionHeading title="Agenda" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg">
            Unsere nächsten Auftritte finden an folgenden Daten statt:
          </p>
          {futureEvents}

          <SectionHeading title="Besetzung" />
          <section className="max-w-3xl mx-auto px-4 py-2 text-center">
            {bandPhoto}
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
              Die YONO Streetband besteht aus folgenden Musikern:
            </p>
            <ul className="list-disc list-inside space-y-2 text-left max-w-md mx-auto text-gray-700 dark:text-gray-300">
              <li>
                <strong>Lőrinc Màrton</strong> - Trompete
              </li>
              <li>
                <strong>Christian Baumann</strong> - Trompete
              </li>
              <li>
                <strong>Luciano Marinello</strong> - Sousaphon
              </li>
              <li>
                <strong>Daniel Welter</strong> - Schlagzeug
              </li>
              <li>
                <strong>Pim Bulle</strong> - Tenor Saxophon
              </li>
              <li>
                <strong>Michael Strecke</strong> - Bariton Saxophon
              </li>
              <li>
                <strong>Michael Iseli</strong> - Pauke
              </li>
            </ul>
          </section>

          <SectionHeading title="Vergangene Auftritte" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg">
            An folgenden Anlässen haben wir schon gespielt:
          </p>
          {pastEvents}

          <SectionHeading title="Kontakt" />
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
            Wollen Sie uns für einen Anlass buchen oder haben sonst ein
            Anliegen? Kontaktieren Sie uns über{" "}
            <a
              href="mailto:yonostreetband@gmail.com"
              aria-label="Email"
              className="text-blue-600 hover:underline"
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
              className="text-blue-600 hover:underline"
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
