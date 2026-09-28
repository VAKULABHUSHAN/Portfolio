import { useState, useRef, useEffect, useCallback } from 'react'

const ITEMS = [
  {
    title: 'General Secretary - Logic Play',
    role: 'General Secretary',
    date: 'July 2026 - Present',
    detail: 'Spearheading leadership and operational responsibilities for Logic Play, I oversee event logistics, strategic planning, cross-functional collaboration, and mentorship to foster a vibrant technical community dedicated to innovation and professional growth.',
    badge: 'Leadership',
  },
  {
    title: 'Acceedo IoT Solutions',
    role: 'Software Developer (Internship)',
    date: 'Jun 2026 – Jul 2026',
    detail: 'Implemented an advanced hybrid AI architecture utilizing Local LLMs (Ollama) on client software, significantly optimizing response times by intelligently routing complex inquiries to AI models while querying databases directly for structured data.',
    badge: 'AI & Local LLM',
  },
  {
    title: 'Healthletic Lifestyle',
    role: 'Flutter Developer Intern & Secondary TL',
    date: 'May 2025 – Oct 2025',
    detail: 'Acted as Secondary Team Lead and Flutter Developer Intern—spearheading task allocation, presenting updates in executive meetings, drafting MOM docs, and engineering meal planning and workout tracking modules.',
    badge: 'Mobile & Leadership',
  },
  {
    title: 'GT Softwares',
    role: 'Flutter Developer (Internship)',
    date: 'Apr 2024 – Jun 2024',
    detail: 'Built an ERP-based Progress Tracker managing 5 industrial manufacturing modules (Melting, Molding, Fettling, Masters, Maintenance) using Firebase, and contributed to UI and API features for GT Poll Version 5.',
    badge: 'Full-Stack ERP',
  },
]

interface Achievement {
  id: string
  title: string
  date: string
  detail: string
  badge: string
  imagePlaceholder: string
  imageSrc?: string
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'science-forum',
    title: '1st Place - Science Forum Project Presentation',
    date: 'Oct 2024',
    detail: 'Won 1st Place in the Project Presentation in the Science Forum at college for innovative tech implementation.',
    badge: '1st Place Winner',
    imagePlaceholder: 'science_forum_award.jpg',
  },
  {
    id: 'quickmetrics',
    title: 'Play Store App Launch — Quickmetrics',
    date: 'Sept 2025',
    detail: 'Successfully designed, built, and launched my first official mobile app (Quickmetrics) directly on the Google Play Store.',
    badge: 'Play Store App',
    imagePlaceholder: 'quickmetrics_playstore.jpg',
  },
  {
    id: 'erp-system',
    title: 'Full-Stack Warehouse ERP System',
    date: 'July 2026',
    detail: 'Developed a comprehensive full-stack ERP system for warehouse inventory, integrating real-time stock movement, order tracking, and live analytics.',
    badge: 'Full-Stack System',
    imagePlaceholder: 'warehouse_erp.jpg',
  },
  {
    id: 'devhouse26',
    title: 'Top 5 Finalist — Devhouse26 (VITC)',
    date: '2026',
    detail: 'Achieved Top 5 position among elite hackathon teams at Devhouse26 hosted in VITC.',
    badge: 'Hackathon Top 5',
    imagePlaceholder: 'devhouse26_vitc.jpg',
  },
  {
    id: 'vibex',
    title: 'VibeX Winner',
    date: '2026',
    detail: 'Emerged as the overall winner in the VibeX tech competition, bagging a cash prize of ₹2,000.',
    badge: 'Winner (₹2,000)',
    imagePlaceholder: 'vibex_winner.jpg',
  },
  {
    id: 'datathon26',
    title: '3rd Place — Datathon 26',
    date: '2026',
    detail: 'Secured 3rd place in Datathon 26, earning a cash prize award of ₹6,000.',
    badge: '3rd Place (₹6,000)',
    imagePlaceholder: 'datathon26_award.jpg',
  },
  {
    id: 'new-app',
    title: 'New Play Store Mobile App Launch',
    date: 'Coming Soon',
    detail: 'Engineered a novel cross-platform mobile application, currently finalizing features for release on the Google Play Store.',
    badge: 'Upcoming App',
    imagePlaceholder: 'new_app_preview.jpg',
  },
  {
    id: 'milestones-summary',
    title: 'Career & Leadership Milestones',
    date: 'Ongoing',
    detail: 'Completed 3 software internships, delivered 1 client freelance project, and leading as General Secretary in Logic Play club.',
    badge: 'Leadership & Impact',
    imagePlaceholder: 'leadership_milestones.jpg',
  },
]

