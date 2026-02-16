"use client";

import { motion } from "framer-motion";
import { Project, usePlayerStore } from "@/store/usePlayerStore";

interface Props {
  project: Project;
}

export default function Cassette({ project }: Props) {
  const playProject = usePlayerStore((state) => state.playProject);

  return (
    <motion.div
      drag
      dragSnapToOrigin={true}
      whileHover={{ scale: 1.05, rotate: -2, cursor: "grab" }}
      whileDrag={{ scale: 1.1, rotate: 5, cursor: "grabbing", zIndex: 50 }}
      onDragEnd={(event, info) => {
        // Collison logic
         const dropZone = document.getElementById("player-zone");
         if (dropZone) {
            const rect = dropZone.getBoundingClientRect();
            const { x, y } = info.point;
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
               playProject(project);
            }
         }
      }}
      
      // Container 
      className="relative w-full h-36 rounded-md bg-[#1a1a1a] border-[3px] border-[#2a2a2a] shadow-xl flex flex-col items-center p-2 select-none overflow-hidden group"
      style={{
        boxShadow: "4px 4px 10px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.8)"
      }}
    >
      {/* Layer: Ridges (Bottom z) */}
      <div className="absolute bottom-0 w-full h-10 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_4px)] opacity-30 z-0"></div>

      {/* Layer 2: Scratches */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.05)_41%,transparent_42%)] pointer-events-none z-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(70deg,transparent_60%,rgba(255,255,255,0.03)_61%,transparent_62%)] pointer-events-none z-20"></div>

      {/* Layer 3: Screws */}
      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#0d0d0d] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
        <div className="w-[1px] h-full bg-[#333] rotate-45"></div>
      </div>
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#0d0d0d] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
         <div className="w-[1px] h-full bg-[#333] rotate-12"></div>
      </div>
      <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#0d0d0d] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
         <div className="w-[1px] h-full bg-[#333] rotate-90"></div>
      </div>
      <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#0d0d0d] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.1)] flex items-center justify-center">
         <div className="w-[1px] h-full bg-[#333] -rotate-45"></div>
      </div>

      {/* Layer 4: Sticker*/}
      <div 
        className={`
          relative z-10 w-[95%] h-20 mt-1 rounded-sm shadow-sm flex flex-col items-center justify-center
          ${project.color} // Màu nền chính của băng (Ví dụ: bg-amber-100)
        `}
        style={{
           transform: "rotate(-0.5deg)", 
           backgroundImage: "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
           filter: "sepia(0.3) contrast(0.9)"
        }}
      >
         <div className="w-full px-4 border-b-2 border-black/10 pb-1 mb-1 flex justify-between items-end">
            <span className="text-[0.6rem] font-sans font-bold text-black/40 tracking-widest">TYPE I (NORMAL)</span>
            <span className="text-[0.6rem] font-sans font-bold text-black/40">A</span>
         </div>
         
         <h3 className="font-[family-name:var(--font-handwriting)] text-2xl text-black/80 rotate-1 transform">
            {project.title}
         </h3>

         {/* Stains */}
         <div className="absolute top-2 right-4 w-4 h-4 bg-yellow-900/10 rounded-full blur-sm"></div>
         <div className="absolute bottom-2 left-6 w-6 h-6 bg-black/5 rounded-full blur-md"></div>
      </div>

      {/* Layer 5: Reel window (middle) */}
      <div className="absolute bottom-3 w-48 h-10 bg-[#2d2d2d] rounded-full flex items-center justify-between px-3 shadow-[inset_0_2px_5px_rgba(0,0,0,1)] border border-white/5 z-10">
         {/* Left Wheel */}
         <div className="w-8 h-8 rounded-full bg-white border-[6px] border-white/20 relative animate-spin-slow shadow-inner">
             <div className="absolute inset-0 m-auto w-2 h-2 bg-black rounded-full"></div>
             {/* Saw-edge */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-black/20"></div>
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-black/20"></div>
         </div>
         
         <div className="flex-1 h-6 bg-[#111] mx-2 relative overflow-hidden opacity-90">
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-4 bg-orange-900/30"></div>
         </div>

         {/* Right Wheel */}
         <div className="w-8 h-8 rounded-full bg-white border-[6px] border-white/20 relative animate-spin-slow shadow-inner">
             <div className="absolute inset-0 m-auto w-2 h-2 bg-black rounded-full"></div>
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-black/20"></div>
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-black/20"></div>
         </div>
      </div>

    </motion.div>
  );
}