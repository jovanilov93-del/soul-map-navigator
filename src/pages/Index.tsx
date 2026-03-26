import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import heroImage from "@/assets/hero-astrology.jpg";
import portraitImage from "@/assets/elizabeta-portrait.jpg";
import { Star, Moon, Sun, Sparkles, Calendar, FileText, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

/* ─── Hero ─── */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
    <StarField />
    <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
      <div className="animate-fade-up">
        <p className="text-gold/80 font-body text-sm tracking-[0.3em] uppercase mb-4">Астролошко водство</p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream leading-[1.1] mb-6">
          Откриј го својот <span className="text-gold italic">внатрешен космос</span>
        </h1>
        <p className="text-cream/60 text-lg leading-relaxed mb-8 max-w-md font-body">
          Астрологијата не ти кажува што ќе се случи — туку ти покажува кој си.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" asChild>
            <Link to="/booking">Започни анализа</Link>
          </Button>
          <Button variant="hero-outline" asChild>
            <Link to="/services">Види услуги</Link>
          </Button>
        </div>
        <p className="text-cream/30 text-sm mt-6">Од 35€ · 10+ години искуство</p>
      </div>
      <div className="hidden lg:flex justify-end">
        <div className="relative">
          <div className="absolute -inset-4 bg-gold/5 rounded-full blur-3xl" />
          <img
            src={heroImage}
            alt="Астролошка карта и ѕвезди"
            width={1024}
            height={1024}
            className="relative rounded-2xl w-[480px] h-[480px] object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

/* ─── Services Cards ─── */
const services = [
  { icon: Sun, title: "Натална карта", desc: "Длабока анализа на твојот роден хороскоп" },
  { icon: Moon, title: "Синастрија", desc: "Компатибилност помеѓу двајца партнери" },
  { icon: Star, title: "Транзити", desc: "Актуелни планетарни влијанија врз тебе" },
  { icon: Sparkles, title: "Прогресии", desc: "Внатрешна еволуција и животни фази" },
];

const ServicesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <p className="text-gold text-sm tracking-[0.3em] uppercase text-center mb-3">Што нудам</p>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
        Астролошки услуги
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card-service group text-center glow-gold-hover cursor-pointer">
            <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
              <s.icon className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── How it works ─── */
const steps = [
  { num: "01", title: "Избираш услуга", desc: "Прегледај ги пакетите и одбери го оној што ти одговара." },
  { num: "02", title: "Закажуваш термин", desc: "Избери датум и време преку нашиот систем за резервации." },
  { num: "03", title: "Добиваш анализа", desc: "Добиваш детален PDF и/или лична консултација." },
];

const HowItWorksSection = () => (
  <section className="py-24 bg-cosmic-deep relative overflow-hidden">
    <StarField />
    <div className="container mx-auto px-4 relative z-10">
      <p className="text-gold text-sm tracking-[0.3em] uppercase text-center mb-3">Процес</p>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-cream text-center mb-16">
        Како функционира
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.num} className="text-center relative">
            <div className="text-6xl font-heading font-bold text-gold/15 mb-2">{s.num}</div>
            <h3 className="font-heading text-xl font-semibold text-cream mb-2">{s.title}</h3>
            <p className="text-cream/50 text-sm">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 -right-4 w-8 border-t border-dashed border-gold/20" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── About Preview ─── */
const AboutPreview = () => (
  <section className="py-24">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-2xl" />
        <img
          src={portraitImage}
          alt="Елизабета"
          width={768}
          height={1024}
          loading="lazy"
          className="relative rounded-2xl w-full max-w-md object-cover shadow-xl"
        />
      </div>
      <div>
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">За мене</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Елизабета</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Со повеќе од 10 години искуство во работа со астролошки симболи, мојата мисија е да ти помогнам да го разбереш
          твојот внатрешен свет — без суеверија, со длабочина и практичност.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Верувам дека астрологијата е алатка за самоспознавање, не предвидување. Секоја карта раскажува уникатна приказна.
        </p>
        <Button variant="gold-outline" asChild>
          <Link to="/about">Прочитај повеќе</Link>
        </Button>
      </div>
    </div>
  </section>
);

/* ─── Testimonials ─── */
const testimonials = [
  { name: "Марија К.", text: "Анализата ми ги отвори очите. Никогаш не мислев дека астрологијата може да биде толку длабока." },
  { name: "Ана Б.", text: "Елизабета има невероватен начин да го објасни сложеното просто. Конзултацијата беше трансформативна." },
  { name: "Стефан Д.", text: "Синастријата ни помогна да се разбереме подобро како пар. Топло препорачувам!" },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Искуства</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-16">Што велат клиентите</h2>
        <div className="max-w-2xl mx-auto relative">
          <div className="min-h-[160px]">
            <p className="font-heading text-2xl italic text-foreground/80 leading-relaxed mb-6">
              "{testimonials[current].text}"
            </p>
            <p className="text-gold font-medium">{testimonials[current].name}</p>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Final CTA ─── */
const CTASection = () => (
  <section className="py-24 bg-cosmic-deep relative overflow-hidden">
    <StarField />
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-6">
        Подготвена си да го <span className="text-gold italic">откриеш</span> својот пат?
      </h2>
      <p className="text-cream/50 text-lg mb-10 max-w-md mx-auto">
        Закажи го твојот термин и започни го патувањето кон себе.
      </p>
      <Button variant="hero" size="lg" asChild>
        <Link to="/booking">Резервирај термин</Link>
      </Button>
    </div>
  </section>
);

/* ─── Page ─── */
const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <AboutPreview />
      <TestimonialsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
