import React from 'react'

interface Counter {
  num: string
  label: string
  sub: string
}

interface Hackathon {
  name: string
  place: string
  metric: string
}

interface Milestone {
  category: string
  title: string
  detail: string
  badge: string
  icon: React.ReactNode
}

const COUNTERS: Counter[] = [
  {
    num: '4x',
    label: 'Hackathon Wins',
    sub: 'VITC, Vibex, SRMIST, SSN',
  },
  {
    num: '4+',
    label: 'Shipped Systems',
    sub: 'Industrial ERP & Mobile Apps',
  },
  {
    num: '2+',
    label: 'Years Building',
    sub: 'Flutter, Angular & Node.js',
  },
  {
    num: '9.1',
    label: 'College GPA',
    sub: 'B.Tech CSE at SRMIST',
  },
]

const HACKATHONS: Hackathon[] = [
  {
    name: "VITC Devshouse '26",
    place: 'Top 5',
    metric: 'Top 5 among 3,500+ teams',
  },
  {
    name: 'Vibex Tech Arena',
    place: '1st Place',
    metric: 'Overall Competition Champion',
  },
  {
    name: "SRMIST Datathon '26",
    place: '3rd Place',
    metric: 'Predictive ML & Data Track',
  },
  {
    name: 'SSN ICK-A-THON',
    place: '3rd Place',
    metric: 'Real-time Mobile & IoT Solution',
  },
]

