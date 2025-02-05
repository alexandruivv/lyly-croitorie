import DespreCeEVorba from "@/app/pages/DespreCeEVorba";
import HomePage from "./pages/HomePage";
import Servicii from "./pages/Servicii";

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
    </>
  );
}
