import React from "react";

// Jamoa a'zolari ro'yxati — yangi xodim qo'shish uchun shunchaki massivga
// yangi obyekt qo'shing, komponentning qolgan qismini o'zgartirish shart emas.
const teamMembers = [
  {
    id: 1,
    name: "Samandar",
    role: "Kompyuter savodxonligi",
    bio: "Kompyuter savodxonligi yo'nalishida boshlang'ich va o'rta darajadagi o'quvchilarga dars beradi.",
    image: "/images/samandar.jpg",
  },
  {
    id: 2,
    name: "Muqaddam",
    role: "Kompyuter savodxonligi",
    bio: "Kompyuter savodxonligi bo'yicha amaliy mashg'ulotlar va loyihalar ustida ishlaydi.",
    image: "/images/muqaddam.jpg",
  },
  {
    id: 3,
    name: "Abdulaziz",
    role: "Ingliz tili",
    bio: "Ingliz tilini barcha darajadagi guruhlarga qiziqarli va interaktiv metodlar orqali o'rgatadi.",
    image: "/images/abdulaziz.jpg",
  },
  {
    id: 4,
    name: "Tohirjon",
    role: "Full Stack Python",
    bio: "Python asosida Full Stack dasturlashni chuqur va amaliy loyihalar bilan o'rgatadi.",
    image: "/images/tohirjon.jpg",
  },
  {
    id: 5,
    name: "Behruz",
    role: "Web Dasturchi (JS)",
    bio: "JavaScript, React va zamonaviy web texnologiyalar bo'yicha dars beradi.",
    image: "/images/behruz.jpg",
  },
  {
    id: 6,
    name: "Bahodir",
    role: "O'qituvchi",
    bio: "Turli yo'nalishlarda o'quvchilarga bilim va ko'nikmalarni o'rgatadi.",
    image: "/images/bahodir.jpg",
  },
  {
    id: 7,
    name: "Ziyoda",
    role: "Administrator",
    bio: "O'quv markazining ma'muriy ishlari va o'quvchilar bilan bog'liq masalalarni boshqaradi.",
    image: "/images/ziyoda.jpg",
  },
];

function TeamCard({ member }) {
  return (
    <div
      className="group bg-white rounded-2xl shadow-md overflow-hidden
                 transition-all duration-300 ease-out
                 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative w-full h-56 overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/placeholder.jpg";
          }}
          className="w-full h-full object-cover transition-transform duration-500
                     group-hover:scale-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-2">{member.role}</p>
        <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Bizning Jamoa
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            IT Park Namangan jamoasi bilan tanishing — tajribali o'qituvchilar va
            ma'muriyat sizga g'amxo'rlik bilan yordam berishga tayyor.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                     gap-6 sm:gap-8"
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
