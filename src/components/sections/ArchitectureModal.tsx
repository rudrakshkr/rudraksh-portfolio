"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import {
    ArrowLeft,
    Box,
    ChevronLeft,
    ChevronRight,
    Database,
    ExternalLink,
    Globe,
    Layers,
    Maximize2,
    Server,
    X,
} from "lucide-react"

import type { Project } from "./featured-projects/projects"

type ArchitectureModalProps = {
    project: Project | null
    onClose: () => void
}

const customEase = [0.16, 1, 0.3, 1] as const

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
}

const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: customEase },
    },
}

export default function ArchitectureModal({
    project,
    onClose,
}: ArchitectureModalProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    const galleryRef = useRef<HTMLDivElement>(null)
    const galleryDragStart = useRef(0)
    const galleryStartScroll = useRef(0)
    const galleryDragging = useRef(false)
    const galleryMoved = useRef(false)

    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [dragStart, setDragStart] = useState<number | null>(null)

    const screenshots = project?.screenshots ?? []

    const closeViewer = () => {
        setSelectedImage(null)
        setDragStart(null)
    }

    const previousImage = () => {
        setSelectedImage((current) => {
            if (current === null || screenshots.length === 0) {
                return current
            }

            return current === 0
                ? screenshots.length - 1
                : current - 1
        })
    }

    const nextImage = () => {
        setSelectedImage((current) => {
            if (current === null || screenshots.length === 0) {
                return current
            }

            return current === screenshots.length - 1
                ? 0
                : current + 1
        })
    }

    useEffect(() => {
        if (!project) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage !== null) {
                if (e.key === "Escape") {
                    closeViewer()
                    return
                }

                if (e.key === "ArrowLeft") {
                    previousImage()
                    return
                }

                if (e.key === "ArrowRight") {
                    nextImage()
                    return
                }

                return
            }

            if (e.key === "Escape") {
                onClose()
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = prevOverflow
        }
    }, [project, selectedImage, onClose])

    useEffect(() => {
        const gallery = galleryRef.current

        if (!gallery || screenshots.length === 0) return

        let animationFrame: number

        const autoScroll = () => {
            if (!galleryDragging.current) {
                gallery.scrollLeft += 0.5

                const halfway = gallery.scrollWidth / 2

                if (halfway > 0 && gallery.scrollLeft >= halfway) {
                    gallery.scrollLeft -= halfway
                }
            }

            animationFrame = requestAnimationFrame(autoScroll)
        }

        animationFrame = requestAnimationFrame(autoScroll)

        return () => {
            cancelAnimationFrame(animationFrame)
        }
    }, [screenshots.length])

    const handleGalleryPointerDown = (
        e: React.PointerEvent<HTMLDivElement>
    ) => {
        const gallery = galleryRef.current

        if (!gallery) return

        galleryDragging.current = true
        galleryMoved.current = false
        galleryDragStart.current = e.clientX
        galleryStartScroll.current = gallery.scrollLeft
    }

    const handleGalleryWheel = (
        e: React.WheelEvent<HTMLDivElement>
    ) => {
        const gallery = galleryRef.current

        if (!gallery) return

        const horizontalDelta =
            Math.abs(e.deltaX) > Math.abs(e.deltaY)
                ? e.deltaX
                : 0

        if (horizontalDelta !== 0) {
            e.preventDefault()
            gallery.scrollLeft += horizontalDelta
        }
    }

    useEffect(() => {
        const handleWindowPointerMove = (
            e: PointerEvent
        ) => {
            if (!galleryDragging.current) return

            const gallery = galleryRef.current

            if (!gallery) return

            const distance =
                e.clientX - galleryDragStart.current

            if (Math.abs(distance) > 5) {
                galleryMoved.current = true
            }

            gallery.scrollLeft =
                galleryStartScroll.current - distance
        }

        const handleWindowPointerUp = () => {
            if (!galleryDragging.current) return

            galleryDragging.current = false

            if (galleryMoved.current) {
                setTimeout(() => {
                    galleryMoved.current = false
                }, 50)
            }
        }

        window.addEventListener(
            "pointermove",
            handleWindowPointerMove
        )

        window.addEventListener(
            "pointerup",
            handleWindowPointerUp
        )

        window.addEventListener(
            "pointercancel",
            handleWindowPointerUp
        )

        return () => {
            window.removeEventListener(
                "pointermove",
                handleWindowPointerMove
            )

            window.removeEventListener(
                "pointerup",
                handleWindowPointerUp
            )

            window.removeEventListener(
                "pointercancel",
                handleWindowPointerUp
            )
        }
    }, [])

    if (typeof document === "undefined") return null

    return createPortal(
        <>
            {/* ARCHITECTURE MODAL */}
            <AnimatePresence>
                {project && (
                    <motion.div
                        key="architecture-modal"
                        role="dialog"
                        aria-modal="true"
                        initial={{
                            opacity: 0,
                            filter: "blur(4px)",
                        }}
                        animate={{
                            opacity: 1,
                            filter: "blur(0px)",
                        }}
                        exit={{
                            opacity: 0,
                            filter: "blur(4px)",
                        }}
                        transition={{
                            duration: 0.4,
                            ease: customEase,
                        }}
                        className="fixed inset-0 z-9999 flex h-dvh w-screen bg-[#F6F6F3] text-zinc-900"
                    >
                        {/* Mobile Close */}
                        <button
                            onClick={onClose}
                            className="fixed right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all hover:scale-105 hover:text-zinc-900 lg:hidden"
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </button>

                        <div className="flex h-full w-full flex-col lg:flex-row">
                            {/* LEFT PANEL */}
                            <div className="relative z-10 shrink-0 border-r border-zinc-200/60 bg-[#F2F2EF]/75 px-6 py-12 backdrop-blur-xl lg:w-100 lg:px-12 lg:py-20 xl:w-115">
                                <button
                                    onClick={onClose}
                                    className="group hidden items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-900 lg:flex"
                                >
                                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                    Back to portfolio
                                </button>

                                <div className="mt-12 lg:mt-24">
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: -10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        transition={{
                                            delay: 0.1,
                                            duration: 0.5,
                                        }}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex h-6 items-center rounded-full bg-zinc-100 px-2.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                                            {project.year}
                                        </span>

                                        <div className="h-1 w-1 rounded-full bg-zinc-300" />

                                        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-600">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            {project.status.replace(
                                                "-",
                                                " "
                                            )}
                                        </span>
                                    </motion.div>

                                    <motion.h1
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            delay: 0.2,
                                            duration: 0.5,
                                        }}
                                        className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 lg:text-5xl"
                                    >
                                        {project.title}
                                    </motion.h1>

                                    <motion.p
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            delay: 0.3,
                                            duration: 0.5,
                                        }}
                                        className="mt-6 text-base leading-relaxed text-zinc-500"
                                    >
                                        {project.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: 0.4,
                                        }}
                                        className="mt-10 space-y-4 border-t border-zinc-100 pt-10"
                                    >
                                        <h3 className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                                            Tech Stack
                                        </h3>

                                        <div className="flex flex-wrap gap-2 cursor-default">
                                            {project.techStack.map(
                                                (tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-md border border-zinc-200/60 bg-zinc-50/50 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-200/10"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: 0.5,
                                        }}
                                        className="mt-10 flex flex-wrap gap-4 pt-4"
                                    >
                                        {project.liveDemo !== "#" && (
                                            <a
                                                href={
                                                    project.liveDemo
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_14px_0_rgba(24,24,27,0.2)] transition-all hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_6px_20px_rgba(24,24,27,0.23)]"
                                            >
                                                View Live App
                                            </a>
                                        )}

                                        {project.github !== "#" && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-zinc-50"
                                            >
                                                Source Code
                                                <ExternalLink className="h-3.5 w-3.5" />
                                            </a>
                                        )}
                                    </motion.div>
                                </div>
                            </div>

                            {/* RIGHT PANEL */}
                            <div
                                ref={scrollRef}
                                className="relative flex-1 overflow-y-auto bg-[#F6F6F3] px-6 py-12 lg:px-20 lg:py-20"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#dfe1dd_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.3]" />

                                <div className="relative mx-auto max-w-4xl">
                                    {/* SYSTEM TOPOLOGY */}
                                    <section>
                                        <div className="mb-10 flex items-end justify-between border-b border-zinc-200/60 pb-6">
                                            <div>
                                                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                                                    System Topology
                                                </h2>

                                                <p className="mt-1 text-sm text-zinc-500">
                                                    Architectural breakdown of the request lifecycle.
                                                </p>
                                            </div>

                                            <Layers className="h-5 w-5 text-zinc-300" />
                                        </div>

                                        <div className="relative ml-4 lg:ml-8">
                                            <div className="absolute bottom-0 left-4.75 top-4 w-px bg-linear-to-b from-zinc-200 via-zinc-200 to-transparent" />

                                            <div className="flex flex-col gap-10">
                                                {project.architecture.map(
                                                    (
                                                        node,
                                                        i
                                                    ) => (
                                                        <ArchitectureNodeBlock
                                                            key={
                                                                node.title
                                                            }
                                                            node={
                                                                node
                                                            }
                                                            index={
                                                                i
                                                            }
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </section>

                                    {/* CORE CAPABILITIES */}
                                    <section className="mt-32">
                                        <div className="mb-10 flex items-end justify-between border-b border-zinc-200/70 pb-6">
                                            <div>
                                                <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                                                    <span className="h-px w-6 bg-zinc-300" />
                                                    System Functions
                                                </div>

                                                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                                                    Core Capabilities
                                                </h2>
                                            </div>

                                            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-zinc-400 sm:block">
                                                {String(
                                                    project.highlights
                                                        .length
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}{" "}
                                                Capabilities
                                            </span>
                                        </div>

                                        <motion.div
                                            variants={
                                                staggerContainer
                                            }
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{
                                                once: true,
                                                margin: "-50px",
                                            }}
                                            className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-[#FBFBF9]/80 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.18)]"
                                        >
                                            {project.highlights.map(
                                                (
                                                    highlight,
                                                    i
                                                ) => (
                                                    <motion.div
                                                        key={i}
                                                        variants={
                                                            fadeUpItem
                                                        }
                                                        className="group relative flex items-center gap-5 border-b border-zinc-200/60 px-5 py-5 transition-colors duration-300 last:border-b-0 hover:bg-zinc-100/45 sm:px-7"
                                                    >
                                                        <span className="w-7 shrink-0 font-mono text-[10px] tracking-widest text-zinc-400">
                                                            {String(
                                                                i +
                                                                    1
                                                            ).padStart(
                                                                2,
                                                                "0"
                                                            )}
                                                        </span>

                                                        <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                                                            <span className="absolute h-px w-full bg-zinc-200 transition-colors duration-300 group-hover:bg-zinc-400" />

                                                            <span className="relative z-10 flex h-2 w-2 rounded-full border-2 border-[#FBFBF9] bg-zinc-300 transition-all duration-300 group-hover:scale-125 group-hover:bg-zinc-800" />
                                                        </div>

                                                        <div className="min-w-0 flex-1">
                                                            <p className="text-sm font-medium leading-6 text-zinc-700 transition-colors duration-300 group-hover:text-zinc-950">
                                                                {
                                                                    highlight
                                                                }
                                                            </p>
                                                        </div>

                                                        <div className="hidden text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-zinc-600 sm:block">
                                                            →
                                                        </div>
                                                    </motion.div>
                                                )
                                            )}
                                        </motion.div>
                                    </section>

                                    {/* INTERFACE SHOWCASE */}
                                    <section className="mt-32 pb-20">
                                        <div className="mb-10 flex items-end justify-between border-b border-zinc-200/60 pb-6">
                                            <div>
                                                <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                                                    <span className="h-px w-6 bg-zinc-300" />
                                                    Visual Reference
                                                </div>

                                                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                                                    Interface Showcase
                                                </h2>
                                            </div>

                                            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-zinc-400 sm:block">
                                                {String(
                                                    screenshots.length
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}{" "}
                                                Screens
                                            </span>
                                        </div>

                                        <div
                                            ref={galleryRef}
                                            onPointerDown={handleGalleryPointerDown}
                                            onWheel={handleGalleryWheel}
                                            className="flex cursor-grab overflow-x-hidden rounded-2xl px-1 py-2 select-none touch-pan-y active:cursor-grabbing"
                                        >
                                            <div className="flex w-max gap-6">
                                                {[
                                                    ...screenshots,
                                                    ...screenshots,
                                                ].map(
                                                    (
                                                        shot,
                                                        i
                                                    ) => {
                                                        const imageIndex =
                                                            i %
                                                            screenshots.length

                                                        return (
                                                            <button
                                                                key={`${shot.src}-${i}`}
                                                                type="button"
                                                                onClick={() => {
                                                                    if (
                                                                        galleryMoved.current
                                                                    ) {
                                                                        return
                                                                    }

                                                                    setSelectedImage(
                                                                        imageIndex
                                                                    )
                                                                }}
                                                                className="group relative w-70 shrink-0 overflow-hidden rounded-2xl border border-zinc-200/80 bg-[#FBFBF9] text-left shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg sm:w-120"
                                                            >
                                                                <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-100">
                                                                    <img
                                                                        src={
                                                                            shot.src ||
                                                                            project.image
                                                                        }
                                                                        alt={
                                                                            shot.caption
                                                                        }
                                                                        className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                                                        loading="lazy"
                                                                        draggable={
                                                                            false
                                                                        }
                                                                    />

                                                                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                                                                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                                                                        <Maximize2 className="h-4 w-4" />
                                                                    </div>
                                                                </div>

                                                                <div className="border-t border-zinc-100 bg-[#FBFBF9] px-5 py-4">
                                                                    <div className="flex items-center justify-between gap-4">
                                                                        <span className="font-display text-sm font-medium tracking-[-0.01em] text-zinc-700">
                                                                            {
                                                                                shot.caption
                                                                            }
                                                                        </span>

                                                                        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                                                                            View
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>

                                        <p className="mt-4 text-center font-mono text-[10px] tracking-widest text-zinc-400">
                                            Drag to move images · Click to fullscreen
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FULLSCREEN IMAGE VIEWER */}
            <AnimatePresence>
                {selectedImage !== null &&
                    screenshots[selectedImage] && (
                        <motion.div
                            key="image-viewer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-99999 flex h-dvh w-screen items-center justify-center bg-black/95"
                            onPointerDown={(e) => {
                                if (
                                    e.target ===
                                    e.currentTarget
                                ) {
                                    closeViewer()
                                }
                            }}
                        >
                            {/* CLOSE */}
                            <button
                                type="button"
                                onPointerDown={(e) =>
                                    e.stopPropagation()
                                }
                                onClick={(e) => {
                                    e.stopPropagation()
                                    closeViewer()
                                }}
                                className="absolute right-6 top-6 z-100 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                                aria-label="Close image viewer"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* COUNTER */}
                            <div className="absolute left-6 top-6 z-100 rounded-full border border-white/10 bg-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/60 backdrop-blur-md">
                                {String(
                                    selectedImage + 1
                                ).padStart(2, "0")}{" "}
                                /{" "}
                                {String(
                                    screenshots.length
                                ).padStart(2, "0")}
                            </div>

                            {/* PREVIOUS */}
                            {screenshots.length > 1 && (
                                <button
                                    type="button"
                                    onPointerDown={(e) =>
                                        e.stopPropagation()
                                    }
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        previousImage()
                                    }}
                                    className="absolute left-4 top-1/2 z-100 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 sm:left-8"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-7 w-7" />
                                </button>
                            )}

                            {/* IMAGE / DRAG AREA */}
                            <div
                                className="relative z-40 flex h-full w-full items-center justify-center px-20 py-20 touch-none"
                                onPointerDown={(e) => {
                                    e.stopPropagation()
                                    setDragStart(
                                        e.clientX
                                    )
                                }}
                                onPointerUp={(e) => {
                                    e.stopPropagation()

                                    if (
                                        dragStart ===
                                        null
                                    ) {
                                        return
                                    }

                                    const distance =
                                        e.clientX -
                                        dragStart

                                    if (distance > 60) {
                                        previousImage()
                                    } else if (
                                        distance < -60
                                    ) {
                                        nextImage()
                                    }

                                    setDragStart(null)
                                }}
                                onPointerCancel={() => {
                                    setDragStart(null)
                                }}
                                onClick={(e) =>
                                    e.stopPropagation()
                                }
                            >
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={
                                            screenshots[
                                                selectedImage
                                            ].src
                                        }
                                        src={
                                            screenshots[
                                                selectedImage
                                            ].src ||
                                            project?.image
                                        }
                                        alt={
                                            screenshots[
                                                selectedImage
                                            ].caption
                                        }
                                        draggable={false}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.96,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.96,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                        }}
                                        className="max-h-[85vh] max-w-[85vw] cursor-grab select-none rounded-xl object-contain shadow-2xl active:cursor-grabbing"
                                    />
                                </AnimatePresence>
                            </div>

                            {/* NEXT */}
                            {screenshots.length > 1 && (
                                <button
                                    type="button"
                                    onPointerDown={(e) =>
                                        e.stopPropagation()
                                    }
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        nextImage()
                                    }}
                                    className="absolute right-4 top-1/2 z-100 flex h-14 w-14 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20 sm:right-8"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-7 w-7" />
                                </button>
                            )}
                        </motion.div>
                    )}
            </AnimatePresence>
        </>,
        document.body
    )
}

