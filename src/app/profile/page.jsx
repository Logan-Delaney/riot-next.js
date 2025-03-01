"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Profile() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const gamename = searchParams.get("gamename");
  const tagline = searchParams.get("tagline");
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${BASE_URL}/game-account/profile?tagline=${tagline}&gamename=${gamename}`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, [url]);

  if (loading) return <div>Loading...</div>;

  const gameResult = (result) => {
    if (result === true) {
      return "Win";
    } else {
      return "Loss";
    }
  }

  const handleClick = (match_id) => {
    router.push(`/match?match_id=${match_id}&puuid=${data.riot_account.puuid}`);
  }


  const wins = data.matches.filter((match) => match.win === true).length;
  const losses = data.matches.filter((match) => match.win === false).length;

   const getWinRate = (wins, losses) => {
    return (wins / (wins + losses) * 100).toFixed(2);
  }

  return (
    <>
    <div className={styles.profile_top}>
      <div className={styles.profile_top_left}>
        <div>
        <p>image</p>
        </div>
        <div>
          <h1>
            {data.riot_account.gameName + " #" + data.riot_account.tagLine}
          </h1>
          <h4>{"Solo/Duo: " + data.ranked.Solo_Duo}</h4>
          <h4>{"Flex: " + data.ranked.Flex}</h4>
        </div>
      </div>
      <div className={styles.profile_top_right}>
        <h2>Champion Mastery:</h2>
        <h4>
          {data.mastery.champ1[0] + " ---  level " + data.mastery.champ1[1]} <br></br>
          {data.mastery.champ2[0] + " ---  level " + data.mastery.champ2[1]} <br></br>
          {data.mastery.champ3[0] + " ---  level " + data.mastery.champ3[1]} <br></br>
        </h4>
      </div>
    </div>
    <div className={styles.stats}>
        <h2>Stats:</h2>
        <h4>Solo/Duo Winrate: {data.ranked.Solo_Winrate}</h4>
        <h4>Flex Winrate: {data.ranked.Flex_Winrate}</h4>
    </div>
    <div className={styles.matches}>
        <h2>Matches</h2>
        <table className={styles.matches_table}>
            <thead>
                <tr>
                <th>Champion</th>
                <th>Result</th>
                <th>KDA</th>
                <th>Damage</th>
                <th>CS</th>
                <th>Gold</th>
                </tr>
            </thead>
            <tbody>
                {data.matches.map((match) => (
                <tr key={match.game_id} onClick={() => handleClick(match.game_id)}>
                    <td>{match.champion}</td>
                    <td>{gameResult(match.win)}</td>
                    <td>{match.kda}</td>
                    <td>{match.damage}</td>
                    <td>{match.cs}</td>
                    <td>{match.gold}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  );
}
