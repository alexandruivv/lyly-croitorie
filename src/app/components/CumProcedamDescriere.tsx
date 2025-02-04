import React from "react";
import Image, { StaticImageData } from "next/image";

export interface Descriere {
  numar: number;
  icon: StaticImageData;
  descriere: string;
}

const CumProcedamDescriere = ({ numar, icon, descriere }: Descriere) => {
  return (
    <div className="flex flex-col gap-4 md:gap-10 justify-center align-middle text-center border relative bg-peach shadow-lg p-4 md:p-8">
      <span className="absolute top-5 left-5 text-4xl md:text-8xl">{numar}</span>
      <Image src={icon} alt={"icon" + numar} className="mx-auto max-md:h-14 max-md:w-14" />
      <p>{descriere}</p>
    </div>
  );
};

export default CumProcedamDescriere;
