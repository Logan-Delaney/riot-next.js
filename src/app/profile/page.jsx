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

  if (loading) return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
      <p>Loading profile...</p>
    </div>
  );

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
    <div className={styles.container}>
      <div className={styles.profile_top}>
        <div className={styles.profile_top_left}>
          <div className={styles.avatar}>
            <p>image</p>
          </div>
          <div>
            <h1>
              {data.riot_account.gameName} <span className={styles.tagline}>#{data.riot_account.tagLine}</span>
            </h1>
            <h4>Solo/Duo: <span className={styles.rank}>{data.ranked.Solo_Duo}</span></h4>
            <h4>Flex: <span className={styles.rank}>{data.ranked.Flex}</span></h4>
          </div>
        </div>
        <div className={styles.profile_top_right}>
          <h2>Champion Mastery</h2>
          <h4>
            <span className={styles.champion}>{data.mastery.champ1[0]}</span> 
            <span className={styles.mastery_level}> - Level {data.mastery.champ1[1]}</span>
          </h4>
          <h4>
            <span className={styles.champion}>{data.mastery.champ2[0]}</span> 
            <span className={styles.mastery_level}> - Level {data.mastery.champ2[1]}</span>
          </h4>
          <h4>
            <span className={styles.champion}>{data.mastery.champ3[0]}</span> 
            <span className={styles.mastery_level}> - Level {data.mastery.champ3[1]}</span>
          </h4>
        </div>
      </div>
      <div className={styles.stats}>
          <h2>Stats</h2>
          <h4>Solo/Duo Winrate: <span className={styles.winrate}>{data.ranked.Solo_Winrate}</span></h4>
          <h4>Flex Winrate: <span className={styles.winrate}>{data.ranked.Flex_Winrate}</span></h4>
          <h4>Recent Games: <span className={styles.record}>{wins}W {losses}L</span> ({getWinRate(wins, losses)}%)</h4>
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
                  <tr 
                    key={match.game_id}
                    onClick={() => handleClick(match.game_id)}
                    data-win={match.win}
                  >
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
    </div>
  );
}
