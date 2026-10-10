import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { profile, stats } from '../data/portfolio'
import { Reveal } from './ui'
import photo from '../suraj.webp'

function TiltCard() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 })

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className="glass relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[28px] p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
    >
      <div className="relative overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_50%_30%,#3a3530,#161413_70%)]">
        <img src={photo} alt="" className="w-full" draggable="false" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-coal to-transparent" />
      </div>
      <div className="flex items-center justify-between px-2 pb-1 pt-3">
        {profile.openToWork ? (
          <span className="inline-flex items-center gap-2 rounded-full border border-live/30 bg-live/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-live">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            Open to opportunities
          </span>
        ) : <span />}
        <span className="font-mono text-[10px] text-dust">B.E. ’26</span>
      </div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="shell grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <Reveal><TiltCard /></Reveal>

        <div className="flex flex-col gap-7">
          <Reveal><p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-brass/60" />About me</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display text-5xl sm:text-6xl md:text-7xl">
              Hello, I’m <br />
              <span className="text-brass">{profile.firstName} {profile.lastName}</span>
            </h2>
          </Reveal>
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="max-w-[62ch] leading-relaxed text-dust">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <dl className="mt-2 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 bg-ink p-4">
                  <dt className="order-2 text-xs leading-snug text-dust">{s.label}</dt>
                  <dd className="order-1 font-display text-4xl font-black tabular-nums text-bone">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
