import Link from "next/link";
import { Cover, Footer, SectionHeading } from "@emeki/band-site-kit";
import { coverProps, footerProps } from "./site-config";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cover {...coverProps} />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <SectionHeading title="404 - Seite nicht gefunden" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            Diese Seite existiert leider nicht.
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            <Link
              href="/"
              className="text-brand underline hover:text-brand-dark"
            >
              Zurück zur Startseite
            </Link>
          </p>
        </div>
      </main>
      <Footer {...footerProps} />
    </div>
  );
}
