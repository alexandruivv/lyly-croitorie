"use client";

import GoArrow, {GoArrowDirection} from "../components/GoArrow";
import Button from "../components/Button";
import ImageText from "@/app/components/ImageText";
import clockImg from '../../../public/images/clock.png';
import fbImg from '../.././../public/images/Facebook.png';
import mailImg from '../../../public/images/mail.png';
import phoneImg from '../../../public/images/phone.png';
import FormField, {FormFieldType} from "@/app/components/FormField";
import {scrollToSection} from "@/app/utils/utils";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import {CustomCSSProperties} from "@/app/types/CustomCSSProperties";

const Programari = () => {
    return (
        <div
            id="programari"
            style={{'--mobile-image-url': `url(${bgMobileImg.src})`, '--image-url': `url(${bgImg.src})`} as CustomCSSProperties}
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] lg:bg-[image:var(--image-url)]"
        >
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>

            <div className="relative h-full flex flex-col py-24 px-5 lg:py-32 text-black justify-center">
                <div className='flex flex-col md:gap-10 mx-auto'>
                    <h1 className="font-bold text-2xl md:text-5xl text-center max-lg:mt-5 lg:my-10">
                        Programari
                    </h1>
                    <div
                        className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 mx-auto w-full p-2 lg:p-10 max-lg:gap-y-5'>
                        <ImageText classNameImg='max-md:w-5 max-lg:w-8'
                                   classNameParagraph='text-sm lg:text-xl'
                                   text='0742 153 656'
                                   img={phoneImg}/>
                        <ImageText
                            classNameImg='max-md:w-5 max-lg:w-8'
                            classNameParagraph='text-sm lg:text-xl'
                            text='contact@lylycroitorie.ro'
                            img={mailImg}/>
                        <ImageText
                            classNameImg='max-md:w-5 max-lg:w-8'
                            classNameParagraph='text-sm lg:text-xl'
                            text='Lu-Du 7:00-18:00'
                            img={clockImg}/>
                        <ImageText classNameImg='max-md:w-5 max-lg:w-8'
                                   classNameParagraph='text-sm lg:text-xl'
                                   text='facebook.com/lylycroitorie'
                                   img={fbImg}/>
                    </div>
                </div>

                <form className='flex flex-col gap-2 lg:px-10'>
                    <FormField label='Nume' type={FormFieldType.TEXT} id='nume' placeholder='Introduceti numele...'/>
                    <FormField label='Telefon' type={FormFieldType.TEXT} id='telefon'
                               placeholder='Introduceti telefonul...'/>
                    <FormField label='Email' type={FormFieldType.TEXT} id='email' placeholder='Introduceti emailul...'/>
                    <FormField label='Mesaj' type={FormFieldType.TEXTAREA} id='mesaj'
                               placeholder='Introduceti mesajul...'/>
                    <Button text="Programează acum!" className="mt-2 mx-auto"/>
                </form>
                <GoArrow className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
                         direction={GoArrowDirection.UP}
                         onClick={() => scrollToSection('acasa')}/>
            </div>
        </div>
    );
};

export default Programari;
