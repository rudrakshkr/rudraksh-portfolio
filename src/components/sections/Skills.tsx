"use client"

import {
    Cloud,
    Database,
    Layers3,
    Server,
    Wrench,
} from "lucide-react"
import { motion, type Variants } from "framer-motion"
import type { ComponentType } from "react"

import {
    SiCloudinary,
    SiCss,
    SiEslint,
    SiExpress,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiNodedotjs,
    SiPostgresql,
    SiPostman,
    SiPrisma,
    SiReact,
    SiRailway,
    SiRender,
    SiSocketdotio,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
    SiVite,
    SiVitest,
    SiMysql,
    SiPrettier
} from "react-icons/si"

import { TbApi } from "react-icons/tb"

type SkillItem = {
    name: string
    icon?: ComponentType<{
        className?: string
    }>
}

type SkillGroup = {
    category: string
    label: string
    icon: typeof Layers3
    skills: SkillItem[]
}

const skillGroups: SkillGroup[] = [
    {
        category: "01",
        label: "Frontend",
        icon: Layers3,
        skills: [
            { name: "React", icon: SiReact },
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Vite", icon: SiVite },
        ],
    },
    {
        category: "02",
        label: "Backend",
        icon: Server,
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express", icon: SiExpress },
            { name: "REST APIs", icon: TbApi },
            { name: "Socket.IO", icon: SiSocketdotio },
        ],
    },
    {
        category: "03",
        label: "Database",
        icon: Database,
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Prisma", icon: SiPrisma },
            { name: "SQL", icon: SiMysql },
        ],
    },
    {
        category: "04",
        label: "Tools",
        icon: Wrench,
        skills: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "ESLint", icon: SiEslint },
            { name: "Prettier", icon: SiPrettier },
            { name: "Vitest", icon: SiVitest },
            { name: "Postman", icon: SiPostman },
        ],
    },
    {
        category: "05",
        label: "Cloud",
        icon: Cloud,
        skills: [
            { name: "Vercel", icon: SiVercel },
            { name: "Railway", icon: SiRailway },
            { name: "Render", icon: SiRender },
            { name: "Cloudinary", icon: SiCloudinary },
        ],
    },
]

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.16,
        },
    },
}

const rowVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 32,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                relative
                w-full
                overflow-hidden
                bg-[#EEF2F7]
                py-24
                text-[#11151A]
                sm:py-32
            "
        >

            <div
                className="
                    pointer-events-none
                    absolute inset-x-0 top-0
                    h-24
                    bg-linear-to-b
                    from-white/70
                    to-transparent
                "
            />

            <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2.5
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-[#77818D]
                        "
                    >
                        <span
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-[#4F78D6]
                            "
                        />

                        Technical Stack
                    </div>

                    <h2
                        className="
                            mt-5
                            max-w-3xl
                            font-display
                            text-[clamp(2.5rem,5vw,4.2rem)]
                            font-medium
                            leading-[0.94]
                            tracking-[-0.06em]
                            text-[#101418]
                        "
                    >
                        The tools behind the work.
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-[16px]
                            leading-[1.7]
                            text-[#66717D]
                            sm:text-[17px]
                        "
                    >
                        The technologies I use across interfaces, APIs,
                        databases, tooling and deployment.
                    </p>
                </motion.div>

                {/* Skill Groups */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.12,
                    }}
                    className="
                        mt-14
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-[#DCE2EA]
                        bg-[#F7F9FC]
                        shadow-[0_22px_60px_rgba(30,48,72,0.07)]
                        sm:mt-16
                    "
                >
                    {skillGroups.map((group, index) => {
                        const GroupIcon = group.icon

                        return (
                            <motion.div
                                key={group.label}
                                variants={rowVariants}
                                className={`
                                    group
                                    relative
                                    px-6 py-8
                                    sm:px-8 sm:py-9
                                    lg:px-10
                                    ${
                                        index !==
                                        skillGroups.length - 1
                                            ? "border-b border-[#E1E6ED]"
                                            : ""
                                    }
                                `}
                            >
                                <div
                                    className="
                                        grid
                                        gap-8
                                        md:grid-cols-[190px_1fr]
                                        md:items-center
                                    "
                                >
                                    {/* Category */}

                                    <div className="flex items-center gap-4">
                                        <div
                                            className="
                                                grid
                                                h-11 w-11
                                                shrink-0
                                                place-items-center
                                                rounded-xl
                                                border
                                                border-[#DCE2EA]
                                                bg-[#E9EEF5]
                                                text-[#697583]
                                                transition-all
                                                duration-300
                                                group-hover:border-[#4F78D6]/30
                                                group-hover:bg-[#E6ECF8]
                                                group-hover:text-[#4F78D6]
                                            "
                                        >
                                            <GroupIcon
                                                className="h-4 w-4"
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    font-display
                                                    text-[15px]
                                                    font-medium
                                                    tracking-[-0.01em]
                                                    text-[#1B2025]
                                                "
                                            >
                                                {group.label}
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    font-mono
                                                    text-[9px]
                                                    uppercase
                                                    tracking-[0.16em]
                                                    text-[#929AA4]
                                                "
                                            >
                                                {group.category}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Technologies */}

                                    <div
                                        className="
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-x-6
                                            gap-y-7
                                            sm:gap-x-8
                                            lg:gap-x-10
                                        "
                                    >
                                        {group.skills.map((skill) => {
                                            const SkillIcon = skill.icon

                                            return (
                                                <motion.div
                                                    key={skill.name}
                                                    whileHover={{
                                                        y: -3,
                                                    }}
                                                    transition={{
                                                        duration: 0.18,
                                                        ease: "easeOut",
                                                    }}
                                                    className="
                                                        group/skill
                                                        flex
                                                        min-w-15.5
                                                        cursor-default
                                                        flex-col
                                                        items-center
                                                        gap-2.5
                                                    "
                                                >
                                                    <div
                                                        className="
                                                            relative
                                                            grid
                                                            h-12 w-12
                                                            place-items-center
                                                            rounded-[14px]
                                                            border
                                                            border-[#DCE2EA]
                                                            bg-white
                                                            text-[#78838F]
                                                            shadow-[0_6px_18px_rgba(40,55,75,0.05)]
                                                            transition-all
                                                            duration-300
                                                            group-hover/skill:border-[#4F78D6]/35
                                                            group-hover/skill:bg-[#F8FAFF]
                                                            group-hover/skill:text-[#4F78D6]
                                                            group-hover/skill:shadow-[0_10px_24px_rgba(50,80,140,0.09)]
                                                        "
                                                    >
                                                        <span
                                                            className="
                                                                pointer-events-none
                                                                absolute
                                                                inset-0
                                                                rounded-[14px]
                                                                border
                                                                border-[#4F78D6]/0
                                                                transition-all
                                                                duration-300
                                                                group-hover/skill:-inset-0.75
                                                                group-hover/skill:border-[#4F78D6]/15
                                                            "
                                                        />

                                                        {SkillIcon ? (
                                                            <SkillIcon className="relative h-5.25 w-5.25" />
                                                        ) : (
                                                            <span
                                                                className="
                                                                    relative
                                                                    font-mono
                                                                    text-[13px]
                                                                    text-[#8C969F]
                                                                "
                                                            >
                                                                •
                                                            </span>
                                                        )}
                                                    </div>

                                                    <span
                                                        className="
                                                            max-w-23.75
                                                            text-center
                                                            font-mono
                                                            text-[9px]
                                                            leading-tight
                                                            text-[#7C8792]
                                                            transition-colors
                                                            duration-200
                                                            group-hover/skill:text-[#4F78D6]
                                                        "
                                                    >
                                                        {skill.name}
                                                    </span>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Bottom note */}

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
                        mt-10
                        flex
                        items-center
                        gap-3
                    "
                >
                    <motion.span
                        initial={{
                            width: "2.5rem",
                        }}
                        whileInView={{
                            width: "4rem",
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            h-px
                            bg-[#4F78D6]/40
                        "
                    />

                    <p
                        className="
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-[#929AA4]
                        "
                    >
                        Technologies I use in practice
                    </p>
                </motion.div>
            </div>
        </section>
    )
}