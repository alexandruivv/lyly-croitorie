"use client";

import GoArrow from "../components/GoArrow";
import Button from "../components/Button";
import ImageText from "@/app/components/ImageText";
import despreNoiImg from "../../../public/images/despre_noi_img.webp";
import despreNoiImg2 from "../../../public/images/despre-noi-2.webp";
import checkIcon from "../../../public/svg/check-square.svg";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import { scrollToSection } from "@/app/utils/utils";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";
import React, { ReactNode } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const servicii: ReactNode[] = [
  <p>
    Echipa noastra este localizata in{" "}
    <span className="font-semibold text-brownHover">Piatra-Neamt</span> si
    beneficiaza de o{" "}
    <span className="font-semibold text-brownHover">experienta</span> in
    croitorie de peste{" "}
    <span className="font-semibold text-brownHover">10 ani</span>
  </p>,
  <p>
    Măiestrim tehnici de cusut, folosind diverse tipuri de mașini, pentru a
    realiza <span className="font-semibold text-brownHover">modele unice</span>,
    inclusiv din
    <span className="font-semibold text-brownHover">
      {" "}
      materiale dificile și pretențioase
    </span>
    .
  </p>,
  <p>
    Experiența acumulată de-a lungul anilor include{" "}
    <span className="font-semibold text-brownHover">
      interacțiunea cu clienții
    </span>
    ,
    <span className="font-semibold text-brownHover"> înțelegerea nevoilor</span>{" "}
    acestora și furnizarea de{" "}
    <span className="font-semibold text-brownHover">soluții personalizate</span>
    .
  </p>,
  <p>
    Înțelegem că fiecare proiect are provocările sale unice, motiv pentru care{" "}
    <span className="font-semibold text-brownHover">ne adaptăm</span> cu
    ușurință cerințelor în schimbare.
  </p>,
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
      <div className="relative h-full flex flex-col justify-between py-24 px-5 lg:py-32 max-md:pb-32 text-black w-full gap-10">
        <h1 className="font-bold text-2xl md:text-5xl text-center max-lg:mt-5 lg:my-10">
          Despre noi
        </h1>
        <div className="md:hidden">
          <Carousel responsive={responsive}>
            <Image
              src={despreNoiImg}
              alt="despre-noi-image"
              className="rounded-xl lg:w-4/12"
            />
            <Image
              src={despreNoiImg2}
              alt="despre-noi-image2"
              className="rounded-xl  lg:w-4/12"
            />
          </Carousel>
        </div>

        <div className="w-full hidden md:w-full md:mx-auto lg:flex lg:flex-row lg:gap-10 lg:items-center lg:justify-center">
          <Image
            src={despreNoiImg}
            alt="despre-noi-image"
            className="rounded-xl lg:w-2/12"
          />
          <Image
            src={despreNoiImg2}
            alt="despre-noi-image2"
            className="rounded-xl  lg:w-2/12"
          />
        </div>

        <div className="flex flex-col lg:flex-wrap w-full gap-5 md:gap-y-20 lg:mx-auto items-center">
          {servicii.map((serviciu: ReactNode, index) => (
            <ImageText
              key={index}
              img={checkIcon}
              elements={serviciu}
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
        <div className="w-full flex items-center">
          <GoArrow
            className="w-20 mx-auto"
            onClick={() => scrollToSection("lucrarile-noastre")}
          />
        </div>
      </div>
    </div>
  );
};

export default Servicii;
