import DespreCeEVorba from "@/app/pages/DespreCeEVorba";
import HomePage from "./pages/HomePage";
import Servicii from "./pages/Servicii";
import DespreNoi from "@/app/pages/DespreNoi";
import Programari from "@/app/pages/Programari";
import Footer from "@/app/components/Footer";
import Intrebari from "./pages/Intrebari";
import LucrarileNoastre from "@/app/pages/LucrarileNoastre";
import Recenzii from "@/app/components/Recenzii";
import Preturi from "./pages/Preturi";

const sectionClassName = "lg:min-h-[75vh]";

export default function Home() {
  return (
    <>
      <section className={sectionClassName}>
        <HomePage />
      </section>
      <section className={sectionClassName}>
        <DespreCeEVorba />
      </section>
      <section className={sectionClassName}>
        <Servicii />
      </section>
      <section className={sectionClassName}>
        <DespreNoi />
      </section>
      <section className={sectionClassName}>
        <LucrarileNoastre />
      </section>
      <section className={sectionClassName}>
        <Recenzii />
      </section>
      <section className={sectionClassName}>
        <Intrebari />
      </section>
      <section className={sectionClassName}>
        <Preturi />
      </section>
      <section className={sectionClassName}>
        <Programari />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
