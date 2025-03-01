"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Match() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const puuid = searchParams.get("puuid");
    const match_id = searchParams.get("match_id");
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const url = `${BASE_URL}/match/match-detail?puuid=${puuid}&match_id=${match_id}`;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchMatch() {
          try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error("Failed to fetch match:", error);
          } finally {
            setLoading(false);
          }
        }
        fetchMatch();
      }, [url]);

      if (loading) return <div>Loading...</div>;
      if (!data) return <div>No match data available</div>;

      const team1 = data.summoners.slice(0, 5).join(', ');
      const team2 = data.summoners.slice(5, 10).join(', ');

      return(
        <>
        <p>{team1}</p>
        <p>vs</p>
        <p>{team2}</p>
        </>
      )
}