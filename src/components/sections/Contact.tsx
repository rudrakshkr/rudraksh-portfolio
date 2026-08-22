"use client"

import { useEffect, useRef, useState } from "react"
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa"
import { ArrowUpRight, Download } from "lucide-react"

const contactLinks = [
    {
        title: "GitHub",
        description: "github.com/rudrakshkr",
        href: "https://github.com/rudrakshkr",
        icon: FaGithub,
    },
    {
        title: "LinkedIn",
        description: "linkedin.com/in/rudraksh-kumar2908",
        href: "https://www.linkedin.com/in/rudraksh-kumar2908",
        icon: FaLinkedin,
    },
    {
        title: "Email",
        description: "rudrakshkumar2908@gmail.com",
        href: "mailto:rudrakshkumar2908@gmail.com",
        icon: FaMailBulk,
    },
]

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current

        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            {
                threshold: 0.15,
            }
        )

        observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="w-full bg-[#08090B] py-24 text-white sm:py-32"
        >
            <div className="mx-auto max-w-6xl px-6">

                {/* Section Label */}
                <div
                    className={`
                        inline-flex items-center gap-2.5
                        font-mono text-[11px] uppercase
                        tracking-[0.18em] text-[#8A919E]
                        transition-all duration-500 ease-out
                        ${
                            visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }
                    `}
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]" />
                    Contact
                </div>


                {/* Heading */}
                <h2
                    className={`
                        mt-5 max-w-3xl
                        font-display text-[clamp(2.4rem,5vw,4.2rem)]
                        font-medium leading-[0.98]
                        tracking-[-0.055em] text-white
                        transition-all duration-600 ease-out
                        delay-80
                        ${
                            visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }
                    `}
                >
                    Have something worth building?
                </h2>


                {/* Description */}
                <p
                    className={`
                        mt-6 max-w-2xl
                        text-[16px] leading-relaxed
                        text-[rgb(var(--ink-300))]
                        sm:text-[17px]
                        transition-all duration-600 ease-out
                        delay-160
                        ${
                            visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }
                    `}
                >
                    I'm open to internship opportunities, full-time engineering
                    roles and interesting products. The fastest way to reach me
                    is through email.
                </p>


                {/* Contact Cards */}
                <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                    {contactLinks.map((link, index) => {
                        const Icon = link.icon

                        const delays = [
                            "[transition-delay:240ms]",
                            "[transition-delay:320ms]",
                            "[transition-delay:400ms]",
                        ]

                        return (
                            <div
                                key={link.title}
                                className={`
                                    transition-all duration-500 ease-out
                                    ${delays[index]}
                                    ${
                                        visible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-6 opacity-0"
                                    }
                                `}
                            >
                                <a
                                    href={link.href}
                                    target={
                                        link.href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        link.href.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="
                                        group block
                                        rounded-2xl border p-6
                                        border-white/9
                                        bg-white/3

                                        transition-all
                                        duration-300
                                        ease-[cubic-bezier(0.22,1,0.36,1)]

                                        hover:-translate-y-0.5
                                        hover:border-[#4F7CFF]/40
                                        hover:bg-white/6

                                        focus:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-[#4F7CFF]/70
                                    "
                                >
                                    <div className="flex items-start justify-between">
                                        <span
                                            className="
                                                grid h-9 w-9 place-items-center
                                                rounded-lg
                                                bg-[#11141A]
                                                text-[#8FAAFF]
                                            "
                                        >
                                            <Icon className="h-4 w-4" />
                                        </span>

                                        <ArrowUpRight
                                            className="
                                                h-4 w-4
                                                text-[#343A45]
                                                transition-[transform,color]
                                                duration-200
                                                ease-out
                                                group-hover:-translate-y-0.5
                                                group-hover:translate-x-0.5
                                                group-hover:text-[#8FAAFF]
                                            "
                                        />
                                    </div>

                                    <h3
                                        className="
                                            mt-7
                                            font-display text-[15px]
                                            font-medium text-white
                                        "
                                    >
                                        {link.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1.5 truncate
                                            font-mono text-[10.5px]
                                            text-[#6B7280]
                                        "
                                    >
                                        {link.description}
                                    </p>
                                </a>
                            </div>
                        )
                    })}


                    {/* Resume */}
                    <div
                        className={`
                            transition-all duration-500 ease-out
                            delay-480
                            ${
                                visible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-6 opacity-0"
                            }
                        `}
                    >
                        <a
                            href="/rudraksh-resume.pdf"
                            download
                            className="
                                group block
                                rounded-2xl border p-6
                                border-[#4F7CFF]/30
                                bg-[#0D111C]

                                transition-all
                                duration-300
                                ease-[cubic-bezier(0.22,1,0.36,1)]

                                hover:-translate-y-0.5
                                hover:border-[#4F7CFF]/70
                                hover:bg-[#101625]

                                focus:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[#4F7CFF]/70
                            "
                        >
                            <div className="flex items-start justify-between">
                                <span
                                    className="
                                        grid h-9 w-9 place-items-center
                                        rounded-lg
                                        bg-[#121A30]
                                        text-[#8FAAFF]
                                    "
                                >
                                    <Download className="h-4 w-4" />
                                </span>

                                <ArrowUpRight
                                    className="
                                        h-4 w-4
                                        text-[#343A45]
                                        transition-[transform,color]
                                        duration-200
                                        ease-out
                                        group-hover:-translate-y-0.5
                                        group-hover:translate-x-0.5
                                        group-hover:text-[#8FAAFF]
                                    "
                                />
                            </div>

                            <h3
                                className="
                                    mt-7
                                    font-display text-[15px]
                                    font-medium text-white
                                "
                            >
                                Resume
                            </h3>

                            <p
                                className="
                                    mt-1.5
                                    font-mono text-[10.5px]
                                    text-[#6B7280]
                                "
                            >
                                Download PDF
                            </p>
                        </a>
                    </div>
                </div>


                {/* Footer */}
                <div
                    className={`
                        mt-16 flex flex-col gap-4
                        border-t border-white/8
                        pt-7
                        sm:flex-row sm:items-center sm:justify-between
                        transition-all duration-600 ease-out
                        delay-560
                        ${
                            visible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }
                    `}
                >
                    <p className="font-mono text-[10px] text-[#79808e]">
                        © 2026 Rudraksh Kumar · Built with Next.js, React, TypeScript and Tailwind CSS
                    </p>

                    <a
                        href="#top"
                        className="
                            font-mono text-[10px]
                            uppercase tracking-wider
                            text-[#6B7280]
                            transition-colors
                            hover:text-white
                        "
                    >
                        Back to top ↑
                    </a>
                </div>

            </div>
        </section>
    )
}