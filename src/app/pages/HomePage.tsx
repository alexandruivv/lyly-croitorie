"use client";

import Button from "../components/Button";
import GoDownArrow from "../components/GoDownArrow";
import { scrollToSection } from "../utils/utils";

const HomePage = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/images/home_image_mobile.png')] md:bg-[url('/images/home_image_desktop.png')]">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute left-4 bottom-1/4 md:left-20 text-peach max-w-2xl w-fit font-bold text-shadow">
        <h2 className="text-xl sm:text-2xl md:text-4xl mb-2">
          Prea ocupat să ajungi la croitor?
        </h2>
        <h3 className="text-sm sm:text-base md:text-xl">
          Venim direct la domiciliul tău pentru soluții rapide de croitorie și
          retuș personalizat!
        </h3>
        <Button text="Programează acum!" className="mt-6" />
      </div>

      <GoDownArrow
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
        onClick={() => scrollToSection("despre-ce-e-vorba")}
      />
    </div>
  );
};

export default HomePage;
