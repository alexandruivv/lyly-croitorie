"use client";

import ServiciiDescriere from "../components/ServiciiDescriere";
import GoArrow from "../components/GoArrow";
import Button from "../components/Button";
import {scrollToSection} from "@/app/utils/utils";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import {CustomCSSProperties} from "@/app/types/CustomCSSProperties";

const Servicii = () => {
  return (
    <div
      id="servicii"
      style={{'--mobile-image-url': `url(${bgMobileImg.src})`, '--image-url': `url(${bgImg.src})`} as CustomCSSProperties}
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] lg:bg-[image:var(--image-url)]"
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      <div className="relative h-full flex flex-col justify-evenly py-16 md:p-10 text-black">
        <h1 className="font-bold text-2xl md:text-5xl text-center max-md:mt-5 md:my-10">
          Servicii
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
          <ServiciiDescriere
            title="CROITORIE RETUȘ"
            firstParagraph="Serviciu de ajustare și reparare a articolelor vestimentare"
            secondParagraph="Scurtarea sau lungirea hainelor, ajustarea mărimii taliei, repararea cusăturilor, schimbarea fermoarelor sau ajustarea mânecilor."
          />
          <ServiciiDescriere
            title="CROITORIE LA COMANDĂ"
            firstParagraph="Transformăm dorințele în realitate, fie că este vorba de o poză, o schiță sau o idee"
            secondParagraph="Consultanță pentru alegerea modelului, tipului de material, croiala și detaliile finale"
          />
        </div>
        <Button text="Programează acum!" className="mx-auto" />
        <GoArrow className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
                 onClick={() => scrollToSection("despre-noi") }/>
      </div>
    </div>
  );
};

export default Servicii;
