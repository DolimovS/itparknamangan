import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  MonitorPlay,
  Globe,
  Code2,
} from "lucide-react";
import { COURSES } from "../data/courses";
import { useReveal } from "../hooks/useReveal";

const ICONS = {
  "kompyuter-intensiv": MonitorPlay,
  "kompyuter-standart": MonitorPlay,
  "ingliz-tili": Globe,
  frontend: Code2,
};

function CourseCard({ course, onSelect }) {
  const revealRef = useReveal();
  const Icon = ICONS[course.id] ?? MonitorPlay;

  return (
    <div
      ref={revealRef}
      className={`reveal group flex flex-col justify-between bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover relative ${
        course.featured
          ? "border-2 border-primary/70"
          : "border border-line hover:border-primary/30"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
            course.featured ? "bg-primary" : "bg-accent-soft"
          }`}
        >
          <Icon
            size={20}
            color={course.featured ? "#ffffff" : "#0E6E4E"}
            strokeWidth={1.8}
          />
        </div>

        {course.featured && (
          <span className="ml-4 text-[11px] font-bold px-3 py-1 rounded-full tracking-wide bg-primary text-white shadow-sm self-start">
            MASHHUR
          </span>
        )}
      </div>

      <h3 className="font-display font-bold text-ink text-lg mt-4">
        {course.title}
      </h3>
      <p className="text-primary text-sm font-semibold mt-0.5">{course.tag}</p>
      <ul className="text-sm text-muted mt-4 space-y-2">
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          {course.duration}
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
          {course.frequency}
        </li>
      </ul>

      <div className="mt-6 pt-5 border-t border-line">
        <p className="font-display font-extrabold text-ink text-xl">
          {course.price ? (
            <>
              {course.price}{" "}
              <span className="text-sm font-semibold text-muted">
                {course.priceUnit}
              </span>
            </>
          ) : (
            "Narxi so'ralsin"
          )}
        </p>
        <button
          onClick={() => onSelect(course.optionLabel)}
          className={`mt-4 w-full inline-flex items-center justify-center gap-1.5 font-semibold text-sm py-3 rounded-full transition-colors focus-ring ${
            course.featured
              ? "bg-primary hover:bg-primary-dark text-white"
              : "bg-fog hover:bg-primary hover:text-white text-ink"
          }`}
        >
          Ro'yxatdan o'tish
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

export default function Courses({ onSelectCourse }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const headingRef = useReveal();

  const handleSelect = (optionLabel) => {
    onSelectCourse(optionLabel);
    const target = document.getElementById("ariza");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      document.getElementById("fullName")?.focus({ preventScroll: true });
    }, 500);
  };

  const hasMoreCourses = COURSES.length > 3;

  return (
    <section id="kurslar" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={headingRef} className="reveal max-w-xl">
          <span className="text-primary font-semibold text-sm tracking-wide">
            Yo'nalishlar
          </span>
          <h2 className="font-display font-bold text-ink text-3xl md:text-[2.5rem] mt-3 tracking-tight">
            Kurslar va narxlar
          </h2>
          <p className="text-muted mt-3 leading-relaxed">
            O'zingizga mos yo'nalishni tanlang — har bir kurs amaliyotga
            yo'naltirilgan va kichik guruhlarda olib boriladi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {COURSES.map((course, index) => (
            <div
              key={course.id}
              className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden md:overflow-visible ${
                index >= 3
                  ? isExpanded
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                  : "max-h-[2000px] opacity-100"
              }`}
            >
              <CourseCard course={course} onSelect={handleSelect} />
            </div>
          ))}
        </div>

        {hasMoreCourses && (
          <div className="mt-6 md:hidden">
            <button
              type="button"
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded((prev) => !prev)}
              className="mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:brightness-110 active:scale-95 focus-ring"
            >
              <span>
                {isExpanded
                  ? "Yashirish"
                  : `Barcha kurslarni ko'rish (${COURSES.length})`}
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
