import type { Metadata } from "next";
import { Jaldi, Jersey_10 } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const jaldi = Jaldi({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jaldi"
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey"
});

const bouncybluepersonalregularColr = localFont({
	src: "./fonts/BouncyBluePERSONALRegular-COLR.ttf",
	variable: "--bouncybluepersonalregularColr",
	display: "swap",
});

const iconsSocialMedia15Colr = localFont({
	src: "./fonts/Icons Social Media 15-COLR.ttf",
	variable: "--iconsSocialMedia15Colr",
	display: "swap",
});

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Explore the world of Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jaldi.variable} ${jersey.variable} ${bouncybluepersonalregularColr.variable} ${iconsSocialMedia15Colr.variable} antialiased`}
      >
        <header className="content-grid">
        </header>
        {children}
      </body>
    </html>
  );
}
