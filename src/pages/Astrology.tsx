import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const houses = [
  { num: "I", title: "Идентитет", desc: "Како се претставуваш пред светот, твојата појава и прв впечаток." },
  { num: "II", title: "Вредности", desc: "Материјални ресурси, самовредност и она што ти е навистина важно." },
  { num: "III", title: "Комуникација", desc: "Начин на размислување, учење, комуникација и околина." },
  { num: "IV", title: "Дом и корени", desc: "Семејство, дом, емоционална основа и потекло." },
  { num: "V", title: "Креативност", desc: "Творештво, романса, деца и радост." },
  { num: "VI", title: "Здравје и рутина", desc: "Секојдневни навики, здравје и служба." },
  { num: "VII", title: "Партнерства", desc: "Брак, деловни партнерства и односи еден-на-еден." },
  { num: "VIII", title: "Трансформација", desc: "Длабоки промени, кризи, споделени ресурси и интимност." },
  { num: "IX", title: "Филозофија", desc: "Високо образование, патувања, верувања и смисла." },
  { num: "X", title: "Кариера", desc: "Професија, јавен имиџ, амбиции и општествена улога." },
  { num: "XI", title: "Заедница", desc: "Пријателства, групи, надежи и идеали за иднината." },
  { num: "XII", title: "Потсвест", desc: "Скриени страни, духовност, изолација и колективно несвесно." },
];

const elements = [
  { name: "Оган", signs: "Овен, Лав, Стрелец", color: "bg-red-500/20 text-red-400 border-red-500/30" },
  { name: "Земја", signs: "Бик, Девица, Јарец", color: "bg-green-600/20 text-green-400 border-green-600/30" },
  { name: "Воздух", signs: "Близнаци, Вага, Водолија", color: "bg-sky-500/20 text-sky-400 border-sky-500/30" },
  { name: "Вода", signs: "Рак, Скорпија, Риби", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
];

const Astrology = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Едукација</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Астролошки систем</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Разбери ги основите на астрологијата — куќи, елементи и планетарни влијанија.
          </p>
        </div>

        {/* 12 Houses */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">12 Астролошки куќи</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {houses.map((h) => (
              <AccordionItem key={h.num} value={h.num} className="border border-border/50 rounded-xl px-6 bg-card">
                <AccordionTrigger className="font-heading text-lg hover:no-underline">
                  <span className="flex items-center gap-4">
                    <span className="text-gold font-bold">{h.num}</span>
                    {h.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{h.desc}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Elements */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Четири елементи</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {elements.map((e) => (
              <div key={e.name} className={`rounded-2xl border p-6 text-center ${e.color}`}>
                <h3 className="font-heading text-xl font-bold mb-2">{e.name}</h3>
                <p className="text-sm opacity-80">{e.signs}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Astrology;
