"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [gamename, setGamename] = useState("");
  const [tagline, setTagline] = useState("");
  
  // Array of background image paths
  const backgroundImages = [
    "/splash/Aatrox_0.jpg",
    "/splash/Ahri_0.jpg",
    "/splash/Akali_0.jpg",
    "/splash/Alistar_0.jpg",
    "/splash/Amumu_0.jpg",
    "/splash/Anivia_0.jpg",
    "/splash/Annie_0.jpg",
    "/splash/Aphelios_0.jpg",
    "/splash/Ashe_0.jpg",
    "/splash/AurelionSol_0.jpg",
    "/splash/Azir_0.jpg",
    "/splash/Bard_0.jpg",
    "/splash/Blitzcrank_0.jpg",
    "/splash/Brand_0.jpg",
    "/splash/Braum_0.jpg",
    "/splash/Caitlyn_0.jpg",
    "/splash/Camille_0.jpg",
    "/splash/Cassiopeia_0.jpg",
    "/splash/Chogath_0.jpg",
    "/splash/Corki_0.jpg",
    "/splash/Darius_0.jpg",
    "/splash/Diana_0.jpg",
    "/splash/DrMundo_0.jpg",
    "/splash/Draven_0.jpg",
    "/splash/Ekko_0.jpg",
    "/splash/Elise_0.jpg",
    "/splash/Evelynn_0.jpg",
    "/splash/Ezreal_0.jpg",
    "/splash/Fiddlesticks_0.jpg",
    "/splash/Fiora_0.jpg",
    "/splash/Fizz_0.jpg",
    "/splash/Galio_0.jpg", 
    "/splash/Gangplank_0.jpg",
    "/splash/Garen_0.jpg",
    "/splash/Gnar_0.jpg",
    "/splash/Gragas_0.jpg",
    "/splash/Graves_0.jpg",
    "/splash/Gwen_0.jpg",
    "/splash/Hecarim_0.jpg",
    "/splash/Heimerdinger_0.jpg",
    "/splash/Illaoi_0.jpg",
    "/splash/Irelia_0.jpg",
    "/splash/Ivern_0.jpg",
    "/splash/Janna_0.jpg",
    "/splash/JarvanIV_0.jpg",
    "/splash/Jax_0.jpg",
    "/splash/Jayce_0.jpg",
    "/splash/Jhin_0.jpg",
    "/splash/Jinx_0.jpg",
    "/splash/Kaisa_0.jpg",
    "/splash/Kalista_0.jpg",
    "/splash/Karma_0.jpg",
    "/splash/Karthus_0.jpg",
    "/splash/Kassadin_0.jpg",
    "/splash/Katarina_0.jpg",
    "/splash/Kayle_0.jpg",
    "/splash/Kayn_0.jpg",
    "/splash/Kennen_0.jpg",
    "/splash/Khazix_0.jpg",
    "/splash/Kindred_0.jpg",
    "/splash/Kled_0.jpg",
    "/splash/KogMaw_0.jpg",
    "/splash/Leblanc_0.jpg",
    "/splash/LeeSin_0.jpg",
    "/splash/Leona_0.jpg",
    "/splash/Lillia_0.jpg",
    "/splash/Lissandra_0.jpg",
    "/splash/Lucian_0.jpg",
    "/splash/Lulu_0.jpg",
    "/splash/Lux_0.jpg",
    "/splash/Malphite_0.jpg",
    "/splash/Malzahar_0.jpg",
    "/splash/Maokai_0.jpg",
    "/splash/MasterYi_0.jpg",
    "/splash/MissFortune_0.jpg",
    "/splash/Mordekaiser_0.jpg",
    "/splash/Morgana_0.jpg",
    "/splash/Nami_0.jpg",
    "/splash/Nasus_0.jpg",
    "/splash/Nautilus_0.jpg",
    "/splash/Neeko_0.jpg",
    "/splash/Nidalee_0.jpg",
    "/splash/Nocturne_0.jpg",
    "/splash/Nunu_0.jpg",
    "/splash/Olaf_0.jpg",
    "/splash/Orianna_0.jpg",
    "/splash/Ornn_0.jpg",
    "/splash/Pantheon_0.jpg",
    "/splash/Poppy_0.jpg",   
    "/splash/Pyke_0.jpg",
    "/splash/Qiyana_0.jpg",
    "/splash/Quinn_0.jpg",
    "/splash/Rakan_0.jpg",
    "/splash/Rammus_0.jpg",
    "/splash/RekSai_0.jpg",
    "/splash/Rell_0.jpg",
    "/splash/Renekton_0.jpg",
    "/splash/Rengar_0.jpg",
    "/splash/Riven_0.jpg",
    "/splash/Rumble_0.jpg",
    "/splash/Ryze_0.jpg",
    "/splash/Samira_0.jpg",
    "/splash/Sejuani_0.jpg",
    "/splash/Senna_0.jpg",
    "/splash/Seraphine_0.jpg",
    "/splash/Sett_0.jpg",
    "/splash/Shaco_0.jpg",
    "/splash/Shen_0.jpg",
    "/splash/Shyvana_0.jpg",
    "/splash/Singed_0.jpg",
    "/splash/Sion_0.jpg",
    "/splash/Sivir_0.jpg",
    "/splash/Skarner_0.jpg",
    "/splash/Sona_0.jpg",
    "/splash/Soraka_0.jpg",
    "/splash/Swain_0.jpg",
    "/splash/Sylas_0.jpg", 
    "/splash/Syndra_0.jpg",
    "/splash/TahmKench_0.jpg",
    "/splash/Taliyah_0.jpg",
    "/splash/Talon_0.jpg",
    "/splash/Taric_0.jpg",
    "/splash/Teemo_0.jpg",
    "/splash/Thresh_0.jpg",
    "/splash/Tristana_0.jpg",
    "/splash/Trundle_0.jpg",
    "/splash/Tryndamere_0.jpg",
    "/splash/TwistedFate_0.jpg",
    "/splash/Twitch_0.jpg",
    "/splash/Udyr_0.jpg",
    "/splash/Urgot_0.jpg",
    "/splash/Varus_0.jpg",
    "/splash/Vayne_0.jpg",
    "/splash/Veigar_0.jpg",
    "/splash/Velkoz_0.jpg",
    "/splash/Vi_0.jpg",
    "/splash/Viego_0.jpg",
    "/splash/Viktor_0.jpg",
    "/splash/Vladimir_0.jpg",
    "/splash/Volibear_0.jpg",
    "/splash/Warwick_0.jpg",
    "/splash/Wukong_0.jpg",
    "/splash/Xayah_0.jpg",
    "/splash/Xerath_0.jpg",
    "/splash/XinZhao_0.jpg",
    "/splash/Yasuo_0.jpg",
    "/splash/Yone_0.jpg",
    "/splash/Yorick_0.jpg",
    "/splash/Yuumi_0.jpg",
    "/splash/Zac_0.jpg",
    "/splash/Zed_0.jpg",
    "/splash/Ziggs_0.jpg",
    "/splash/Zilean_0.jpg",
    "/splash/Zoe_0.jpg",
    "/splash/Zyra_0.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * backgroundImages.length)
  );

  const getRandomImageIndex = (currentIndex) => {
    if (backgroundImages.length <= 1) return 0;
    
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * backgroundImages.length);
    } while (newIndex === currentIndex);
    
    return newIndex;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => getRandomImageIndex(prevIndex)
      );
    }, 5000); 
    
    return () => clearInterval(interval);
  }, []);

  const handleGamenameChange = (e) => {
    setGamename(e.target.value);
  };
  
  const handleTaglineChange = (e) => {
    setTagline(e.target.value);
  };
  
  const handleSubmit = () => {
    if (gamename && tagline) {
      router.push(`/profile?gamename=${gamename}&tagline=${tagline}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }
  
  return (
    <>
      <div className={styles.backgroundContainer}>
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`${styles.backgroundImage} ${index === currentImageIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        <div className={styles.container}>
          <input
            className={styles.gamename}
            type="text"
            placeholder="GameName"
            value={gamename}
            onChange={handleGamenameChange}
            onKeyDown={handleKeyDown}
            maxLength={50}
          />

          <input
            className={styles.hashtag}
            type="text"
            value='#'
            maxLength={1}
            readOnly
          />

          <input
            className={styles.tagline}
            type="text"
            placeholder="NA1"
            value={tagline}
            onChange={handleTaglineChange}
            onKeyDown={handleKeyDown}
            maxLength={5}
          />
        </div>
      </div>
    </>
  );
}
