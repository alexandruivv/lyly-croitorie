"use client";

import Image from "next/image";
import mapPin from "../../../public/svg/map-pin.svg";
import phoneIcon from "../../../public/svg/phone.svg";
import mailIcon from "../../../public/svg/mail.svg";
import clockIcon from "../../../public/svg/clock.svg";
import { StaticImageData } from "next/image";
import { scrollToSection } from "@/app/utils/utils";
import {useRouter} from "next/navigation";

interface FooterColumn {
  title: string;
  links: {
    text: string;
    icon?: StaticImageData;
    href?: string;
    blank?: boolean;
    onClick?: () => void;
  }[];
}



const Footer = () => {
  const router = useRouter();

  const footerColumns: FooterColumn[] = [
    {
      title: "PROGRAMĂRI",
      links: [
        {
          text: "Piatra-Neamt",
          icon: mapPin,
          onClick: () => scrollToSection("programari"),
        },
        { text: "0742 153 656", href: "tel:0742153656", icon: phoneIcon },
        {
          text: "contact@lylydesign.ro",
          href: "mailto:contact@lylydesign.ro",
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
          onClick: () => navigate('/politica-de-confidentialitate'),
        },
        {
          text: "Termeni și condiții",
          onClick: () => navigate('/termeni-si-conditii'),
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
          blank: true,
        },
        { text: "ANPC", href: "https://anpc.ro/", blank: true },
      ],
    },
  ];

  const navigate = (path: string) => {
    router.push(path);
  }

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
                  target={link.blank ? "_blank" : ""}
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
          <p>©Copyright LYLY DESIGN © 2024 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
