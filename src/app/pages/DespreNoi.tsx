"use client";

import GoArrow from "../components/GoArrow";
import Button from "../components/Button";
import ImageText from "@/app/components/ImageText";
import checkIcon from "../../../public/svg/check-square.svg";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import { scrollToSection } from "@/app/utils/utils";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";
import React from "react";

const servicii: string[] = [
  "Echipa noastra este localizata in Piatra-Neamt si beneficiaza de o experienta in croitorie de peste 10 ani",
  "Măiestrim tehnici de cusut, folosind diverse tipuri de mașini, pentru a realiza modele unice, inclusiv din materiale dificile și pretențioase.",
  "Experiența acumulată de-a lungul anilor include interacțiunea cu clienții, înțelegerea nevoilor acestora și furnizarea de soluții personalizate.",
  "Înțelegem că fiecare proiect are provocările sale unice, motiv pentru care ne adaptăm cu ușurință cerințelor în schimbare.",
];

const Servicii = () => {
  return (
    <div
      id="despre-noi"
      style={
        {
          "--mobile-image-url": `url(${bgMobileImg.src})`,
          "--image-url": `url(${bgImg.src})`,
        } as CustomCSSProperties
      }
      className="relative w-full bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] lg:bg-[image:var(--image-url)]"
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="fade-overlay"></div>
      <div
        className="relative h-full flex flex-col justify-between py-24 px-5 lg:py-32 max-md:pb-32 text-black w-full gap-10">
        <h1 className="font-bold text-2xl md:text-5xl text-center max-lg:mt-5 lg:my-10">
          Despre noi
        </h1>
        <div className="flex flex-col lg:flex-wrap w-full gap-5 md:gap-y-20 lg:mx-auto items-center">
          {servicii.map((serviciu, index) => (
            <ImageText
              key={index}
              img={checkIcon}
              text={serviciu}
              classNameContainer="flex flex-row gap-4 items-center w-full lg:w-[49%]"
              classNameImg="md:w-14 w-10"
              classNameParagraph="text-sm lg:text-2xl font-light"
            />
          ))}
        </div>
        <Button
          text="Programează acum!"
          className="mx-auto"
          onClick={() => scrollToSection("programari")}
        />
        <div className='w-full flex items-center'>
          <GoArrow
            className="w-20 mx-auto"
            onClick={() => scrollToSection("programari")}
          />
        </div>
      </div>
    </div>
  );
};

export default Servicii;
