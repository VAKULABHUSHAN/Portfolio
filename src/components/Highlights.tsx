import React, { useState, useEffect, useRef } from 'react'

interface Counter {
  num: string
  label: string
  sub: string
  metricIndex: number
}

interface Hackathon {
  name: string
  place: string
  metric: string
  highlight?: boolean
}

interface Milestone {
  category: string
  title: string
  detail: string
  badge: string
  metricIndex: number
  icon: React.ReactNode
}

const COUNTERS: Counter[] = [
  {
    num: '4x',
    label: 'Hackathon Wins',
    sub: 'VITC, Vibex, SRMIST, SSN',
    metricIndex: 0,
  },
  {
    num: '4+',
    label: 'Shipped Systems',
    sub: 'Industrial ERP & Mobile Apps',
    metricIndex: 1,
  },
  {
    num: '2+',
    label: 'Years Building',
    sub: 'Flutter, Angular & Node.js',
    metricIndex: 2,
  },
  {
    num: '9.1',
    label: 'College GPA',
    sub: 'B.Tech CSE at SRMIST',
    metricIndex: 3,
  },
]

const HACKATHONS: Hackathon[] = [
  {
    name: "VITC Devshouse '26",
    place: 'Top 5',
    metric: 'Top 5 among 3,500+ teams',
    highlight: true,
  },
  {
    name: 'Vibex Tech Arena',
    place: '1st Place',
    metric: 'Overall Competition Champion',
    highlight: true,
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
    detail: 'Engineered and launched first mobile application directly on Google Play with responsive UI and offline storage.',
    badge: 'Play Store',
    metricIndex: 1,
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
    category: 'Enterprise & AI',
    title: 'Industrial ERP & On-Premise Ollama',
    detail: 'Delivered full-stack ERP for MSME manufacturing clients with private local AI (Ollama) query routing pipelines.',
    badge: 'Production',
    metricIndex: 1,
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
    category: 'Engineering Leadership',
    title: 'Secondary Team Lead at Healthletic',
    detail: 'Led sprint POAs, architecture decisions, and cross-functional Agile workflows for production fitness mobile releases.',
    badge: 'Team Lead',
    metricIndex: 2,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    category: 'Academic Distinction',
    title: 'SRM College Science Forum — 1st Place',
    detail: 'Won 1st Place in technical project presentation for high-throughput modular system design and cloud architecture.',
    badge: '1st Place',
    metricIndex: 3,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
]

export const Highlights = () => {
  const [activeMetric, setActiveMetric] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((el, index) => {
      if (!el) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const targetMetric = el.getAttribute('data-metric')
              if (targetMetric !== null) {
                setActiveMetric(parseInt(targetMetric, 10))
              }
            }
          })
        },
        {
          root: null,
          rootMargin: '-15% 0px -40% 0px',
          threshold: 0.2,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  const scrollToMetric = (metricIdx: number) => {
    const targetEl = itemRefs.current.find(
      (el) => el && el.getAttribute('data-metric') === String(metricIdx)
    )
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section id="highlights" className="bg-[#05100B] relative py-[120px] max-md:py-[70px]">
      {/* Background Section Title Watermark (contained so it never breaks sticky layout) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-[15vw] text-white/[0.012] select-none whitespace-nowrap">
          HIGHLIGHTS
        </div>
      </div>

      <div className="wrap max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: Heading + Sticky Interactive Metric Cards */}
          <div className="lg:col-span-5 highlights-intro lg:sticky lg:top-24 z-20">
            <div className="reveal-step">
              <div className="sec-label flex items-center gap-[14px] mb-4">
                <div className="sec-label-line w-7 h-[1px] bg-[#0D6E4F]"></div>
                <span className="sec-label-txt font-mono text-[12.5px] tracking-[.45em] uppercase text-[#10B981]">
                  Verified Impact
                </span>
              </div>
            </div>

            <h2 className="reveal-step sec-title font-display font-black text-[clamp(34px,4.2vw,62px)] leading-[1.05] text-white mb-4">
              Numbers that <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#0A8B5D] italic not-italic">Matter.</em>
            </h2>

            <p className="reveal-step text-[14.5px] sm:text-[15.5px] text-white/70 leading-relaxed font-normal mb-8 max-w-[440px]">
              Quantifiable proof points spanning competitive hackathons, production software architectures, and technical leadership.
            </p>

            {/* 2x2 Metric Cards Grid with Active Scroll Tracking */}
            <div className="highlights-counters grid grid-cols-2 gap-3.5 sm:gap-4">
              {COUNTERS.map((c, i) => {
                const isActive = activeMetric === c.metricIndex
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToMetric(c.metricIndex)}
                    className={`reveal counter-card text-left p-4 sm:p-5 rounded-xl border transition-all duration-400 relative overflow-hidden group cursor-pointer ${
                      isActive
                        ? 'border-[#10B981] bg-[#0D6E4F]/25 shadow-[0_0_25px_rgba(16,185,129,0.22)] scale-[1.02]'
                        : 'border-white/5 bg-[#0A1C15]/50 hover:border-[#10B981]/40 hover:bg-[#0D6E4F]/10'
                    }`}
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    {/* Active emerald rim */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                      }`}
                    />

                    <div className="flex items-baseline justify-between mb-1.5">
                      <div
                        className={`cc-num font-display font-black text-[34px] sm:text-[40px] leading-none transition-colors duration-300 ${
                          isActive ? 'text-[#10B981]' : 'text-white group-hover:text-[#10B981]'
                        }`}
                      >
                        {c.num}
                      </div>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_8px_#10B981]" />
                      )}
                    </div>

                    <div
                      className={`cc-lbl font-mono text-[11px] sm:text-[11.5px] tracking-[.2em] uppercase mb-1 font-medium transition-colors ${
                        isActive ? 'text-white' : 'text-[#9A8880] group-hover:text-white'
                      }`}
                    >
                      {c.label}
                    </div>

                    <div
                      className={`text-[10.5px] sm:text-[11px] font-mono leading-tight transition-colors line-clamp-1 ${
                        isActive ? 'text-[#10B981]/90' : 'text-white/45 group-hover:text-white/70'
                      }`}
                    >
                      {c.sub}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Mobile Sticky Quick-Status Bar */}
          <div className="lg:hidden col-span-1 sticky top-[64px] z-30 -mx-6 px-6 py-2.5 bg-[#05100B]/92 backdrop-blur-xl border-y border-[#0D6E4F]/30 shadow-[0_8px_24px_rgba(0,0,0,0.6)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#10B981] font-semibold">
                Highlights
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <button
                type="button"
                onClick={() => scrollToMetric(0)}
                className={`transition-colors ${activeMetric === 0 ? 'text-[#10B981] font-bold' : 'text-white/50'}`}
              >
                4x Wins
              </button>
              <span className="text-white/20">·</span>
              <button
                type="button"
                onClick={() => scrollToMetric(1)}
                className={`transition-colors ${activeMetric === 1 ? 'text-[#10B981] font-bold' : 'text-white/50'}`}
              >
                4+ Systems
              </button>
              <span className="text-white/20">·</span>
              <button
                type="button"
                onClick={() => scrollToMetric(2)}
                className={`transition-colors ${activeMetric === 2 ? 'text-[#10B981] font-bold' : 'text-white/50'}`}
              >
                2+ Yrs
              </button>
              <span className="text-white/20">·</span>
              <button
                type="button"
                onClick={() => scrollToMetric(3)}
                className={`transition-colors ${activeMetric === 3 ? 'text-[#10B981] font-bold' : 'text-white/50'}`}
              >
                9.1 GPA
              </button>
            </div>
          </div>

          {/* Right Column: Scrollable Cards Linked with Sticky Left Panel */}
          <div className="lg:col-span-7 highlights-list flex flex-col gap-5 w-full">

            {/* Card 0: Featured Hackathon Spotlight Card */}
            <div
              ref={(el) => (itemRefs.current[0] = el)}
              data-metric="0"
              className={`reveal relative p-6 sm:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 overflow-hidden group shadow-[0_20px_50px_rgba(13,110,79,0.15)] ${
                activeMetric === 0
                  ? 'border-[#10B981]/60 bg-gradient-to-br from-[#0B251D] via-[#071812] to-[#04100B]'
                  : 'border-[#10B981]/30 bg-gradient-to-br from-[#0B251D]/80 via-[#071812]/85 to-[#04100B]/90'
              }`}
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
                    <h3 className="font-display font-bold text-[19px] sm:text-[23px] text-white">
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
            {MILESTONES.map((m, i) => {
              const isSelected = activeMetric === m.metricIndex
              return (
                <div
                  key={i}
                  ref={(el) => (itemRefs.current[i + 1] = el)}
                  data-metric={m.metricIndex}
                  className={`reveal p-5 sm:p-6 rounded-xl border backdrop-blur-md transition-all duration-400 group flex items-start gap-4 sm:gap-5 ${
                    isSelected
                      ? 'border-[#10B981]/50 bg-[#0A1C15] shadow-[0_10px_30px_rgba(13,110,79,0.15)]'
                      : 'border-white/5 bg-[#071711]/60 hover:border-[#0D6E4F]/50 hover:bg-[#0A1C15]'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
                >
                  <div
                    className={`w-10 h-10 flex-shrink-0 rounded-lg border flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(13,110,79,0.1)] ${
                      isSelected
                        ? 'border-[#10B981] bg-[#10B981]/15 text-[#10B981] scale-105'
                        : 'border-[#0D6E4F]/40 bg-[#0A1C15] text-[#10B981] group-hover:bg-[#10B981]/10 group-hover:scale-105 group-hover:border-[#10B981]/50'
                    }`}
                  >
                    {m.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#10B981] font-semibold">
                          {m.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline-block"></span>
                        <h4
                          className={`font-display font-bold text-[15px] sm:text-[16px] transition-colors ${
                            isSelected ? 'text-white' : 'text-white/90 group-hover:text-[#10B981]'
                          }`}
                        >
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
              )
            })}

          </div>

        </div>
      </div>
    </section>
  )
}
