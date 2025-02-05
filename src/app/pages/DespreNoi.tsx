"use client";

import GoDownArrow from "../components/GoDownArrow";
import Button from "../components/Button";
import CheckboxText from "@/app/components/CheckboxText";

const Servicii = () => {
  return (
    <div
      id="despre-noi"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/despre_ce_e_vorba_bg_mobile.webp')] lg:bg-[url('/images/despre_ce_e_vorba_bg.webp')]"
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      <div className="relative h-full flex flex-col justify-between py-24 px-5 lg:py-32 text-black">
        <h1 className="font-bold text-2xl lg:text-5xl text-center max-lg:mt-5 lg:my-10">
          Despre noi
        </h1>
        <div className="flex flex-col lg:flex-row lg:flex-wrap w-full gap-5 md:gap-y-20">
          <CheckboxText text="Experienta in croitorie de peste 10 ani"/>
          <CheckboxText text="Măiestrim tehnici de cusut, folosind diverse tipuri de mașini, pentru a realiza modele unice, inclusiv din materiale dificile și pretențioase."/>
          <CheckboxText text="Experiența acumulată de-a lungul anilor include interacțiunea cu clienții, înțelegerea nevoilor acestora și furnizarea de soluții personalizate."/>
          <CheckboxText text="Înțelegem că fiecare proiect are provocările sale unice, motiv pentru care ne adaptăm cu ușurință cerințelor în schimbare. "/>
        </div>
        <Button text="Programează acum!" className="mx-auto" />
        <GoDownArrow className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4" />
      </div>
    </div>
  );
};

export default Servicii;
