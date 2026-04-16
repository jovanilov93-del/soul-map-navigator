import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden gradient-hero pt-24 pb-16">
          <StarField />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
            <p className="text-gold/80 font-body text-sm tracking-[0.3em] uppercase mb-4">Страница не е пронајдена</p>
            <h1 className="font-heading text-6xl md:text-7xl font-bold text-cream leading-[1.05] mb-6">404</h1>
            <p className="text-cream/60 text-lg leading-relaxed mb-10 font-body">
              Оваа адреса не постои или е преместена. Ако мислиш дека е грешка, пиши ми преку контакт формата.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" asChild>
                <Link to="/">Назад дома</Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/contact">Контакт</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
