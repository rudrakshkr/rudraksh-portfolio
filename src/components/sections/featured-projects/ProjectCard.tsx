"use client"

import { useState } from "react"
import { ArrowUpRight, Layers3 } from "lucide-react"
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
                    rounded-2xl
                    border
                    border-[#E8EAEE]
                    bg-white
                    shadow-(--shadow-card)
                    transition-all
                    duration-300
                    ease-out
                    hover:-translate-y-1
                    hover:shadow-(--shadow-lift)
                    md:grid-cols-2
                    md:rounded-3xl
                "
            >
                {/* Content */}
                <div
                    className="
                        flex
                        min-w-0
                        flex-col
                        justify-between
                        p-5
                        sm:p-7
                        lg:p-9
                    "
                >
                    <div>
                        {/* Meta */}
                        <div className="flex items-center gap-2.5">
                            <span
                                className="
                                    font-mono
                                    text-[9px]
                                    tracking-[0.16em]
                                    text-[#8A919E]
                                    sm:text-[11px]
                                    sm:tracking-widest
                                "
                            >
                                {String(project.id).padStart(2, "0")}
                                <span className="text-blue-400"> · </span>
                                {project.year}
                            </span>

                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-500 sm:text-[10px]">
                                {project.status.replace("-", " ")}
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            className="
                                mt-3.5
                                font-display
                                text-[24px]
                                font-medium
                                leading-tight
                                tracking-[-0.04em]
                                text-[#08090B]
                                sm:mt-4
                                sm:text-3xl
                            "
                        >
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p
                            className="
                                mt-3
                                max-w-xl
                                text-[14px]
                                leading-6
                                text-[#4A505B]
                                sm:text-[16px]
                                sm:leading-relaxed
                            "
                        >
                            {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="mt-5 sm:mt-6">
                            <p
                                className="
                                    font-mono
                                    text-[9px]
                                    uppercase
                                    tracking-[0.16em]
                                    text-[#8A919E]
                                    sm:text-[10px]
                                    sm:tracking-widest
                                "
                            >
                                Highlights
                            </p>

                            <div className="mt-2.5 space-y-2">
                                {project.highlights
                                    .slice(0, 3)
                                    .map((highlight) => (
                                        <div
                                            key={highlight}
                                            className="
                                                flex
                                                items-start
                                                gap-2
                                                text-[12.5px]
                                                leading-5
                                                text-[#343A45]
                                                sm:text-[14px]
                                                sm:leading-6
                                            "
                                        >
                                            <span
                                                className="
                                                    mt-2
                                                    h-1
                                                    w-1
                                                    shrink-0
                                                    rounded-full
                                                    bg-blue-500
                                                "
                                            />

                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        {/* Tech stack */}
                        <ul
                            className="
                                mt-5
                                flex
                                flex-wrap
                                gap-1.5
                                sm:mt-6
                            "
                        >
                            {project.techStack.map((stack) => (
                                <li
                                    key={stack}
                                    className="
                                        rounded-md
                                        bg-[#F4F5F7]
                                        px-2
                                        py-1
                                        font-mono
                                        text-[9px]
                                        text-[#4A505B]
                                        transition-colors
                                        duration-300
                                        group-hover:bg-[#EEF0F3]
                                        sm:rounded-lg
                                        sm:px-2.5
                                        sm:text-[11px]
                                    "
                                >
                                    {stack}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Actions */}
                    <div
                        className="
                            mt-7
                            grid
                            grid-cols-[1fr_1fr_auto]
                            gap-2
                            sm:flex
                            sm:flex-wrap
                            sm:items-center
                            sm:gap-2
                        "
                    >
                        <button
                            type="button"
                            onClick={() => setArchitectureOpen(true)}
                            className="
                                inline-flex
                                min-h-10
                                items-center
                                justify-center
                                gap-1.5
                                rounded-lg
                                bg-[#08090B]
                                px-3
                                py-2
                                text-[11px]
                                font-medium
                                text-white
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-[#11141A]
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[#4F7CFF]/70
                                cursor-pointer
                                sm:min-h-11
                                sm:rounded-xl
                                sm:px-4
                                sm:text-[13.5px]
                            "
                        >
                            <Layers3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                            <span className="truncate">
                                Architecture
                            </span>
                        </button>

                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-flex
                                min-h-10
                                items-center
                                justify-center
                                gap-1.5
                                rounded-lg
                                border
                                border-[#E8EAEE]
                                px-3
                                py-2
                                text-[11px]
                                font-medium
                                text-[#171B22]
                                transition-colors
                                hover:bg-[#F1F2F3]
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[#4F7CFF]/40
                                sm:min-h-11
                                sm:rounded-xl
                                sm:px-4
                                sm:text-[13.5px]
                            "
                        >
                            Live Demo

                            <ArrowUpRight className="h-3.5 w-3.5" />
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
                                rounded-lg
                                border
                                border-[#E8EAEE]
                                text-[#171B22]
                                transition-colors
                                hover:bg-[#FAFAFA]
                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[#4F7CFF]/40
                                sm:h-11
                                sm:w-11
                                sm:rounded-xl
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
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5-.28-1.15-.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Image */}
                <div
                    className="
                        relative
                        order-first
                        flex
                        min-h-55
                        items-center
                        overflow-hidden
                        bg-[#08090B]
                        p-3.5
                        sm:min-h-70
                        sm:p-5
                        md:order-0
                        md:min-h-full
                        md:p-7
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
                            rounded-xl
                            border
                            border-white/10
                            bg-[#0B0D10]
                            shadow-(--shadow-card)
                            sm:rounded-2xl
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
                                group-hover:scale-[1.025]
                            "
                            loading="lazy"
                        />

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-x-0
                                bottom-0
                                h-24
                                bg-linear-to-t
                                from-black/70
                                via-black/20
                                to-transparent
                                opacity-0
                                transition-opacity
                                duration-500
                                group-hover:opacity-100
                            "
                        />

                        {/* Image label */}
                        <div
                            className="
                                pointer-events-none
                                absolute
                                bottom-2.5
                                left-2.5
                                right-2.5
                                flex
                                items-center
                                justify-between
                                font-mono
                                text-[8px]
                                uppercase
                                tracking-[0.12em]
                                text-white/55
                                opacity-0
                                transition-opacity
                                duration-300
                                group-hover:opacity-100
                                sm:bottom-3.5
                                sm:left-3.5
                                sm:right-3.5
                                sm:text-[9px]
                            "
                        >
                            <span>Interface Preview</span>

                            <span className="flex items-center gap-1.5 text-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                {project.status}
                            </span>
                        </div>
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