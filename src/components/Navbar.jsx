import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const LINKS = [
  { href: '#kurslar', label: 'Kurslar' },
  { href: '#jadval', label: 'Dars vaqtlari' },
  { href: '#ariza', label: 'Ariza' },
  { href: '#aloqa', label: 'Aloqa' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16 md:h-[68px]' : 'h-16 md:h-20'
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              srcSet="/logo.png 1x, /logo@2x.png 2x"
              alt="IT SCHOOL MINGBULOQ"
              className="h-9 w-auto md:h-10"
            />
            <span className="leading-tight">
              <span className="block font-display font-extrabold tracking-tight text-lg text-ink">
                IT SCHOOL
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.18em] text-muted -mt-0.5">
                MINGBULOQ
              </span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-ink/80">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#ariza"
            className="hidden md:inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors focus-ring"
          >
            Arizangizni qoldiring
          </a>

          <button
            aria-label="Menyuni ochish"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg focus-ring"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-line shadow-card">
          <nav className="flex flex-col px-5 py-4 gap-1 text-[15px] font-medium text-ink/85">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-2.5 px-2 rounded-lg hover:bg-fog"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ariza"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-1.5 text-center bg-primary text-white font-semibold py-3 rounded-full"
            >
              Arizangizni qoldiring
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
