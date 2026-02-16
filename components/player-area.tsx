export default function PlayerArea() {
  return (
    <section className="bg-retro-surface border-2 border-retro-border rounded-xl p-6 h-full min-h-[500px] flex flex-col justify-between shadow-retro relative overflow-hidden">
      <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-retro-border/50"></div>
      <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-retro-border/50"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-retro-border/50"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-retro-border/50"></div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-mono text-retro-primary text-xl tracking-wider">SYSTEM_PLAYER_V1</h2>
        <div className="flex gap-2">
           <div className="w-3 h-3 rounded-full bg-retro-accent animate-pulse shadow-[0_0_10px_var(--color-retro-accent)]"></div>
           <span className="font-mono text-xs text-retro-accent">ONLINE</span>
        </div>
      </div>

      {/* Screen */}
      <div className="flex-1 bg-retro-screen border-2 border-retro-border/50 rounded-lg p-4 mb-6 font-mono text-retro-accent shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
        <p className="animate-pulse">&gt; WAITING FOR INPUT...</p>
        <p className="opacity-50 mt-2">&gt; Please insert a cartridge to load project data.</p>
      </div>

      <div className="grid grid-cols-4 gap-4 h-16">
        <div className="col-span-3 bg-retro-border/30 rounded border border-retro-border/50"></div>
        <button className="bg-retro-primary text-retro-bg font-bold font-mono rounded shadow-retro hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1">
          EJECT
        </button>
      </div>
    </section>
  );
}