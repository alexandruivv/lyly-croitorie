"use client";

import React from "react";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import officePinImg from "../../../public/svg/office-pin.svg";
import ideaImg from "../../../public/svg/idea.svg";
import { CustomCSSProperties } from "../types/CustomCSSProperties";
import Button from "../components/Button";
import GoArrow from "../components/GoArrow";
import { scrollToSection } from "../utils/utils";
import PriceCard, { PriceCardModel } from "../components/PriceCard";
import ImageText from "../components/ImageText";
import ReactGA from "react-ga4";

const prices: PriceCardModel[] = [
  {
    category: "Pantalon",
    prices: [
      {
        title: "Scurtat simplu/complex",
        price: "30-75 RON",
      },
      {
        title: "Strâmtat",
        price: "30-60 RON",
      },
      {
        title: "Schimbat fermoar",
        price: "20-40 RON",
      },
      {
        title: "Lărgit",
        price: "30-50 RON",
      },
    ],
  },
  {
    category: "Rochii si fuste",
    prices: [
      {
        title: "Scurtat simplu/complex",
        price: "30-75 RON",
      },
      {
        title: "Strâmtat",
        price: "30-75 RON",
      },
      {
        title: "Schimbat fermoar",
        price: "25-50 RON",
      },
      {
        title: "Schimbat captuseala",
        price: "30-50 RON",
      },
    ],
  },
  {
    category: "Cămăși, bluze",
    prices: [
      {
        title: "Scurtat",
        price: "30 RON",
      },
      {
        title: "Strâmtat",
        price: "25-35 RON",
      },
    ],
  },
  {
    category: "Geci",
    prices: [
      {
        title: "Scurtat",
        price: "50 RON",
      },
      {
        title: "Schimbat fermoar scurt",
        price: "30 RON",
      },
      {
        title: "Schimbat fermoar lung",
        price: "50-60 RON",
      },
      {
        title: "Scurtat mâneci",
        price: "30 RON",
      },
    ],
  },
  {
    category: "Perdea",
    prices: [
      {
        title: "Perdea de zi",
        price: "12 RON metru liniar",
      },
      {
        title: "Draperii",
        price: "15 RON metru liniar",
      },
    ],
  },
  {
    category: "Confecționat cu materialul clientului",
    prices: [
      {
        title: "Rochii simplu/complex",
        price: "150-900 RON",
      },
      {
        title: "Fuste",
        price: "70-150 RON",
      },
      {
        title: "Pantaloni",
        price: "100-180 RON",
      },
      {
        title: "Cămăși",
        price: "85-150 RON",
      },
      {
        title: "Palton",
        price: "250-400 RON",
      },
      {
        title: "Sacouri",
        price: "150-300 RON",
      },
    ],
  },
];

const Preturi = () => {
  return (
    <div
      id="preturi"
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
      <div className="relative h-full flex flex-col justify-between py-24 px-5 lg:py-32 max-md:pb-32 text-black w-full gap-10">
        <h1 className="font-bold text-2xl md:text-5xl text-center max-lg:mt-5 lg:my-10">
          Prețuri orientative
        </h1>

        <div className="w-full flex flex-wrap justify-center gap-12">
          {prices.map((priceCard, index) => (
            <div
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full"
              key={index}
            >
              <PriceCard {...priceCard} />
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-center">
          <ImageText
            classNameImg="w-6 mb-10"
            elements={
              <h1 className="text-2xl font-bold mb-8 text-center">
                Tarifele prezentate sunt estimative și pot fi ajustate în
                funcție de specificul fiecărei comenzi.
              </h1>
            }
            img={officePinImg}
          />
          <ImageText
            classNameImg="w-6 mb-2"
            elements={
              <p className="text-center">
                Pentru detalii și oferte personalizate, nu ezitați să ne
                contactați.
              </p>
            }
            img={ideaImg}
          />
        </div>
        <Button
          text="Cere ofertă rapidă ➔"
          className="mx-auto"
          onClick={() => {
            scrollToSection("programari");
            ReactGA.event({
              category: "cere_oferta",
              action: "Preturi_oferta_btn",
              label: "Click pe cere oferta preturi",
            });
          }}
        />
        <div className="w-full flex items-center">
          <GoArrow
            className="w-20 mx-auto"
            onClick={() => scrollToSection("programari")}
          />
        </div>
      </div>
    </div>
  );
};

export default Preturi;
