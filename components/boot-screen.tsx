"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useSound from "@/lib/hooks/useSound";

interface Props {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: Props) {
  const [lines, setLines] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsReady(true);

    Promise.all([
      document.fonts.ready,
      new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve(true);
        } else {
          window.addEventListener("load", resolve);
        }
      })
    ]).then(handleLoad);

    const fallbackTimer = setTimeout(handleLoad, 5000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    const bootSequence = [
      "ROM BIOS(C) 2026 LE_TAN_DAT",
      "CPU: RETRO_CORE(TM) PROCESSOR",
      "MEMORY TEST: 640K OK",
      "INITIALIZING HARDWARE...",
      "LOADING SYSTEM MODULES...",
      "MOUNTING CASSETTE DRIVES... OK",
      "FETCHING ASSETS...",
    ];

    let currentIndex = 0;

    const runSequence = () => {
      if (currentIndex < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
        setTimeout(runSequence, Math.random() * 300 + 150);
      } else {
        const checkReady = setInterval(() => {
          if (isReady || document.readyState === "complete") {
            clearInterval(checkReady);
            setLines((prev) => [...prev, "ALL ASSETS LOADED.", "SYSTEM READY.", "BOOTING OS..."]);
            setTimeout(onComplete, 1000);
          }
        }, 200);
      }
    };

    const startTimer = setTimeout(runSequence, 300);
    return () => clearTimeout(startTimer);
  }, [isReady, onComplete]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-black z-[99999] flex flex-col p-6 md:p-12 font-mono text-green-500 overflow-hidden cursor-none scrollbar-hide"
    >
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto flex flex-col justify-end gap-1 scrollbar-hide"
      >
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs md:text-sm tracking-widest uppercase"
          >
            {line}
          </motion.div>
        ))}
        <div className="animate-pulse bg-green-500 w-2.5 h-4 md:w-3 md:h-5 mt-1"></div>
      </div>
    </motion.div>
  );
}