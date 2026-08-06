export default function TerminalFooter() {
    return (
        <div className="border-t border-white/10 px-6 py-4">
            <div className="grid grid-cols-3 gap-4 text-xs font-mono">
                <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Express</span>

                    <span className="text-emerald-400">
                        ● Healthy
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-zinc-400">PostgreSQL</span>

                    <span className="text-emerald-400">
                        ● Connected
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Socket.IO</span>

                    <span className="text-emerald-400">
                        ● Live
                    </span>
                </div>
            </div>
        </div>
    );
}