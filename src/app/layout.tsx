import type { Metadata } from "next";
import { Raleway, Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const qedysans = localFont({
  src: "../fonts/QedysansRegular-X35GK.ttf",
  variable: "--font-qedysans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zori - Your calm guide to self-understanding",
  description: "Create your natal chart in 30 seconds and get precise insights, daily calendar, and access to your astrologer anytime. Powered by NASA JPL and Swiss Ephemeris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="ru">
          <body
            className={`${raleway.variable} ${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} ${qedysans.variable} antialiased`}
          >
            {children}
          </body>
        </html>
  );
}
