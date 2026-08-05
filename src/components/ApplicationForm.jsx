import { useState, useEffect } from "react";
import { Loader2, Send } from "lucide-react";
import { COURSES, SHIFTS } from "../data/courses";
import { SCRIPT_URL } from "../data/config";
import { useToast } from "../context/ToastContext";
import { useReveal } from "../hooks/useReveal";

function formatPhone(raw) {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("998")) digits = digits.slice(3);
  digits = digits.slice(0, 9);

  let formatted = "+998";
  if (digits.length > 0) formatted += " " + digits.slice(0, 2);
  if (digits.length > 2) formatted += " " + digits.slice(2, 5);
  if (digits.length > 5) formatted += " " + digits.slice(5, 7);
  if (digits.length > 7) formatted += " " + digits.slice(7, 9);
  return formatted;
}

const initialState = {
  fullName: "",
  phone: "",
  course: "",
  shift: "",
  days: "Dushanba / Chorshanba / Juma (Juft kunlar)",
};

export default function ApplicationForm({ selectedCourse, onCourseChange }) {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();
  const revealRef = useReveal();

  const course = selectedCourse ?? form.course;

  const handlePhoneChange = (e) => {
    setForm((f) => ({ ...f, phone: formatPhone(e.target.value) }));
  };

  const handlePhoneFocus = () => {
    if (!form.phone) setForm((f) => ({ ...f, phone: "+998 " }));
  };

  const isPhoneValid = () => {
    const digits = (form.phone || "").replace(/\D/g, "");
    return digits.length >= 9;
  };

  const handleCourseChange = (e) => {
    onCourseChange(e.target.value);
    const val = e.target.value;
    setForm((f) => ({ ...f, course: val }));
    // If selected course is an Intensiv, set daily days
    if (val && val.toLowerCase().includes("intensiv")) {
      setForm((f) => ({ ...f, days: "Dushanba – Shanba (Har kuni)" }));
    } else {
      setForm((f) => ({
        ...f,
        days: "Dushanba / Chorshanba / Juma (Juft kunlar)",
      }));
    }
  };

  // Sync days when `selectedCourse` prop changes (e.g. when clicked from course list)
  useEffect(() => {
    if (!course) return;
    if (course.toLowerCase().includes("intensiv")) {
      setForm((f) => ({
        ...f,
        days: "Dushanba – Juma (Har kuni)",
        course: course,
      }));
    } else {
      setForm((f) => ({
        ...f,
        days: "Dushanba / Chorshanba / Juma (Juft kunlar)",
        course: course,
      }));
    }
  }, [course]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone validation: require at least 9 digits (excluding non-digits)
    const submittedDigits = (form.phone || "").replace(/\D/g, "");
    if (submittedDigits.length < 9) {
      showToast("Iltimos, telefon raqamingizni to'liq kiriting!", "", "error");
      return;
    }

    const data = {
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      course,
      timeSlot: form.shift,
      days: form.days,
    };

    if (
      !data.fullName ||
      !data.phone ||
      !data.course ||
      !data.timeSlot ||
      !data.days
    ) {
      showToast(
        "Maydonlarni to'ldiring",
        "Iltimos, barcha maydonlarni to'liq kiriting.",
        "error",
      );
      return;
    }

    setSubmitting(true);
    try {
      // Apps Script Web App'ga CORS rejimida, matn sifatida yuboriladi
      // (Apps Script "text/plain" so'rovlarni CORS xatosiz qabul qiladi).
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.result === "success") {
        showToast(
          "Arizangiz muvaffaqiyatli qabul qilindi!",
          "Tez orada siz bilan bog'lanamiz.",
        );
        setForm(initialState);
        onCourseChange("");
      } else {
        showToast(
          "Xatolik yuz berdi",
          "Iltimos, birozdan so'ng qayta urinib ko'ring yoki bizga qo'ng'iroq qiling.",
          "error",
        );
        console.error("Apps Script javobi:", result);
      }
    } catch (err) {
      showToast(
        "Xatolik yuz berdi",
        "Iltimos, birozdan so'ng qayta urinib ko'ring yoki bizga qo'ng'iroq qiling.",
        "error",
      );
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="ariza" className="py-20 md:py-28 bg-paper dark:bg-void">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center reveal is-visible">
          <span className="eyebrow">Ro'yxatdan o'tish</span>
          <h2 className="font-display font-bold text-ink dark:text-white text-3xl md:text-[2.5rem] mt-3 tracking-tight">
            Arizangizni qoldiring
          </h2>
          <p className="text-body-muted mt-3 leading-relaxed max-w-lg mx-auto">
            Formani to'ldiring — mutaxassislarimiz siz bilan tez orada
            bog'lanadi.
          </p>
        </div>

        <form
          ref={revealRef}
          onSubmit={handleSubmit}
          className="reveal is-visible card mt-10 rounded-2xl md:rounded-3xl p-6 sm:p-9 shadow-card !translate-y-0 hover:!translate-y-0"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="field-label">
                Ism va Familiya
              </label>
              <input
                required
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Masalan: Aziza Karimova"
                value={form.fullName}
                onChange={(e) =>
                  setForm((f) => ({ ...f, fullName: e.target.value }))
                }
                className="field"
              />
            </div>

            <div>
              <label htmlFor="phone" className="field-label">
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
                aria-invalid={!isPhoneValid()}
                title="Iltimos +998 va qolgan 9 raqamni kiriting"
                className="field"
              />
            </div>

            <div>
              <label htmlFor="course" className="field-label">
                Kursni tanlang
              </label>
              <select
                required
                id="course"
                name="course"
                value={course}
                onChange={handleCourseChange}
                className="field"
                style={{ colorScheme: "inherit" }}
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
              <label htmlFor="shift" className="field-label">
                Qulay dars vaqti
              </label>
              <select
                required
                id="shift"
                name="shift"
                value={form.shift}
                onChange={(e) =>
                  setForm((f) => ({ ...f, shift: e.target.value }))
                }
                className="field"
                style={{ colorScheme: "inherit" }}
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

            <div className="sm:col-span-2">
              <label htmlFor="days" className="field-label">
                Dars kunlari
              </label>
              {course && course.toLowerCase().includes("intensiv") ? (
                <div className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 bg-primary/10 text-primary-dark dark:text-primary font-semibold">
                  Dushanba – Juma (Har kuni)
                </div>
              ) : (
                <select
                  required
                  id="days"
                  name="days"
                  value={form.days}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, days: e.target.value }))
                  }
                  className="field"
                  style={{ colorScheme: "inherit" }}
                >
                  <option value="Dushanba / Chorshanba / Juma (Juft kunlar)">
                    Dushanba / Chorshanba / Juma (Juft kunlar)
                  </option>
                  <option value="Seshanba / Payshanba / Shanba (Toq kunlar)">
                    Seshanba / Payshanba / Shanba (Toq kunlar)
                  </option>
                </select>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting || !isPhoneValid()}
            className="btn-primary mt-7 w-full inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed text-[15px] py-4 rounded-full focus-ring"
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
          <p className="text-xs text-body-muted text-center mt-4">
            Ma'lumotlaringiz faqat siz bilan bog'lanish uchun ishlatiladi.
          </p>
        </form>
      </div>
    </section>
  );
}
