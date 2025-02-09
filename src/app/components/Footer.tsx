"use client";

import Image from "next/image";
import phoneIcon from "../../../public/images/phone.png";
import mailIcon from "../../../public/images/mail.png";
import clockIcon from "../../../public/images/clock.png";
import { StaticImageData } from "next/image";
import { scrollToSection } from "@/app/utils/utils";

interface FooterColumn {
  title: string;
  links: {
    text: string;
    icon?: StaticImageData;
    href?: string;
    onClick?: () => void;
  }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "PROGRAMĂRI",
    links: [
      { text: "0742 153 656", href: "tel:0742153656", icon: phoneIcon },
      {
        text: "contact@lylycroitorie.ro",
        href: "mailto:contact@lylycroitorie.ro",
        icon: mailIcon,
      },
      {
        text: "Lu-Du 7:00 - 18:00",
        icon: clockIcon,
        onClick: () => scrollToSection("programari"),
      },
    ],
  },
  {
    title: "INFORMAȚII",
    links: [
      {
        text: "Despre noi",
        onClick: () => scrollToSection("despre-noi"),
      },
      {
        text: "Politica de confidențialitate",
        onClick: () => scrollToSection("acasa"),
      },
      {
        text: "Termeni și condiții",
        onClick: () => scrollToSection("acasa"),
      },
      {
        text: "Contact",
        onClick: () => scrollToSection("programari"),
      },
    ],
  },
  {
    title: "CLIENȚI",
    links: [
      {
        text: "ONLINE DISPUTE RESOLUTION",
        href: "https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO",
      },
      { text: "ANPC", href: "https://anpc.ro/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary43 w-full py-8 text-black">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-32 lg:gap-64">
        {footerColumns.map((column, index) => (
          <div
            key={index}
            className="mb-6 sm:mb-0 flex flex-col items-center sm:items-start"
          >
            <h3 className="font-bold text-lg mb-4 text-center sm:text-left">
              {column.title}
            </h3>
            <div className="flex flex-col space-y-2 items-center sm:items-start">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  onClick={link.onClick}
                  className="hover:text-brownHover transition-colors duration-300 flex items-center gap-2 justify-center sm:justify-start cursor-pointer"
                >
                  {link.icon && (
                    <Image
                      src={link.icon}
                      alt=""
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  )}
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-t border-black/10 mt-8">
        <div className="container mx-auto px-4 pt-4 text-center sm:text-left">
          <p>©Copyright LYLY CROITORIE © 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
