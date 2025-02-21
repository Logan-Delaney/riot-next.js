import Image from "next/image";
import styles from "./page.module.css";

const response = await fetch ('http://127.0.0.1:8000/game-account/profile?tagline=NA1&gamename=Logan%20Delaney')
const data = await response.json()

const handleWin = (result) => {
  if (result === true) {
    return "Victory"
  } else {
    return "Defeat"
  }
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Ranked: {data.ranked[0] + ": " + data.ranked[1]}</h3>
        <h1 className={styles.title}>
          {data.riot_account.gameName + " #" + data.riot_account.tagLine}
        </h1>
        <ol>
          <li>
            {data.matches[0].champion + " " + handleWin(data.matches[0].win) + " " + data.matches[0].kda}
          </li>
          <li>
            {data.matches[1].champion + " " + handleWin(data.matches[1].win) + " " + data.matches[1].kda}
          </li>
          <li>
            {data.matches[2].champion + " " + handleWin(data.matches[2].win) + " " + data.matches[2].kda}
          </li>
          <li>
            {data.matches[3].champion + " " + handleWin(data.matches[3].win) + " " + data.matches[3].kda}
          </li>
          <li>
            {data.matches[4].champion + " " + handleWin(data.matches[4].win) + " " + data.matches[4].kda}
          </li>
        </ol>

        <div className={styles.ctas}>
          <h4>
            Top 3 Played Champions
          </h4>
          <ol>
            <li>
              {data.mastery[0]}
            </li>
            <li>
              {data.mastery[1]}
            </li>
            <li>
              {data.mastery[2]}
            </li>
          </ol>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
