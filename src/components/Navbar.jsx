import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const BASE_URL = import.meta.env.BASE_URL;

const LINKS = [
  { href: "#kurslar", label: "Kurslar" },
  { href: "#jadval", label: "Dars vaqtlari" },
  { href: "#team", label: "Jamoa" },
  { href: "#ariza", label: "Ariza" },
  { href: "#aloqa", label: "Aloqa" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 dark:bg-void/85 backdrop-blur-md border-b border-line shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16 md:h-[68px]" : "h-16 md:h-20"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={`${BASE_URL}logo.png`}
              srcSet={`${BASE_URL}logo.png 1x, ${BASE_URL}logo@2x.png 2x`}
              alt="IT SCHOOL MINGBULOQ"
              className="h-9 w-auto md:h-10"
            />
            <span className="leading-tight">
              <span className="block font-display font-extrabold tracking-tight text-lg text-ink dark:text-white">
                IT SCHOOL
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.18em] text-muted -mt-0.5">
                MINGBULOQ
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-ink/80 dark:text-white/75">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative hover:text-primary dark:hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-growth-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#ariza"
              className="btn-primary inline-flex items-center gap-1.5 text-sm px-4 py-2.5 rounded-full focus-ring"
            >
              Arizangizni qoldiring
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Menyuni ochish"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-ink dark:text-white focus-ring"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-paper dark:bg-void border-t border-line shadow-card">
          <nav className="flex flex-col px-5 py-4 gap-1 text-[15px] font-medium text-ink/85 dark:text-white/85">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-2.5 px-2 rounded-lg hover:bg-fog dark:hover:bg-void-surface"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ariza"
              onClick={closeMenu}
              className="btn-primary mt-2 inline-flex items-center justify-center gap-1.5 text-center py-3 rounded-full"
            >
              Arizangizni qoldiring
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