export const CurrentlyWorkingOn = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const N = ACHIEVEMENTS.length

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % N)
  }, [N])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + N) % N)
  }, [N])

  // Auto-scroll effect (3.5 seconds interval, pauses when user hovers or interacts)
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      handleNext()
    }, 3500)
    return () => clearInterval(timer)
  }, [isPaused, handleNext])

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true)
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
    touchStartX.current = null
    setIsPaused(false)
  }

  const activeAchievement = ACHIEVEMENTS[activeIndex]

  return (
    <section id="working" className="bg-[#081711] py-[120px] max-md:py-[80px] relative overflow-hidden">
      <div className="wrap max-w-[1280px] mx-auto px-16 max-md:px-6">

        {/* Section 1: Professional Experience Timeline */}
        <div className="reveal mb-16">
          <div className="sec-label flex items-center gap-[14px] mb-4">
            <div className="sec-label-line w-7 h-[1px] bg-[#0D6E4F]"></div>
            <span className="sec-label-txt font-mono text-[10px] tracking-[.45em] uppercase text-[#10B981]">Professional Experience</span>
          </div>
          <h2 className="sec-title font-display font-black text-[clamp(36px,5vw,72px)] leading-[1.05] text-white">
            Professional<em className="text-[#10B981] not-italic"> Experience.</em>
          </h2>
        </div>

        <div className="working-timeline relative max-w-[800px] pl-10 max-md:pl-6 max-md:max-w-full mb-28">
          <div className="tl-line absolute left-0 top-0 bottom-0 w-[1px] bg-[#0D6E4F]/20">
            <div className="tl-line-fill absolute inset-0 bg-gradient-to-b from-[#0D6E4F] via-[#10B981]/40 to-transparent"></div>
          </div>

          {ITEMS.map((item, i) => (
            <div key={i}
              className="reveal tl-item relative mb-14 last:mb-0 group"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="tl-dot absolute left-[-46px] max-md:left-[-24px] max-md:-translate-x-1/2 top-6 w-3 h-3 bg-[#0A1C15] border-2 border-[#10B981] z-10 transition-all duration-400 group-hover:scale-125 group-hover:bg-[#10B981] group-hover:shadow-[0_0_12px_#10B981]"></div>

              <div className="working-card p-8 border border-[#0D6E4F]/15 bg-[#0A1C15] relative overflow-hidden transition-all duration-500 hover:border-[#0D6E4F]/40 hover:translate-x-2">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#0D6E4F] to-transparent scale-x-0 origin-left transition-transform duration-600 group-hover:scale-x-100"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(13,110,79,0.06),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="wc-header flex items-start sm:items-center justify-between gap-4 mb-5 flex-col sm:flex-row">
                  <div>
                    <h3 className="wc-title font-display text-[22px] font-bold text-white tracking-wide mb-1.5">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 text-[12.5px] font-mono tracking-wider">
                      <span className="text-[#10B981] font-semibold">{item.role}</span>
                      <span className="w-1 h-1 rounded-full bg-[#10B981]/60 hidden sm:inline-block"></span>
                      <span className="text-white/70 bg-[#0D6E4F]/15 px-2.5 py-0.5 rounded border border-[#0D6E4F]/40">{item.date}</span>
                    </div>
                  </div>
                  <div className="wc-badge font-mono text-[11px] tracking-[.22em] uppercase px-4 py-1.5 bg-[#0D6E4F]/15 border border-[#0D6E4F]/40 text-[#10B981] rounded-full whitespace-nowrap self-start">
                    {item.badge}
                  </div>
                </div>

                <p className="wc-detail text-[16px] text-white/80 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: 3D Stacked Coverflow Gallery Slider */}
        <div
          className="reveal pt-12 border-t border-[#0D6E4F]/20 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Gallery Header Matching User Reference */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-16">
            <h2 className="font-display font-black text-[clamp(42px,6vw,90px)] tracking-tight uppercase leading-none text-white">
              GALLERY
            </h2>
            <p className="font-mono italic text-[#10B981] text-[13px] sm:text-[15px] max-w-[420px] text-left md:text-right leading-snug opacity-90">
              "Snapshots of innovation, collaboration, and breakthrough moments from previous events."
            </p>
          </div>

          {/* 3D Stacked Cards Stage Container */}
          <div
            className="relative w-full h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center overflow-hidden perspective-[1200px] select-none cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {ACHIEVEMENTS.map((card, index) => {
              // Calculate shortest circular diff for infinite loop wrapping
              let diff = index - activeIndex
              if (diff > N / 2) diff -= N
              if (diff < -N / 2) diff += N

              const absOffset = Math.abs(diff)

              // 3D Coverflow positioning math
              const isCenter = diff === 0
              const translateX = diff * 180 // Spacing between stacked cards
              const scale = isCenter ? 1.05 : Math.max(0.7, 1 - absOffset * 0.12)
              const rotateY = isCenter ? 0 : diff > 0 ? -15 : 15
              const zIndex = 40 - absOffset * 5
              const opacity = isCenter ? 1 : Math.max(0.2, 1 - absOffset * 0.3)

              // Render visible cards in wrap loop
              if (absOffset > 3) return null

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out rounded-2xl overflow-hidden cursor-pointer ${
                    isCenter
                      ? 'w-[280px] sm:w-[340px] md:w-[380px] h-[400px] sm:h-[480px] md:h-[510px] border-2 border-[#10B981] shadow-[0_0_40px_rgba(16,185,129,0.45)]'
                      : 'w-[260px] sm:w-[310px] md:w-[340px] h-[370px] sm:h-[430px] md:h-[460px] border border-[#0D6E4F]/40 shadow-2xl hover:border-[#10B981]/50'
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    zIndex,
                    opacity,
                  }}
                >
                  {/* Card Background / Image Container */}
                  <div className="relative w-full h-full bg-gradient-to-b from-[#0B251C] via-[#071912] to-[#040F0A] flex flex-col justify-between p-6 overflow-hidden">
                    
                    {card.imageSrc ? (
                      <img
                        src={card.imageSrc}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d6e4f25_1px,transparent_1px),linear-gradient(to_bottom,#0d6e4f25_1px,transparent_1px)] bg-[size:20px_20px] opacity-70"></div>
                        
                        {/* Center Glowing Accent */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#10B981]/15 blur-2xl"></div>

                        {/* Camera Placeholder Graphic */}
                        <div className="relative z-10 my-auto flex flex-col items-center text-center">
                          <div className={`rounded-full bg-[#0D6E4F]/30 border border-[#10B981]/50 flex items-center justify-center text-[#10B981] mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)] ${
                            isCenter ? 'w-20 h-20' : 'w-14 h-14'
                          }`}>
                            <svg width={isCenter ? "34" : "24"} height={isCenter ? "34" : "24"} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                          </div>
                          <span className="font-mono text-[11px] sm:text-[12px] tracking-widest uppercase text-[#10B981] bg-[#0D6E4F]/30 border border-[#0D6E4F]/50 px-3 py-1 rounded-md mb-1.5 truncate max-w-[90%]">
                            Image Placeholder
                          </span>
                          <span className="font-mono text-[10.5px] text-white/50 truncate max-w-[85%]">
                            {card.imagePlaceholder}
                          </span>
                        </div>
                      </>
                    )}

                    {/* Top Overlay Badge */}
                    <div className="relative z-20 flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-wider text-white/80 bg-[#081711]/80 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                        {card.date}
                      </span>
                      <span className="font-mono text-[9.5px] tracking-widest uppercase px-3 py-1 bg-[#10B981]/20 border border-[#10B981]/60 text-[#10B981] rounded-full backdrop-blur-md shadow-md">
                        {card.badge}
                      </span>
                    </div>

                    {/* Bottom Card Caption (Shows title clearly when active) */}
                    <div className="relative z-20 pt-4 bg-gradient-to-t from-[#040F0A] via-[#040F0A]/90 to-transparent -mx-6 -mb-6 p-6">
                      <h3 className={`font-display font-bold text-white leading-snug line-clamp-2 ${
                        isCenter ? 'text-[18px] sm:text-[20px] text-[#10B981]' : 'text-[15px] opacity-80'
                      }`}>
                        {card.title}
                      </h3>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

          {/* Active Achievement Detailed Information Card */}
          <div className="mt-6 max-w-[720px] mx-auto bg-[#0A1C15]/90 border border-[#0D6E4F]/30 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-center gap-3 font-mono text-[12px] text-[#10B981] mb-2">
              <span className="px-3 py-0.5 rounded-full bg-[#0D6E4F]/25 border border-[#0D6E4F]/50">
                {activeAchievement.badge}
              </span>
              <span>•</span>
              <span className="text-white/70">{activeAchievement.date}</span>
            </div>
            <h3 className="font-display font-bold text-[22px] sm:text-[26px] text-white mb-3 leading-snug">
              {activeAchievement.title}
            </h3>
            <p className="text-[15px] sm:text-[16px] text-white/80 leading-relaxed max-w-[620px] mx-auto">
              {activeAchievement.detail}
            </p>
          </div>

          {/* Controls: Prev/Next Arrow Buttons & Dots */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                aria-label="Previous Achievement"
                className="w-12 h-12 rounded-full border border-[#10B981]/50 bg-[#0A1C15] text-[#10B981] flex items-center justify-center transition-all duration-300 hover:bg-[#10B981] hover:text-[#081711] shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              
              <span className="font-mono text-[13px] text-[#10B981] tracking-widest px-4 py-1.5 rounded-full bg-[#0A1C15] border border-[#0D6E4F]/40">
                {String(activeIndex + 1).padStart(2, '0')} / {String(ACHIEVEMENTS.length).padStart(2, '0')}
              </span>

              <button
                onClick={handleNext}
                aria-label="Next Achievement"
                className="w-12 h-12 rounded-full border border-[#10B981]/50 bg-[#0A1C15] text-[#10B981] flex items-center justify-center transition-all duration-300 hover:bg-[#10B981] hover:text-[#081711] shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </button>
            </div>

            {/* Pagination Pill Dots */}
            <div className="flex items-center gap-2">
              {ACHIEVEMENTS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    activeIndex === dotIdx
                      ? 'w-8 bg-[#10B981] shadow-[0_0_12px_#10B981]'
                      : 'w-2 bg-[#0D6E4F]/40 hover:bg-[#0D6E4F]'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
