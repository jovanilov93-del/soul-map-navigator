import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const facebookUrl = "https://facebook.com/profile.php?id=61576409987372";
const instagramUrl = "https://instagram.com/whisperingstars.mk";
const whatsappUrl = "https://wa.me/38970000000";
const viberUrl = "viber://chat?number=%2B38970000000";

const Footer = () => {
  return (
    <footer className="bg-cosmic-deep border-t border-gold/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">Шепотот на ѕвездите</h3>
            <p className="text-cream/50 text-sm leading-relaxed">
              Персонална астрологија за оние кои сакаат да се разберат себе си подлабоко.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-cream/70 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-cream/70 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={viberUrl} className="text-cream/70 hover:text-gold transition-colors" aria-label="Viber">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg text-cream mb-4">Навигација</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Дома", href: "/" },
                { label: "За мене", href: "/about" },
                { label: "Услуги", href: "/services" },
                { label: "Контакт", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="text-cream/50 text-sm hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg text-cream mb-4">Контакт</h4>
            <p className="text-cream/50 text-sm">info@shepotot.mk</p>
            <p className="text-cream/50 text-sm mt-2">Instagram: @whisperingstars.mk</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-gold text-sm mt-3 inline-block hover:text-gold-light transition-colors">
              Пиши на WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-gold/10 mt-12 pt-8 text-center">
          <p className="text-cream/30 text-xs">© 2026 Шепотот на ѕвездите. Сите права задржани.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
