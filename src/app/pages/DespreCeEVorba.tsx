"use client";

import React from "react";
import CumProcedamDescriere, {
  Descriere,
} from "@/app/components/CumProcedamDescriere";
import truckIcon from "../../../public/svg/truck.svg";
import phoneIcon from "../../../public/svg/phone.svg";
import boxIcon from "../../../public/svg/box.svg";

import packageReturnIcon from "../../../public/svg/package-return-icon.svg";
import Button from "@/app/components/Button";
import GoArrow from "@/app/components/GoArrow";
import { scrollToSection } from "../utils/utils";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";

const descrieri: Descriere[] = [
  {
    numar: 1,
    icon: phoneIcon,
    descriere: <span>Consulti <span onClick={() => scrollToSection("preturi")} className='text-secondary font-semibold'>lista de preturi</span> si ne contactezi pentru oferta</span>,
  },
  {
    numar: 2,
    icon: truckIcon,
    descriere: <span>Reprezentantul nostru se deplasează la <span className='text-secondary font-semibold'>locatia ta</span></span>,
  },
  {
    numar: 3,
    icon: boxIcon,
    descriere:
      <span>Preluăm articolele pentru <span className='text-secondary font-semibold'>retuș</span> sau <span className='text-secondary font-semibold'>ideile dv. de comanda</span> cu măsurile corespunzătoare</span>,
  },
  {
    numar: 4,
    icon: packageReturnIcon,
    descriere: <span><span className='text-secondary font-semibold'>Returnăm ulterior</span> produsele retușate conform dorințelor</span>,
  },
];

const DespreCeEVorba = () => {
  return (
    <div
      id="despre-ce-e-vorba"
      style={
        {
          "--mobile-image-url": `url(${bgMobileImg.src})`,
          "--image-url": `url(${bgImg.src})`,
        } as CustomCSSProperties
      }
      className="relative w-full bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] md:bg-[image:var(--image-url)]"
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="fade-overlay"></div>

      <div className="relative h-full flex flex-col justify-evenly p-16 md:p-10 max-md:pb-32 text-black gap-10">
        <h1 className="font-bold text-2xl md:text-5xl text-center max-md:mt-5 md:my-10">
          Cum procedăm?
        </h1>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {descrieri.map((descriere, index) => (
            <CumProcedamDescriere
              key={index}
              numar={descriere.numar}
              icon={descriere.icon}
              descriere={descriere.descriere}
            />
          ))}
        </div>
        <Button
          text="Cere ofertă rapidă ➔"
          className="mx-auto"
          onClick={() => scrollToSection("programari")}
        />
        <div className="w-full flex items-center">
          <GoArrow
            className="w-20 mx-auto"
            onClick={() => scrollToSection("servicii")}
          />
        </div>
      </div>
    </div>
  );
};

export default DespreCeEVorba;
