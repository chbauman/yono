"use client";

import { FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="h-16" /> {/* Adjust height as needed */}
      <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-m">© {new Date().getFullYear()} YONO Streetband</p>
          <div className="flex space-x-6">
            <a
              href="mailto:yonostreetband@gmail.com"
              aria-label="Email"
              className="hover:text-blue-500"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://youtube.com/@Yono-Streetband"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-500"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
