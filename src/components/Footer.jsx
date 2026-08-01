import { Phone, MapPin, Send, Instagram } from 'lucide-react'
import { CONTACT } from '../data/config'

export default function Footer() {
  return (
    <footer id="aloqa" className="bg-ink text-white pt-16 pb-8 mt-6">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <a href="#top" className="inline-flex bg-white rounded-2xl px-5 py-4">
              <img
                src="/logo-full.png"
                srcSet="/logo-full.png 1x, /logo-full@2x.png 2x"
                alt="IT SCHOOL MINGBULOQ"
                className="h-20 w-auto"
              />
            </a>
            <p className="text-white/60 text-sm leading-relaxed mt-4 max-w-xs">
              Kompyuter savodxonligi, dasturlash va xorijiy tillar bo'yicha amaliy ta'lim markazi.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Send size={18} />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wide text-white/50 uppercase">
              Aloqa
            </h4>
            <ul className="mt-4 space-y-3 text-[15px] text-white/85">
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href={CONTACT.phoneHref} className="hover:text-primary transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="shrink-0 text-accent mt-0.5" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wide text-white/50 uppercase">
              Joylashuv
            </h4>
            <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-white/5 flex items-center justify-center">
              {/* Google Maps / Yandex Maps iframe shu yerga joylashtiriladi, masalan:
                  <iframe src="https://www.google.com/maps/embed?..." className="w-full h-full" loading="lazy" /> */}
              <div className="text-center text-white/40 text-sm px-6">
                <MapPin size={26} className="mx-auto mb-2 text-accent" />
                Google Maps / Yandex Maps xaritasi shu joyga o'rnatiladi
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} IT SCHOOL MINGBULOQ. Barcha huquqlar himoyalangan.</p>
          <p>Zamonaviy bilim va yangi imkoniyatlar sari.</p>
        </div>
      </div>
    </footer>
  )
}
