import type { ComponentProps } from "react";
import { Cover, Footer } from "@emeki/band-site-kit";

export const SHEET_ID =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUVdKxsjIVa2D8WbMOZxLBm0-u0_V6-Ui8Ntxc5_mTxB3xBHgIRMXvuLE5pjzTW0F8C3-RvY2hT3jc/pub?output=csv";

export const coverProps: ComponentProps<typeof Cover> = {
  bandName: "YONO Streetband",
  logoSrc: "/logo_transparent.png",
  logoAlt: "YONO Streetband Logo",
  logoWidth: 2584,
  logoHeight: 1682,
  tagline: "Die Strassenmusik Kleinformation aus Zürich",
  backgroundImageSrc: "/cover_yono.jpg",
  backgroundImageAlt: "YONO Streetband bei einem Auftritt",
  backgroundImageWidth: 1750,
  backgroundImageHeight: 667,
};

export const footerProps: ComponentProps<typeof Footer> = {
  copyrightName: "YONO Streetband",
  logoSrc: "/logo_transparent.png",
  logoAlt: "YONO Streetband Logo",
  links: [
    { type: "email", href: "mailto:yonostreetband@gmail.com" },
    {
      type: "instagram",
      href: "https://www.instagram.com/yono_streetband/",
    },
    { type: "youtube", href: "https://youtube.com/@Yono-Streetband" },
  ],
};
