"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [gamename, setGamename] = useState("");
  const [tagline, setTagline] = useState("");

  const handleGamenameChange = (e) => {
    setGamename(e.target.value);
  };
  const handleTaglineChange = (e) => {
    setTagline(e.target.value);
  };
  const handleSubmit = () => {
    router.push(`/profile?gamename=${gamename}&tagline=${tagline}`);
  };
  return (
    <>
      <div>
        <h1>WLD Riot</h1>
        <div>
          <p>Login</p>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="GameName"
          value={gamename}
          onChange={handleGamenameChange}
          maxLength={50}
        />

        <input
          type="text"
          placeholder="#NA1"
          value={tagline}
          onChange={handleTaglineChange}
          maxLength={5}
        />

        <button onClick={handleSubmit}>Search</button>
      </div>
    </>
  );
}
