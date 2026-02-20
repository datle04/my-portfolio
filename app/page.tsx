"use client";
import BootScreen from "@/components/boot-screen";
import PlayerArea from "@/components/player-area";
import TapeShelf from "@/components/tape-shelf";
import useSound from "@/lib/hooks/useSound";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function Home() {
  const [isBooted, setIsBooted] = useState(false);
  const beep = useSound("/sounds/boot.mp3")

  return (
    <main className="min-h-screen bg-retro-bg p-4 md:p-8 flex items-center justify-center relative scrollbar-hide">
      <AnimatePresence mode="wait">
        {!isBooted && <BootScreen onComplete={() => {
            setIsBooted(true)
            beep();
        }} />}
      </AnimatePresence>
      
      {/* Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        
        <div className="lg:col-span-9 h-full">
          <PlayerArea />
        </div>

        <div className="lg:col-span-3 h-full">
          <TapeShelf />
        </div>
        
      </div>

      {/* CREDIT FOOTER */}
      <div className="fixed bottom-2 w-full text-center pointer-events-none z-0">
          <p className="text-[10px] font-mono text-white/20">
              BUILT_BY_DAT_LE // ASSETS_BY_KENNEY_NL // CSS_BY_ALVARO // SOUND_BY_PIXABAY
          </p>
      </div>
    </main>
  );
}