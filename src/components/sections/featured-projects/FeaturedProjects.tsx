"use client"

import { useEffect } from "react"
import { projects } from "./projects"
import ProjectCard from "./ProjectCard"

export default function FeaturedProjects() {
    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-reveal")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible")
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.12,
            }
        )

        elements.forEach((element) => observer.observe(element))

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="projects"
            className="
                relative
                w-full
                overflow-hidden
                bg-[#FAFAFA]
                py-20
                sm:py-24
                lg:py-32
            "
        >
            {/* Very subtle background detail */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    top-24
                    h-72
                    w-72
                    rounded-full
                    bg-blue-500/[0.035]
                    blur-[100px]
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-6xl
                    px-5
                    sm:px-6
                    lg:px-8
                "
            >
                {/* Section header */}
                <div className="scroll-reveal reveal-header">
                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2.5
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-[#8A919E]
                            sm:text-[11px]
                        "
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]" />
                        Featured Work
                    </div>

                    <h2
                        className="
                            mt-4
                            max-w-2xl
                            font-display
                            text-[clamp(2rem,8vw,3.4rem)]
                            font-medium
                            leading-none
                            tracking-[-0.055em]
                            text-[#08090B]
                            sm:mt-5
                            sm:tracking-tighter
                        "
                    >
                        Three systems, built and run in production.
                    </h2>

                    <p
                        className="
                            mt-5
                            max-w-xl
                            text-[15px]
                            leading-7
                            text-[#343A45]
                            sm:text-[17px]
                            sm:leading-relaxed
                        "
                    >
                        Each one shipped with real users, real constraints and
                        real failure modes. Open any case study to see the
                        architecture behind it.
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6 lg:mt-14">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="scroll-reveal"
                            style={{
                                transitionDelay: `${index * 120}ms`,
                            }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-10 flex items-center gap-3 sm:mt-12">
                    <span className="h-px w-8 bg-[#4F7CFF]/40 sm:w-12" />

                    <p
                        className="
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.16em]
                            text-[#9AA1AD]
                            sm:text-[10px]
                            sm:tracking-[0.18em]
                        "
                    >
                        Selected systems · architecture available
                    </p>
                </div>
            </div>
        </section>
    )
}