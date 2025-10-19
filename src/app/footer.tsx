"use client";

import { FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-5xl px-4 mx-auto py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="text-m">© {new Date().getFullYear()}</p>
        </div>
        <img
          src="/logo_transparent.png"
          alt="YONO"
          style={{ height: "50px" }}
        />
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
  );
}
