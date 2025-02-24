"use client";

import { useState } from "react";
import Button from "../components/Button";
import ImageText from "@/app/components/ImageText";
import discountIcon from "../.././../public/svg/discount.svg";
import whatsApp from "../.././../public/svg/whatsapp.svg";
import clockImg from "../.././../public/svg/clock.svg";
import ideaIcon from "../.././../public/svg/idea.svg";
import fbImg from "../.././../public/svg/facebook.svg";
import messImg from "../.././../public/svg/messenger.svg";
import mailImg from "../.././../public/svg/mail.svg";
import phoneImg from "../.././../public/svg/phone.svg";
import locationIcon from "../.././../public/svg/location.svg";
import FormField, { FormFieldType } from "@/app/components/FormField";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";
import CaptchaWrapper from "../components/CaptchaWrapper";
import { toast } from "react-toastify";
import { sendEmail, VerifyCaptchaResponse } from "../services/apiClient";
import { scrollToSection } from "@/app/utils/utils";
import GoArrow, { GoArrowDirection } from "@/app/components/GoArrow";

const Programari = () => {
  const [showCaptcha, setShowCaptcha] = useState(false);

  const [formData, setFormData] = useState({
    nume: "",
    telefon: "",
    email: "",
    mesaj: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({
    nume: "",
    telefon: "",
    email: "",
    mesaj: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    validateField(id, value);
  };

  const validateField = (field: string, value: string) => {
    let errorMsg = "";

    switch (field) {
      case "nume":
        if (!value.trim()) {
          errorMsg = "Numele este obligatoriu.";
        } else if (value.trim().length > 50) {
          errorMsg = "Numele este de dimensiune prea mare.";
        }
        break;
      case "telefon":
        if (!value.trim()) {
          errorMsg = "Telefonul este obligatoriu.";
        } else if (!isPhoneValid(value.trim())) {
          errorMsg = "Telefonul este incorect.";
        }
        break;
      case "email":
        if (!value.trim()) {
          errorMsg = "Email-ul este obligatoriu.";
        } else if (!isEmailValid(value.trim())) {
          errorMsg = "Email-ul este invalid.";
        } else if (value.trim().length > 50) {
          errorMsg = "Email-ul este de dimensiune prea mare.";
        }
        break;
      case "mesaj":
        if (!value.trim()) {
          errorMsg = "Mesajul este obligatoriu.";
        } else if (value.trim().length > 1000) {
          errorMsg = "Mesajul este de dimensiune prea mare.";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: errorMsg,
    }));

    return errorMsg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasErrors = false;

    Object.entries(formData).forEach(([field, value]) => {
      const error = validateField(field, value);
      if (error !== "") {
        hasErrors = true;
      }
    });

    if (hasErrors) {
      toast.error(
        "Vă rugăm să rezolvați toate erorile înainte de a trimite formularul."
      );
      return;
    }

    setShowCaptcha(true);
  };

  const isEmailValid = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isPhoneValid = (phone: string) => {
    const phonePattern =
      /^\+?\d{1,4}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{1,9}$/;
    return phonePattern.test(phone);
  };

  const handleCaptchaVerify = async (
    responsePromise: Promise<VerifyCaptchaResponse>
  ) => {
    setShowCaptcha(false);
    setIsLoading(true);

    const response = await responsePromise;
    if (!response.success || !response.token) {
      toast.error("Eroare. Vă rugăm să reîncercați.");
      setIsLoading(false);
      return;
    }

    try {
      const emailSent = await sendEmail(
        formData.email,
        formData.nume,
        formData.telefon,
        formData.mesaj,
        response.token
      );

      if (emailSent) {
        toast.success("Mesajul a fost trimis cu succes!");
        setFormData({
          nume: "",
          telefon: "",
          email: "",
          mesaj: "",
        });
        setErrors({
          nume: "",
          telefon: "",
          email: "",
          mesaj: "",
        });
      } else {
        toast.error(
          "Eroare la trimiterea mesajului. Vă rugăm să încercați din nou."
        );
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "A apărut o eroare neașteptată.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseCaptcha = () => {
    setShowCaptcha(false);
  };

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
      <div className="fade-overlay"></div>

      <div className="relative h-full flex flex-col justify-between pt-24 pb-32 md:pt-28 md:pb-8 text-black p-2">
        <h1 className="font-bold text-2xl md:text-5xl text-center">
          Cere o ofertă
        </h1>

        <div className="flex-1 flex flex-col justify-center gap-4 mt-2">
          <div className="w-fit mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 p-2 lg:p-6 max-lg:gap-y-3">
              <ImageText
                classNameImg="w-8"
                classNameParagraph="text-xs lg:text-lg text-secondary font-semibold"
                elements="0742 153 656"
                img={phoneImg}
                href="tel:0742153656"
              />
              <ImageText
                classNameImg="w-8"
                classNameParagraph="text-xs lg:text-lg"
                elements="contact@lylydesign.ro"
                img={mailImg}
                href="mailto:contact@lylycroitorie.ro"
              />
              <ImageText
                classNameImg="w-8"
                classNameParagraph="text-xs lg:text-lg"
                elements="Lu-Du 7:00-18:00"
                img={clockImg}
              />
              <ImageText
                classNameImg="w-8"
                classNameParagraph="text-xs lg:text-lg"
                elements="Lyly Design"
                img={fbImg}
                href="https://facebook.com/leyladesign"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:items-center lg:mx-auto w-full">
            <div className='flex flex-row gap-2 justify-center'>
              <ImageText
                className='bg-purple-400 rounded-xl border-black border-2'
                classNameImg="w-8"
                classNameParagraph="text-xs lg:text-lg"
                elements="Messenger"
                img={messImg}
                href="https://m.me/leyladesign?text=Buna, doresc o oferta!"
                blank
              />
              <ImageText
                className='bg-green-700 rounded-xl border-black border-2'
                classNameImg="w-8"
                classNameParagraph="text-xs lg:text-lg"
                elements="WhatsApp"
                img={whatsApp}
                href='https://wa.me/+40742153656'
                blank
              />
            </div>
            <ImageText
              classNameImg="w-10 lg:w-12"
              classNameParagraph="text-xs lg:text-lg"
              elements="Preluăm comenzi în Piatra-Neamț și în apropiere"
              img={locationIcon}
            />
            <ImageText
              classNameImg="w-10 lg:w-12"
              classNameParagraph="text-xs lg:text-lg"
              elements="Majoritatea retușurilor sunt gata în 24-72h!"
              img={ideaIcon}
            />
            <ImageText
              classNameImg="w-10 lg:w-12"
              classNameParagraph="text-xs lg:text-lg"
              elements="Te așteptăm cu o ofertă specială la prima comandă!"
              img={discountIcon}
            />
          </div>

          <form
            className="flex flex-col gap-1.5 lg:px-8 lg:w-1/2 lg:mx-auto"
            onSubmit={handleSubmit}
          >
            <FormField
              label="Nume"
              type={FormFieldType.TEXT}
              id="nume"
              placeholder="Introduceti numele..."
              value={formData.nume}
              onChange={handleInputChange}
              error={errors.nume}
            />
            <FormField
              label="Telefon"
              type={FormFieldType.TEXT}
              id="telefon"
              placeholder="Introduceti telefonul..."
              value={formData.telefon}
              onChange={handleInputChange}
              error={errors.telefon}
            />
            <FormField
              label="Email"
              type={FormFieldType.TEXT}
              id="email"
              placeholder="Introduceti emailul..."
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <FormField
              label="Mesaj"
              type={FormFieldType.TEXTAREA}
              id="mesaj"
              placeholder="Introduceti mesajul..."
              value={formData.mesaj}
              onChange={handleInputChange}
              error={errors.mesaj}
            />
            <Button
              text="Trimite formularul"
              className="mt-3 max-md:mt-8 mx-auto"
              disabled={isLoading}
              loading={isLoading}
            />
          </form>
          <GoArrow
            className="w-20 mx-auto"
            direction={GoArrowDirection.UP}
            onClick={() => scrollToSection("acasa")}
          />
        </div>

        {showCaptcha && (
          <CaptchaWrapper
            onVerify={handleCaptchaVerify}
            onClose={handleCloseCaptcha}
          />
        )}
      </div>
    </div>
  );
};

export default Programari;
