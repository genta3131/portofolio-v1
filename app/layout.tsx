import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gentaabdi-portofolio.vercel.app"),
  title: "Genta Abdi Fathir — Backend Developer",
  description:
    "Portfolio Genta Abdi Fathir: backend developer Laravel/PHP, pembangun SimRisk (sistem manajemen risiko enterprise). Jakarta, Indonesia.",
  openGraph: {
    type: "profile",
    title: "Genta Abdi Fathir — Backend Developer",
    description:
      "Backend developer Laravel/PHP, pembangun SimRisk. Jakarta, Indonesia.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Genta Abdi Fathir — Backend Developer" }],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Genta Abdi Fathir — Backend Developer",
    description:
      "Backend developer Laravel/PHP, pembangun SimRisk. Jakarta, Indonesia.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Genta Abdi Fathir" }],
  keywords: ["Genta Abdi Fathir", "Backend Developer", "Laravel", "PHP", "SimRisk", "portfolio"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-3 focus:rounded-pill focus:bg-accent-emerald focus:px-4 focus:py-2 focus:text-sm focus:text-dark"
        >
          Langsung ke konten
        </a>
        {children}
      </body>
    </html>
  );
}
