export default function TapeShelf() {
  return (
    <section className="flex flex-col h-full gap-4">
      <div className="bg-retro-surface/50 p-4 rounded-lg border border-retro-border/50">
        <h3 className="font-mono text-retro-text/70 text-sm mb-4 border-b border-retro-border pb-2">
          AVAILABLE_CARTRIDGES
        </h3>
        
        {/* Cassetes list */}
        <div className="space-y-4 min-h-[400px]">
            <div className="h-24 border-2 border-dashed border-retro-border/30 rounded flex items-center justify-center text-retro-text/30 font-mono">
                [ SLOT 1 EMPTY ]
            </div>
            <div className="h-24 border-2 border-dashed border-retro-border/30 rounded flex items-center justify-center text-retro-text/30 font-mono">
                 [ SLOT 2 EMPTY ]
            </div>
             <div className="h-24 border-2 border-dashed border-retro-border/30 rounded flex items-center justify-center text-retro-text/30 font-mono">
                 [ SLOT 3 EMPTY ]
            </div>
        </div>
      </div>
    </section>
  );
}