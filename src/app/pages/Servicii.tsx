"use client";

import ServiciiDescriere from "../components/ServiciiDescriere";
import GoDownArrow from "../components/GoDownArrow";
import Button from "../components/Button";

const Servicii = () => {
  return (
    <div
      id="servicii"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/despre_ce_e_vorba_bg_mobile.webp')] md:bg-[url('/images/despre_ce_e_vorba_bg.webp')]"
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      <div className="relative h-full flex flex-col justify-evenly p-16 md:p-10 text-black">
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
        <GoDownArrow className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4" />
      </div>
    </div>
  );
};

export default Servicii;
