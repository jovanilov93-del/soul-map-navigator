import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Дома", href: "/" },
  { label: "За мене", href: "/about" },
  { label: "Услуги", href: "/services" },
  { label: "Астрологија", href: "/astrology" },
  { label: "Компатибилност", href: "/compatibility" },
  { label: "Контакт", href: "/contact" },
];

const facebookUrl = "https://facebook.com/profile.php?id=61576409987372";
const instagramUrl = "https://instagram.com/whisperingstars.mk";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmic-deep/90 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-heading text-2xl font-bold text-gold tracking-wide">
          Шепотот на ѕвездите
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-gold"
                  : "text-cream/70 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-cream/70 hover:text-gold transition-colors" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-cream/70 hover:text-gold transition-colors" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <Button variant="gold" size="sm" asChild>
            <Link to="/booking">Резервирај</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream/80"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cosmic-deep/95 backdrop-blur-md border-t border-gold/10 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-gold/5 ${
                location.pathname === link.href
                  ? "text-gold"
                  : "text-cream/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 mt-4">
            <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-cream/70 hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-cream/70 hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
          <Button variant="gold" size="sm" className="mt-4 w-full" asChild>
            <Link to="/booking" onClick={() => setOpen(false)}>Резервирај</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
