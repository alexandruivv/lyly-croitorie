"use client";

import Button from "../components/Button";
import GoArrow from "../components/GoArrow";
import { scrollToSection } from "../utils/utils";
import bgMobileImg from "../../../public/images/Untitled-design-4-2.jpg";
import bgImg from "../../../public/images/pexels-pavel-danilyuk-6461064-2.webp";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";
import React from "react";
import ReactGA from "react-ga4";

const HomePage = () => {
  return (
    <div
      id="acasa"
      style={
        {
          "--mobile-image-url": `url(${bgMobileImg.src})`,
          "--image-url": `url(${bgImg.src})`,
        } as CustomCSSProperties
      }
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] lg:bg-[image:var(--image-url)]"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute left-4 bottom-1/4 md:left-20 text-white max-w-2xl w-fit font-bold text-shadow">
        <h2 className="text-xl sm:text-2xl md:text-4xl mb-2">
          Croitorie mobilă premium – venim la tine acasă!
        </h2>
        <h3 className="text-sm sm:text-base md:text-xl">
          Economisește timp și bani cu serviciile noastre rapide și personalizate.
        </h3>
        <Button
          text="Cere ofertă rapidă ➔"
          className="mt-6"
          onClick={() => {
            scrollToSection("programari");
            ReactGA.event({
              category: "cere_oferta",
              action: "Homepage_oferta_btn",
              label: "Click pe cere oferta homepage",
            });
          }}
        />
        <h3 className="text-sm sm:text-base md:text-xl mt-4">
          Sau sună acum: <a
          className="font-bold text-secondary ml-2 cursor-pointer hover:text-brownHover transition duration-300"
          href="tel:0742153656"
          onClick={() => {
            ReactGA.event({
              category: "cere_oferta",
              action: "Telefon_homepage_click",
              label: "Click pe cere oferta telefon homepage",
            });
          }}
        >
          📞 0742 153 656
        </a>
        </h3>
      </div>

      <GoArrow
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20 md:mb-4"
        onClick={() => scrollToSection("despre-ce-e-vorba")}
      />
    </div>
  );
};

export default HomePage;
