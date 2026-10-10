import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'
import { GithubIcon, LinkedinIcon } from './ui'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] pt-16">
      <div className="shell">
        <p
          aria-hidden="true"
          className="display select-none break-words bg-gradient-to-b from-bone/90 to-bone/10 bg-clip-text pb-4 text-center text-[24vw] text-transparent sm:text-[17vw] lg:text-[13rem]"
        >
          {profile.firstName} {profile.lastName}
        </p>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-6 text-sm text-dust sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Built with React, Tailwind &amp; Framer Motion.</p>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-bone"><GithubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-bone"><LinkedinIcon /></a>
            <a href="#top" className="inline-flex items-center gap-1 hover:text-bone">Back to top <ArrowUp className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
