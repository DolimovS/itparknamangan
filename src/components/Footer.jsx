import { Phone, MapPin, Send, Instagram } from "lucide-react";
import { CONTACT } from "../data/config";

const BASE_URL = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer
      id="aloqa"
      className="pt-16 pb-8 mt-6 bg-void text-white transition-colors"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <a
              href="#top"
              className="inline-flex bg-white rounded-2xl px-5 py-4"
            >
              <img
                src="/logo-full.png"
                srcSet="/logo-full.png 1x, /logo-full@2x.png 2x"
                alt="IT SCHOOL MINGBULOQ"
                className="h-20 w-auto"
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed mt-4 max-w-xs">
              Kompyuter savodxonligi, dasturlash va xorijiy tillar bo'yicha
              amaliy ta'lim markazi.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-void flex items-center justify-center transition-colors"
              >
                <Send size={18} />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-void flex items-center justify-center transition-colors"
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
                <a
                  href={CONTACT.phoneHref}
                  className="hover:text-primary transition-colors font-mono"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="shrink-0 text-accent mt-0.5" />
                <span className="text-white/70">{CONTACT.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wide text-white/50 uppercase">
              Joylashuv
            </h4>
            <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] bg-white/5">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2868.1424510510246!2d71.45964099999999!3d40.862151000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sru!2s!4v1785949911183!5m2!1sru!2s"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} IT SCHOOL MINGBULOQ. Barcha huquqlar
            himoyalangan.
          </p>
          <p>Zamonaviy bilim va yangi imkoniyatlar sari.</p>
        </div>
      </div>
    </footer>
  );
}
