import React, { useMemo, useState } from "react";
import {
  BookOpen,
  Clock3,
  FileText,
  Loader2,
  Phone,
  Send,
  User,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import { COURSES, SHIFTS } from "../data/courses";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz26Jj97_aG44CQuagA7UNdJwmhi0fBbJMQyL_YDV0igsH8HjC5SsvkkWUZve1MeQfc/exec";

const COURSE_TEACHER_MAP = {
  "Kompyuter Savodxonligi (Intensiv)": ["Samandar", "Muqaddam"],
  "Kompyuter Savodxonligi (Standart)": ["Samandar", "Muqaddam"],
  "Ingliz Tili": ["Abdulaziz"],
  "Turk Tili": ["Abdulaziz"],
  "Frontend Dasturlash": ["Behruz"],
  "Python Dasturlash": ["Tohirjon"],
  Matematika: ["Tohirjon"],
};

const DEFAULT_TEACHERS = ["Bahodir", "Ma'muriyat"];

const initialFormState = {
  fio: "",
  phone: "",
  course: "",
  teacher: "",
  shift: "",
  topic: "",
};

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  const withoutPrefix = digits.startsWith("998") ? digits.slice(3) : digits;

  let formatted = "+998";
  if (withoutPrefix.length > 0) formatted += " " + withoutPrefix.slice(0, 2);
  if (withoutPrefix.length > 2) formatted += " " + withoutPrefix.slice(2, 5);
  if (withoutPrefix.length > 5) formatted += " " + withoutPrefix.slice(5, 7);
  if (withoutPrefix.length > 7) formatted += " " + withoutPrefix.slice(7, 9);

  return formatted;
}

function fieldWrapClass(hasError) {
  return `group relative block overflow-hidden rounded-2xl border bg-[var(--bg-alt)] px-4 py-3 transition ${
    hasError ? "border-red-400" : "border-line hover:border-primary/40"
  }`;
}

