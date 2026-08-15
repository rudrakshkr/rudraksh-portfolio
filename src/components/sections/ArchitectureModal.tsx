"use client"

import { useEffect } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import {
    ArrowLeft,
    ArrowRight,
    Database,
    ExternalLink,
    Server,
    X,
} from "lucide-react"

import {
    SiExpress,
    SiJsonwebtokens,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiSocketdotio,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from "react-icons/si"

import type { Project } from "./featured-projects/projects"

type ArchitectureModalProps = {
    project: Project | null
    onClose: () => void
}

const technologyIcons = {
    React: SiReact,
    TypeScript: SiTypescript,
    "Node.js": SiNodedotjs,
    Express: SiExpress,
    "Socket.IO": SiSocketdotio,
    PostgreSQL: SiPostgresql,
    Prisma: SiPrisma,
    "Tailwind CSS": SiTailwindcss,
    Vite: SiVite,
    JWT: SiJsonwebtokens,
}

const ease = [0.22, 1, 0.36, 1] as const

export default function ArchitectureModal({
    project,
    onClose,
}: ArchitectureModalProps) {
    useEffect(() => {
        if (!project) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = previousOverflow
        }
    }, [project, onClose])

    if (typeof document === "undefined") {
        return null
    }

    return createPortal(
        <AnimatePresence>
            {project && (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease,
                    }}
                    className="
                        fixed inset-0 z-9999
                        h-dvh w-screen
                        overflow-y-auto
                        bg-[#F1F0EC]
                        text-[#141618]
                    "
                >
                    <div
                        className="
                            pointer-events-none fixed inset-x-0 top-0 z-50
                            h-px bg-[#4778E8]/40
                        "
                    />

                    {/* HEADER */}

                    <header
                        className="
                            sticky top-0 z-40
                            border-b border-black/8
                            bg-[#F1F0EC]/90
                            backdrop-blur-xl
                        "
                    >
                        <div
                            className="
                                mx-auto flex max-w-7xl
                                items-center justify-between
                                px-6 py-4
                                sm:px-8
                                lg:px-10
                            "
                        >
                            <button
                                type="button"
                                onClick={onClose}
                                className="
                                    group flex items-center gap-3
                                    text-[13px] font-medium
                                    text-[#555A60]
                                    transition-colors duration-200
                                    hover:text-[#141618]
                                "
                            >
                                <span
                                    className="
                                        grid h-8 w-8 place-items-center
                                        rounded-full
                                        border border-black/11
                                        bg-[#F8F7F3]
                                        transition-all duration-200
                                        group-hover:-translate-x-0.5
                                        group-hover:border-black/20
                                    "
                                >
                                    <ArrowLeft className="h-3.5 w-3.5" />
                                </span>

                                Back to projects
                            </button>

                            <div className="flex items-center gap-4">
                                <span
                                    className="
                                        hidden
                                        font-mono text-[9px]
                                        uppercase tracking-[0.18em]
                                        text-[#8A8E92]
                                        sm:block
                                    "
                                >
                                    Case study
                                </span>

                                <button
                                    type="button"
                                    onClick={onClose}
                                    aria-label="Close architecture"
                                    className="
                                        grid h-8 w-8 place-items-center
                                        rounded-full
                                        border border-black/11
                                        bg-[#F8F7F3]
                                        text-[#666B70]
                                        transition-all duration-200
                                        hover:border-black/20
                                        hover:text-[#141618]
                                    "
                                >
                                    <X className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>
                    </header>

                    <main className="mx-auto max-w-7xl px-6 pb-28 sm:px-8 lg:px-10">

                        {/* HERO */}

                        <motion.section
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.05,
                                duration: 0.6,
                                ease,
                            }}
                            className="pt-16 sm:pt-20 lg:pt-24"
                        >
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#4778E8]" />

                                <span
                                    className="
                                        font-mono text-[10px]
                                        uppercase tracking-[0.18em]
                                        text-[#73787D]
                                    "
                                >
                                    Architecture /{" "}
                                    {String(project.id).padStart(2, "0")}
                                </span>
                            </div>

                            <div
                                className="
                                    mt-7 flex flex-col gap-8
                                    lg:flex-row
                                    lg:items-end
                                    lg:justify-between
                                "
                            >
                                <div className="max-w-4xl">
                                    <h1
                                        className="
                                            font-display
                                            text-[clamp(3rem,7vw,6.3rem)]
                                            font-medium
                                            leading-[0.9]
                                            tracking-[-0.065em]
                                            text-[#111315]
                                        "
                                    >
                                        {project.title}
                                    </h1>

                                    <p
                                        className="
                                            mt-7 max-w-2xl
                                            text-[17px]
                                            leading-[1.65]
                                            text-[#5D6268]
                                            sm:text-[18px]
                                        "
                                    >
                                        {project.description}
                                    </p>
                                </div>

                                <div
                                    className="
                                        flex items-center gap-4
                                        text-[12px]
                                        text-[#70757A]
                                    "
                                >
                                    <span>{project.year}</span>

                                    <span className="h-1 w-1 rounded-full bg-[#4778E8]" />

                                    <span className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#35A36B]" />
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        </motion.section>

                        {/* ARCHITECTURE */}

                        <motion.section
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.15,
                                duration: 0.6,
                                ease,
                            }}
                            className="mt-24 sm:mt-32"
                        >
                            <SectionHeading
                                number="01"
                                title="System architecture"
                                description="The main application layers and the boundaries between them."
                            />

                            <div
                                className="
                                    relative mt-9
                                    overflow-hidden
                                    rounded-[28px]
                                    border border-black/9
                                    bg-[#F8F7F3]
                                    shadow-[0_18px_50px_rgba(20,22,24,0.06)]
                                "
                            >
                                <div
                                    className="
                                        absolute left-[8%] right-[8%]
                                        top-35.5
                                        hidden h-px
                                        bg-black/8
                                        lg:block
                                    "
                                />

                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        delay: 0.5,
                                        duration: 0.9,
                                        ease,
                                    }}
                                    className="
                                        absolute left-[8%] right-[8%]
                                        top-35.5
                                        hidden h-px origin-left
                                        bg-[#4778E8]/40
                                        lg:block
                                    "
                                />

                                <div className="grid lg:grid-cols-4">
                                    {project.architecture.map(
                                        (node, index) => (
                                            <ArchitectureNode
                                                key={node.title}
                                                node={node}
                                                index={index}
                                                total={
                                                    project.architecture.length
                                                }
                                            />
                                        )
                                    )}
                                </div>

                                <div
                                    className="
                                        border-t border-black/[0.07]
                                        px-6 py-4
                                        sm:px-8
                                    "
                                >
                                    <div className="flex items-center justify-between">
                                        <span
                                            className="
                                                font-mono text-[9px]
                                                uppercase tracking-[0.16em]
                                                text-[#999DA1]
                                            "
                                        >
                                            Application flow
                                        </span>

                                        <span
                                            className="
                                                font-mono text-[9px]
                                                uppercase tracking-[0.16em]
                                                text-[#999DA1]
                                            "
                                        >
                                            {project.architecture.length} layers
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* PRODUCT */}

                        <motion.section
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.21,
                                duration: 0.6,
                                ease,
                            }}
                            className="mt-24 sm:mt-32"
                        >
                            <SectionHeading
                                number="02"
                                title="Product"
                                description="A closer look at the interface this architecture powers."
                            />

                            <div
                                className="
                                    relative mt-9
                                    overflow-hidden
                                    rounded-[30px]
                                    border border-black/9
                                    bg-[#E7E6E1]
                                    py-6
                                    shadow-[0_18px_50px_rgba(20,22,24,0.06)]
                                "
                            >
                                <div
                                    className="
                                        pointer-events-none absolute
                                        inset-y-0 left-0 z-20 w-20
                                        bg-linear-to-r
                                        from-[#E7E6E1]
                                        to-transparent
                                    "
                                />

                                <div
                                    className="
                                        pointer-events-none absolute
                                        inset-y-0 right-0 z-20 w-20
                                        bg-linear-to-l
                                        from-[#E7E6E1]
                                        to-transparent
                                    "
                                />

                                <motion.div
                                    animate={{
                                        x: ["0%", "-50%"],
                                    }}
                                    transition={{
                                        duration: 38,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    whileHover={{
                                        animationPlayState: "paused",
                                    }}
                                    className="
                                        flex w-max
                                        items-center
                                    "
                                >
                                    {[...project.screenshots, ...project.screenshots].map(
                                        (screenshot, index) => (
                                            <ProductCard
                                                key={`${screenshot.src}-${index}`}
                                                screenshot={screenshot}
                                                fallback={project.image}
                                                index={index}
                                            />
                                        )
                                    )}
                                </motion.div>

                                <div
                                    className="
                                        mt-5 flex items-center justify-center
                                        gap-2
                                    "
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#4778E8]" />

                                    <span
                                        className="
                                            font-mono text-[9px]
                                            uppercase tracking-[0.16em]
                                            text-[#7F8488]
                                        "
                                    >
                                        Product interface
                                    </span>

                                    <span className="h-1.5 w-1.5 rounded-full bg-[#4778E8]/30" />
                                </div>
                            </div>
                        </motion.section>

                        {/* CAPABILITIES */}

                        <motion.section
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.27,
                                duration: 0.6,
                                ease,
                            }}
                            className="mt-24 sm:mt-32"
                        >
                            <SectionHeading
                                number="03"
                                title="Capabilities"
                                description="The product-level functionality that shaped the implementation."
                            />

                            <div className="mt-9 grid gap-3 sm:grid-cols-3">
                                {project.highlights.map(
                                    (highlight, index) => (
                                        <motion.div
                                            key={highlight}
                                            initial={{
                                                opacity: 0,
                                                y: 15,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                delay:
                                                    0.32 + index * 0.08,
                                                duration: 0.5,
                                                ease,
                                            }}
                                            className="
                                                group
                                                rounded-[22px]
                                                border border-black/9
                                                bg-[#F8F7F3]
                                                p-6
                                                transition-all duration-300
                                                hover:-translate-y-1
                                                hover:border-[#4778E8]/30
                                                hover:shadow-[0_14px_35px_rgba(20,22,24,0.06)]
                                            "
                                        >
                                            <div
                                                className="
                                                    flex h-8 w-8
                                                    items-center justify-center
                                                    rounded-lg
                                                    border border-[#4778E8]/20
                                                    bg-[#4778E8]/[0.07]
                                                    text-[#4778E8]
                                                "
                                            >
                                                <span className="font-mono text-[10px]">
                                                    0{index + 1}
                                                </span>
                                            </div>

                                            <p
                                                className="
                                                    mt-7
                                                    text-[14px]
                                                    font-medium
                                                    leading-relaxed
                                                    text-[#33373B]
                                                "
                                            >
                                                {highlight}
                                            </p>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </motion.section>

                        {/* TECHNOLOGY */}

                        <motion.section
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.33,
                                duration: 0.6,
                                ease,
                            }}
                            className="mt-24 sm:mt-32"
                        >
                            <SectionHeading
                                number="04"
                                title="Technology"
                                description="The core tools used to build and ship the application."
                            />

                            <div
                                className="
                                    relative mt-9
                                    overflow-hidden
                                    rounded-[28px]
                                    border border-black/9
                                    bg-[#F8F7F3]
                                    shadow-[0_18px_50px_rgba(20,22,24,0.05)]
                                "
                            >
                                <div
                                    className="
                                        pointer-events-none absolute
                                        inset-y-0 left-0 z-10 w-24
                                        bg-linear-to-r
                                        from-[#F8F7F3]
                                        to-transparent
                                    "
                                />

                                <div
                                    className="
                                        pointer-events-none absolute
                                        inset-y-0 right-0 z-10 w-24
                                        bg-linear-to-l
                                        from-[#F8F7F3]
                                        to-transparent
                                    "
                                />

                                <motion.div
                                    animate={{
                                        x: ["0%", "-50%"],
                                    }}
                                    transition={{
                                        duration: 25,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="
                                        flex w-max
                                        items-center
                                        py-9
                                    "
                                >
                                    {[
                                        ...project.techStack,
                                        ...project.techStack,
                                    ].map((tech, index) => {
                                        const Icon =
                                            technologyIcons[
                                                tech as keyof typeof technologyIcons
                                            ]

                                        return (
                                            <div
                                                key={`${tech}-${index}`}
                                                className="
                                                    mx-7
                                                    flex items-center gap-3
                                                    sm:mx-9
                                                "
                                            >
                                                {Icon && (
                                                    <Icon
                                                        className="
                                                            h-6 w-6
                                                            text-[#555A60]
                                                        "
                                                    />
                                                )}

                                                <span
                                                    className="
                                                        whitespace-nowrap
                                                        text-[13px]
                                                        font-medium
                                                        text-[#555A60]
                                                    "
                                                >
                                                    {tech}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </motion.div>
                            </div>
                        </motion.section>

                        {/* FOOTER */}

                        <motion.footer
                            initial={{
                                opacity: 0,
                                y: 14,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.42,
                                duration: 0.55,
                                ease,
                            }}
                            className="
                                mt-24
                                flex flex-col gap-5
                                border-t border-black/9
                                pt-7
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >
                            <p
                                className="
                                    text-[12px]
                                    text-[#858A8F]
                                "
                            >
                                Architecture study · {project.title}
                            </p>

                            <div className="flex items-center gap-2.5">
                                {project.github !== "#" && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="secondaryButton"
                                    >
                                        GitHub
                                        <ExternalLink className="h-3.5 w-3.5" />
                                    </a>
                                )}

                                {project.liveDemo !== "#" && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="primaryButton"
                                    >
                                        Live Demo
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </a>
                                )}

                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="secondaryButton"
                                >
                                    Back
                                </button>
                            </div>
                        </motion.footer>
                    </main>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}

function ArchitectureNode({
    node,
    index,
    total,
}: {
    node: Project["architecture"][number]
    index: number
    total: number
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 18,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: 0.28 + index * 0.09,
                duration: 0.5,
                ease,
            }}
            className="
                relative
                border-b border-black/[0.07]
                p-6
                last:border-b-0
                lg:border-b-0
                lg:border-r
                lg:p-7
                lg:last:border-r-0
            "
        >
            <div className="flex items-center justify-between">
                <span
                    className="
                        font-mono text-[9px]
                        tracking-[0.12em]
                        text-[#9A9EA2]
                    "
                >
                    0{index + 1}
                </span>

                <NodeIcon type={node.type} />
            </div>

            <div className="mt-10">
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4778E8]" />

                    <span
                        className="
                            font-mono text-[9px]
                            uppercase tracking-[0.15em]
                            text-[#7B8085]
                        "
                    >
                        {node.type}
                    </span>
                </div>

                <h3
                    className="
                        mt-3
                        font-display
                        text-[19px]
                        font-medium
                        tracking-tight
                        text-[#17191B]
                    "
                >
                    {node.title}
                </h3>

                <p
                    className="
                        mt-3
                        text-[12px]
                        leading-[1.7]
                        text-[#70757A]
                    "
                >
                    {node.description}
                </p>
            </div>

            {index < total - 1 && (
                <div
                    className="
                        absolute -bottom-3 left-1/2 z-10
                        grid h-6 w-6
                        -translate-x-1/2
                        place-items-center
                        rounded-full
                        border border-black/8
                        bg-[#F8F7F3]
                        text-[#7C8186]
                        lg:-right-3
                        lg:bottom-auto
                        lg:left-auto
                        lg:top-32.5
                        lg:translate-x-0
                    "
                >
                    <ArrowRight className="h-3 w-3" />
                </div>
            )}
        </motion.div>
    )
}

function NodeIcon({
    type,
}: {
    type: Project["architecture"][number]["type"]
}) {
    if (type === "database") {
        return <Database className="h-4 w-4 text-[#70757A]" />
    }

    if (type === "server") {
        return <Server className="h-4 w-4 text-[#70757A]" />
    }

    return (
        <span
            className="
                h-2 w-2
                rounded-full
                bg-[#4778E8]/60
            "
        />
    )
}

function ProductCard({
    screenshot,
    fallback,
    index,
}: {
    screenshot: Project["screenshots"][number]
    fallback: string
    index: number
}) {
    return (
        <motion.figure
            animate={{
                y: index % 2 === 0 ? [0, -8, 0] : [0, 8, 0],
            }}
            transition={{
                duration: 5 + (index % 3),
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="
                group
                mx-3
                w-85
                shrink-0
                overflow-hidden
                rounded-3xl
                border border-black/10
                bg-[#F8F7F3]
                shadow-[0_15px_35px_rgba(20,22,24,0.10)]
                sm:w-110
                lg:w-125
            "
        >
            <div className="relative aspect-16/10 overflow-hidden bg-[#DCDAD4]">
                <img
                    src={screenshot.src || fallback}
                    alt={screenshot.caption}
                    onError={(event) => {
                        const image = event.currentTarget

                        if (image.src !== fallback) {
                            image.src = fallback
                        }
                    }}
                    className="
                        h-full w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.025]
                    "
                    loading="lazy"
                />

                <div
                    className="
                        pointer-events-none absolute inset-0
                        bg-linear-to-t
                        from-black/10
                        via-transparent
                        to-white/10
                        opacity-60
                    "
                />
            </div>

            <figcaption
                className="
                    flex items-center justify-between
                    px-5 py-4
                "
            >
                <span
                    className="
                        text-[12px]
                        font-medium
                        text-[#41464B]
                    "
                >
                    {screenshot.caption}
                </span>

                <span
                    className="
                        font-mono text-[9px]
                        uppercase tracking-[0.12em]
                        text-[#A0A4A8]
                    "
                >
                    0{(index % 3) + 1}
                </span>
            </figcaption>
        </motion.figure>
    )
}

function SectionHeading({
    number,
    title,
    description,
}: {
    number: string
    title: string
    description: string
}) {
    return (
        <div
            className="
                flex flex-col gap-4
                sm:flex-row
                sm:items-end
                sm:justify-between
            "
        >
            <div className="flex items-center gap-4">
                <span
                    className="
                        font-mono text-[10px]
                        tracking-[0.15em]
                        text-[#4778E8]
                    "
                >
                    {number}
                </span>

                <h2
                    className="
                        font-display
                        text-2xl
                        font-medium
                        tracking-[-0.04em]
                        text-[#141618]
                        sm:text-3xl
                    "
                >
                    {title}
                </h2>
            </div>

            <p
                className="
                    max-w-xl
                    text-[13px]
                    leading-relaxed
                    text-[#777C81]
                    sm:text-right
                "
            >
                {description}
            </p>
        </div>
    )
}