"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, Variants } from "framer-motion";
import useIsMobile from "@/lib/hooks/useIsMobile";

export default function CustomCursor() {
  const isMobile = useIsMobile();
  const [cursorState, setCursorState] = useState<"default" | "hover" | "drag">("default");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

    // bounce & stiff 
  const springConfig = { damping: 50, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Hover & Drag detect
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const style = window.getComputedStyle(target);
        
        const isDraggable = style.cursor === 'grab' || style.cursor === 'grabbing';
        const isClickable = 
            target.tagName === 'BUTTON' || 
            target.tagName === 'A' || 
            target.closest('button') || 
            target.closest('a') ||
            style.cursor === 'pointer';

        if (isDraggable) setCursorState("drag");
        else if (isClickable) setCursorState("hover");
        else setCursorState("default");
    };
    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (isMobile) return null;

  // Variant 
  const mainShapeVariants: Variants = {
    default: { 
        height: 24, width: 24, borderRadius: "0%", rotate: 0, scale: 1, borderWidth: "2px",
        borderColor: "var(--color-retro-text)" 
    },
    hover: { 
        height: 40, width: 40, borderRadius: "50%", rotate: 90, scale: 1, borderWidth: "1px",
        borderColor: "var(--color-retro-primary)" 
    },
    drag: { 
        height: 16, width: 16, borderRadius: "20%", rotate: 45, scale: 1, borderWidth: "0px",
        backgroundColor: "var(--color-retro-primary)" 
    }
  };

  return (
    <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
    >
      
      {/* Main shape (Square || Round) */}
      <motion.div 
        variants={mainShapeVariants}
        animate={cursorState}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
        className="absolute border-retro-text bg-transparent box-border"
        style={{ borderStyle: "solid" }} 
      />

      {/* plus symbol in center */}
      <motion.div 
         animate={{ opacity: cursorState === "default" ? 0.5 : 0 }}
         className="absolute w-8 h-[1px] bg-retro-text/30"
      />
      <motion.div 
         animate={{ opacity: cursorState === "default" ? 0.5 : 0 }}
         className="absolute w-[1px] h-8 bg-retro-text/30"
      />


      {/* Corners */}
      <motion.div
        animate={{
            scale: cursorState === "hover" ? 1.8 : 1.2,
            rotate: cursorState === "hover" ? 45 : 0,
            opacity: cursorState === "drag" ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="absolute w-6 h-6"
      >
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-retro-text"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-retro-text"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-retro-text"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-retro-text"></div>
      </motion.div>

    </motion.div>
  );
}