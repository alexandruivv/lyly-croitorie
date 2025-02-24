"use client";

import GoArrow from "../components/GoArrow";
import Button from "../components/Button";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import {scrollToSection} from "@/app/utils/utils";
import {CustomCSSProperties} from "@/app/types/CustomCSSProperties";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import ReviewsSection from "@/app/components/ReviewsSection";


const Recenzii = () => {
  return (
    <div
      id="recenzii"
      style={
        {
          "--mobile-image-url": `url(${bgMobileImg.src})`,
          "--image-url": `url(${bgImg.src})`,
        } as CustomCSSProperties
      }
      className="relative w-full bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] lg:bg-[image:var(--image-url)]"
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="fade-overlay"></div>
      <div
        className="relative h-full flex flex-col justify-between py-24 px-5 lg:py-32 max-md:pb-32 text-black w-full gap-10">
        <h1 className="font-bold text-2xl md:text-5xl text-center max-lg:mt-5 lg:my-10">
          Recenzii
        </h1>

        <ReviewsSection />

        <Button
          text="Cere ofertă rapidă ➔"
          className="mx-auto"
          onClick={() => scrollToSection("programari")}
        />
        <div className='w-full flex items-center'>
          <GoArrow
            className="w-20 mx-auto"
            onClick={() => scrollToSection("intrebari")}
          />
        </div>
      </div>
    </div>
  );
};

export default Recenzii;
