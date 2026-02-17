"use client"
import { getProjectById } from "@/data/projects";
import { usePlayerStore } from "@/store/usePlayerStore";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";
import ProjectScreen from "./project-screen";
import IdentitySticker from "./identity-sticker";
import TerminalCV from "./terminal-cv";

export default function PlayerArea() {

    const { currentProject, isPlaying, eject } = usePlayerStore();

    // Lấy full data từ ID trong store
  const activeProjectData = currentProject ? getProjectById(currentProject.id) : null;

  return (
    <section
        id="player-zone"
        className={`
            bg-retro-surface border-2 border-retro-border rounded-xl p-6 h-full min-h-[500px] flex flex-col justify-between shadow-retro relative overflow-hidden
            ${isPlaying ? 'border-retro-primary shadow-[0_0_20px_rgba(249,115,22,0.3)]' : ''}
        `}
    >
      <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-retro-border/50"></div>
      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-retro-border/50"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-retro-border/50"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-retro-border/50"></div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-mono text-retro-primary text-xl tracking-wider">SYSTEM_PLAYER_V1</h2>
        <div className="flex gap-2 items-center">
           <div 
                className={`
                    w-3 h-3 rounded-full transition-colors
                    ${isPlaying ? "bg-retro-accent shadow-[0_0_10px_#22c55e]" : "bg-red-500/30"}
                `}></div>
           <span 
                className={`
                    font-mono text-xs font-semibold
                    ${isPlaying ? "text-retro-accent" : "text-red-500/70"}
                `}
            
            >
                {isPlaying ? "PLAYING" : "STANDBY"}
            </span>
        </div>
      </div>

      {/* Screen */}
    <div className="flex-1 bg-retro-screen border-2 border-retro-border/50 rounded-lg p-4 mb-6 font-mono text-retro-accent shadow-inner relative overflow-hidden group">
      {
        currentProject ? (
            <div className="h-full flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                <h1 className="text-3xl font-bold text-retro-primary glitch-text mb-2">
                    {currentProject.title}
                </h1>
                <p className="text-retro-text/70 text-sm">
                    Project Loaded Successfully.
                </p>
                <p className="text-retro-text/50 text-xs mt-4 animate-pulse">
                    [ PROCESSING DATA... ]
                </p>
                {/* Images Gallery */}
                <div className="flex-1 bg-retro-screen ... relative overflow-hidden">
                    
                    <AnimatePresence mode="wait">                      
                        {isPlaying && activeProjectData ? (
                        <motion.div
                            key={activeProjectData.id} 
                            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }} 
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}  
                            exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}  
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="w-full h-full p-6"
                        >
                            {
                                activeProjectData.id === 'profile' ?
                                (
                                    <TerminalCV />
                                )
                                :
                                (
                                    <ProjectScreen project={activeProjectData} />
                                )
                            }
                        </motion.div>
                        ) : (
                        // Idle Screen
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col justify-center items-center"
                        >
                            <p className="animate-pulse text-retro-accent/50">&gt; SYSTEM READY...</p>
                            <p className="text-retro-text/30 text-sm mt-2">INSERT CARTRIDGE</p>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 ... pointer-events-none z-50"></div>
                </div>
            </div>
            )
            : (
                <div className="h-full flex flex-col">
                    <p className="animate-pulse text-lg">&gt; WAITING FOR INPUT...</p>
                    <p className="opacity-50 mt-2 text-sm">&gt; Drag a cartridge here to load.</p>
                </div>
            )
        }   

        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,6px_100%]"></div>
    </div>

    <div className="grid grid-cols-4 gap-4 h-16">
        <div className="col-span-3 bg-retro-border/30 rounded border border-retro-border/50 flex items-center px-4 font-mono text-xs text-retro-text/30">
           // CONTROLS_LOCKED
        </div>
        <button 
            onClick={eject}
            className={`
                font-bold font-mono rounded shadow-retro transition-all active:translate-y-1
                ${isPlaying
                    ? "bg-retro-primary text-retro-bg hover: translate-y-1 hover:shadow-retro-hover cursor-pointer"
                    : "bg-retro-border text-retro-text/20 cursor-not-allowed shadow-none translate-y-1"
                }
        `}>
          EJECT
        </button>
    </div>
    <IdentitySticker/>
    </section>
  );
}