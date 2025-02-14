"use client";

import { useState } from "react";
import Button from "../components/Button";
import ImageText from "@/app/components/ImageText";
import clockImg from "../.././../public/svg/clock.svg";
import fbImg from "../.././../public/svg/facebook.svg";
import mailImg from "../.././../public/svg/mail.svg";
import phoneImg from "../.././../public/svg/phone.svg";
import FormField, { FormFieldType } from "@/app/components/FormField";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";
import CaptchaWrapper from "../components/CaptchaWrapper";
import { toast } from "react-toastify";
import { VerifyCaptchaResponse, sendEmail } from "../services/apiClient";

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
    setErrors((prev) => ({
      ...prev,
      [id]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    const newErrors = {
      nume: "",
      telefon: "",
      email: "",
      mesaj: "",
    };

    if (!formData.nume.trim()) {
      newErrors.nume = "Numele este obligatoriu.";
      valid = false;
    }
    if (!formData.telefon.trim()) {
      newErrors.telefon = "Telefonul este obligatoriu.";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email-ul este obligatoriu.";
      valid = false;
    }
    if (!formData.mesaj.trim()) {
      newErrors.mesaj = "Mesajul este obligatoriu.";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      toast.error("Vă rugăm să completați toate câmpurile.");
      return;
    }

    setShowCaptcha(true);
  };

  const handleCaptchaVerify = async (response: VerifyCaptchaResponse) => {
    setShowCaptcha(false);
    if (!response.success || !response.token) {
      toast.error("Eroare. Vă rugăm să reîncercați.");
      return;
    }

    setIsLoading(true);

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

          <form
            className="flex flex-col gap-1.5 lg:px-8"
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
              text="Programează acum!"
              className="mt-3 max-md:mt-8 mx-auto"
              disabled={isLoading}
              loading={isLoading}
            />
          </form>
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
