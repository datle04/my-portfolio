import Cassette from "@/components/Cassete";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <button className="
        bg-retro-primary 
        text-retro-bg 
        font-mono 
        shadow-retro 
        hover:translate-y-1 
        hover:shadow-retro-hover 
        transition-all
      ">
        START SYSTEM
      </button>

      <div className="bg-retro-surface border-2 border-retro-border p-4">
        <div className="bg-retro-screen text-retro-accent font-mono p-2">
          - READY...
        </div>
      </div>
      <Cassette id="1" title="Demo" color="bg-red-500"/>
    </div>
  );
}
