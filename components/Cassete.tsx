"use client";
import { motion } from "framer-motion";
import { Project, usePlayerStore } from "@/store/usePlayerStore";
import "./cassete-style.css";

interface Props {
  project: Project;
}

export default function Cassette({ project }: Props) {
  const playProject = usePlayerStore((state) => state.playProject);

  return (
    <motion.div // Container
      className="relative w-[210px] h-[133px] mx-auto cursor-grab active:cursor-grabbing shrink-0"
      drag
      dragSnapToOrigin={true}
      dragElastic={0.2}
      whileHover={{ scale: 1.05, rotate: -2 }}
      whileDrag={{ scale: 1.1, rotate: 5, zIndex: 100 }}
      onDragEnd={(event, info) => {
         const dropZone = document.getElementById("player-zone");
         if (dropZone) {
            const rect = dropZone.getBoundingClientRect();
            const { x, y } = info.point;
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
               playProject(project);
            }
         }
      }}
    >
      {/* Cassete Tape */}
      <div 
        className="alvaro-tape"
        style={{ 
          position: "absolute",
          top: "50%",    
          left: "50%",  
          transform: "translate(-50%, -50%) scale(0.35)",
          "--tape-label": project.color 
        } as React.CSSProperties}
      >
       <div className="tape-body"> 
    <div className="face">
      <div className="screw"></div>
      <div className="screw"></div>
      <div className="screw"></div>
      <div className="screw"></div>
      
      <div className="label">
        <div className="tape-header">
            <span>A</span>
            <span>NR [30]</span>
        </div>

        <div className="font-handwriting text-3xl font-bold text-black/80 truncate max-w-[90%] text-center">
            {project.title}
        </div>
        
        <div className="hole">
            <div className="reel"></div>
            <div className="window"></div>
            <div className="reel"></div>
        </div>
      </div>
    </div>
  </div>
      </div>
    </motion.div>
  );
}