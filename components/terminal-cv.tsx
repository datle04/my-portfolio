export default function TerminalCV() {
  return (
    <div className="h-full bg-black p-4 font-mono text-xs md:text-sm text-green-500 overflow-y-auto custom-scrollbar">
      {/* Terminal Emulator */}
      <div className="mb-4 border-b border-green-500/30 pb-2">
        <p>&gt; USER: LE_TAN_DAT (ADMIN)</p>
        <p>&gt; LOADING_MODULE: CAREER_HISTORY...</p>
        <p>&gt; STATUS: <span className="text-retro-primary">HIRED_READY</span></p>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-white bg-green-900/30 inline-block px-2 mb-2">1. SKILL_SET</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pl-4">
          <p>&gt; Frontend: <span className="text-white">Next.js, React, Tailwind, JavaScript, TypeScript</span></p>
          <p>&gt; Backend: <span className="text-white">Node.js, Express, MongoDB</span></p>
          <p>&gt; Tools: <span className="text-white">Git, Figma, Postman, MongoDB Compass</span></p>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-6">
        <h3 className="text-white bg-green-900/30 inline-block px-2 mb-2">2. EXPERIENCE_LOG</h3>
        
        {/* Item 1 */}
        <div className="pl-4 mb-4 border-l border-green-500/30 ml-2">
          <p className="text-yellow-400">2025.10 - 2025.12 [INTERNSHIP]</p>
          <p className="font-bold text-white">TAKA SOLUTIONS</p>
          <ul className="list-disc ml-5 text-green-400/80 mt-1 space-y-1">
            <li>Developed UI/API for "EcoConnect" (Zalo Mini App).</li>
            <li>Learn about ZMP SDK and write documents for EcoConnect.</li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h3 className="text-white bg-green-900/30 inline-block px-2 mb-2">3. EDUCATION</h3>
        <div className="pl-4">
           <p className="text-white">Nguyen Tat Thanh University</p>
           <p className="text-green-400/80">Major: Information Technology</p>
           <p className="text-green-400/80">Graduated: 2026</p>
           <p className="text-green-400/80">GPA: 3.4/4.0</p>
        </div>
      </div>

      {/* Footer */}
      <p className="animate-pulse mt-8">&gt; END_OF_LOG_</p>
    </div>
  );
}