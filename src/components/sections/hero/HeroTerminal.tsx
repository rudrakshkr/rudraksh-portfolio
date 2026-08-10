"use client"
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TerminalIcon } from 'lucide-react'

type StatusKey = 'typecheck' | 'tests' | 'build' | 'deploy'
type StatusState = 'idle' | 'run' | 'done'

type Line = {
  kind: 'cmd' | 'out' | 'ok' | 'muted' | 'json'
  text: string
  pause?: number
  sets?: Partial<Record<StatusKey, StatusState>>
  api?: boolean
}

const PROMPT = '\u0024'

const SCRIPT: Line[] = [
  { kind: 'cmd', text: 'git push origin main' },
  { kind: 'muted', text: 'Enumerating objects: 42, done.', pause: 260 },
  { kind: 'out', text: '→ github.com/rudrakshkr/portfolio  main → main', pause: 420 },

  { kind: 'cmd', text: 'npm run verify', sets: { typecheck: 'run' } },
  { kind: 'out', text: '✓ Typescript   0 errors in 2.1s', pause: 480, sets: { typecheck: 'done', tests: 'run' } },
  { kind: 'out', text: '✓ Tests        148 passed', pause: 520, sets: { tests: 'done', build: 'run' } },
  { kind: 'out', text: '✓ Next.js      Production build complete', pause: 520, sets: { build: 'done' } },

  { kind: 'cmd', text: 'npm run deploy', sets: { deploy: 'run' } },
  { kind: 'muted', text: '→ Uploading optimized assets...', pause: 420 },
  { kind: 'out', text: '→ Publishing portfolio to Vercel', pause: 460 },
  { kind: 'ok', text: '✓ Portfolio deployed successfully', pause: 620, sets: { deploy: 'done' } },

  { kind: 'cmd', text: 'curl -s /api/health' },
  { kind: 'json', text: '{"status":"online","portfolio":"live","response":"84ms"}', pause: 300, api: true },
]

const TONE: Record<Line['kind'], string> = {
  cmd: 'text-white',
  out: 'text-[rgb(var(--ink-300))]',
  ok: 'text-emerald-400',
  muted: 'text-[#343A45]',
  json: 'text-[#8FAAFF]',
}

const STATUS_LABELS: { key: StatusKey; label: string }[] = [
  { key: 'typecheck', label: 'typecheck' },
  { key: 'tests', label: 'tests' },
  { key: 'build', label: 'build' },
  { key: 'deploy', label: 'deploy' },
]

const IDLE_STATUS: Record<StatusKey, StatusState> = {
  typecheck: 'idle',
  tests: 'idle',
  build: 'idle',
  deploy: 'idle',
}

