"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/data/projects";
import { Github, ExternalLink, Code2 } from "lucide-react"; 
import RetroImageSlider from "./retro-image-slider";

interface Props {
  project: ProjectData;
}

export default function ProjectScreen({ project }: Props) {
  return (
    <div className="w-full h-full flex flex-col font-mono text-retro-text relative z-10">
      
      {/* Header */}
      <div className="border-b border-retro-border/50 pb-2 mb-4 flex justify-between items-start">
        <div>
          <h2 className={`text-2xl font-bold uppercase tracking-tighter ${project.themeColor} drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]`}>
            {project.title}
          </h2>
          <p className="text-xs text-retro-text/60">{project.shortDesc}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row gap-4 overflow-hidden min-h-0">
        
        {/* Left col - Slider */}
        <div className="w-full lg:w-3/5 h-64 lg:h-auto shrink-0">
           <RetroImageSlider images={project.images} alt={project.title} />
        </div>

        {/* Right col - Ingfo */}
        <div className="flex-1 flex flex-col overflow-y-auto pr-2 custom-scrollbar">
          
          <h3 className="text-retro-primary text-sm font-bold border-b border-retro-border/50 mb-2 pb-1">
            // MISSION_DESCRIPTION
          </h3>
          
          <p className="text-sm leading-relaxed text-retro-text/80 mb-6">
            {project.description}
          </p>

          <h3 className="text-retro-primary text-sm font-bold border-b border-retro-border/50 mb-2 pb-1">
            // TECH_STACK
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map(tech => (
               <span key={tech} className="text-xs bg-retro-surface border border-retro-border px-2 py-1 text-retro-text/70">
                 {tech}
               </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 mt-4">
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-retro-surface border border-retro-border hover:bg-retro-border px-3 py-2 text-xs transition-colors group"
              >
                <Github size={14} className="group-hover:text-white" />
                <span>SOURCE_CODE</span>
              </a>
            )}
            
            {project.links.demo && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center gap-2 border border-retro-border px-3 py-2 text-xs transition-colors hover:bg-${project.themeColor.split('-')[1]}-500/20 text-${project.themeColor.split('-')[1]}-400`}
              >
                <ExternalLink size={14} />
                <span>LIVE_DEMO</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}