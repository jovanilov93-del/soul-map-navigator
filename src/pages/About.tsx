import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";
import portraitImage from "@/assets/elizabeta-portrait.jpg";

const About = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-24 overflow-hidden">
        <StarField />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <img src={portraitImage} alt="Елизабета" loading="lazy" width={768} height={1024} className="w-40 h-40 rounded-full object-cover mx-auto mb-8 border-2 border-gold/30 shadow-xl" />
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-cream mb-4">Елизабета</h1>
          <p className="text-cream/60 font-heading text-xl italic max-w-lg mx-auto">
            "Ѕвездите не одредуваат — тие осветлуваат."
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Мојата приказна</p>
            <h2 className="font-heading text-4xl font-bold mb-6">Патување низ симболите</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Моето патување со астрологијата започна пред повеќе од 10 години, инспирирана од желбата да разберам зошто
              луѓето се однесуваат на одредени начини и зошто одредени периоди од животот носат различни предизвици.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Годините на учење, истражување и работа со клиенти ми покажаа дека астрологијата не е за предвидување —
              туку за разбирање. Секоја натална карта е уникатна мапа на потенцијалот и предизвиците.
            </p>
          </div>
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Филозофија</p>
            <h2 className="font-heading text-4xl font-bold mb-6">Пристап</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Работам со психолошка астрологија — пристап кој ги спојува древните симболи со модерното разбирање на
              човечката психа. Без суеверија, без страшење — само искреност и длабочина.
            </p>
            <div className="mt-8 space-y-4">
              {["10+ години искуство", "500+ анализи", "Психолошки пристап", "Индивидуален фокус"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
