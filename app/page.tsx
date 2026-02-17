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

      {/* Footer */}
      <div className="absolute bottom-2 text-retro-text/20 font-mono text-xs">
        SYSTEM_ID: LE_TAN_DAT // V.2026.1
      </div>
    </main>
  );
}