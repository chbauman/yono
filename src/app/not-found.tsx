import Link from "next/link";
import { SectionHeading } from "./common";
import Cover from "./cover";
import Footer from "./footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cover />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4 mt-6">
          <SectionHeading title="404 - Seite nicht gefunden" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            Diese Seite existiert leider nicht.
          </p>
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg text-center">
            <Link
              href="/"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Zurück zur Startseite
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
