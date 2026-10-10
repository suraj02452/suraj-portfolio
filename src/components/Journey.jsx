import { Award, GraduationCap, Trophy } from 'lucide-react'
import { journey } from '../data/portfolio'
import { SectionHead, Reveal } from './ui'

const icons = { cert: Award, award: Trophy, edu: GraduationCap }

export default function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="shell">
        <SectionHead tag="Education & certifications" title="Journey so far" />
        <ol className="relative border-l border-white/10 md:ml-[140px]">
          {journey.map((j, i) => {
            const Icon = icons[j.type]
            return (
              <Reveal as="li" key={i} delay={i * 0.04} className="relative pb-10 pl-8 last:pb-0 md:pl-10">
                <span className="absolute -left-[13px] top-0 grid h-6 w-6 place-items-center rounded-full border border-white/15 bg-ink text-brass">
                  <Icon className="h-3 w-3" />
                </span>
                <p className="font-mono text-xs tabular-nums text-dust md:absolute md:-left-[150px] md:top-1 md:w-[120px] md:text-right">{j.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-bone md:mt-0">{j.title}</h3>
                <p className="text-sm text-dust">{j.org}</p>
                {j.note && <p className="mt-1 break-all font-mono text-[11px] text-dust/70">{j.note}</p>}
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
