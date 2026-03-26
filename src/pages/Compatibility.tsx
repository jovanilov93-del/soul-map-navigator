import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import { Heart } from "lucide-react";

const Compatibility = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(228 75% 8%) 0%, hsl(340 30% 20%) 50%, hsl(228 30% 30%) 100%)" }}>
        <StarField />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Heart className="w-12 h-12 text-rose-soft mx-auto mb-6" />
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-cream mb-4">Компатибилност</h1>
          <p className="text-cream/60 text-lg max-w-md mx-auto mb-8">
            Открij ја хемијата меѓу вас двајца преку синастрија — астрологија на односите.
          </p>
          <Button variant="hero" asChild>
            <Link to="/booking">Провери компатибилност</Link>
          </Button>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold mb-6 text-center">Што е синастрија?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-center">
            Синастријата е споредба на две натални карти за да се види како двајца луѓе се поврзуваат на емоционално, менатлно и физичко ниво. Не е за „совршен пар" — туку за разбирање на динамиката.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            {["Емоционална врска", "Комуникација", "Физичка хемија"].map((t) => (
              <div key={t} className="card-service text-center">
                <h3 className="font-heading text-lg font-semibold">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-4">Сакаш да дознаеш повеќе?</h2>
          <p className="text-muted-foreground mb-8">Синастријата е достапна за 80€ со PDF + консултација.</p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/booking">Резервирај</Link>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Compatibility;
