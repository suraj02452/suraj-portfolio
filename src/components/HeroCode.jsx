import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { profile, projects } from '../data/portfolio'

const ease = [0.22, 1, 0.36, 1]

// token colours, matched to the site palette
const k = 'text-brass' // keywords
const a = 'text-brass/70' // annotations
const s = 'text-live/90' // strings
const t = 'text-bone' // types / methods
const p = 'text-dust' // punctuation / plain

const str = (v) => [s, `"${v}"`]

function buildLines() {
  const stack = ['Java', 'Spring Boot', 'React']
  return [
    [[a, '@RestController']],
    [[a, '@RequestMapping'], [p, '('], str('/api/suraj'), [p, ')']],
    [[k, 'public class '], [t, 'Developer'], [p, 'Controller {']],
    [],
    [[p, '  '], [a, '@GetMapping'], [p, '('], str('/profile'), [p, ')']],
    [[p, '  '], [k, 'public '], [t, 'Developer '], [t, 'profile'], [p, '() {']],
    [[p, '    '], [k, 'return '], [t, 'Developer'], [p, '.builder()']],
    [[p, '      .name('], str(`${profile.firstName} ${profile.lastName}`), [p, ')']],
    [[p, '      .stack('], [t, 'List'], [p, '.of(']],
    [[p, '          '], ...stack.flatMap((x, i) => (i ? [[p, ', '], str(x)] : [str(x)])), [p, '))']],
    [[p, '      .cloud('], str('AWS Certified'), [p, ')']],
    [[p, '      .location('], str(profile.location), [p, ')']],
    [[p, '      .openToWork('], [k, String(profile.openToWork)], [p, ')']],
    [[p, '      .build();']],
    [[p, '  }']],
    [[p, '}']],
  ]
}

export default function HeroCode() {
  const lines = buildLines()
  const featured = projects.find((x) => x.featured)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease }}
      className="relative w-full"
    >
      {/* soft glow behind the card */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brass/10 blur-3xl" />

      <div className="glass overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
        {/* title bar */}
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <p className="font-mono text-[11px] text-dust">DeveloperController.java</p>
        </div>

        {/* code */}
        <pre className="overflow-hidden px-4 py-4 font-mono text-[12px] leading-[1.75] sm:text-[12.5px]">
          {lines.map((tokens, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.5 + i * 0.06, ease }}
              className="flex"
            >
              <span className="mr-4 w-5 shrink-0 select-none text-right text-white/20">{i + 1}</span>
              <code className="whitespace-pre">
                {tokens.length === 0 ? ' ' : tokens.map(([cls, txt], j) => (
                  <span key={j} className={cls}>{txt}</span>
                ))}
              </code>
            </motion.div>
          ))}
        </pre>

        {/* response bar */}
        <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-black/20 px-4 py-3 font-mono text-[11px]">
          <span className="flex items-center gap-2 text-dust">
            <span className="text-bone">GET</span> /api/suraj/profile
          </span>
          <span className="flex items-center gap-2 text-live">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            200 OK · open to work
          </span>
        </div>
      </div>

      {/* featured project chip */}
      {featured && (
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5, ease }}
          className="glass group absolute -right-4 -top-6 hidden items-center gap-3 rounded-xl px-4 py-3 transition hover:border-white/25 lg:flex"
        >
          <span className="flex flex-col">
            <span className="eyebrow text-[10px]">Featured project</span>
            <span className="text-sm font-medium text-bone">
              {featured.name} <span className="text-dust">· {featured.kind}</span>
            </span>
          </span>
          <ArrowUpRight className="h-4 w-4 text-brass transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>
      )}
    </motion.div>
  )
}
