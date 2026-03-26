import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cosmic-deep border-t border-gold/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">Елизабета</h3>
            <p className="text-cream/50 text-sm leading-relaxed">
              Персонална астрологија за оние кои сакаат да се разберат себе си подлабоко.
            </p>
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
            <p className="text-cream/50 text-sm">info@elizabeta-astro.com</p>
            <p className="text-cream/50 text-sm mt-2">Instagram: @elizabeta.astro</p>
          </div>
        </div>
        <div className="border-t border-gold/10 mt-12 pt-8 text-center">
          <p className="text-cream/30 text-xs">© 2026 Елизабета Астрологија. Сите права задржани.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
