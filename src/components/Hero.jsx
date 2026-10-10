import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, ArrowRight, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import HeroCode from './HeroCode'

const ease = [0.22, 1, 0.36, 1]

function RotatingRole() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600)
    return () => clearInterval(t)
  }, [])
  const [a, b] = profile.roles[i]

  return (
    <h1 className="display text-[clamp(3.4rem,9.5vw,8rem)]" aria-label={profile.roles.map((r) => r.join(' ')).join(', ')}>
      <span className="block min-h-[1.8em]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={i} className="block" aria-hidden="true">
          {[a, b].map((line, n) => (
            <span key={n} className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className={`block ${n === 1 ? 'text-transparent [-webkit-text-stroke:1.5px_#EEE9E2]' : ''}`}
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                exit={{ y: '-105%' }}
                transition={{ duration: 0.6, delay: n * 0.07, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
      </span>
    </h1>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // spotlight follows the cursor gently
  const mx = useMotionValue(0.62)
  const my = useMotionValue(0.4)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  const spot = useTransform([sx, sy], ([x, y]) =>
    `radial-gradient(640px circle at ${x * 100}% ${y * 100}%, rgba(238,233,226,0.20), rgba(215,185,138,0.07) 40%, transparent 70%)`,
  )

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative isolate flex min-h-[640px] flex-col overflow-hidden pt-16 md:h-[100svh] md:max-h-[980px]"
    >
      <motion.div className="pointer-events-none absolute inset-0 -z-10" style={{ background: spot }} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="shell relative flex flex-1 flex-col md:flex-row md:items-end">
        {/* left: name + rotating role */}
        <motion.div style={{ opacity: fade }} className="relative z-10 flex flex-col justify-center pt-10 md:w-[58%] md:self-center md:pt-0">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow mb-5"
          >
            Hi, I’m <span className="text-bone underline decoration-brass underline-offset-4">{profile.firstName} {profile.lastName}</span>
          </motion.p>
          <RotatingRole />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-8 flex max-w-md flex-col gap-6"
          >
            <p className="text-base leading-relaxed text-dust sm:text-lg">{profile.tagline}</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-solid">
                View projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* right: code card */}
        <div className="relative z-10 mt-12 hidden w-full md:mt-0 md:block md:w-[42%] md:self-center md:pl-8">
          <HeroCode />
        </div>
      </div>

      {/* bottom rail */}
      <div className="shell relative z-10 flex items-center justify-between py-6 text-dust">
        <a href="#about" className="eyebrow flex items-center gap-2 hover:text-bone">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> Scroll
        </a>
        <p className="eyebrow flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" /> {profile.location}
        </p>
      </div>
    </section>
  )
}
