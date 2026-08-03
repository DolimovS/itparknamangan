import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowRight, MonitorPlay, Globe, Code2 } from "lucide-react";
import { COURSES } from "../data/courses";
import { useReveal } from "../hooks/useReveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ICONS = {
  "kompyuter-intensiv": MonitorPlay,
  "kompyuter-standart": MonitorPlay,
  "ingliz-tili": Globe,
  "turk-tili": Globe,
  frontend: Code2,
  python: Code2,
  matematika: MonitorPlay,
};

function CourseCard({ course, onSelect }) {
  const revealRef = useReveal();
  const Icon = ICONS[course.id] ?? MonitorPlay;

  return (
    <div
      ref={revealRef}
      className={`reveal card group flex flex-col justify-between w-full h-full p-6 relative ${
        course.featured ? "!border-2 !border-primary/60" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${
            course.featured
              ? "btn-primary text-ink"
              : "bg-primary/10 dark:bg-primary/15 text-primary-dark dark:text-primary"
          }`}
        >
          <Icon size={22} strokeWidth={1.8} />
        </div>

        {course.featured && (
          <span className="ml-4 text-[11px] font-bold px-3 py-1 rounded-full tracking-wide bg-growth-gradient text-ink shadow-sm self-start">
            MASHHUR
          </span>
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-display font-bold text-ink dark:text-white text-xl">
          {course.title}
        </h3>
        <p className="text-primary text-sm font-semibold mt-1">{course.tag}</p>
      </div>

      <ul className="text-sm text-body-muted mt-6 space-y-3">
        <li className="flex items-center gap-3">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          {course.duration}
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          {course.frequency}
        </li>
      </ul>

      <div className="w-full mt-auto pt-6 border-t border-line">
        <p className="font-mono font-extrabold text-ink dark:text-white text-2xl">
          {course.price ? (
            <>
              {course.price}{" "}
              <span className="text-sm font-sans font-semibold text-body-muted">
                {course.priceUnit}
              </span>
            </>
          ) : (
            "Narxi so'ralsin"
          )}
        </p>

        <button
          onClick={() => onSelect(course.optionLabel)}
          className={`mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-ring ${
            course.featured
              ? "btn-primary"
              : "bg-fog dark:bg-void-surface text-ink dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-void"
          }`}
        >
          Ro'yxatdan o'tish
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

export default function Courses({ onSelectCourse }) {
  const headingRef = useReveal();

  const handleSelect = (optionLabel) => {
    onSelectCourse(optionLabel);
    const target = document.getElementById("ariza");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      document.getElementById("fullName")?.focus({ preventScroll: true });
    }, 500);
  };

  return (
    <section id="kurslar" className="py-20 md:py-28 bg-paper dark:bg-void">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div ref={headingRef} className="reveal max-w-xl">
          <span className="eyebrow">Yo'nalishlar</span>
          <h2 className="font-display font-bold text-ink dark:text-white text-3xl md:text-[2.5rem] mt-3 tracking-tight">
            Kurslar va narxlar
          </h2>
          <p className="text-body-muted mt-3 leading-relaxed">
            O'zingizga mos yo'nalishni tanlang — har bir kurs amaliyotga
            yo'naltirilgan va kichik guruhlarda olib boriladi.
          </p>
        </div>

        <div className="mt-12 overflow-hidden w-full">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={28}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper-custom !px-4 !py-6"
          >
            {COURSES.map((course) => (
              <SwiperSlide key={course.id} className="h-full">
                <CourseCard course={course} onSelect={handleSelect} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
