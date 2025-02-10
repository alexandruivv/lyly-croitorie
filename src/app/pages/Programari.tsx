"use client";

import GoArrow, { GoArrowDirection } from "../components/GoArrow";
import Button from "../components/Button";
import ImageText from "@/app/components/ImageText";
import clockImg from "../.././../public/images/clock.png";
import fbImg from "../.././../public/images/Facebook.png";
import mailImg from "../.././../public/images/mail.png";
import phoneImg from "../.././../public/images/phone.png";
import FormField, { FormFieldType } from "@/app/components/FormField";
import { scrollToSection } from "@/app/utils/utils";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";

const Programari = () => {
  return (
    <div
      id="programari"
      style={
        {
          "--mobile-image-url": `url(${bgMobileImg.src})`,
          "--image-url": `url(${bgImg.src})`,
        } as CustomCSSProperties
      }
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] lg:bg-[image:var(--image-url)]"
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      <div className="relative h-full flex flex-col justify-between pt-24 pb-32 md:pt-28 md:pb-8 text-black">
        <h1 className="font-bold text-2xl md:text-5xl text-center">
          Programări
        </h1>

        <div className="flex-1 flex flex-col justify-center gap-4 mt-2">
          <div className="w-fit mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 p-2 lg:p-6 max-lg:gap-y-3">
              <ImageText
                classNameImg="max-md:w-4 max-lg:w-6"
                classNameParagraph="text-xs lg:text-lg"
                text="0742 153 656"
                img={phoneImg}
                href="tel:0742153656"
              />
              <ImageText
                classNameImg="max-md:w-4 max-lg:w-6"
                classNameParagraph="text-xs lg:text-lg"
                text="contact@lylycroitorie.ro"
                img={mailImg}
                href="mailto:contact@lylycroitorie.ro"
              />
              <ImageText
                classNameImg="max-md:w-4 max-lg:w-6"
                classNameParagraph="text-xs lg:text-lg"
                text="Lu-Du 7:00-18:00"
                img={clockImg}
              />
              <ImageText
                classNameImg="max-md:w-4 max-lg:w-6"
                classNameParagraph="text-xs lg:text-lg"
                text="facebook.com/lylycroitorie"
                img={fbImg}
                href="https://facebook.com/lylycroitorie"
              />
            </div>
          </div>

          <form className="flex flex-col gap-1.5 lg:px-8">
            <FormField
              label="Nume"
              type={FormFieldType.TEXT}
              id="nume"
              placeholder="Introduceti numele..."
            />
            <FormField
              label="Telefon"
              type={FormFieldType.TEXT}
              id="telefon"
              placeholder="Introduceti telefonul..."
            />
            <FormField
              label="Email"
              type={FormFieldType.TEXT}
              id="email"
              placeholder="Introduceti emailul..."
            />
            <FormField
              label="Mesaj"
              type={FormFieldType.TEXTAREA}
              id="mesaj"
              placeholder="Introduceti mesajul..."
            />
            <Button
              text="Programează acum!"
              className="mt-3 max-md:mt-8 mx-auto"
            />
          </form>
        </div>

        <div className="relative h-12 w-full max-md:-mt-8">
          <GoArrow
            className="absolute left-1/2 transform -translate-x-1/2 top-0"
            direction={GoArrowDirection.UP}
            onClick={() => scrollToSection("acasa")}
          />
        </div>
      </div>
    </div>
  );
};

export default Programari;
