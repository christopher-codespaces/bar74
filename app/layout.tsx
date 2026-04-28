import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, DM_Sans, Fredoka } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Bistro 74 | Modern Mediterranean Cuisine in Cape Town",
  description:
    "Experience modern Mediterranean cuisine with honest South African soul at Bistro 74. Dog-friendly neighbourhood bistro in Mowbray, Cape Town.",
  keywords: [
    "restaurant",
    "bistro",
    "Cape Town",
    "Mediterranean",
    "South African",
    "Mowbray",
    "dog-friendly",
    "bar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dancing.variable} ${dmSans.variable} ${fredoka.variable}`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
