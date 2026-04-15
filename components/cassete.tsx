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

  const isProfile = project.id === "profile";

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
    // Container
    <motion.div 
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
          
          <div 
            className="label relative overflow-hidden"
            style={{
              background: isProfile 
                ? `repeating-linear-gradient(45deg, #fbbf24, #fbbf24 10px, #1a1a1a 10px, #1a1a1a 20px)`
                : project.color 
            }}
          >
              <div className={`relative z-10 ${isProfile ? "bg-black/80 px-3 py-1 border border-yellow-500 shadow-lg" : ""}`}>
                  <div className={`font-handwriting text-4xl font-bold max-w-[80%] text-center ${isProfile ? "text-yellow-500" : "text-black/80"}`}>
                      {project.title}
                  </div>
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