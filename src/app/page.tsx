import DespreCeEVorba from "@/app/pages/DespreCeEVorba";
import HomePage from "./pages/HomePage";
import Servicii from "./pages/Servicii";
import DespreNoi from "@/app/pages/DespreNoi";
import Programari from "@/app/pages/Programari";
import Footer from "@/app/components/Footer";
import Intrebari from "./pages/Intrebari";
import LucrarileNoastre from "@/app/pages/LucrarileNoastre";

export default function Home() {
  return (
    <>
      <section>
        <HomePage />
      </section>
      <section>
        <DespreCeEVorba />
      </section>
      <section>
        <Servicii />
      </section>
      <section>
        <DespreNoi/>
      </section>
      <section>
        <LucrarileNoastre />
      </section>
      <section>
        <Intrebari />
      </section>
      <section>
        <Programari />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
