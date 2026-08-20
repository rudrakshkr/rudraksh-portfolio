"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRightIcon, MenuIcon, XIcon } from 'lucide-react'

const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('projects');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    links.forEach((l) => {
        const el = document.getElementById(l.id)
        if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 sm:pt-5">
        <motion.nav
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className={`pointer-events-auto w-full max-w-5xl rounded-2xl border transition-all duration-500 ${
                scrolled
                    ? 'border-white/10 bg-[#08090B]/80 shadow-lift backdrop-blur-xl'
                    : 'border-white/[0.07] bg-[#08090B]/40 backdrop-blur-md'
            }`}
        >
            <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
                <a
                    href="#top"
                    onClick={(e) => {
                        e.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="flex items-center gap-2.5 rounded-lg px-1 py-1"
                >
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#4F7CFF] font-mono text-[13px] font-medium text-white">
                        R
                    </span>
                    <span className="font-display text-[15px] font-medium tracking-tight text-white">Rudraksh Kumar</span>
                </a>

                <div className="hidden items-center gap-1 lg:flex">
                    {links.map((l) => (
                        <button
                            key={l.id}
                            onClick={() => go(l.id)}
                            className="cursor-pointer relative rounded-lg px-3 py-1.5 text-[16px] font-medium text-[#B4BAC4] transition-colors hover:text-white"
                        >
                            {active === l.id && (
                            <motion.span
                                layoutId="nav-pill"
                                className="absolute inset-0 rounded-lg bg-white/5"
                                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                            />
                            )}
                            <span className="relative">{l.label}</span>
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/rudrakshkr"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden items-center gap-1.5 rounded-xl bg-white/90 px-3.5 py-2 text-[13.5px] font-medium text-[#08090B] transition-transform duration-200 hover:-translate-y-0.5 sm:flex"
                    >
                        GitHub
                        <ArrowUpRightIcon className="h-3.5 w-3.5"/>
                    </a>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-white lg:hidden"
                    >
                        {open ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="overflow-hidden border-t border-white/10 lg:hidden"
                >
                    <div className="flex flex-col p-2">
                        {links.map((l) => (
                            <button
                                key={l.id}
                                onClick={() => go(l.id)}
                                className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-[#B4BAC4] hover:bg-white hover:text-white"
                            >
                                {l.label}
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    </div>
  )
}
