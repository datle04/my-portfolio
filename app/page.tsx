import PlayerArea from "@/components/player-area";
import TapeShelf from "@/components/tape-shelf";


export default function Home() {
  return (
    <main className="min-h-screen bg-retro-bg p-4 md:p-8 flex items-center justify-center relative">
      
      {/* Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        
        <div className="lg:col-span-9 h-full">
          <PlayerArea />
        </div>

        <div className="lg:col-span-3 h-full">
          <TapeShelf />
        </div>
        
      </div>

      {/* CREDIT FOOTER */}
      <div className="fixed bottom-2 z-50 text-[10px] text-retro-text/40 font-mono tracking-widest pointer-events-none select-none">
        <span className="opacity-50">SYSTEM_ARCHITECT: LE_TAN_DAT</span>
        <span className="mx-2">|</span>
        <span>UI_MODULE: ALVARO_MONTORO</span>
        <span className="mx-2">|</span>
        <span>AUDIO_CORE: Kenney Assets (UI Audio)</span>
      </div>
    </main>
  );
}