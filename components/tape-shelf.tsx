import { Project } from "@/store/usePlayerStore";
import { projectsData } from "@/data/projects";
import Cassette from "./cassete";

export default function TapeShelf() {
  return (
    <section className="flex flex-col h-full gap-4">
      <div className="bg-retro-surface/50 p-4 rounded-lg border border-retro-border/50 min-h-[500px]">
        <h3 className="font-mono text-retro-text/70 text-sm mb-4 border-b border-retro-border pb-2 flex justify-between">
          <span>AVAILABLE_CARTRIDGES</span>
          <span>[{projectsData.length}]</span>
        </h3>
        
        <div className="grid grid-cols-1 gap-6 p-2">
           {projectsData.map((project) => (
             <Cassette key={project.id} project={project} />
           ))}
        </div>
        
        <div className="mt-8 text-center text-xs font-mono text-retro-text/30 italic">
           Drag & Drop cartridge to Player <br/> to initialize sequence.
        </div>
      </div>
    </section>
  );
}