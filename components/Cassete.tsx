"use client";
import { motion } from "framer-motion";
import { Project, usePlayerStore } from "@/store/usePlayerStore";
import "./cassete-style.css";
import useSound from "@/lib/hooks/useSound";
import useIsMobile from "@/lib/hooks/useIsMobile";

interface Props {
  project: Project;
}

export default function Cassette({ project }: Props) {
  const playProject = usePlayerStore((state) => state.playProject);
  const playGrab = useSound("/sounds/tape-grab.ogg", 1.0);
  const playInsert = useSound("/sounds/cassete-insert.ogg", 1.0);

  const isMobile = useIsMobile();

  const handleTap = () => {
    if (isMobile) {
      playInsert(); 
      playProject(project); 

      document.getElementById("player-zone")?.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
      });
    }
  };

  return (
    <motion.div // Container
      className="relative w-[210px] h-[133px] mx-auto cursor-grab active:cursor-grabbing shrink-0"
      drag={!isMobile}
      dragSnapToOrigin={true}
      dragElastic={0.2}
      onClick={handleTap}
      whileTap={{ scale: 0.95 }}
      whileHover={!isMobile ? { scale: 1.05, rotate: -2 } : {}}
      onDragStart={() => !isMobile && playGrab()}
      whileDrag={!isMobile ? { scale: 1.1, rotate: 5, zIndex: 100 } : {}}
      onDragEnd={(event, info) => {
        if(isMobile) return;

        const dropZone = document.getElementById("player-zone");
        if (dropZone) {
          const rect = dropZone.getBoundingClientRect();
          const { x, y } = info.point;
          if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            playInsert();
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
      {isMobile && (
          <div className="absolute bottom-2 right-2 text-white/20 text-[10px] font-mono animate-pulse">
              [TAP_TO_LOAD]
          </div>
      )}
    </motion.div>
  );
}