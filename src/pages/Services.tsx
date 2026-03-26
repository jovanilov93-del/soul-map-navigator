import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Headphones, Video, Star } from "lucide-react";

const packages = [
  {
    tag: null,
    title: "Основна анализа",
    price: "35€",
    color: "border-border",
    features: ["Натална карта (кратка)", "PDF (10-15 страни)", "Без консултација"],
    icon: FileText,
    highlight: false,
  },
  {
    tag: "Best Seller",
    title: "Детална анализа",
    price: "70€",
    color: "border-gold",
    features: ["Натална карта (детално)", "PDF + аудио објаснување", "30 мин консултација"],
    icon: Headphones,
    highlight: true,
  },
  {
    tag: "Premium",
    title: "Премиум водство",
    price: "120€",
    color: "border-gold/50",
    features: ["Натална + транзити", "Прогресии", "60 мин консултација", "Персонални насоки"],
    icon: Video,
    highlight: false,
  },
  {
    tag: null,
    title: "Синастрија",
    price: "80€",
    color: "border-border",
    features: ["Анализа на двајца", "PDF извештај", "30 мин консултација"],
    icon: Star,
    highlight: false,
  },
];

const Services = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Услуги и цени</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Избери го твојот пакет</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Секој пакет е дизајниран да ти донесе јасност и длабоко разбирање на себе.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`relative rounded-2xl border-2 ${pkg.color} bg-card p-8 flex flex-col transition-all duration-500 ${
                pkg.highlight ? "glow-gold scale-[1.03] lg:-mt-4 lg:mb-4" : "hover:border-gold/30 glow-gold-hover"
              }`}
            >
              {pkg.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-cosmic-deep text-xs font-bold px-4 py-1 rounded-full">
                  {pkg.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <pkg.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="font-heading text-4xl font-bold text-gold mb-6">{pkg.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant={pkg.highlight ? "gold" : "gold-outline"} className="w-full" asChild>
                <Link to="/booking">Резервирај</Link>
              </Button>
              {pkg.highlight && (
                <p className="text-xs text-muted-foreground text-center mt-3">Limited availability</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Services;
