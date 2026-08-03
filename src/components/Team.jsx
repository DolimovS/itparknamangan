import React from "react";
import {
  Instagram,
  Send,
  Globe,
  Code2,
  BookOpen,
  FileText,
  Cpu,
  Terminal,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const teamMembers = [
  {
    id: 1,
    name: "Samandar",
    role: "Mentor",
    speciality: "Kompyuter Savodxonligi (Intensiv & Standart)",
    description:
      "Intensiv va standart guruhlar uchun mustahkam kompyuter savodxonligini o'rgatadi.",
    telegram: "https://t.me/ITSCHOOL_MINGBULOQ",
    instagram:
      "https://www.instagram.com/it_park_mingbuloq?igsh=b3Q5MW5qN2NxODJ6",
    initials: "S",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    badgeGroup: "office",
  },
  {
    id: 2,
    name: "Muqaddam",
    role: "Mentor",
    speciality: "Kompyuter Savodxonligi",
    description:
      "Amaliy mashg'ulotlar va loyiha asosida kompyuter ko'nikmalarini rivojlantiradi.",
    telegram: "https://t.me/ITSCHOOL_MINGBULOQ",
    instagram:
      "https://www.instagram.com/it_park_mingbuloq?igsh=b3Q5MW5qN2NxODJ6",
    initials: "M",
    badgeGroup: "office",
  },
  {
    id: 3,
    name: "Abdulaziz",
    role: "Til o'qituvchisi",
    speciality: "Ingliz Tili",
    description:
      "Til o'quvlarini interaktiv metodlar bilan yetkazadi va muloqotni osonlashtiradi.",
    telegram: "https://t.me/ITSCHOOL_MINGBULOQ",
    image:"../../public/abdulaziz.jpg",
    instagram:
      "https://www.instagram.com/it_park_mingbuloq?igsh=b3Q5MW5qN2NxODJ6",
    initials: "A",
    badgeGroup: "language",
  },
  {
    id: 4,
    name: "Tohirjon",
    role: "Mentor",
    speciality: "Python Dasturlash",
    description:
      "Python va amaliy loyihalar yordamida dasturlashni qulay va tushunarli qiladi.",
    telegram: "https://t.me/ITSCHOOL_MINGBULOQ",
    instagram:
      "https://www.instagram.com/it_park_mingbuloq?igsh=b3Q5MW5qN2NxODJ6",
    initials: "T",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
    badgeGroup: "python",
  },
  {
    id: 5,
    name: "Behruz",
    role: "Mentor",
    speciality: "Frontend Dasturlash",
    description:
      "React va zamonaviy web-dasturlash bo'yicha kreativ hamda amaliy darslar olib boradi.",
    telegram: "https://t.me/ITSCHOOL_MINGBULOQ",
    instagram:
      "https://www.instagram.com/it_park_mingbuloq?igsh=b3Q5MW5qN2NxODJ6",
    initials: "B",
    badgeGroup: "frontend",
  },
  {
    id: 6,
    name: "Bahodir",
    role: "Direktor",
    speciality: "Markaz Strategiyasi va Innovatsiya",
    description:
      "Loyiha yo'nalishini belgilaydi, menejmentni yetaklaydi va markazni rivojlantiradi.",
    telegram: "https://t.me/ITSCHOOL_MINGBULOQ",
    instagram:
      "https://www.instagram.com/it_park_mingbuloq?igsh=b3Q5MW5qN2NxODJ6",
    initials: "B",
    image:
      "../../public/Bahodir.jpg",
    badgeGroup: "lead",
    vip: true,
  },
  {
    id: 7,
    name: "Ziyoda",
    role: "Administrator",
    speciality: "Ma'muriyat va O'quvchilarga xizmat",
    description:
      "Markazning kundalik ishlari va o'quvchilar bilan aloqalarni muvofiqlashtiradi.",
    telegram: "https://t.me/ITSCHOOL_MINGBULOQ",
    instagram:
      "https://www.instagram.com/it_park_mingbuloq?igsh=b3Q5MW5qN2NxODJ6",
    initials: "Z",
    badgeGroup: "admin",
  },
  {
    id: 7,
    name: "Sadoqat",
    role: "Administrator",
    speciality: "Ma'muriyat va O'quvchilarga xizmat",
    description:
      "Markazning kundalik ishlari va o'quvchilar bilan aloqalarni muvofiqlashtiradi.",
    telegram: "https://t.me/ITSCHOOL_MINGBULOQ",
      image:"../../public/sadoqat.jpg", 
    instagram:
      "https://www.instagram.com/it_park_mingbuloq?igsh=b3Q5MW5qN2NxODJ6",
    initials: "Z",
    badgeGroup: "admin",
  }
];

const badgeConfigs = {
  office: [
    { label: "W", color: "bg-sky-500/15 text-sky-600 dark:text-sky-300" },
    { label: "X", color: "bg-primary/15 text-primary-dark dark:text-primary" },
    { label: "P", color: "bg-spark/15 text-amber-700 dark:text-spark" },
  ],
  python: [
    { icon: Code2, color: "bg-primary/15 text-primary-dark dark:text-primary" },
    { icon: Cpu, color: "bg-ink/10 dark:bg-white/10 text-ink dark:text-white" },
  ],
  language: [
    { icon: Globe, color: "bg-sky-500/15 text-sky-700 dark:text-sky-300" },
    { icon: BookOpen, color: "bg-primary/10 text-primary-dark dark:text-primary" },
  ],
  lead: [
    { label: "VIP", color: "bg-spark/15 text-amber-700 dark:text-spark" },
    { icon: Terminal, color: "bg-primary/10 text-primary-dark dark:text-primary" },
  ],
  frontend: [
    { icon: BookOpen, color: "bg-sky-500/15 text-sky-700 dark:text-sky-300" },
    { icon: Code2, color: "bg-primary/15 text-primary-dark dark:text-primary" },
  ],
  admin: [
    { icon: FileText, color: "bg-ink/10 dark:bg-white/10 text-ink dark:text-white" },
    { icon: Globe, color: "bg-primary/10 text-primary-dark dark:text-primary" },
  ],
};

function renderBadge(item, index) {
  if (item.icon) {
    const Icon = item.icon;
    return (
      <span
        key={index}
        className={`inline-flex h-8 min-w-[2rem] items-center justify-center rounded-2xl border border-line px-3 text-xs font-semibold ${item.color}`}
      >
        <Icon className="h-4 w-4" />
      </span>
    );
  }

  return (
    <span
      key={index}
      className={`inline-flex h-8 min-w-[2rem] items-center justify-center rounded-2xl border border-line px-3 text-xs font-semibold ${item.color}`}
    >
      {item.label}
    </span>
  );
}

function TeamCard({ member }) {
  return (
    <article
      className={`card group relative overflow-hidden p-6 ${
        member.vip ? "!border-2 !border-spark/50" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-x-4 top-0 h-40 rounded-[2rem] bg-growth-gradient-soft blur-2xl" />
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full bg-primary/10 blur-2xl" />

      {member.vip && (
        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-spark/40 bg-spark/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.3em] text-amber-700 dark:text-spark shadow-sm">
          VIP Lead
        </div>
      )}

      <div className="relative z-10 mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-line bg-fog dark:bg-void-surface text-ink dark:text-white shadow-xl">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <span className="text-4xl font-semibold">{member.initials}</span>
        )}
      </div>

      <div className="relative z-10 mt-6 text-center">
        <span className="inline-flex items-center rounded-full bg-ink/5 dark:bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-body-muted">
          {member.role}
        </span>
        <h3 className="mt-4 text-xl font-display font-semibold text-ink dark:text-white">
          {member.name}
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          {member.speciality}
        </p>
        <p className="mt-4 text-sm leading-6 text-body-muted">
          {member.description}
        </p>
      </div>

      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-3">
        {(badgeConfigs[member.badgeGroup] || []).map(renderBadge)}
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-center gap-3">
        <a
          href={member.telegram}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} Telegram`}
          className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-ink/5 dark:bg-white/10 text-body-muted transition duration-300 hover:bg-primary/15 hover:text-primary-dark dark:hover:text-primary"
        >
          <Send className="h-5 w-5" />
        </a>
        <a
          href={member.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label={`${member.name} Instagram`}
          className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-ink/5 dark:bg-white/10 text-body-muted transition duration-300 hover:bg-fuchsia-500/15 hover:text-fuchsia-600 dark:hover:text-fuchsia-300"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-paper dark:bg-void"
    >
      <div className="mesh-orb w-[420px] h-[420px] -top-40 left-1/3 bg-primary/10" />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="eyebrow uppercase tracking-[0.32em]">Bizning jamoa</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-body-muted sm:text-base">
            Har bir a'zo o'z yo'nalishida izchillik, zamonaviylik va yuqori
            bilim bilan ajralib turadi.
          </p>
        </div>

        <div className="overflow-hidden w-full">
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
              1200: { slidesPerView: 3 },
            }}
            className="team-swiper swiper-custom !px-4 !py-6"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className="h-auto">
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