function ArchitectureNodeBlock({
    node,
    index,
}: {
    node: Project["architecture"][number]
    index: number
}) {
    const styleMap = {
        client: {
            icon: Globe,
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-100/50",
        },
        server: {
            icon: Server,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            border: "border-emerald-100/50",
        },
        database: {
            icon: Database,
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "border-purple-100/50",
        },
        service: {
            icon: Box,
            color: "text-amber-600",
            bg: "bg-amber-50",
            border: "border-amber-100/50",
        },
    }

    const config = styleMap[node.type]
    const Icon = config.icon

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: 20,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
            }}
            viewport={{
                once: true,
                margin: "-50px",
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: customEase,
            }}
            className="group relative flex items-start gap-6 lg:gap-8"
        >
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-[#FBFBF9] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-zinc-300 group-hover:shadow-md">
                <Icon
                    className={`h-4 w-4 ${config.color}`}
                />
            </div>

            <div className="flex-1 rounded-2xl border border-zinc-200/80 bg-[#FBFBF9] p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-zinc-300 group-hover:shadow-md">
                <div className="flex items-center gap-3">
                    <span
                        className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${config.bg} ${config.color} ${config.border}`}
                    >
                        {node.type}
                    </span>
                </div>

                <h3 className="mt-3 text-lg font-medium text-zinc-900">
                    {node.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {node.description}
                </p>
            </div>
        </motion.div>
    )
}