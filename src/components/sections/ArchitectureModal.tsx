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
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const fadeUpItem = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: customEase,
        },
    },
}

export default function ArchitectureModal({
    project,
    onClose,
}: ArchitectureModalProps) {
    const desktopScrollRef = useRef<HTMLDivElement>(null)

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

    /* -------------------------------------------------------------
       Keyboard + body scroll lock
    ------------------------------------------------------------- */

    useEffect(() => {
        if (!project) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (selectedImage !== null) {
                if (event.key === "Escape") {
                    closeViewer()
                    return
                }

                if (event.key === "ArrowLeft") {
                    previousImage()
                    return
                }

                if (event.key === "ArrowRight") {
                    nextImage()
                    return
                }

                return
            }

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
    }, [project, selectedImage, onClose])

    useEffect(() => {
        const gallery = galleryRef.current

        if (!gallery || screenshots.length === 0) {
            return
        }

        let animationFrame: number

        const autoScroll = () => {
            if (!galleryDragging.current) {
                gallery.scrollLeft += 0.5

                const halfway = gallery.scrollWidth / 2

                if (
                    halfway > 0 &&
                    gallery.scrollLeft >= halfway
                ) {
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
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        const gallery = galleryRef.current

        if (!gallery) return

        galleryDragging.current = true
        galleryMoved.current = false
        galleryDragStart.current = event.clientX
        galleryStartScroll.current = gallery.scrollLeft
    }

    const handleGalleryWheel = (
        event: React.WheelEvent<HTMLDivElement>
    ) => {
        const gallery = galleryRef.current

        if (!gallery) return

        const horizontalDelta =
            Math.abs(event.deltaX) > Math.abs(event.deltaY)
                ? event.deltaX
                : 0

        if (horizontalDelta !== 0) {
            event.preventDefault()
            gallery.scrollLeft += horizontalDelta
        }
    }

    useEffect(() => {
        const handlePointerMove = (event: PointerEvent) => {
            if (!galleryDragging.current) {
                return
            }

            const gallery = galleryRef.current

            if (!gallery) {
                return
            }

            const distance =
                event.clientX - galleryDragStart.current

            if (Math.abs(distance) > 5) {
                galleryMoved.current = true
            }

            gallery.scrollLeft =
                galleryStartScroll.current - distance
        }

        const handlePointerUp = () => {
            if (!galleryDragging.current) {
                return
            }

            galleryDragging.current = false

            if (galleryMoved.current) {
                setTimeout(() => {
                    galleryMoved.current = false
                }, 50)
            }
        }

        window.addEventListener(
            "pointermove",
            handlePointerMove
        )

        window.addEventListener(
            "pointerup",
            handlePointerUp
        )

        window.addEventListener(
            "pointercancel",
            handlePointerUp
        )

        return () => {
            window.removeEventListener(
                "pointermove",
                handlePointerMove
            )

            window.removeEventListener(
                "pointerup",
                handlePointerUp
            )

            window.removeEventListener(
                "pointercancel",
                handlePointerUp
            )
        }
    }, [])

    if (typeof document === "undefined") {
        return null
    }

    return createPortal(
        <>
            {/* =========================================================
                ARCHITECTURE MODAL
            ========================================================== */}

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
                        className="
                            fixed
                            inset-0
                            z-9999
                            h-dvh
                            w-screen
                            overflow-hidden
                            bg-[#F6F6F3]
                            text-zinc-900
                        "
                    >
                        {/* Mobile close */}
                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                fixed
                                right-4
                                top-4
                                z-100
                                grid
                                h-10
                                w-10
                                place-items-center
                                rounded-full
                                border
                                border-zinc-200
                                bg-white/90
                                text-zinc-500
                                shadow-sm
                                backdrop-blur-md
                                transition-all
                                hover:scale-105
                                hover:text-zinc-900
                                lg:hidden
                            "
                            aria-label="Close architecture view"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {/* =================================================
                            DESKTOP
                            ================================================= */}

                        <div
                            className="
                                hidden
                                h-full
                                w-full
                                lg:flex
                            "
                        >
                            {/* Desktop left panel */}
                            <aside
                                className="
                                    relative
                                    z-10
                                    h-full
                                    w-100
                                    shrink-0
                                    overflow-y-auto
                                    border-r
                                    border-zinc-200/60
                                    bg-[#F2F2EF]/75
                                    px-12
                                    py-20
                                    backdrop-blur-xl
                                    xl:w-115
                                "
                            >
                                <DesktopProjectInfo
                                    project={project}
                                    onClose={onClose}
                                />
                            </aside>

                            {/* Desktop right scroll area */}
                            <main
                                ref={desktopScrollRef}
                                className="
                                    relative
                                    min-w-0
                                    flex-1
                                    overflow-y-auto
                                    bg-[#F6F6F3]
                                    px-20
                                    py-20
                                "
                            >
                                <ArchitectureContent
                                    project={project}
                                    screenshots={screenshots}
                                    galleryRef={galleryRef}
                                    handleGalleryPointerDown={
                                        handleGalleryPointerDown
                                    }
                                    handleGalleryWheel={
                                        handleGalleryWheel
                                    }
                                    galleryMoved={galleryMoved}
                                    setSelectedImage={
                                        setSelectedImage
                                    }
                                />
                            </main>
                        </div>

                        {/* =================================================
                            MOBILE
                            ================================================= */}

                        <main
                            className="
                                h-full
                                w-full
                                overflow-y-auto
                                overscroll-contain
                                lg:hidden
                            "
                        >
                            <div className="min-h-full">
                                {/* Mobile project information */}

                                <div
                                    className="
                                        border-b
                                        border-zinc-200/70
                                        bg-[#F2F2EF]
                                        px-5
                                        pb-8
                                        pt-7
                                        sm:px-7
                                        sm:pb-10
                                    "
                                >
                                    <MobileProjectInfo
                                        project={project}
                                    />
                                </div>

                                {/* Mobile architecture content */}
                                <div
                                    className="
                                        relative
                                        bg-[#F6F6F3]
                                        px-5
                                        py-8
                                        sm:px-7
                                        sm:py-10
                                    "
                                >
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            bg-[radial-gradient(#dfe1dd_1px,transparent_1px)]
                                            bg-size-[20px_20px]
                                            opacity-[0.3]
                                        "
                                    />

                                    <div className="relative">
                                        <ArchitectureContent
                                            project={project}
                                            screenshots={screenshots}
                                            galleryRef={galleryRef}
                                            handleGalleryPointerDown={
                                                handleGalleryPointerDown
                                            }
                                            handleGalleryWheel={
                                                handleGalleryWheel
                                            }
                                            galleryMoved={
                                                galleryMoved
                                            }
                                            setSelectedImage={
                                                setSelectedImage
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =========================================================
                FULLSCREEN IMAGE VIEWER
            ========================================================== */}

            <AnimatePresence>
                {selectedImage !== null &&
                    screenshots[selectedImage] && (
                        <motion.div
                            key="image-viewer"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            className="
                                fixed
                                inset-0
                                z-99999
                                flex
                                h-dvh
                                w-screen
                                items-center
                                justify-center
                                bg-black/95
                            "
                            onPointerDown={(event) => {
                                if (
                                    event.target ===
                                    event.currentTarget
                                ) {
                                    closeViewer()
                                }
                            }}
                        >
                            {/* Counter */}
                            <div
                                className="
                                    absolute
                                    left-4
                                    top-4
                                    z-100
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/10
                                    px-3
                                    py-1.5
                                    font-mono
                                    text-[9px]
                                    uppercase
                                    tracking-widest
                                    text-white/60
                                    backdrop-blur-md
                                    sm:left-6
                                    sm:top-6
                                    sm:px-4
                                    sm:py-2
                                    sm:text-[10px]
                                "
                            >
                                {String(
                                    selectedImage + 1
                                ).padStart(2, "0")}{" "}
                                /{" "}
                                {String(
                                    screenshots.length
                                ).padStart(2, "0")}
                            </div>

                            {/* Close */}
                            <button
                                type="button"
                                onPointerDown={(event) =>
                                    event.stopPropagation()
                                }
                                onClick={(event) => {
                                    event.stopPropagation()
                                    closeViewer()
                                }}
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    z-100
                                    grid
                                    h-10
                                    w-10
                                    place-items-center
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/10
                                    text-white
                                    backdrop-blur-md
                                    transition
                                    hover:bg-white/20
                                    sm:right-6
                                    sm:top-6
                                    sm:h-11
                                    sm:w-11
                                "
                                aria-label="Close image viewer"
                            >
                                <X className="h-4 w-4 sm:h-5 sm:w-5" />
                            </button>

                            {/* Previous */}
                            {screenshots.length > 1 && (
                                <button
                                    type="button"
                                    onPointerDown={(event) =>
                                        event.stopPropagation()
                                    }
                                    onClick={(event) => {
                                        event.stopPropagation()
                                        previousImage()
                                    }}
                                    className="
                                        absolute
                                        left-3
                                        top-1/2
                                        z-100
                                        grid
                                        h-11
                                        w-11
                                        -translate-y-1/2
                                        place-items-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/10
                                        text-white
                                        backdrop-blur-md
                                        transition
                                        hover:scale-105
                                        hover:bg-white/20
                                        sm:left-8
                                        sm:h-14
                                        sm:w-14
                                    "
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7" />
                                </button>
                            )}

                            {/* Image / swipe area */}
                            <div
                                className="
                                    relative
                                    z-40
                                    flex
                                    h-full
                                    w-full
                                    items-center
                                    justify-center
                                    px-14
                                    py-20
                                    touch-none
                                    sm:px-20
                                "
                                onPointerDown={(event) => {
                                    event.stopPropagation()
                                    setDragStart(
                                        event.clientX
                                    )
                                }}
                                onPointerUp={(event) => {
                                    event.stopPropagation()

                                    if (dragStart === null) {
                                        return
                                    }

                                    const distance =
                                        event.clientX -
                                        dragStart

                                    if (distance > 60) {
                                        previousImage()
                                    } else if (distance < -60) {
                                        nextImage()
                                    }

                                    setDragStart(null)
                                }}
                                onPointerCancel={() => {
                                    setDragStart(null)
                                }}
                                onClick={(event) => {
                                    event.stopPropagation()
                                }}
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
                                        className="
                                            max-h-[82vh]
                                            max-w-[calc(100vw-6rem)]
                                            cursor-grab
                                            select-none
                                            rounded-xl
                                            object-contain
                                            shadow-2xl
                                            active:cursor-grabbing
                                            sm:max-h-[85vh]
                                            sm:max-w-[85vw]
                                        "
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Next */}
                            {screenshots.length > 1 && (
                                <button
                                    type="button"
                                    onPointerDown={(event) =>
                                        event.stopPropagation()
                                    }
                                    onClick={(event) => {
                                        event.stopPropagation()
                                        nextImage()
                                    }}
                                    className="
                                        absolute
                                        right-3
                                        top-1/2
                                        z-100
                                        grid
                                        h-11
                                        w-11
                                        -translate-y-1/2
                                        place-items-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/10
                                        text-white
                                        backdrop-blur-md
                                        transition
                                        hover:scale-105
                                        hover:bg-white/20
                                        sm:right-8
                                        sm:h-14
                                        sm:w-14
                                    "
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7" />
                                </button>
                            )}

                            {/* Caption */}
                            <div
                                className="
                                    absolute
                                    bottom-4
                                    left-1/2
                                    z-100
                                    max-w-[75vw]
                                    -translate-x-1/2
                                    truncate
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-white/10
                                    px-3
                                    py-1.5
                                    font-mono
                                    text-[8px]
                                    uppercase
                                    tracking-[0.14em]
                                    text-white/60
                                    backdrop-blur-md
                                    sm:bottom-6
                                    sm:px-4
                                    sm:py-2
                                    sm:text-[9px]
                                "
                            >
                                {screenshots[selectedImage].caption}
                            </div>
                        </motion.div>
                    )}
            </AnimatePresence>
        </>,
        document.body
    )
}

/* ================================================================
   DESKTOP PROJECT INFO
================================================================ */

function DesktopProjectInfo({
    project,
    onClose,
}: {
    project: Project
    onClose: () => void
}) {
    return (
        <>
            <button
                type="button"
                onClick={onClose}
                className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-zinc-400
                    transition-colors
                    hover:text-zinc-900
                "
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to portfolio
            </button>

            <ProjectInfoContent project={project} />
        </>
    )
}

/* ================================================================
   MOBILE PROJECT INFO
================================================================ */

function MobileProjectInfo({
    project,
}: {
    project: Project
}) {
    return <ProjectInfoContent project={project} />
}

/* ================================================================
   SHARED PROJECT INFO
================================================================ */

function ProjectInfoContent({
    project,
}: {
    project: Project
}) {
    return (
        <div className="lg:mt-24">
            {/* Meta */}
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
                <span
                    className="
                        flex
                        h-6
                        items-center
                        rounded-full
                        bg-zinc-100
                        px-2.5
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-widest
                        text-zinc-500
                    "
                >
                    {project.year}
                </span>

                <div className="h-1 w-1 rounded-full bg-zinc-300" />

                <span
                    className="
                        flex
                        items-center
                        gap-1.5
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-widest
                        text-emerald-600
                    "
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {project.status.replace("-", " ")}
                </span>
            </motion.div>

            {/* Title */}
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
                className="
                    mt-4
                    text-[clamp(2rem,8vw,3rem)]
                    font-semibold
                    leading-none
                    tracking-[-0.055em]
                    text-zinc-900
                    lg:mt-6
                    lg:text-5xl
                "
            >
                {project.title}
            </motion.h1>

            {/* Description */}
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
                className="
                    mt-4
                    max-w-2xl
                    text-[14px]
                    leading-6
                    text-zinc-500
                    sm:text-[15px]
                    sm:leading-7
                    lg:mt-6
                    lg:text-base
                    lg:leading-relaxed
                "
            >
                {project.description}
            </motion.p>

            {/* Mobile divider */}
            <div className="mt-6 border-t border-zinc-200/80 lg:hidden" />

            {/* Tech stack */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 0.4,
                }}
                className="
                    mt-5
                    space-y-3
                    lg:mt-10
                    lg:space-y-4
                "
            >
                <h3
                    className="
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-zinc-400
                        lg:text-[10px]
                        lg:tracking-widest
                    "
                >
                    Tech Stack
                </h3>

                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="
                                rounded-md
                                border
                                border-zinc-200/60
                                bg-zinc-50/50
                                px-2
                                py-1
                                text-[10px]
                                font-medium
                                text-zinc-600
                                lg:px-2.5
                                lg:text-xs
                            "
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 0.5,
                }}
                className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                    lg:mt-10
                    lg:gap-4
                    lg:pt-4
                "
            >
                {project.liveDemo !== "#" && (
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-lg
                            bg-zinc-900
                            px-4
                            py-2.5
                            text-xs
                            font-medium
                            text-white
                            shadow-[0_4px_14px_0_rgba(24,24,27,0.2)]
                            transition-all
                            hover:-translate-y-0.5
                            hover:bg-zinc-800
                            sm:text-sm
                            lg:px-5
                        "
                    >
                        View Live App
                    </a>
                )}

                {project.github !== "#" && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            border
                            border-zinc-200
                            bg-white
                            px-4
                            py-2.5
                            text-xs
                            font-medium
                            text-zinc-700
                            shadow-sm
                            transition-all
                            hover:-translate-y-0.5
                            hover:bg-zinc-50
                            sm:text-sm
                            lg:px-5
                        "
                    >
                        Source Code
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                )}
            </motion.div>
        </div>
    )
}

/* ================================================================
   ARCHITECTURE CONTENT
================================================================ */

function ArchitectureContent({
    project,
    screenshots,
    galleryRef,
    handleGalleryPointerDown,
    handleGalleryWheel,
    galleryMoved,
    setSelectedImage,
}: {
    project: Project
    screenshots: Project["screenshots"]
    galleryRef: React.RefObject<HTMLDivElement | null>
    handleGalleryPointerDown: (
        event: React.PointerEvent<HTMLDivElement>
    ) => void
    handleGalleryWheel: (
        event: React.WheelEvent<HTMLDivElement>
    ) => void
    galleryMoved: React.MutableRefObject<boolean>
    setSelectedImage: React.Dispatch<
        React.SetStateAction<number | null>
    >
}) {
    return (
        <>
            {/* =========================================================
                SYSTEM TOPOLOGY
            ========================================================== */}

            <section>
                <div
                    className="
                        mb-7
                        flex
                        items-end
                        justify-between
                        gap-4
                        border-b
                        border-zinc-200/60
                        pb-5
                        sm:mb-10
                        sm:pb-6
                    "
                >
                    <div>
                        <h2
                            className="
                                text-[21px]
                                font-semibold
                                tracking-tight
                                text-zinc-900
                                sm:text-2xl
                            "
                        >
                            System Topology
                        </h2>

                        <p
                            className="
                                mt-1
                                text-[11px]
                                leading-5
                                text-zinc-500
                                sm:text-sm
                            "
                        >
                            Architectural breakdown of the request lifecycle.
                        </p>
                    </div>

                    <Layers className="h-5 w-5 shrink-0 text-zinc-300" />
                </div>

                <div className="relative ml-1 sm:ml-3 lg:ml-8">
                    <div
                        className="
                            absolute
                            bottom-0
                            left-4.75
                            top-4
                            w-px
                            bg-linear-to-b
                            from-zinc-200
                            via-zinc-200
                            to-transparent
                        "
                    />

                    <div className="flex flex-col gap-5 sm:gap-8">
                        {project.architecture.map(
                            (node, index) => (
                                <ArchitectureNodeBlock
                                    key={node.title}
                                    node={node}
                                    index={index}
                                />
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* =========================================================
                CORE CAPABILITIES
            ========================================================== */}

            <section className="mt-20 sm:mt-24 lg:mt-32">
                <div
                    className="
                        mb-7
                        flex
                        items-end
                        justify-between
                        gap-4
                        border-b
                        border-zinc-200/70
                        pb-5
                        sm:mb-10
                        sm:pb-6
                    "
                >
                    <div>
                        <div
                            className="
                                mb-1.5
                                flex
                                items-center
                                gap-2
                                font-mono
                                text-[8px]
                                uppercase
                                tracking-[0.18em]
                                text-zinc-400
                                sm:mb-2
                                sm:text-[10px]
                            "
                        >
                            <span className="h-px w-5 bg-zinc-300 sm:w-6" />
                            System Functions
                        </div>

                        <h2
                            className="
                                text-[21px]
                                font-semibold
                                tracking-tight
                                text-zinc-900
                                sm:text-2xl
                            "
                        >
                            Core Capabilities
                        </h2>
                    </div>

                    <span className="hidden font-mono text-[10px] uppercase tracking-widest text-zinc-400 sm:block">
                        {String(
                            project.highlights.length
                        ).padStart(2, "0")}{" "}
                        Capabilities
                    </span>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: "-50px",
                    }}
                    className="
                        overflow-hidden
                        rounded-xl
                        border
                        border-zinc-200/80
                        bg-[#FBFBF9]/80
                        shadow-[0_8px_30px_-20px_rgba(0,0,0,0.18)]
                        sm:rounded-2xl
                    "
                >
                    {project.highlights.map(
                        (highlight, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUpItem}
                                className="
                                    group
                                    relative
                                    flex
                                    items-start
                                    gap-3
                                    border-b
                                    border-zinc-200/60
                                    px-3
                                    py-4
                                    transition-colors
                                    duration-300
                                    last:border-b-0
                                    hover:bg-zinc-100/45
                                    sm:gap-5
                                    sm:px-5
                                    sm:py-5
                                    md:px-7
                                "
                            >
                                <span
                                    className="
                                        w-5
                                        shrink-0
                                        pt-0.5
                                        font-mono
                                        text-[9px]
                                        tracking-widest
                                        text-zinc-400
                                        sm:w-7
                                        sm:text-[10px]
                                    "
                                >
                                    {String(
                                        index + 1
                                    ).padStart(2, "0")}
                                </span>

                                <div
                                    className="
                                        relative
                                        mt-1
                                        flex
                                        h-6
                                        w-6
                                        shrink-0
                                        items-center
                                        justify-center
                                        sm:h-8
                                        sm:w-8
                                    "
                                >
                                    <span className="absolute h-px w-full bg-zinc-200 transition-colors duration-300 group-hover:bg-zinc-400" />

                                    <span
                                        className="
                                            relative
                                            z-10
                                            h-2
                                            w-2
                                            rounded-full
                                            border-2
                                            border-[#FBFBF9]
                                            bg-zinc-300
                                            transition-all
                                            duration-300
                                            group-hover:scale-125
                                            group-hover:bg-zinc-800
                                        "
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p
                                        className="
                                            text-[12px]
                                            font-medium
                                            leading-5
                                            text-zinc-700
                                            transition-colors
                                            duration-300
                                            group-hover:text-zinc-950
                                            sm:text-sm
                                            sm:leading-6
                                        "
                                    >
                                        {highlight}
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

            {/* =========================================================
                INTERFACE SHOWCASE
            ========================================================== */}

            <section className="mt-20 pb-12 sm:mt-24 sm:pb-16 lg:mt-32 lg:pb-20">
                <div
                    className="
                        mb-7
                        flex
                        items-end
                        justify-between
                        gap-4
                        border-b
                        border-zinc-200/60
                        pb-5
                        sm:mb-10
                        sm:pb-6
                    "
                >
                    <div>
                        <div
                            className="
                                mb-1.5
                                flex
                                items-center
                                gap-2
                                font-mono
                                text-[8px]
                                uppercase
                                tracking-[0.18em]
                                text-zinc-400
                                sm:mb-2
                                sm:text-[10px]
                            "
                        >
                            <span className="h-px w-5 bg-zinc-300 sm:w-6" />
                            Visual Reference
                        </div>

                        <h2
                            className="
                                text-[21px]
                                font-semibold
                                tracking-tight
                                text-zinc-900
                                sm:text-2xl
                            "
                        >
                            Interface Showcase
                        </h2>
                    </div>

                    <span className="hidden font-mono text-[10px] uppercase tracking-widest text-zinc-400 sm:block">
                        {String(
                            screenshots.length
                        ).padStart(2, "0")}{" "}
                        Screens
                    </span>
                </div>

                {/* Moving gallery */}
                <div
                    ref={galleryRef}
                    onPointerDown={handleGalleryPointerDown}
                    onWheel={handleGalleryWheel}
                    className="
                        flex
                        cursor-grab
                        overflow-x-hidden
                        rounded-2xl
                        px-1
                        py-2
                        select-none
                        touch-pan-y
                        active:cursor-grabbing
                    "
                >
                    <div className="flex w-max gap-4 sm:gap-6">
                        {[
                            ...screenshots,
                            ...screenshots,
                        ].map((shot, index) => {
                            const imageIndex =
                                index % screenshots.length

                            return (
                                <button
                                    key={`${shot.src}-${index}`}
                                    type="button"
                                    onClick={() => {
                                        if (galleryMoved.current) {
                                            return
                                        }

                                        setSelectedImage(
                                            imageIndex
                                        )
                                    }}
                                    className="
                                        group
                                        relative
                                        w-[78vw]
                                        max-w-85
                                        shrink-0
                                        overflow-hidden
                                        rounded-xl
                                        border
                                        border-zinc-200/80
                                        bg-[#FBFBF9]
                                        text-left
                                        shadow-sm
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:shadow-lg
                                        sm:w-120
                                        sm:max-w-none
                                        sm:rounded-2xl
                                    "
                                >
                                    <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-100">
                                        <img
                                            src={
                                                shot.src ||
                                                project.image
                                            }
                                            alt={shot.caption}
                                            className="
                                                h-full
                                                w-full
                                                object-contain
                                                transition-transform
                                                duration-700
                                                ease-out
                                                group-hover:scale-105
                                            "
                                            loading="lazy"
                                            draggable={false}
                                        />

                                        <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                                        <div
                                            className="
                                                absolute
                                                right-3
                                                top-3
                                                flex
                                                h-8
                                                w-8
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-white/40
                                                bg-black/20
                                                text-white
                                                opacity-100
                                                backdrop-blur-md
                                                sm:right-4
                                                sm:top-4
                                                sm:h-9
                                                sm:w-9
                                                sm:opacity-0
                                                sm:transition-all
                                                sm:duration-300
                                                sm:group-hover:opacity-100
                                            "
                                        >
                                            <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        </div>
                                    </div>

                                    <div
                                        className="
                                            border-t
                                            border-zinc-100
                                            bg-[#FBFBF9]
                                            px-4
                                            py-3
                                            sm:px-5
                                            sm:py-4
                                        "
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="truncate font-display text-[12px] font-medium tracking-[-0.01em] text-zinc-700 sm:text-sm">
                                                {shot.caption}
                                            </span>

                                            <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-400 sm:text-[10px]">
                                                View
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>

                <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-zinc-400 sm:text-[10px] sm:tracking-widest">
                    Drag to move images · Click to fullscreen
                </p>
            </section>
        </>
    )
}

/* ================================================================
   ARCHITECTURE NODE
================================================================ */

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
            className="
                group
                relative
                flex
                items-start
                gap-3
                sm:gap-5
                lg:gap-8
            "
        >
            {/* Icon */}
            <div
                className="
                    relative
                    z-10
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-zinc-200
                    bg-[#FBFBF9]
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:border-zinc-300
                    group-hover:shadow-md
                    sm:h-11
                    sm:w-11
                "
            >
                <Icon
                    className={`h-4 w-4 ${config.color}`}
                />
            </div>

            {/* Content */}
            <div
                className="
                    min-w-0
                    flex-1
                    rounded-xl
                    border
                    border-zinc-200/80
                    bg-[#FBFBF9]
                    p-4
                    shadow-sm
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:border-zinc-300
                    group-hover:shadow-md
                    sm:rounded-2xl
                    sm:p-5
                    lg:p-6
                "
            >
                <span
                    className={`
                        inline-flex
                        items-center
                        rounded-md
                        border
                        px-2
                        py-0.5
                        font-mono
                        text-[8px]
                        uppercase
                        tracking-wider
                        sm:text-[10px]
                        ${config.bg}
                        ${config.color}
                        ${config.border}
                    `}
                >
                    {node.type}
                </span>

                <h3
                    className="
                        mt-2.5
                        text-[13px]
                        font-medium
                        leading-5
                        text-zinc-900
                        sm:mt-3
                        sm:text-lg
                    "
                >
                    {node.title}
                </h3>

                <p
                    className="
                        mt-1.5
                        text-[11px]
                        leading-5
                        text-zinc-500
                        sm:mt-2
                        sm:text-sm
                        sm:leading-relaxed
                    "
                >
                    {node.description}
                </p>
            </div>
        </motion.div>
    )
}