const MILESTONES: Milestone[] = [
  {
    category: 'Product Launch',
    title: 'Quickmetrics on Google Play',
    detail: 'Engineered and published first mobile application directly on the Google Play Store (Sept 2025).',
    badge: 'Live App',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    category: 'Academic Award',
    title: 'SRM College Science Forum',
    detail: 'Secured 1st Place in technical project presentation for modular architecture (Oct 2024).',
    badge: '1st Place',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    category: 'Enterprise & AI',
    title: 'Industrial ERP & Local LLM',
    detail: 'Delivered full-stack ERP for Coimbatore MSMEs with on-premise Ollama AI query pipelines.',
    badge: 'Production',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
  },
  {
    category: 'Leadership',
    title: 'Secondary Team Lead at Healthletic',
    detail: 'Directed sprint POAs, Agile delivery, and engineering architectures across cross-functional teams.',
    badge: 'Team Lead',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export const Highlights = () => {
  return (
    <section id="highlights" className="bg-[#05100B] relative overflow-hidden py-[130px] max-md:py-[80px]">
      {/* Background Section Title Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-[15vw] text-white/[0.012] pointer-events-none select-none whitespace-nowrap z-0">
        HIGHLIGHTS
      </div>

      <div className="wrap max-w-[1400px] mx-auto px-20 max-md:px-6 relative z-10">
        <div className="grid grid-cols-12 gap-12 lg:gap-16 items-start max-lg:flex max-lg:flex-col">

          {/* Left Column: Heading + Counter Cards */}
          <div className="col-span-12 lg:col-span-5 highlights-intro lg:sticky lg:top-28">
            <div className="reveal-step">
              <div className="sec-label flex items-center gap-[14px] mb-5">
                <div className="sec-label-line w-7 h-[1px] bg-[#0D6E4F]"></div>
                <span className="sec-label-txt font-mono text-[13px] tracking-[.45em] uppercase text-[#10B981]">
                  Verified Impact
                </span>
              </div>
            </div>

            <h2 className="reveal-step sec-title font-display font-black text-[clamp(38px,4.5vw,66px)] leading-[1.05] text-white mb-5" style={{ transitionDelay: '0.1s' }}>
              Numbers that <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#0A8B5D] italic not-italic">Matter.</em>
            </h2>

            <p className="reveal-step text-[15.5px] text-white/70 leading-relaxed font-normal mb-10 max-w-[480px]" style={{ transitionDelay: '0.15s' }}>
              Quantifiable proof points spanning competitive hackathon podiums, high-throughput enterprise systems, and academic distinction.
            </p>

            {/* 2x2 Metric Cards Grid */}
            <div className="highlights-counters grid grid-cols-2 gap-4 sm:gap-5">
              {COUNTERS.map((c, i) => (
                <div
                  key={i}
                  className="reveal counter-card p-6 sm:p-7 rounded-xl border border-white/5 bg-[#0A1C15]/50 backdrop-blur-sm group transition-all duration-500 hover:border-[#10B981]/40 hover:bg-[#0D6E4F]/10 hover:-translate-y-1 relative overflow-hidden"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="cc-num font-display font-black text-[42px] sm:text-[46px] leading-none text-white mb-2.5 group-hover:text-[#10B981] transition-colors duration-300">
                    {c.num}
                  </div>
                  <div className="cc-lbl font-mono text-[12px] tracking-[.25em] uppercase text-[#9A8880] group-hover:text-white transition-colors mb-1.5 font-medium">
                    {c.label}
                  </div>
                  <div className="text-[11.5px] text-white/45 font-mono group-hover:text-white/70 transition-colors">
                    {c.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Hackathon Card + Milestones */}
          <div className="col-span-12 lg:col-span-7 highlights-list flex flex-col gap-5 w-full">

            {/* Featured Hackathon Spotlight Card */}
            <div
              className="reveal relative p-7 sm:p-8 rounded-2xl border border-[#10B981]/35 bg-gradient-to-br from-[#0B251D]/90 via-[#071812]/90 to-[#04100B]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(13,110,79,0.15)] group overflow-hidden transition-all duration-500 hover:border-[#10B981]/60"
              style={{ transitionDelay: '0.2s' }}
            >
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#10B981]/25 transition-all duration-700" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D6E4F] via-[#10B981] to-[#0D6E4F]" />

              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] shadow-[0_0_20px_rgba(16,185,129,0.25)] group-hover:scale-105 transition-transform duration-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                      <path d="M4 22h16" />
                      <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
                      <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#10B981] font-semibold block mb-0.5">
                      Competitive Track Record
                    </span>
                    <h3 className="font-display font-bold text-[20px] sm:text-[23px] text-white">
                      Winner Across 4 Major Hackathons
                    </h3>
                  </div>
                </div>

                <span className="font-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] font-semibold">
                  4x Victories
                </span>
              </div>

              {/* 2x2 Hackathons Mini-Scorecards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                {HACKATHONS.map((h, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#05140E]/85 border border-white/5 hover:border-[#10B981]/40 hover:bg-[#071F15] transition-all duration-300 group/hcard"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-display font-semibold text-white text-[15px] group-hover/hcard:text-[#10B981] transition-colors">
                        {h.name}
                      </span>
                      <span className="font-mono text-[11px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30 font-medium">
                        {h.place}
                      </span>
                    </div>
                    <p className="text-[12.5px] text-white/60 font-mono">
                      {h.metric}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Key Milestones */}
            {MILESTONES.map((m, i) => (
              <div
                key={i}
                className="reveal p-5 sm:p-6 rounded-xl border border-white/5 bg-[#071711]/60 backdrop-blur-md transition-all duration-500 hover:border-[#0D6E4F]/50 hover:bg-[#0A1C15] group flex items-start gap-4 sm:gap-5"
                style={{ transitionDelay: `${(i + 3) * 0.1}s` }}
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-lg border border-[#0D6E4F]/40 bg-[#0A1C15] flex items-center justify-center text-[#10B981] group-hover:bg-[#10B981]/10 group-hover:scale-105 group-hover:border-[#10B981]/50 transition-all duration-300 shadow-[0_0_15px_rgba(13,110,79,0.1)]">
                  {m.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#10B981] font-semibold">
                        {m.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block"></span>
                      <h4 className="font-display font-bold text-white text-[15px] sm:text-[16px] group-hover:text-[#10B981] transition-colors">
                        {m.title}
                      </h4>
                    </div>
                    <span className="font-mono text-[10.5px] text-[#9A8880] tracking-wider bg-white/[0.03] px-2.5 py-0.5 rounded border border-white/5">
                      {m.badge}
                    </span>
                  </div>
                  <p className="text-[13.5px] sm:text-[14.5px] text-white/70 leading-relaxed font-normal">
                    {m.detail}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  )
}
