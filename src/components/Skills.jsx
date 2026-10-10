import { skillRows, skillGroups } from '../data/portfolio'
import { SectionHead, Reveal } from './ui'

function Row({ items, reverse }) {
  const loop = [...items, ...items]
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <ul className={`flex shrink-0 gap-3 pr-3 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
        {loop.map((s, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-mono text-sm text-bone/90 transition hover:border-brass/50 hover:text-brass"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="shell">
        <SectionHead
          tag="Tech stack"
          title="Tools I build with"
          intro="Java and Spring Boot on the server, React in the browser, SQL or MongoDB underneath, deployed with Git and AWS."
        />
      </div>

      <div className="flex flex-col gap-3">
        {skillRows.map((r, i) => <Row key={i} items={r} reverse={i % 2 === 1} />)}
      </div>

      <div className="shell mt-16">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05} className="bg-ink p-6">
            <h3 className="eyebrow mb-4 text-brass">{g.title}</h3>
            <ul className="flex flex-col gap-2 text-sm text-bone/90">
              {g.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
      </div>
    </section>
  )
}
