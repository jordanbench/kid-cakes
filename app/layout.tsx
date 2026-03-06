import type { Metadata } from "next";
import { Outfit, Nunito_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kid Cakes — Breakfast Without the Battle",
  description:
    "Pancakes picky eaters ask for. Nutrition parents can trust. Monthly boxes of texture-friendly, nutrient-packed pancake mixes designed for the pickiest kids.",
  openGraph: {
    title: "Kid Cakes — Breakfast Without the Battle",
    description:
      "Pancakes picky eaters ask for. Nutrition parents can trust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${nunitoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
