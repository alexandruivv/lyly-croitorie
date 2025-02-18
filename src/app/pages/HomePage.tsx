"use client";

import Button from "../components/Button";
import GoArrow from "../components/GoArrow";
import { scrollToSection } from "../utils/utils";
import bgMobileImg from "../../../public/images/home_image_mobile.webp";
import bgImg from "../../../public/images/home_image_desktop.webp";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";

const HomePage = () => {
  return (
    <div
      id="acasa"
      style={
        {
          "--mobile-image-url": `url(${bgMobileImg.src})`,
          "--image-url": `url(${bgImg.src})`,
        } as CustomCSSProperties
      }
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] lg:bg-[image:var(--image-url)]"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute left-4 bottom-1/4 md:left-20 text-peach max-w-2xl w-fit font-bold text-shadow">
        <h2 className="text-xl sm:text-2xl md:text-4xl mb-2">
          Croitorie fără drumuri și pierdere de timp – venim noi la tine!
        </h2>
        <h3 className="text-sm sm:text-base md:text-xl">
          Serviciul nostru de croitorie mobilă îți aduce confort și eleganță, fără drumuri inutile. Adaptăm, retușăm și creăm haine perfect potrivite pentru tine, fără să te deplasezi!
        </h3>
        <Button
          text="Cere o ofertă!"
          className="mt-6"
          onClick={() => scrollToSection("programari")}
        />
      </div>

      <GoArrow
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-20 md:mb-4"
        onClick={() => scrollToSection("despre-ce-e-vorba")}
      />
    </div>
  );
};

export default HomePage;
