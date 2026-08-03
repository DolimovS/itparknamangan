import { ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const revealRef = useReveal();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28 bg-paper dark:bg-void transition-colors"
    >
      {/* Gradient mesh atmosphere */}
      <div className="mesh-orb w-[420px] h-[420px] -top-32 -right-24 bg-primary/20 dark:bg-primary/25" />
      <div className="mesh-orb w-[320px] h-[320px] top-40 right-10 bg-accent/20 dark:bg-accent/20" />

      {/* Signature: ascending growth-path circuit trace */}
      <svg
        className="absolute right-[-40px] top-16 md:right-6 md:top-28 w-[300px] md:w-[480px] opacity-90 pointer-events-none animate-floatSlow"
        viewBox="0 0 560 360"
        fill="none"
      >
        <defs>
          <linearGradient id="growthLineGradient" x1="0" y1="360" x2="560" y2="0">
            <stop offset="0%" stopColor="#0EA672" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path
          className="circuit-path"
          d="M20 320 L140 320 L140 250 L260 250 L260 180 L380 180 L380 110 L500 110 L500 40"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="140" cy="320" r="4" fill="#0EA672" />
        <circle cx="260" cy="250" r="4" fill="#0EA672" />
        <circle cx="380" cy="180" r="4" fill="#22D3EE" />
        <circle cx="500" cy="40" r="8" fill="#FFC94D" />
        <circle cx="20" cy="320" r="5" fill="#0EA672" opacity="0.6" />
      </svg>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div ref={revealRef} className="reveal is-visible max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/15 text-primary-dark dark:text-primary-light text-[13px] font-semibold px-4 py-2 rounded-full border border-primary/20">
            <span className="w-1.5 h-1.5 rounded-full bg-spark animate-pulseSoft" />
            18 yoshdan pensiya yoshigacha bo'lgan fuqarolar uchun BEPUL kurslar
            mavjud!
          </span>

          <h1 className="font-display font-extrabold text-ink dark:text-white text-[2.35rem] leading-[1.12] sm:text-5xl md:text-[3.4rem] md:leading-[1.08] mt-6 tracking-tight">
            IT SCHOOL — <span className="gradient-text">zamonaviy bilim</span>{" "}
            va yangi imkoniyatlar sari!
          </h1>

          <p className="text-body-muted text-[17px] md:text-lg leading-relaxed mt-5 max-w-xl">
            Kompyuter savodxonligi, Dasturlash va Xorijiy tillarni amaliy
            o'rganing — tajribali ustozlar, kichik guruhlar va real amaliyot
            bilan. Bepul va pullik yo'nalishlar mavjud — o'zingizga mosini
            tanlang.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 mt-8">
            <a
              href="#ariza"
              className="btn-primary group inline-flex items-center justify-center gap-2 text-[15px] px-7 py-3.5 rounded-full focus-ring"
            >
              Arizani to'ldirish
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#kurslar"
              className="btn-outline inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded-full focus-ring"
            >
              Kurslarni ko'rish
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 pt-8 border-t border-line text-sm text-body-muted">
            <div>
              <span className="font-mono font-bold text-base text-ink dark:text-white">
                7
              </span>{" "}
              ta yo'nalish
            </div>
            <div>
              <span className="font-mono font-bold text-base text-ink dark:text-white">
                4
              </span>{" "}
              qulay smena
            </div>
            <div>
              <span className="font-mono font-bold text-base text-ink dark:text-white">
                Kichik
              </span>{" "}
              guruhlarda dars
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
