import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const serviceOptions = [
  { label: "Основна анализа – 35€", value: "basic" },
  { label: "Детална анализа – 70€", value: "detailed" },
  { label: "Премиум водство – 120€", value: "premium" },
  { label: "Синастрија – 80€", value: "synastry" },
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState("");

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Резервација</p>
            <h1 className="font-heading text-5xl font-bold mb-4">Закажи термин</h1>
          </div>

          {/* Steps indicator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= s ? "bg-gold text-cosmic-deep" : "bg-muted text-muted-foreground"
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-12 h-px ${step > s ? "bg-gold" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold mb-6 text-center">Избери услуга</h2>
              {serviceOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSelected(opt.value)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                    selected === opt.value ? "border-gold glow-gold bg-gold/5" : "border-border hover:border-gold/30"
                  }`}
                >
                  <span className="font-medium">{opt.label}</span>
                </button>
              ))}
              <Button variant="gold" className="w-full mt-6" disabled={!selected} onClick={() => setStep(2)}>
                Продолжи
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold mb-6">Избери датум</h2>
              <p className="text-muted-foreground mb-8">
                Интеграција со Calendly ќе биде додадена тука за избор на термин.
              </p>
              <div className="rounded-2xl border border-border p-12 bg-card mb-6">
                <p className="text-muted-foreground">📅 Календар за резервации</p>
              </div>
              <div className="flex gap-4">
                <Button variant="gold-outline" className="flex-1" onClick={() => setStep(1)}>Назад</Button>
                <Button variant="gold" className="flex-1" onClick={() => setStep(3)}>Продолжи</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold mb-6">Плаќање</h2>
              <p className="text-muted-foreground mb-8">
                Интеграција со Stripe / PayPal ќе биде додадена тука.
              </p>
              <div className="rounded-2xl border border-border p-12 bg-card mb-6">
                <p className="text-muted-foreground">💳 Систем за плаќање</p>
              </div>
              <div className="flex gap-4">
                <Button variant="gold-outline" className="flex-1" onClick={() => setStep(2)}>Назад</Button>
                <Button variant="gold" className="flex-1">Потврди резервација</Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Booking;
