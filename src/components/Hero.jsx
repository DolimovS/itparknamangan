import { ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const revealRef = useReveal()

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 bg-fog">
      {/* Signature: ascending staircase line — o'quvchining bosqichma-bosqich rivojlanishi */}
      <svg
        className="absolute right-[-60px] top-16 md:right-0 md:top-24 w-[340px] md:w-[560px] opacity-90 pointer-events-none"
        viewBox="0 0 560 360"
        fill="none"
      >
        <path
          d="M20 320 L140 320 L140 250 L260 250 L260 180 L380 180 L380 110 L500 110 L500 40"
          stroke="#1FAE73"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="500" cy="40" r="7" fill="#0E6E4E" />
        <circle cx="20" cy="320" r="5" fill="#1FAE73" opacity="0.6" />
      </svg>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div ref={revealRef} className="reveal is-visible max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-accent-soft text-primary-dark text-[13px] font-semibold px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulseSoft" />
            18 yoshdan pensiya yoshigacha bo'lgan fuqarolar uchun BEPUL kurslar mavjud!
          </span>

          <h1 className="font-display font-extrabold text-ink text-[2.35rem] leading-[1.12] sm:text-5xl md:text-[3.4rem] md:leading-[1.08] mt-6 tracking-tight">
            IT SCHOOL — Zamonaviy bilim va yangi imkoniyatlar sari!
          </h1>

          <p className="text-muted text-[17px] md:text-lg leading-relaxed mt-5 max-w-xl">
            Kompyuter savodxonligi, Dasturlash va Xorijiy tillarni amaliy o'rganing —
            tajribali ustozlar, kichik guruhlar va real amaliyot bilan. Bepul va pullik
            yo'nalishlar mavjud — o'zingizga mosini tanlang.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 mt-8">
            <a
              href="#ariza"
              className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all shadow-card hover:shadow-cardHover focus-ring"
            >
              Arizani to'ldirish
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#kurslar"
              className="inline-flex items-center justify-center gap-2 bg-white border border-line hover:border-primary/40 text-ink font-semibold text-[15px] px-7 py-3.5 rounded-full transition-colors focus-ring"
            >
              Kurslarni ko'rish
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 pt-8 border-t border-line/80 text-sm text-muted">
            <div>
              <span className="text-ink font-display font-bold text-base">7</span> ta yo'nalish
            </div>
            <div>
              <span className="text-ink font-display font-bold text-base">4</span> qulay smena
            </div>
            <div>
              <span className="text-ink font-display font-bold text-base">Kichik</span> guruhlarda
              dars
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
