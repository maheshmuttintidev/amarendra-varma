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
      <body>
        <video className={styles.videoBackground} autoPlay loop muted>
          <source src={"/bg-video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {children}
      </body>
    </html>
  );
}
