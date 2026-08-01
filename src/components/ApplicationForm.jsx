import { useState } from 'react'
import { Loader2, Send } from 'lucide-react'
import { COURSES, SHIFTS } from '../data/courses'
import { SCRIPT_URL } from '../data/config'
import { useToast } from '../context/ToastContext'
import { useReveal } from '../hooks/useReveal'

function formatPhone(raw) {
  let digits = raw.replace(/\D/g, '')
  if (digits.startsWith('998')) digits = digits.slice(3)
  digits = digits.slice(0, 9)

  let formatted = '+998'
  if (digits.length > 0) formatted += ' ' + digits.slice(0, 2)
  if (digits.length > 2) formatted += ' ' + digits.slice(2, 5)
  if (digits.length > 5) formatted += ' ' + digits.slice(5, 7)
  if (digits.length > 7) formatted += ' ' + digits.slice(7, 9)
  return formatted
}

const initialState = { fullName: '', phone: '', course: '', shift: '' }

export default function ApplicationForm({ selectedCourse, onCourseChange }) {
  const [form, setForm] = useState(initialState)
  const [submitting, setSubmitting] = useState(false)
  const { showToast } = useToast()
  const revealRef = useReveal()

  const course = selectedCourse ?? form.course

  const handlePhoneChange = (e) => {
    setForm((f) => ({ ...f, phone: formatPhone(e.target.value) }))
  }

  const handlePhoneFocus = () => {
    if (!form.phone) setForm((f) => ({ ...f, phone: '+998 ' }))
  }

  const handleCourseChange = (e) => {
    onCourseChange(e.target.value)
    setForm((f) => ({ ...f, course: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      course,
      timeSlot: form.shift,
    }

    if (!data.fullName || !data.phone || !data.course || !data.timeSlot) {
      showToast("Maydonlarni to'ldiring", "Iltimos, barcha maydonlarni to'liq kiriting.", 'error')
      return
    }

    setSubmitting(true)
    try {
      // Apps Script Web App'ga CORS rejimida, matn sifatida yuboriladi
      // (Apps Script "text/plain" so'rovlarni CORS xatosiz qabul qiladi).
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data),
      })
      const result = await response.json()

      if (result.result === 'success') {
        showToast('Arizangiz muvaffaqiyatli qabul qilindi!', "Tez orada siz bilan bog'lanamiz.")
        setForm(initialState)
        onCourseChange('')
      } else {
        showToast(
          'Xatolik yuz berdi',
          "Iltimos, birozdan so'ng qayta urinib ko'ring yoki bizga qo'ng'iroq qiling.",
          'error'
        )
        console.error('Apps Script javobi:', result)
      }
    } catch (err) {
      showToast(
        'Xatolik yuz berdi',
        "Iltimos, birozdan so'ng qayta urinib ko'ring yoki bizga qo'ng'iroq qiling.",
        'error'
      )
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="ariza" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center reveal is-visible">
          <span className="text-primary font-semibold text-sm tracking-wide">Ro'yxatdan o'tish</span>
          <h2 className="font-display font-bold text-ink text-3xl md:text-[2.5rem] mt-3 tracking-tight">
            Arizangizni qoldiring
          </h2>
          <p className="text-muted mt-3 leading-relaxed max-w-lg mx-auto">
            Formani to'ldiring — mutaxassislarimiz siz bilan tez orada bog'lanadi.
          </p>
        </div>

        <form
          ref={revealRef}
          onSubmit={handleSubmit}
          className="reveal is-visible mt-10 bg-white border border-line rounded-2xl md:rounded-3xl p-6 sm:p-9 shadow-card"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="block text-sm font-semibold text-ink mb-1.5">
                Ism va Familiya
              </label>
              <input
                required
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Masalan: Aziza Karimova"
                value={form.fullName}
                onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                className="w-full bg-fog border border-line rounded-xl px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-1.5">
                Telefon raqami
              </label>
              <input
                required
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                placeholder="+998 90 123 45 67"
                maxLength={19}
                value={form.phone}
                onFocus={handlePhoneFocus}
                onChange={handlePhoneChange}
                className="w-full bg-fog border border-line rounded-xl px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/70 focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-semibold text-ink mb-1.5">
                Kursni tanlang
              </label>
              <select
                required
                id="course"
                name="course"
                value={course}
                onChange={handleCourseChange}
                className="w-full bg-fog border border-line rounded-xl px-4 py-3.5 text-[15px] text-ink focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors"
              >
                <option value="" disabled>
                  Kursni tanlang
                </option>
                {COURSES.map((c) => (
                  <option key={c.id} value={c.optionLabel}>
                    {c.optionLabel}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="shift" className="block text-sm font-semibold text-ink mb-1.5">
                Qulay dars vaqti
              </label>
              <select
                required
                id="shift"
                name="shift"
                value={form.shift}
                onChange={(e) => setForm((f) => ({ ...f, shift: e.target.value }))}
                className="w-full bg-fog border border-line rounded-xl px-4 py-3.5 text-[15px] text-ink focus:border-primary focus:ring-2 focus:ring-primary/15 transition-colors"
              >
                <option value="" disabled>
                  Smenani tanlang
                </option>
                {SHIFTS.map((s) => (
                  <option key={s.id} value={s.value}>
                    {s.value}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[15px] py-4 rounded-full transition-colors focus-ring"
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Yuborilmoqda...
              </>
            ) : (
              <>
                <Send size={16} />
                Arizani yuborish
              </>
            )}
          </button>
          <p className="text-xs text-muted text-center mt-4">
            Ma'lumotlaringiz faqat siz bilan bog'lanish uchun ishlatiladi.
          </p>
        </form>
      </div>
    </section>
  )
}
