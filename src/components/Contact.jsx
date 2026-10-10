import { useState } from 'react'
import { Check, CheckCircle2, Copy, Loader2, Send } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Reveal, GithubIcon, LinkedinIcon } from './ui'

function CopyEmail() {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setDone(true)
      setTimeout(() => setDone(false), 1800)
    } catch {
      const r = document.createRange()
      r.selectNodeContents(document.getElementById('contact-email'))
      const s = window.getSelection(); s.removeAllRanges(); s.addRange(r)
    }
  }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span id="contact-email" className="select-all break-all font-mono text-sm text-bone sm:text-base">{profile.email}</span>
      <button onClick={copy} className="btn-ghost !px-3 !py-1.5 text-xs" aria-label="Copy email address">
        {done ? <><Check className="h-3.5 w-3.5 text-live" /> Copied</> : <><Copy className="h-3.5 w-3.5" /> Copy</>}
      </button>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', text: '' })
  const sending = status.state === 'sending'

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: 'error', text: 'Please fill in your name, email and message.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ state: 'error', text: 'Please enter a valid email address.' })
      return
    }

    // no key yet: fall back to opening the visitor's email app
    if (!profile.web3formsKey) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus({ state: 'sending', text: '' })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.web3formsKey,
          subject: `Portfolio enquiry from ${form.name}`,
          from_name: 'Suraj Lanke · Portfolio',
          name: form.name,
          email: form.email,
          replyto: form.email,
          message: form.message,
          botcheck: form.botcheck || '',
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message || 'Request failed')
      setForm({ name: '', email: '', message: '' })
      setStatus({ state: 'sent', text: 'Thanks! Your message has been sent. I’ll get back to you soon.' })
    } catch {
      setStatus({ state: 'error', text: `Sorry, the message couldn’t be sent. Please email me directly at ${profile.email}.` })
    }
  }

  const field = 'w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-bone placeholder:text-dust/60 outline-none transition focus:border-brass/60 focus:ring-2 focus:ring-brass/20'

  return (
    <section id="contact" className="relative scroll-mt-16 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_circle_at_20%_40%,rgba(215,185,138,0.08),transparent_70%)]" />
      <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-7">
          <Reveal><p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-brass/60" />Contact</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display text-5xl sm:text-6xl md:text-7xl">Let’s build <br />something <span className="text-brass">great.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md leading-relaxed text-dust">
              I’m looking for entry-level software engineering roles and internships. If you’re hiring or have a project in mind, I’d love to hear from you.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <pre className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-coal p-5 font-mono text-[13px] leading-6">
<span className="text-dust">{'// reach me'}</span>{'\n'}
<span className="text-brass">const</span> contact = {'{'}{'\n'}
{'  '}name: <span className="text-live">"{profile.firstName} {profile.lastName}"</span>,{'\n'}
{'  '}based: <span className="text-live">"{profile.location}"</span>,{'\n'}
{'  '}status: <span className="text-live">"{profile.openToWork ? 'open to work' : 'busy'}"</span>,{'\n'}
{'}'}
            </pre>
          </Reveal>
          <Reveal delay={0.2} className="flex flex-col gap-4">
            <CopyEmail />
            {profile.phone && <span className="font-mono text-sm text-dust">{profile.phone}</span>}
            <div className="flex gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost !py-2"><GithubIcon /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost !py-2"><LinkedinIcon /> LinkedIn</a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="glass flex flex-col gap-4 rounded-3xl p-6 sm:p-8" noValidate>
            <p className="eyebrow">Send a message</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-xs text-dust" htmlFor="c-name">Name
                <input id="c-name" className={field} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </label>
              <label className="flex flex-col gap-2 text-xs text-dust" htmlFor="c-email">Email
                <input id="c-email" type="email" className={field} placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-xs text-dust" htmlFor="c-msg">Message
              <textarea id="c-msg" rows={6} className={`${field} resize-none`} placeholder="Tell me about the role or project…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </label>
            {/* honeypot: hidden from people, catches spam bots */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" onChange={(e) => setForm({ ...form, botcheck: e.target.checked ? 'on' : '' })} />
            <button type="submit" disabled={sending} className="btn-solid mt-2 justify-center disabled:cursor-wait disabled:opacity-70">
              {sending ? <>Sending… <Loader2 className="h-4 w-4 animate-spin" /></> : <>Send message <Send className="h-4 w-4" /></>}
            </button>
            {status.text && (
              <p
                role="status"
                className={`flex items-start gap-2 text-xs leading-relaxed ${status.state === 'sent' ? 'text-live' : status.state === 'error' ? 'text-red-300' : 'text-dust'}`}
              >
                {status.state === 'sent' && <CheckCircle2 className="mt-px h-4 w-4 shrink-0" />}
                {status.text}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
