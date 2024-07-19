import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import birthDayPic from "../../public/group_persons_with_hat.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Ganga Babu Rachamanti&nbsp;
          <code className={styles.code}>PUBG Gamer and Family Man</code>
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/gangaBabu.jpg"
          alt="Ganga babu profile pic"
          width={200}
          height={200}
          priority
        />
        {/* <div className={styles.thirteen}>
          <Image src="/gangaBabu.jpg" alt="13" width={40} height={31} priority />
        </div> */}
      </div>

      <div className={styles.fontMono}>
        <p className={styles.center}>
          8th Feb 2023 Came - Wish You a Happy Birth Day. May God bless you and
          protect you with Abundant Love and Grace.
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={birthDayPic}
          alt="Birth Day Friends Logo"
          width={300}
          priority
        />
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/birthday_friends_with_decorations.avif"
          alt="Birth Day Friends Logo"
          width={300}
          height={150}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Photos <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Find My Uploaded Pictures.</p>
        </a>

        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Videos <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Explore Videos Uploaded.</p>
        </a>

        <a
          href="/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Contact <span>-&gt;</span>
          </h2>
          <p className={inter.className}>To Connect with me.</p>
        </a>
      </div>
    </main>
  );
}
