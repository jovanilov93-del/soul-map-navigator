import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const whatsappUrl = "https://wa.me/38970000000";
  const viberUrl = "viber://chat?number=%2B38970000000";
  const facebookUrl = "https://facebook.com/profile.php?id=61576409987372";
  const instagramUrl = "https://instagram.com/whisperingstars.mk";

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Контакт</p>
            <h1 className="font-heading text-5xl font-bold mb-4">Јави се</h1>
            <p className="text-muted-foreground">Имаш прашање? Пиши ми.</p>
          </div>

          {submitted ? (
            <div className="text-center p-12 rounded-2xl border border-gold/20 bg-card">
              <p className="font-heading text-2xl text-gold mb-2">Благодарам!</p>
              <p className="text-muted-foreground">Ќе ти одговорам наскоро.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-6"
            >
              <div>
                <label className="text-sm font-medium mb-2 block">Име</label>
                <Input placeholder="Твоето име" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="email@example.com" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Порака</label>
                <Textarea placeholder="Напиши ја твојата порака..." rows={5} required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Телефон / Viber (опционално)</label>
                <Input placeholder="+389 7X XXX XXX" />
              </div>
              <Button variant="gold" className="w-full" type="submit">Испрати</Button>
            </form>
          )}

          <div className="mt-12 text-center space-y-2">
            <p className="text-muted-foreground text-sm">📧 info@shepotot.mk</p>
            <p className="text-muted-foreground text-sm">📸 @whisperingstars.mk</p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <a href={viberUrl} className="text-gold hover:text-gold-light transition-colors text-sm">Пиши ни на Viber</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="text-gold hover:text-gold-light transition-colors text-sm">Пиши на WhatsApp</a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="text-gold hover:text-gold-light transition-colors text-sm">Facebook</a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="text-gold hover:text-gold-light transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
