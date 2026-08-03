# 🚀 IT School Mingbuloq — Landing Page

**IT School Mingbuloq** o'quv markazi uchun React, Vite va Tailwind CSS texnologiyalari asosida yaratilgan zamonaviy, tez ishlovchi hamda moslashuvchan (responsive) bir sahifali web-sayt.

Sayt orqali yuborilgan onlayn arizalar real vaqt rejimida **Google Sheets** jadvaliga avtomatik ravishda borib tushadi.

---

## 🛠 Ishlatilgan texnologiyalar

* **Frontend:** React.js, Vite
* **Stilizatsiya:** Tailwind CSS, Lucide Icons
* **Backend / Baza:** Google Apps Script (Google Sheets API)
* **Animatsiyalar:** Custom Scroll Reveal Hook & CSS Preloader

---

## 📌 Asosiy xususiyatlari

* ⚡ **Preloader & Logo Animatsiyasi:** Sayt ochilishida brendingiz logotipi bilan chiroyli yuklanish ekrani.
* 🎓 **Interaktiv Kurslar va Narxlar:** Har bir kurs uchun alohida kartochkalar va tezkor ro'yxatdan o'tish tugmalari.
* ⏰ **Dars vaqtlari (Smenalar):** O'quvchilar uchun qulay 4 xil smena jadvali.
* 📋 **Google Sheets Integratsiyasi:** Onlayn arizalar hech qanday qo'shimcha backend-servissiz to'g'ridan-to'g'ri Google Sheets jadvaliga saqlanadi.
* 🔔 **Custom Toast Notifications:** Arizalar muvaffaqiyatli yuborilganda foydalanuvchiga qulay bildirishnomalar ko'rsatiladi.

---

## 📁 Loyiha strukturasi

```text
public/
  logo.png            — Logotip belgisi (Navbar va Preloader uchun)
  logo-full.png       — To'liq logotip (Footer uchun)
src/
  components/
    Preloader.jsx       — Yuklanish animatsiyasi
    Navbar.jsx          — Header va navigatsiya menyusi
    Hero.jsx            — Asosiy banner va ta'rif
    Courses.jsx         — Kurslar va narxlar kartochkalari
    Schedule.jsx        — Dars vaqtlari (smenalar)
    ApplicationForm.jsx — Ariza formasi va Google Sheets yuborish logikasi
    Footer.jsx          — Aloqa va ijtimoiy tarmoqlar
    Toast.jsx           — Bildirishnoma (toast) komponenti
  context/
    ToastContext.jsx    — Toast holatini umumiy boshqarish
  hooks/
    useReveal.js        — Scroll-reveal animatsiyasi uchun maxsus hook
  data/
    courses.js          — Kurslar va smenalar haqidagi ma'lumotlar
    config.js           — SCRIPT_URL va aloqa sozlamalari# itparknamangan
