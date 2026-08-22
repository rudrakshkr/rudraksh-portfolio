"use client"

import { useState } from "react"
import { Layers3 } from "lucide-react"
import type { Project } from "./projects"
import ArchitectureModal from "../ArchitectureModal"

export default function ProjectCard({
    project,
}: {
    project: Project
}) {
    const [architectureOpen, setArchitectureOpen] = useState(false)

    return (
        <div>
            <article
                className="
                    group
                    grid
                    overflow-hidden
                    rounded-3xl
                    border border-[#E8EAEE]
                    bg-white
                    shadow-(--shadow-card)
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:shadow-(--shadow-lift)
                    md:grid-cols-[1fr_1fr]
                "
            >
                {/* Left / Content */}

                <div className="flex flex-col justify-between p-7 sm:p-9">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-[11px] tracking-widest text-[#8A919E]">
                                <span>
                                    {String(project.id).padStart(2, "0")}
                                </span>

                                <span className="text-blue-400"> · </span>

                                <span>{project.year}</span>
                            </span>

                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        </div>

                        <h3
                            className="
                                mt-4
                                font-display
                                text-[26px]
                                font-medium
                                tracking-tight
                                text-[#08090B]
                                sm:text-3xl
                            "
                        >
                            {project.title}
                        </h3>

                        <p
                            className="
                                mt-3
                                max-w-md
                                text-lg
                                leading-relaxed
                                text-[#343A45]
                            "
                        >
                            {project.description}
                        </p>

                        <div className="mt-5">
                            <p
                                className="
                                    font-mono
                                    text-[0.85em]
                                    uppercase
                                    tracking-widest
                                    text-[#8A919E]
                                "
                            >
                                Highlights
                            </p>

                            <div className="mt-2 space-y-1.5">
                                {project.highlights.slice(0,3).map((highlight) => (
                                    <div
                                        key={highlight}
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            font-display
                                            text-[0.90em]
                                            text-[#343A45]
                                        "
                                    >
                                        <span className="h-1 w-1 shrink-0 rounded-full bg-blue-500" />

                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <ul className="mt-6 flex flex-wrap gap-1.5">
                            {project.techStack.map((stack) => (
                                <li
                                    key={stack}
                                    className="
                                        rounded-lg
                                        bg-[#F4F5F7]
                                        px-2.5
                                        py-1
                                        font-mono
                                        text-[11px]
                                        text-[#343A45]
                                        transition-all
                                        duration-300
                                        group-hover:bg-[#EEF0F3]
                                    "
                                >
                                    {stack}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setArchitectureOpen(true)}
                            className="
                                inline-flex
                                cursor-pointer
                                items-center
                                gap-2
                                rounded-xl
                                bg-[#08090B]
                                px-4
                                py-2.5
                                text-[13.5px]
                                font-medium
                                text-white
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-[#11141A]
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[#4F7CFF]/70
                            "
                        >
                            <Layers3 className="h-4 w-4" />
                            View Architecture
                        </button>

                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-xl
                                border
                                border-[#E8EAEE]
                                px-4
                                py-2.5
                                text-[13.5px]
                                font-medium
                                text-[#171B22]
                                transition-colors
                                hover:bg-[#F1F2F3]
                                focus:outline-none
                            "
                        >
                            Live Demo

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M7 7h10v10" />
                                <path d="M7 17 17 7" />
                            </svg>
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                            className="
                                grid
                                h-10
                                w-10
                                place-items-center
                                rounded-xl
                                border
                                border-[#E8EAEE]
                                text-[#171B22]
                                transition-colors
                                hover:bg-[#FAFAFA]
                                focus:outline-none
                            "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5-.28-1.15-.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right / Image */}

                <div
                    className="
                        relative
                        flex
                        min-h-70
                        items-center
                        overflow-hidden
                        bg-[#08090B]
                        p-5
                        sm:min-h-80
                        sm:p-7
                        lg:min-h-90
                        lg:p-8
                    "
                >
                    <div
                        className="
                            group/image
                            relative
                            aspect-16/10
                            w-full
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/10
                            shadow-(--shadow-card)
                        "
                    >
                        <img
                            src={project.image}
                            alt={`${project.title} interface preview`}
                            className="
                                block
                                h-full
                                w-full
                                object-contain
                                transition-transform
                                duration-500
                                ease-out
                                group-hover:scale-[1.02]
                            "
                            loading="lazy"
                        />

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-x-0
                                bottom-0
                                h-28
                                bg-linear-to-t
                                from-black/70
                                via-black/25
                                to-transparent
                                opacity-0
                                transition-opacity
                                duration-500
                                group-hover:opacity-100
                            "
                        />
                    </div>

                    <div
                        className="
                            absolute
                            bottom-5
                            left-5
                            right-5
                            flex
                            items-center
                            justify-between
                            font-mono
                            text-[11px]
                            text-[#8A919E]
                            sm:bottom-6
                            sm:left-7
                            sm:right-7
                            lg:bottom-7
                            lg:left-8
                            lg:right-8
                        "
                    >
                        <span>Full Stack</span>

                        <span className="flex items-center gap-1.5 text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span>{project.status}</span>
                        </span>
                    </div>
                </div>
            </article>

            <ArchitectureModal
                project={architectureOpen ? project : null}
                onClose={() => setArchitectureOpen(false)}
            />
        </div>
    )
}