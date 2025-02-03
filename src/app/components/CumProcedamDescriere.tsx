import React from 'react';
import Image, {StaticImageData} from "next/image";

export interface Descriere {
    numar: number;
    icon: StaticImageData;
    descriere: string;
}

const CumProcedamDescriere = ({numar, icon, descriere}: Descriere) => {
    return (
        <div className="flex flex-col gap-10 justify-center align-middle text-center border relative bg-peach shadow-lg p-8">
            <span className="absolute top-5 left-5 text-8xl">{numar}</span>
            <Image src={icon} alt={'icon' + numar} className="mx-auto"/>
            <p>{descriere}</p>
        </div>
    );
};

export default CumProcedamDescriere;