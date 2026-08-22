import HeroContent from "./HeroContent"
import HeroTerminal from "./HeroTerminal"

export default function Hero() {
    return (
        <section
            id="top"
            className="relative w-full overflow-hidden bg-[#08090B] text-white"
        >
            {/* Ambient background glow */}
            <div
                className="
                    pointer-events-none absolute
                    -left-32 top-28
                    h-72 w-72
                    rounded-full
                    bg-[#4F7CFF]/8
                    blur-[100px]
                    sm:h-96 sm:w-96
                "
            />

            <div
                className="
                    pointer-events-none absolute
                    -right-40 top-1/3
                    h-80 w-80
                    rounded-full
                    bg-blue-500/4.5
                    blur-[110px]
                    sm:h-105 sm:w-105
                "
            />

            <div
                className="
                    relative mx-auto w-full max-w-7xl
                    px-5
                    pt-28 pb-16
                    sm:px-6 sm:pt-32 sm:pb-20
                    lg:px-8 lg:pt-36 lg:pb-24
                "
            >
                <div
                    className="
                        flex
                        min-h-[calc(100svh-7rem)]
                        items-center
                        lg:grid
                        lg:min-h-[calc(100svh-9rem)]
                        lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]
                        lg:gap-12
                        xl:gap-16
                    "
                >
                    {/* Main Hero Content */}
                    <div className="w-full min-w-0">
                        <HeroContent />
                    </div>

                    {/* Desktop-only terminal */}
                    <div className="hidden min-w-0 lg:block">
                        <HeroTerminal />
                    </div>
                </div>
            </div>

            {/* Bottom fade */}
            <div
                className="
                    pointer-events-none absolute
                    inset-x-0 bottom-0
                    h-24
                    bg-linear-to-t
                    from-[#08090B]
                    to-transparent
                "
            />
        </section>
    )
}