"use client";

import GoArrow, { GoArrowDirection } from "../components/GoArrow";
import Button from "../components/Button";
import ImageText from "@/app/components/ImageText";
import clockImg from "../.././../public/svg/clock.svg";
import fbImg from "../.././../public/svg/facebook.svg";
import mailImg from "../.././../public/svg/mail.svg";
import phoneImg from "../.././../public/svg/phone.svg";
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
      className="relative w-full min-h-screen overflow-y-auto bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] lg:bg-[image:var(--image-url)]"
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

          <form className="flex flex-col gap-1.5 lg:px-8 h-full">
            <div className="w-full flex flex-col gap-8">
              <div className="form-container w-full flex flex-col gap-4">
                <div className="form-inputs-container flex flex-col gap-1.5 w-full justify-center">
                  <div className="w-full">
                    <FormField
                      label="Nume"
                      type={FormFieldType.TEXT}
                      id="nume"
                      placeholder="Introduceti numele..."
                    />
                  </div>
                  <div className="w-full">
                    <FormField
                      label="Telefon"
                      type={FormFieldType.TEXT}
                      id="telefon"
                      placeholder="Introduceti telefonul..."
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 w-full">
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
                </div>
              </div>
              <div className="flex justify-center pb-8">
                <Button text="Programează acum!" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Programari;
