"use client";

import React from "react";
import despreCeEVorbaBg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import Image from "next/image";
import CumProcedamDescriere, {
  Descriere,
} from "@/app/components/CumProcedamDescriere";
import truckIcon from "../../../public/images/Truck.png";
import boxIcon from "../../../public/images/Box.png";

import keyboardReturnIcon from "../../../public/images/keyboard_return.png";
import Button from "@/app/components/Button";
import GoDownArrow from "@/app/components/GoDownArrow";

const descrieri: Descriere[] = [
  {
    numar: 1,
    icon: truckIcon,
    descriere: "Reprezentantul nostru se deplasează la domiciliul tau",
  },
  {
    numar: 2,
    icon: boxIcon,
    descriere:
      "Preluăm articolele pentru retuș sau ideile dv. de comanda cu măsurile corespunzătoare",
  },
  {
    numar: 3,
    icon: keyboardReturnIcon,
    descriere: "Returnăm ulterior produsele retușate conform dorințelor",
  },
];

const DespreCeEVorba = () => {
  return (
      <div id="despre-ce-e-vorba"
           className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/despre_ce_e_vorba_bg_mobile.webp')] md:bg-[url('/images/despre_ce_e_vorba_bg.webp')]">
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>

        <div className="relative h-full flex flex-col justify-evenly p-16 md:p-10 text-black">
          <h1 className="font-bold text-2xl md:text-5xl text-center max-md:mt-5 md:my-10">
            Cum procedam?
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
          <Button text="Programează acum!" className="mx-auto"/>
          <GoDownArrow className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"/>
        </div>
      </div>
  );
};

export default DespreCeEVorba;
