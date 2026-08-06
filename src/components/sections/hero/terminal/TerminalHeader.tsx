export default function TerminalHeader() {
    return (
        <div className="flex items-center gap-2.5 border-b border-white/7 px-4 py-3">

            {/* Left  */}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[rgb(var(--ink-300))]"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>

            <span className="truncate font-mono text-[11px] text-[rgb(var(--ink-300))]">
                nexus-messaging — zsh
            </span>

            {/* Right  */}
            <span className="ml-auto flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-0.5">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                
                <span className="font-mono text-[9.9px] uppercase tracking-[0.16em] text-[rgb(var(--ink-300))]">Working</span>
            </span>
        </div>
    )
}