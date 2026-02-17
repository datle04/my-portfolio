"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { StaticImageData } from "next/image";
import useSound from "@/lib/hooks/useSound";

interface Props {
  images: string[] | StaticImageData[];
  alt: string;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.8
  })
};

export default function RetroImageSlider({ images, alt }: Props) {
  const [[page, direction], setPage] = useState([0, 0]);
  const playClick = useSound("sounds/plastic-click.ogg", 0.5);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  const paginate = (newDirection: number) => {
    playClick();
    setPage([page + newDirection, newDirection]);
  };

  const getImageSource = (img: string | StaticImageData) => {
    console.log(img);
    if (typeof img === 'string') {
      return img; 
    }
    return img.src;
  };

  return (
    <div className="relative w-full h-full bg-black/40 border border-retro-border/50 rounded overflow-hidden group">
      
      {/* Image Gallery*/}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page} // Trigger animation when key changes
            src={getImageSource(images[imageIndex])}
            alt={`${alt} - View ${imageIndex + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full object-contain" 
          />
        </AnimatePresence>

        {/* Noise overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none z-10"></div>
        {/*Scanline effect*/}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none z-10"></div>
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-retro-surface/80 border border-retro-primary/50 text-retro-primary hover:bg-retro-primary hover:text-retro-bg transition-colors rounded-sm shadow-retro"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-retro-surface/80 border border-retro-primary/50 text-retro-primary hover:bg-retro-primary hover:text-retro-bg transition-colors rounded-sm shadow-retro"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Counter HUD */}
      <div className="absolute bottom-2 right-2 z-20 bg-black/80 border border-retro-border px-2 py-1 rounded text-[10px] font-mono text-retro-accent flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
        <span>
          IMG_{String(imageIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </span>
      </div>

    </div>
  );
}