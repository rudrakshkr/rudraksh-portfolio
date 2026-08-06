import HeroContent from "./HeroContent"
import HeroTerminal from "./terminal/HeroTerminal"

export default function Hero() {
    return (
        <section className="min-h-screen bg-[#08090b] ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid min-h-screen items-center lg:grid-cols-[60%_40%]">
                    <HeroContent />
                    <HeroTerminal />
                </div>
            </div>
        </section>
    )
}