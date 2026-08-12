"use client";

import {
    Database,
    Layers3,
    Server,
    Wrench,
    Cloud
} from "lucide-react";

import { motion, type Variants } from "framer-motion";

type SkillGroup = {
    category: string;
    label: string;
    icon: typeof Layers3;
    skills: string[];
};

const skillGroups: SkillGroup[] = [
    {
        category: "01",
        label: "Frontend",
        icon: Layers3,
        skills: [
            "React",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Vite",
        ],
    },
    {
        category: "02",
        label: "Backend",
        icon: Server,
        skills: [
            "Node.js",
            "Express",
            "REST APIs",
            "Socket.IO",
        ],
    },
    {
        category: "03",
        label: "Database",
        icon: Database,
        skills: [
            "PostgreSQL",
            "Prisma",
            "SQL",
        ],
    },
    {
        category: "04",
        label: "Tools",
        icon: Wrench,
        skills: [
            "Git",
            "GitHub",
            "ESLint",
            "Prettier",
            "Vitest",
            "Postman"
        ],
    },
    {
        category: "05",
        label: "Cloud",
        icon: Cloud,
        skills: [
            "Vercel",
            "Railway",
            "Render",
            "Cloudinary"
        ]
    }
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const rowVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const skillVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 8,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

export default function Skills() {
    return (
        <section className="relative overflow-hidden bg-[#15171C] py-28 text-white sm:py-36">
            <div
                className="
                    pointer-events-none absolute inset-0 opacity-[0.025]
                    bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)]
                    bg-size-[48px_48px]
                "
            />

            <motion.div
                animate={{
                    x: ["-20%", "20%", "-20%"],
                    y: ["0%", "15%", "0%"],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none absolute
                    -top-40 left-1/2
                    h-125 w-125
                    -translate-x-1/2
                    rounded-full
                    bg-blue-500/6
                    blur-[120px]
                "
            />

            <div className="relative mx-auto max-w-5xl px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-2xl"
                >
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-blue-300">
                        <motion.span
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="h-1.5 w-1.5 rounded-full bg-blue-400"
                        />

                        Technical Stack
                    </div>

                    <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-[1.02] tracking-tighter text-white">
                        The stack I work with.
                    </h2>

                    <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[#AEB4BF]">
                        A practical stack built around shipping full-stack
                        applications, not collecting logos.
                    </p>
                </motion.div>

                {/* Skills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    className="
                        mt-16 overflow-hidden rounded-3xl
                        border border-white/11
                        bg-[#191C22]
                        shadow-[0_30px_80px_rgba(0,0,0,0.22)]
                    "
                >
                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <motion.div
                                key={group.label}
                                variants={rowVariants}
                                whileHover={{
                                    backgroundColor: "rgba(255,255,255,0.035)",
                                }}
                                className={`
                                    group relative grid gap-8
                                    px-6 py-8
                                    sm:px-8
                                    md:grid-cols-[220px_1fr]
                                    md:items-center
                                    lg:px-10
                                    ${
                                        index !== skillGroups.length - 1
                                            ? "border-b border-white/9"
                                            : ""
                                    }
                                `}
                            >
                                {/* Category */}
                                <div className="relative flex items-center gap-4">

                                    <motion.div
                                        whileHover={{
                                            y: -4,
                                            rotate: -4,
                                            scale: 1.05,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 20,
                                        }}
                                        className="
                                            relative grid h-11 w-11 shrink-0
                                            place-items-center rounded-2xl
                                            border border-blue-300/15
                                            bg-blue-400/9
                                            text-blue-300
                                            shadow-[0_0_0_rgba(59,130,246,0)]
                                            transition-colors duration-300
                                            group-hover:border-blue-300/30
                                            group-hover:bg-blue-400/13
                                            group-hover:text-blue-200
                                            group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]
                                        "
                                    >
                                        <Icon
                                            className="h-4.5 w-4.5"
                                            strokeWidth={1.8}
                                        />

                                        <motion.span
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0.5, 1.2, 0.5],
                                            }}
                                            transition={{
                                                duration: 2.5,
                                                repeat: Infinity,
                                                delay: index * 0.4,
                                            }}
                                            className="
                                                absolute -right-1 -top-1
                                                h-2 w-2 rounded-full
                                                bg-blue-400
                                                shadow-[0_0_12px_rgba(96,165,250,0.8)]
                                            "
                                        />
                                    </motion.div>

                                    <div>
                                        <p className="font-display text-[15px] font-medium text-white">
                                            {group.label}
                                        </p>

                                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#69717E]">
                                            {group.category}
                                        </p>
                                    </div>
                                </div>

                                {/* Skills */}
                                <motion.div
                                    variants={containerVariants}
                                    className="relative flex flex-wrap gap-2"
                                >
                                    {group.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            variants={skillVariants}
                                            whileHover={{
                                                y: -4,
                                                scale: 1.03,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 22,
                                            }}
                                            className="
                                                cursor-default
                                                rounded-xl
                                                border border-white/11
                                                bg-[#20242B]
                                                px-3.5 py-2
                                                font-mono text-[11px]
                                                text-[#C2C7D0]
                                                transition-colors duration-300
                                                hover:border-blue-300/30
                                                hover:bg-blue-400/10
                                                hover:text-blue-200
                                                hover:shadow-[0_10px_25px_rgba(59,130,246,0.09)]
                                            "
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.5,
                        duration: 0.7,
                    }}
                    className="mt-8 flex items-center gap-3"
                >
                    <motion.span
                        animate={{
                            width: ["2.5rem", "4rem", "2.5rem"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="h-px bg-blue-300/40"
                    />

                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#69717E]">
                        Built with what I know · learning what's next
                    </p>
                </motion.div>

            </div>
        </section>
    );
}