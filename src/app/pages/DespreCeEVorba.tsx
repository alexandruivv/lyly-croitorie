import React from 'react';
import despreCeEVorbaBg from '../../../public/images/despre_ce_e_vorba_bg.webp';
import Image from "next/image";
import CumProcedamDescriere, {Descriere} from "@/app/components/CumProcedamDescriere";
import truckIcon from '../../../public/images/Truck.png';
import boxIcon from '../../../public/images/Box.png';
import keyboardReturnIcon from '../../../public/images/keyboard_return.png';
import Button from "@/app/components/Button";

const descrieri: Descriere[] = [
    {
        numar: 1,
        icon: truckIcon,
        descriere: 'Reprezentantul nostru se deplasează la domiciliul tau'
    },
    {
        numar: 2,
        icon: boxIcon,
        descriere: 'Preluăm articolele pentru retuș sau ideile dv. de comanda cu măsurile corespunzătoare'
    },
    {
        numar: 3,
        icon: keyboardReturnIcon,
        descriere: 'Returnăm ulterior produsele retușate conform dorințelor'
    }
]

const DespreCeEVorba = () => {
    return (
        <div className="flex-1 overflow-auto relative">
            <Image src={despreCeEVorbaBg} alt="bg-despre-ce-e-vorba" className="h-full object-cover opacity-20 absolute" />
            <div className="flex flex-col gap-40 p-10 text-black">
                <h1 className="font-bold text-5xl text-center">Cum procedam?</h1>
                <div className="grid grid-cols-5 gap-20">
                    {descrieri.map((descriere, index) => (
                        <>
                            <CumProcedamDescriere key={index}
                                                  numar={descriere.numar}
                                                  icon={descriere.icon}
                                                  descriere={descriere.descriere} />
                            <span>3</span>
                        </>

                    ))}
                </div>
                <Button text='Programeaza acum!' className="mx-auto"/>
            </div>
        </div>
    );
};

export default DespreCeEVorba;