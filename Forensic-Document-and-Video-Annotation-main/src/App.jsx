import React, { useState } from 'react';

export default function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [ragMode, setRagMode] = useState('web');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Top Banner / Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/60 px-8 py-5 flex justify-between items-center backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center space-x-4">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <div>
            <h1 className="text-sm font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-cyan-400 font-mono uppercase">
              SVASI NEXUS // OSINT ENGINE
            </h1>
            <p className="text-[10px] text-slate-500 font-mono tracking-wider mt-0.5">PRE-ALPHA v1.0.0 // MITACS FORWARD</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-slate-900/80 border border-slate-800 rounded-lg px-3 py-1.5">
            <span className="text-xs text-slate-500 font-mono font-bold">LANG:</span>
            <select 
              value={selectedLanguage} 
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="bg-transparent text-xs text-slate-300 font-mono font-semibold focus:outline-none cursor-pointer"
            >
              <option value="en" className="bg-slate-950">ENGLISH (EN)</option>
              <option value="fr" className="bg-slate-950">FRANÇAIS (FR)</option>
              <option value="hi" className="bg-slate-950">हिन्दी (HI)</option>
              <option value="kn" className="bg-slate-950">ಕನ್ನಡ (KN)</option>
            </select>
          </div>
          <span className="hidden sm:inline-block text-[10px] font-mono font-bold bg-emerald-950/50 text-emerald-400 border border-emerald-800/60 px-3 py-1.5 rounded-lg tracking-widest shadow-lg shadow-emerald-950/20">
            WEB 3.0 CONNECTED
          </span>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-73px)] overflow-hidden">
        
        {/* Workspace Canvas (Left) */}
        <main className="flex-1 p-6 flex flex-col space-y-6 overflow-y-auto bg-gradient-to-b from-[#030712] via-[#0b1329] to-[#030712]">
          
          {/* Futuristic Control Dock */}
          <section className="shrink-0 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
            
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono flex items-center space-x-2">
                <span className="text-emerald-500">//</span> <span>01 / INGESTION INTERFACE</span>
              </h2>
              <span className="text-[10px] text-slate-600 font-mono">SYSTEM READY</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 relative z-10">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  placeholder="INPUT TARGET MULTIMEDIA STREAM URL..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full bg-[#050b14] border border-slate-800 rounded-xl pl-4 pr-12 py-3.5 text-slate-200 placeholder-slate-700 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-all font-mono text-xs tracking-wider"
                />
                <span className="absolute right-4 top-4 text-slate-700 font-mono text-xs select-none">URL</span>
              </div>
              <button 
                onClick={() => setIsAnalyzing(!isAnalyzing)}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-slate-950 font-mono font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-950/40 hover:shadow-emerald-500/20 active:scale-[0.98]"
              >
                {isAnalyzing ? 'HALT INTERFERENCE' : 'LAUNCH SVASI CORE'}
              </button>
            </div>

            {/* RAG Configuration Switches */}
            <div className="mt-5 flex flex-wrap items-center gap-6 border-t border-slate-900 pt-4">
              <span className="text-[10px] font-mono font-bold text-slate-500 tracking-wider">INTELLIGENCE LAYER:</span>
              <div className="flex space-x-2 bg-[#050b14] p-1 border border-slate-900 rounded-xl">
                <button 
                  onClick={() => setRagMode('web')}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${ragMode === 'web' ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-emerald-400 border border-slate-800 shadow-md' : 'text-slate-500 hover:text-slate-400'}`}
                >
                  🌐 OPEN OSINT (WEB SEARCH)
                </button>
                <button 
                  onClick={() => setRagMode('vault')}
                  className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${ragMode === 'vault' ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-emerald-400 border border-slate-800 shadow-md' : 'text-slate-500 hover:text-slate-400'}`}
                >
                  📂 PRIVATE SECURE VAULT (.PDF)
                </button>
              </div>
            </div>
          </section>

          {/* Holographic 3D Semantic Viewport */}
          <section className="shrink-0 flex-1 bg-slate-950/40 border border-slate-900/80 rounded-2xl relative min-h-[380px] flex items-center justify-center overflow-hidden group shadow-2xl backdrop-blur-sm">
            {/* Cyber Grid Lines Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
            
            <div className="text-center z-10 p-8 max-w-md">
              <div className="w-20 h-20 bg-emerald-950/20 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-2xl relative">
                <div className="absolute inset-0 rounded-full bg-emerald-500/5 animate-pulse"></div>
                <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">🕸️</span>
              </div>
              <h3 className="text-sm font-bold tracking-widest text-slate-300 font-mono uppercase mb-2">HOLOGRAPHIC ONTOLOGY CANVAS</h3>
              <p className="text-xs text-slate-500 font-mono leading-relaxed">
                Awaiting algorithmic mapping sequence. Node variables, second-order co-occurrences, and multi-layered relationships will render in 3D WebGL format.
              </p>
            </div>

            {/* Floating Operations Indicators */}
            <div className="absolute bottom-4 left-4 p-3 bg-slate-950/90 border border-slate-900 rounded-xl font-mono text-[10px] text-slate-500 space-y-1 backdrop-blur">
              <p><span className="text-emerald-500">FRAME BUFFER:</span> STABLE</p>
              <p><span className="text-emerald-500">OPTIMIZATION:</span> SFLA GEN-2</p>
            </div>

            <div className="absolute bottom-4 right-4">
              <button className="bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 text-[10px] font-mono tracking-widest px-4 py-2.5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-cyan-950/20">
                🔒 FREEZE BLOCK TO WEB 3.0 (IPFS)
              </button>
            </div>
          </section>

          {/* Matrix Core Event Terminal */}
          <section className="shrink-0 bg-[#02050a] border border-slate-900 rounded-xl p-4 font-mono text-[11px] text-slate-400 shadow-inner h-36 overflow-y-auto flex flex-col space-y-2">
            <div className="text-slate-500 border-b border-slate-900 pb-2 mb-1 flex justify-between items-center text-[10px] font-bold tracking-wider">
              <span>🤖 ORCHESTRATION TERMINAL MATRIX</span>
              <span className={`px-2 py-0.5 rounded text-[9px] ${isAnalyzing ? 'bg-emerald-950 text-emerald-400 animate-pulse' : 'bg-slate-900 text-slate-500'}`}>
                {isAnalyzing ? 'ORCHESTRATING AGENTS' : 'IDLE CORE'}
              </span>
            </div>
            <p className="text-slate-600">&gt; SVASI Nexus pipeline engine mapping initialized. System baseline established.</p>
            {isAnalyzing && (
              <>
                <p className="text-emerald-400 animate-pulse">&gt; [Extraction Agent] Parsing live stream packet metadata streams...</p>
                <p className="text-cyan-400">&gt; [Math Agent] Triggering second-order co-occurrence analytics loops (SOCPMI limit: 0.85)...</p>
              </>
            )}
          </section>
        </main>

        {/* Command Chat Sidebar (Right) */}
        <aside className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-slate-900 bg-slate-950/40 flex flex-col backdrop-blur-xl relative">
          <div className="p-5 border-b border-slate-900 bg-slate-950/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-xl filter drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]">🕵️‍♂️</span>
              <div>
                <span className="text-xs font-black tracking-widest text-slate-200 uppercase font-mono block">LEAD COGNITIVE AGENT</span>
                <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider">Operational Tactical Lead</span>
              </div>
            </div>
          </div>
          
          {/* Chat Feed */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 text-xs flex flex-col justify-end bg-gradient-to-b from-transparent to-[#02050a]/40">
            <div className="bg-slate-950 border border-slate-900 rounded-2xl p-4 max-w-[90%] self-start shadow-xl relative group">
              <div className="absolute top-3 left-0 w-[2px] h-4 bg-emerald-500"></div>
              <p className="text-[9px] font-mono font-bold tracking-wider text-emerald-400 uppercase mb-1">SYSTEM CONTROLLER</p>
              <p className="text-slate-300 font-mono leading-relaxed text-[11px]">
                Secure vectors active. Drop a target file or network link onto the canvas dock to initiate multi-agent validation. Supported natively in over 40 language matrices.
              </p>
            </div>
          </div>

          {/* Interactive Input Dock */}
          <div className="p-4 border-t border-slate-900 bg-slate-950/80">
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="EXECUTE AGENT ACTION COMMANDS..."
                className="w-full bg-[#050b14] border border-slate-900 rounded-xl pl-4 pr-12 py-3 text-xs text-slate-200 placeholder-slate-700 focus:outline-none focus:border-emerald-500/50 font-mono uppercase tracking-wider"
              />
              <button className="absolute right-3 p-1.5 rounded-lg text-slate-500 hover:text-emerald-400 hover:bg-slate-900 transition-all font-mono font-black text-xs">
                ➔
              </button>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}