"use client"

import {
    Blocks,
    Code2,
    Database,
    Globe,
    LayoutDashboard,
    LockKeyhole,
    Server,
    Smartphone,
    Zap,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion, type Variants } from "framer-motion"

type Capability = {
    id: number
    title: string
    description: string
    icon: LucideIcon
}

const capabilities: Capability[] = [
    {
        id: 1,
        title: "React Applications",
        description:
            "Component-driven UIs, state management, responsive layouts",
        icon: Blocks,
    },
    {
        id: 2,
        title: "REST APIs",
        description:
            "Node.js, Express, routes, controllers, API integration",
        icon: Globe,
    },
    {
        id: 3,
        title: "Database-Backed Apps",
        description:
            "PostgreSQL, Prisma, schemas, relations, CRUD operations",
        icon: Database,
    },
    {
        id: 4,
        title: "Full-Stack Applications",
        description:
            "Connecting React frontends with Node.js backends",
        icon: Server,
    },
    {
        id: 5,
        title: "Authentication",
        description:
            "User accounts, protected routes, sessions and authorization basics",
        icon: LockKeyhole,
    },
    {
        id: 6,
        title: "Responsive Interfaces",
        description:
            "Mobile-friendly layouts with Tailwind CSS and modern CSS",
        icon: Smartphone,
    },
    {
        id: 7,
        title: "API Integration",
        description:
            "Working with external APIs, fetching data and handling responses",
        icon: Zap,
    },
    {
        id: 8,
        title: "Interactive UIs",
        description:
            "Forms, modals, filters, state-driven interactions",
        icon: LayoutDashboard,
    },
    {
        id: 9,
        title: "JavaScript Development",
        description:
            "Modern JavaScript, DOM, async code and reusable logic",
        icon: Code2,
    },
]

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
}

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export default function Capabilities() {
    return (
        <section
            id="capabilities"
            className="
                relative
                w-full
                overflow-hidden
                bg-white
                py-20
                sm:py-24
                lg:py-32
            "
        >
            {/* Ambient background glow */}
            <motion.div
                animate={{
                    x: ["-10%", "10%", "-10%"],
                    y: ["0%", "8%", "0%"],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    -top-40
                    h-80
                    w-80
                    rounded-full
                    bg-blue-500/[0.035]
                    blur-[100px]
                    sm:h-105
                    sm:w-105
                "
            />

            <motion.div
                animate={{
                    x: ["10%", "-10%", "10%"],
                    y: ["0%", "-5%", "0%"],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-40
                    h-80
                    w-80
                    rounded-full
                    bg-indigo-500/2.5
                    blur-[100px]
                    sm:h-95
                    sm:w-95
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                    px-5
                    sm:px-6
                    lg:px-8
                "
            >
                {/* =========================================================
                    HEADER
                ========================================================== */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {/* Section label */}
                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2.5
                            font-mono
                            text-[9px]
                            uppercase
                            tracking-[0.18em]
                            text-[#8A919E]
                            sm:text-[11px]
                        "
                    >
                        <motion.span
                            animate={{
                                scale: [1, 1.35, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-[#4F7CFF]
                            "
                        />

                        What I Can Build
                    </div>

                    {/* Heading */}
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
                        Capabilities, not a list of logos.
                    </h2>

                    {/* Description */}
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
                        The things I have already built, shipped and maintained
                        — end to end, from schema to deploy.
                    </p>
                </motion.div>

                {/* =========================================================
                    CAPABILITY CARDS
                ========================================================== */}
                <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.08,
                    }}
                    className="
                        mt-10
                        grid
                        grid-cols-1
                        gap-3
                        sm:mt-12
                        sm:grid-cols-2
                        sm:gap-4
                        lg:mt-14
                        lg:grid-cols-3
                    "
                >
                    {capabilities.map((capability) => {
                        const Icon = capability.icon

                        return (
                            <motion.li
                                key={capability.id}
                                variants={cardVariants}
                                whileHover={{
                                    y: -6,
                                    transition: {
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 24,
                                    },
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-[#E8EAEE]
                                    bg-white
                                    p-5
                                    shadow-(--shadow-card)
                                    transition-shadow
                                    duration-300
                                    hover:border-[#DDE3F0]
                                    hover:shadow-(--shadow-lift)
                                    sm:p-6
                                "
                            >
                                {/* Corner glow */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-16
                                        -top-16
                                        h-32
                                        w-32
                                        rounded-full
                                        bg-[#4F7CFF]/[0.07]
                                        blur-3xl
                                        opacity-0
                                        transition-opacity
                                        duration-500
                                        group-hover:opacity-100
                                    "
                                />

                                {/* Top accent */}
                                <motion.div
                                    initial={{
                                        scaleX: 0,
                                    }}
                                    whileInView={{
                                        scaleX: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay:
                                            capability.id * 0.05,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    className="
                                        absolute
                                        left-6
                                        right-6
                                        top-0
                                        h-px
                                        origin-left
                                        bg-linear-to-r
                                        from-[#4F7CFF]/50
                                        via-[#4F7CFF]/10
                                        to-transparent
                                        opacity-0
                                        transition-opacity
                                        duration-300
                                        group-hover:opacity-100
                                    "
                                />

                                {/* =================================================
                                    ORIGINAL ICON GLOW
                                    No lift.
                                    No rotation.
                                    No scale animation.
                                ================================================== */}
                                <span
                                    className="
                                        relative
                                        grid
                                        h-10
                                        w-10
                                        place-items-center
                                        rounded-xl
                                        bg-[#EEF2FF]
                                        text-[#4F7CFF]
                                        transition-all
                                        duration-300
                                        group-hover:bg-[#E6ECFF]
                                        group-hover:text-[#3F6FF5]
                                        group-hover:shadow-[0_8px_25px_rgba(79,124,255,0.15)]
                                    "
                                >
                                    <Icon
                                        className="h-4.5 w-4.5"
                                        strokeWidth={1.8}
                                    />

                                    {/* Tiny pulsing indicator */}
                                    <motion.span
                                        animate={{
                                            opacity: [0, 1, 0],
                                            scale: [
                                                0.5,
                                                1,
                                                0.5,
                                            ],
                                        }}
                                        transition={{
                                            duration: 2.8,
                                            repeat: Infinity,
                                            delay:
                                                capability.id *
                                                0.2,
                                        }}
                                        className="
                                            absolute
                                            -right-1
                                            -top-1
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            bg-[#4F7CFF]
                                            shadow-[0_0_8px_rgba(79,124,255,0.7)]
                                        "
                                    />
                                </span>

                                {/* Title */}
                                <h3
                                    className="
                                        relative
                                        mt-4
                                        font-display
                                        text-[16px]
                                        font-medium
                                        tracking-tight
                                        text-[#08090B]
                                        sm:mt-5
                                        sm:text-[17px]
                                    "
                                >
                                    {capability.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        relative
                                        mt-1.5
                                        max-w-md
                                        font-mono
                                        text-[10.5px]
                                        leading-5
                                        text-[#8A919E]
                                        transition-colors
                                        duration-300
                                        group-hover:text-[#69717E]
                                        sm:text-[11.5px]
                                        sm:leading-relaxed
                                    "
                                >
                                    {capability.description}
                                </p>

                                {/* Bottom arrow */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -4,
                                    }}
                                    whileHover={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    className="
                                        pointer-events-none
                                        absolute
                                        bottom-5
                                        right-5
                                        text-[#4F7CFF]
                                        sm:bottom-6
                                        sm:right-6
                                    "
                                >
                                    →
                                </motion.div>
                            </motion.li>
                        )
                    })}
                </motion.ul>

                {/* =========================================================
                    BOTTOM NOTE
                ========================================================== */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.7,
                    }}
                    className="
                        mt-8
                        flex
                        items-center
                        gap-3
                        sm:mt-10
                    "
                >
                    <motion.span
                        animate={{
                            width: [
                                "2.5rem",
                                "4rem",
                                "2.5rem",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="h-px bg-[#4F7CFF]/40"
                    />

                    <p
                        className="
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.14em]
                            text-[#9AA1AD]
                            sm:text-[10px]
                            sm:tracking-[0.18em]
                        "
                    >
                        Built through projects · refined through practice
                    </p>
                </motion.div>
            </div>
        </section>
    )
}