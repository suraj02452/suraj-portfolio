import { ArrowUpRight } from 'lucide-react'
import { projects, profile } from '../data/portfolio'
import { SectionHead, Reveal, GithubIcon } from './ui'

function ProjectCard({ p, index }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <article
      onMouseMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-coal transition duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(360px circle at var(--mx) var(--my), rgba(215,185,138,0.10), transparent 60%)' }}
      />
      {/* terminal title bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="truncate font-mono text-[11px] text-dust">~/projects/{p.id}</span>
        <span className="ml-auto shrink-0 rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-dust">
          {p.kind}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6">
        <p className="font-mono text-xs text-brass/80">
          <span className="text-dust">$</span> ./run {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="font-display text-3xl font-extrabold uppercase leading-none">{p.name}</h3>
        <p className="text-sm leading-relaxed text-dust">{p.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2">
          {p.stack.map((s) => (
            <li key={s} className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-bone/80">{s}</li>
          ))}
        </ul>
        <div className="flex min-h-[20px] flex-wrap gap-4 border-t border-white/[0.06] pt-4">
          {p.links.length ? (
            p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-bone hover:text-brass">
                <GithubIcon className="h-3.5 w-3.5" /> {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))
          ) : (
            <span className="text-sm text-dust">Hackathon build · repo on request</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="shell">
        <SectionHead
          tag="Selected work"
          title="Featured projects"
          intro="Full-stack apps with real authentication, transactions and dashboards, plus a 24-hour hackathon build."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.06} className="h-full">
              <ProjectCard p={p} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <GithubIcon /> More on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