export default function HeroTerminal() {
  const [index, setIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [cycle, setCycle] = useState(0)
  const logRef = useRef<HTMLDivElement>(null)

  const done = index >= SCRIPT.length
  const current = SCRIPT[index]
  const shown = SCRIPT.slice(0, index)

  const status = shown.reduce<Record<StatusKey, StatusState>>(
    (acc, line) => (line.sets ? { ...acc, ...line.sets } : acc),
    { ...IDLE_STATUS },
  )
  const apiVisible = shown.some((l) => l.api)
  const deployed = status.deploy === 'done'

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => {
        setIndex(0)
        setTyped('')
        setCycle((c) => c + 1)
      }, 4200)
      return () => clearTimeout(t)
    }

    const line = SCRIPT[index]
    if (line.kind === 'cmd') {
      if (typed.length < line.text.length) {
        const t = setTimeout(() => setTyped(line.text.slice(0, typed.length + 1)), 28)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => {
        setTyped('')
        setIndex((i) => i + 1)
      }, 360)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => setIndex((i) => i + 1), line.pause ?? 260)
    return () => clearTimeout(t)
  }, [index, typed, done])

  useEffect(() => {
    const el = logRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [index, typed])

  return (
    <div className="relative z-10 mx-auto max-w-120 overflow-hidden rounded-2xl border border-white/9 bg-[#0C0E11] shadow-lift">
      {/* Window Bar */}
      <div className="flex items-center gap-2.5 border-b border-white/[0.07] px-4 py-3">
        <TerminalIcon className="h-3.5 w-3.5 text-[#8A919E]" aria-hidden="true" />
        <span className="truncate font-mono text-[11px] text-[#8A919E]">nexus-messaging — zsh</span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-0.5">
          <motion.span
            className={`h-1.5 w-1.5 rounded-full ${deployed ? 'bg-emerald-400' : 'bg-[#4F7CFF]'}`}
            animate={deployed ? { opacity: 1 } : { opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.4, repeat: deployed ? 0 : Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#8A919E]">
            {deployed ? 'live' : 'working'}
          </span>
        </span>
      </div>

      {/* Status Indicators */}
      <div className="grid grid-cols-4 divide-x divide-white/6 border-b border-white/[0.07]">
        {STATUS_LABELS.map((s) => {
          const state = status[s.key]
          return (
            <div key={s.key} className="flex items-center gap-1.5 px-2.5 py-2">
              <motion.span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  state === 'done' ? 'bg-emerald-400' : state === 'run' ? 'bg-[#4F7CFF]' : 'bg-[#22262F]'
                }`}
                animate={state === 'run' ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
                transition={{ duration: 1, repeat: state === 'run' ? Infinity : 0, ease: 'easeInOut' }}
                aria-hidden="true"
              />
              <span
                className={`truncate font-mono text-[9.5px] tracking-wide transition-colors duration-300 ${
                  state === 'idle' ? 'text-[#343A45]' : 'text-[rgb(var(--ink-300))]'
                }`}
              >
                {s.label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Log */}
      <div
        ref={logRef}
        className="thin-scroll h-66 overflow-hidden px-4 py-4 font-mono text-[12px] leading-[1.85] sm:px-5 sm:text-[12.5px]"
        aria-live="polite"
        aria-label="Deployment session log"
      >
        {shown.map((l, i) => (
          <motion.p
            key={`${cycle}-${i}`}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`whitespace-pre-wrap wrap-break-word ${TONE[l.kind]}`}
          >
            {l.kind === 'cmd' && <span className="mr-2 text-[#8FAAFF]">{PROMPT}</span>}
            {l.text}
          </motion.p>
        ))}

        {!done && current?.kind === 'cmd' && (
          <p className="whitespace-pre-wrap wrap-break-word text-white">
            <span className="mr-2 text-[#8FAAFF]">{PROMPT}</span>
            {typed}
            <span className="caret ml-0.5 inline-block h-3.25 w-1.75 translate-y-0.5 bg-[#4F7CFF]" />
          </p>
        )}

        {(done || (current && current.kind !== 'cmd')) && (
          <p className="text-white">
            <span className="mr-2 text-[#8FAAFF]">{PROMPT}</span>
            <span className="caret inline-block h-3.25 w-1.75 translate-y-0.5 bg-[#4F7CFF]" />
          </p>
        )}
      </div>

      {/* API response */}
      <AnimatePresence>
        {apiVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.07] bg-white/2"
          >
            <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-5">
              <span className="flex items-center gap-2 font-mono text-[10.5px] text-[#8A919E]">
                <span className="rounded border border-emerald-400/30 px-1.5 py-0.5 text-emerald-400">200 OK</span>
                GET /api/health
              </span>
              <span className="font-mono text-[10.5px] text-[#8A919E]">84 ms</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deployment Target */}
      <div className="flex items-center gap-3 border-t border-white/[0.07] bg-[#08090B]/40 px-4 py-3 sm:px-5">
        <Node label="API" active={deployed} />
        <Wire active={deployed} />
        <Node label="Postgres" active={deployed} />
        <Wire active={deployed} />
        <Node label="Edge" active={deployed} />
      </div>
    </div>
  )
}

function Node({ label, active }: { label: string; active: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-1.5">
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-500 ${
          active ? 'bg-[#4F7CFF]' : 'bg-[#22262F]'
        }`}
        aria-hidden="true"
      />
      <span
        className={`truncate font-mono text-[10.5px] transition-colors duration-500 ${
          active ? 'text-[rgb(var(--ink-300))]' : 'text-[#343A45]'
        }`}
      >
        {label}
      </span>
    </span>
  )
}

function Wire({ active }: { active: boolean }) {
  return (
    <svg className="h-2 flex-1" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
      <line x1="0" y1="1" x2="100" y2="1" stroke="#22262F" strokeWidth="1.5" strokeLinecap="round" />
      <motion.line
        x1="0"
        y1="1"
        x2="100"
        y2="1"
        stroke="#4F7CFF"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        strokeLinecap="round"
        className={active ? 'dash-flow' : undefined}
        initial={false}
        animate={{ opacity: active ? 0.75 : 0 }}
        transition={{ duration: 0.6 }}
      />
    </svg>
  )
}