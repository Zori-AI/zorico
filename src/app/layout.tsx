import type { Metadata } from "next";
import { Raleway, Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Zori - Your calm guide to self-understanding",
  description:
    "Discover the wisdom within and navigate life's journey with confidence and purpose through Zori's insights. Powered by NASA JPL and Swiss Ephemeris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="ru">
          <body
            className={`${raleway.variable} ${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
          >
            {/* SVG фильтры для глобального использования */}
            <svg className="absolute w-0 h-0">
              <defs>
                <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
                  <feColorMatrix type="saturate" values="1.5"/>
                </filter>
              </defs>
            </svg>
            {children}
          </body>
        </html>
  );
}
