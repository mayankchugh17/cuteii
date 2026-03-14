"use client";


import { useEffect, useRef } from "react";

function RomanticMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playMusic = () => {
      audioRef.current?.play();
    };

    document.addEventListener("click", playMusic);

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/romantic.mp3" type="audio/mpeg" />
    </audio>
  );
}

export default RomanticMusic;