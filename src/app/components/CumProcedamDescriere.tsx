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
      <span className="absolute top-2 left-5 md:top-5 md:left-5 text-2xl md:text-3xl lg:text-8xl">{numar}</span>
      <Image src={icon} alt={"icon" + numar} className="mx-auto max-sm:h-12 max-sm:w-12 max-md:h-14 max-md:w-14 h-20" />
      <p className="max-sm:text-xs">{descriere}</p>
    </div>
  );
};

export default CumProcedamDescriere;
