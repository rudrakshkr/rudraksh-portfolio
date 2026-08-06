import TerminalHeader from "./TerminalHeader"
import TerminalBody from "./TerminalBody"
import TerminalFooter from "./TerminalFooter"

export default function HeroTerminal() {
    return (
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c0d] shadow-2xl">
            <TerminalHeader />
            <TerminalBody />
            <TerminalFooter />
        </div>
    )
}