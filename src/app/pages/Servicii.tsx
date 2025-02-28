"use client";

import ServiciiDescriere from "../components/ServiciiDescriere";
import GoArrow from "../components/GoArrow";
import Button from "../components/Button";
import { scrollToSection } from "@/app/utils/utils";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";
import React from "react";
import ReactGA from "react-ga4";

const Servicii = () => {
  return (
    <div
      id="servicii"
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

      <div className="relative h-full flex flex-col justify-evenly py-16 md:p-10 max-md:pb-32 text-black gap-10">
        <h1 className="font-bold text-2xl md:text-5xl text-center max-md:mt-5 md:my-10">
          Servicii
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
          <ServiciiDescriere
            title="✂️ Retușuri Express (24-72h)"
            firstParagraph={<span>Serviciu de <span className='font-semibold text-secondary'>ajustare</span> și <span className='font-semibold text-secondary'>reparare</span> a articolelor vestimentare</span>}
            secondParagraph={<span><span className='font-semibold text-secondary'>Scurtarea sau lungirea</span> hainelor, <span className='font-semibold text-secondary'>ajustarea</span> mărimii taliei, <span className='font-semibold text-secondary'>repararea</span> cusăturilor, schimbarea fermoarelor sau ajustarea mânecilor.</span>}
          />
          <ServiciiDescriere
            title="👗 Haine Personalizate de la 0"
            firstParagraph={<span>Transformăm <span className='font-semibold text-secondary'>dorințele în realitate</span>, fie că este vorba de o poză, o schiță sau o idee</span>}
            secondParagraph={<span><span className='font-semibold text-secondary'>Consultanță</span> pentru alegerea modelului, tipului de material, croiala și detaliile finale</span>}
          />
        </div>
        <Button
          text="Cere ofertă rapidă ➔"
          className="mx-auto"
          onClick={() => {
            scrollToSection("programari");
            ReactGA.event({
              category: "cere_oferta",
              action: "Servicii_oferta_btn",
              label: "Click pe cere oferta servicii",
            });}}
        />
        <div className='w-full flex items-center'>
          <GoArrow
            className="w-20 mx-auto"
            onClick={() => scrollToSection("despre-noi")}
          />
        </div>
      </div>
    </div>
  );
};

export default Servicii;
