"use client"

export default function HeroContent() {
    const go = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
    }

    return (
        <div
            className="
                flex
                w-full
                flex-col
                items-start
                lg:max-w-2xl
            "
        >
            {/* Hero Badge */}
            <div
                className="
                    hero-reveal hero-delay-1
                    mb-5
                    inline-flex
                    max-w-full
                    items-center
                    gap-2.5
                    rounded-full
                    border
                    border-white/10
                    bg-white/4
                    px-3
                    py-1.5
                    sm:mb-6
                "
            >
                <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span
                    className="
                        min-w-0
                        font-mono
                        text-[9px]
                        leading-tight
                        tracking-[0.12em]
                        text-[rgb(var(--ink-300))]
                        sm:text-[10px]
                        sm:tracking-[0.14em]
                        md:text-[11px]
                        lg:text-[12px]
                        xl:text-[13px]
                        xl:tracking-wider
                    "
                >
                    AVAILABLE FOR FULL-TIME ENGINEERING ROLES
                </span>
            </div>

            {/* Hero Heading */}
            <div
                className="
                    hero-reveal hero-delay-2
                    font-display
                    font-medium
                    leading-[0.9]
                    tracking-[-0.07em]
                    text-white
                    text-[clamp(3.2rem,14vw,5.2rem)]
                    sm:text-[clamp(4.2rem,10vw,6rem)]
                    md:text-[clamp(4.8rem,8vw,6.5rem)]
                    lg:text-[clamp(4.8rem,5.6vw,6.2rem)]
                "
            >
                <p>Full Stack</p>
                <p>Software</p>
                <p>Engineer</p>
            </div>

            {/* Description */}
            <div
                className="
                    hero-reveal hero-delay-3
                    mt-6
                    max-w-2xl
                    text-[15px]
                    leading-7
                    text-[rgb(var(--ink-300))]
                    sm:mt-7
                    sm:text-[16px]
                    sm:leading-7
                    md:text-[18px]
                    md:leading-8
                "
            >
                <p>
                    I build production-ready web applications with React,
                    Node.js,{" "}
                    <strong className="text-white">Express</strong> and{" "}
                    <strong className="text-white">PostgreSQL</strong> — designed
                    for scale, instrumented for reality, and shipped end to end.
                </p>
            </div>

            {/* Buttons */}
            <div
                className="
                    hero-reveal hero-delay-4
                    mt-8
                    flex
                    w-full
                    flex-wrap
                    items-center
                    gap-3
                    sm:mt-9
                    sm:gap-4
                "
            >
                <button
                    onClick={() => go("projects")}
                    className="
                        inline-flex
                        min-h-12
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-500
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-blue-600/20
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-blue-600
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-blue-400
                        cursor-pointer
                    "
                >
                    View Projects

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>

                <button
                    onClick={() => go("contact")}
                    className="
                        inline-flex
                        min-h-12
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        bg-white/4
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-white/8
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/20
                        cursor-pointer
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                        <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                        <path d="M10 9H8" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                    </svg>

                    Resume
                </button>

                <a
                    href="https://github.com/rudrakshkr"
                    target="_blank"
                    rel="noreferrer"
                    className="
                        inline-flex
                        min-h-12
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-[rgb(var(--ink-300))]
                        transition-colors
                        hover:text-white
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-white/20
                    "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>

                    GitHub
                </a>
            </div>

            {/* Stats */}
            <div
                className="
                    hero-reveal hero-delay-5
                    mt-12
                    grid
                    w-full
                    max-w-2xl
                    grid-cols-3
                    gap-3
                    border-t
                    border-white/8
                    pt-6
                    sm:mt-14
                    sm:gap-5
                    sm:pt-7
                "
            >
                <div className="min-w-0">
                    <p className="font-display text-2xl font-medium tracking-tight text-white sm:text-[28px]">
                        5+
                    </p>

                    <p className="mt-1.5 max-w-32.5 text-[10px] leading-4 text-[#8A919E] sm:text-[12.5px] sm:leading-snug">
                        Production-ready projects built
                    </p>
                </div>

                <div className="min-w-0">
                    <p className="font-display text-2xl font-medium tracking-tight text-white sm:text-[28px]">
                        60+
                    </p>

                    <p className="mt-1.5 max-w-32.5 text-[10px] leading-4 text-[#8A919E] sm:text-[12.5px] sm:leading-snug">
                        DSA Problems Solved
                    </p>
                </div>

                <div className="min-w-0">
                    <p className="font-display text-2xl font-medium tracking-tight text-white sm:text-[28px]">
                        3+
                    </p>

                    <p className="mt-1.5 max-w-32.5 text-[10px] leading-4 text-[#8A919E] sm:text-[12.5px] sm:leading-snug">
                        Verified Certificates
                    </p>
                </div>
            </div>
        </div>
    )
}