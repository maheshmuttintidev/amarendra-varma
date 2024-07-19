import "./globals.css";
import styles from "./page.module.css";
import { Comic_Neue } from "@next/font/google";

const comic = Comic_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={comic.className}>
      <head />
      <body className="bg-red-300 min-h-screen">{children}</body>
    </html>
  );
}