export default function SurveyForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const availableTeachers = useMemo(() => {
    if (!formData.course) return [];
    return COURSE_TEACHER_MAP[formData.course] ?? DEFAULT_TEACHERS;
  }, [formData.course]);

  const selectedCourse = COURSES?.find(
    (course) => course.name === formData.course,
  );
  const selectedShift = SHIFTS?.find((shift) => shift.value === formData.shift);

  function handleChange(e) {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(value) }));
      return;
    }

    if (name === "course") {
      setFormData((prev) => ({ ...prev, course: value, teacher: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!formData.fio.trim()) nextErrors.fio = "F.I.O ni kiriting";
    if (formData.phone.replace(/\D/g, "").length < 12)
      nextErrors.phone = "Telefon raqamni to'liq kiriting";
    if (!formData.course) nextErrors.course = "Kursni tanlang";
    if (!formData.teacher) nextErrors.teacher = "O'qituvchini tanlang";
    if (!formData.shift) nextErrors.shift = "Smena tanlang";
    if (!formData.topic.trim()) nextErrors.topic = "Hozirgi mavzuni kiriting";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setStatus(null);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData(initialFormState);
      setErrors({});

      setTimeout(() => {
        setStatus(null);
      }, 4000);
    } catch (error) {
      console.error("Xatolik:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="survey"
      className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-fog dark:bg-void-soft"
    >
      <div className="mesh-orb w-[380px] h-[380px] -top-24 right-10 bg-accent/10" />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card rounded-[2rem] p-8 !translate-y-0 hover:!translate-y-0">
          <div className="mb-8">
            <span className="eyebrow uppercase tracking-[0.3em]">
              So'rovnoma
            </span>
            <h2 className="mt-4 text-3xl font-display font-extrabold text-ink dark:text-white sm:text-4xl">
              O'quvchi ma'lumotlarini kiriting
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-body-muted sm:text-base">
              Kurs, o'qituvchi va dars vaqtini tanlab, hozirgi mavzu bo'yicha
              ma'lumot yuboring.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={fieldWrapClass(!!errors.fio)}>
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-body-muted">
                    <User className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    name="fio"
                    value={formData.fio}
                    onChange={handleChange}
                    placeholder="F.I.O"
                    className="w-full border-0 bg-transparent pl-12 text-sm text-ink dark:text-white outline-none placeholder:text-body-muted"
                  />
                </label>
                {errors.fio && (
                  <p className="mt-1 ml-3 text-xs text-red-500">{errors.fio}</p>
                )}
              </div>

              <div>
                <label className={fieldWrapClass(!!errors.phone)}>
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-body-muted">
                    <Phone className="h-5 w-5" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+998 90 123 45 67"
                    className="w-full border-0 bg-transparent pl-12 text-sm text-ink dark:text-white outline-none placeholder:text-body-muted"
                  />
                </label>
                {errors.phone && (
                  <p className="mt-1 ml-3 text-xs text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={fieldWrapClass(!!errors.course)}>
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-body-muted">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full border-0 bg-transparent pl-12 text-sm text-ink dark:text-white outline-none focus:ring-0 cursor-pointer"
                    style={{ colorScheme: "inherit" }}
                  >
                    <option value="">Kursni tanlang</option>
                    {COURSES?.map((course) => (
                      <option
                        key={course.id || course.name}
                        value={course.name}
                      >
                        {course.name}
                      </option>
                    ))}
                  </select>
                </label>
                {errors.course && (
                  <p className="mt-1 ml-3 text-xs text-red-500">
                    {errors.course}
                  </p>
                )}
              </div>

              <div>
                <label className={fieldWrapClass(!!errors.teacher)}>
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-body-muted">
                    <UserCheck className="h-5 w-5" />
                  </span>
                  <select
                    name="teacher"
                    value={formData.teacher}
                    onChange={handleChange}
                    disabled={!formData.course}
                    className="w-full border-0 bg-transparent pl-12 text-sm text-ink dark:text-white outline-none focus:ring-0 disabled:text-body-muted cursor-pointer"
                    style={{ colorScheme: "inherit" }}
                  >
                    <option value="">
                      {formData.course
                        ? "O'qituvchini tanlang"
                        : "Avval kurs tanlang"}
                    </option>
                    {availableTeachers.map((teacher) => (
                      <option key={teacher} value={teacher}>
                        {teacher}
                      </option>
                    ))}
                  </select>
                </label>
                {errors.teacher && (
                  <p className="mt-1 ml-3 text-xs text-red-500">
                    {errors.teacher}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={fieldWrapClass(!!errors.shift)}>
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-body-muted">
                    <Clock3 className="h-5 w-5" />
                  </span>
                  <select
                    name="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    className="w-full border-0 bg-transparent pl-12 text-sm text-ink dark:text-white outline-none focus:ring-0 cursor-pointer"
                    style={{ colorScheme: "inherit" }}
                  >
                    <option value="">Smena tanlang</option>
                    {SHIFTS?.map((shift) => (
                      <option key={shift.id || shift.value} value={shift.value}>
                        {shift.value}
                      </option>
                    ))}
                  </select>
                </label>
                {errors.shift && (
                  <p className="mt-1 ml-3 text-xs text-red-500">
                    {errors.shift}
                  </p>
                )}
              </div>

              <div>
                <label className={fieldWrapClass(!!errors.topic)}>
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-body-muted">
                    <FileText className="h-5 w-5" />
                  </span>
                  <input
                    type="text"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    placeholder="Hozirgi mavzu"
                    className="w-full border-0 bg-transparent pl-12 text-sm text-ink dark:text-white outline-none placeholder:text-body-muted"
                  />
                </label>
                {errors.topic && (
                  <p className="mt-1 ml-3 text-xs text-red-500">
                    {errors.topic}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Yuborilmoqda...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Yuborish
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-center text-sm font-medium text-primary-dark dark:text-primary animate-fadeIn">
                  🎉 Ma'lumotlaringiz muvaffaqiyatli yuborildi!
                </div>
              )}
              {status === "error" && (
                <div className="rounded-2xl border border-red-300 bg-red-50 dark:bg-red-500/10 px-4 py-3 text-center text-sm font-medium text-red-700 dark:text-red-300 animate-fadeIn">
                  ❌ Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.
                </div>
              )}
            </div>
          </form>
        </div>

        <aside className="rounded-[2rem] border border-line bg-void p-8 text-white shadow-card">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary-light">
            <BookOpen className="h-7 w-7" />
          </div>
          <div className="mt-7 space-y-5">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-accent">
                Tanlangan kurs
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {selectedCourse?.name ?? "Kurs tanlanmadi"}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-accent">
                Smena
              </p>
              <p className="mt-3 text-lg font-mono font-semibold text-white">
                {selectedShift?.time ??
                  selectedShift?.value ??
                  "Vaqt tanlanmadi"}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-accent">
                Mos o'qituvchi
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {availableTeachers.length > 0
                  ? availableTeachers.join(" / ")
                  : "O'qituvchi tanlanmadi"}
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-2xl bg-void-surface p-5 text-sm leading-6 text-white/70 ring-1 ring-white/10">
            <p className="font-semibold text-white">Yordamchi eslatma</p>
            <p className="mt-3">
              Har bir kurs tanlangandan keyin mos o'qituvchi avtomatik ravishda
              filtrlanadi. Ma'lumotlar to'g'riligiga ishonch hosil qiling.
            </p>
          </div>
        </aside>
      </div>

      {status === "success" && (
        <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 transition-all duration-300">
          <div className="flex items-center gap-3.5 rounded-2xl bg-void px-5 py-3.5 text-white shadow-2xl ring-1 ring-white/10 max-w-md w-full sm:w-auto">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-void">
              <CheckCircle2 className="h-5 w-5 stroke-[2.5]" />
            </div>
            <div className="text-left">
              <h4 className="text-sm font-bold leading-tight text-white sm:text-base">
                Arizangiz muvaffaqiyatli qabul qilindi!
              </h4>
              <p className="mt-0.5 text-xs font-medium text-white/70">
                Tez orada siz bilan bog'lanamiz.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
