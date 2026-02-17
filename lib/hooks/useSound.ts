"use client";

import { useEffect, useRef } from "react";

export default function useSound(path: string, volume: number = 1) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(path);
    audio.volume = volume;
    audioRef.current = audio;

    // clean up
    return () => {
        audio.pause();
        audioRef.current = null;
    };
  }, [path, volume]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.error("Audio error:", err));
    }
  };

  return play;
}