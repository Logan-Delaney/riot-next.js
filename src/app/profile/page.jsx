"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState} from "react";

export default function Profile() {
  const searchParams = useSearchParams();
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
                console.error('Failed to fetch profile:', error);
              } finally {
                setLoading(false);
              }
            }
            fetchProfile();
          },[url]);
  
    if (loading) return <div>Loading...</div>
  
  return (
      <div>
        <p>GameName: {gamename}</p>
        <p>Tagline: {tagline}</p>
        <p>{data.riot_account.gameName}</p>
        <p>{data.riot_account.tagline}</p>
        <p>Masteries:</p>
        <p>{data.mastery}</p>
        <p>Rank:</p>
        <p>{data.ranked}</p>
        <p>Matches:</p>
        <p>{data.matches[0].champion}</p>
      </div>
  );
}
