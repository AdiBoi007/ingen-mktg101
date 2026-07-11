import type { Metadata } from "next";
import "./globals.css";
import { AudienceProvider } from "@/components/AudienceContext";

export const metadata: Metadata = {
  title: "iNGEN — See candidates do the job",
  description:
    "Adaptive AI job simulations, candidate proof verification, and evidence-backed hiring for every role.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AudienceProvider>{children}</AudienceProvider>
      </body>
    </html>
  );
}
