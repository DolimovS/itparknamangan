import { SHIFTS } from '../data/courses'
import { useReveal } from '../hooks/useReveal'

// Har bir smena blokining balandligi biroz farqlanadi — hero'dagi
// zinapoyasimon signature bilan uyg'unlashtirilgan.
const OFFSETS = ['md:translate-y-6', 'md:translate-y-2', 'md:-translate-y-2', 'md:-translate-y-6']

function ShiftBlock({ shift, offset, last }) {
  const revealRef = useReveal()
  return (
    <div
      ref={revealRef}
      className={`reveal rounded-2xl p-5 md:p-6 mb-6 md:mb-0 transition-colors ${offset} ${
        last ? 'btn-primary' : 'card'
      }`}
    >
      <p className={`text-xs font-bold tracking-widest font-mono ${last ? 'text-void' : 'text-primary'}`}>
        {shift.label.toUpperCase()}
      </p>
      <p className={`font-display font-extrabold text-xl md:text-2xl mt-2 ${last ? 'text-void' : 'text-ink dark:text-white'}`}>
        {shift.time}
      </p>
    </div>
  )
}

export default function Schedule() {
  const headingRef = useReveal()

  return (
    <section id="jadval" className="py-20 md:py-28 bg-fog dark:bg-void-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={headingRef} className="reveal max-w-xl">
          <span className="eyebrow">Jadval</span>
          <h2 className="font-display font-bold text-ink dark:text-white text-3xl md:text-[2.5rem] mt-3 tracking-tight">
            Dars vaqtlari
          </h2>
          <p className="text-body-muted mt-3 leading-relaxed">
            O'zingizga qulay smenani tanlang — kuniga to'rtta vaqt oralig'i mavjud.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 items-end">
          {SHIFTS.map((shift, i) => (
            <ShiftBlock
              key={shift.id}
              shift={shift}
              offset={OFFSETS[i]}
              last={i === SHIFTS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
