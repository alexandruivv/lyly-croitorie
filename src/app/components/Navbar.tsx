"use client";

import Link from "next/link";
import logo from "../../../public/images/LOGO.png";
import Image from "next/image";
import drawer from "../../../public/svg/drawer.svg";
import {scrollToSection} from "@/app/utils/utils";

const Navbar = () => {
  const getLink = (name: string) => {
      const scrollToCorrespondingPage = () => {
          let sectionName = '';
          switch (name) {
              case 'Acasă':
                  sectionName = 'acasa'
                  break;
              case 'Cum procedăm?':
                  sectionName = 'despre-ce-e-vorba'
                  break;
              case 'Despre noi':
                  sectionName = 'despre-noi'
                  break;
              case 'Servicii':
                  sectionName = 'servicii';
                  break;
              case  'Programări':
                  sectionName = 'programari'
                  break;
              default :
                  sectionName = '';
          }
          if (sectionName) {
              scrollToSection(sectionName);
          }
      }

      return (
      <li onClick={scrollToCorrespondingPage}>
        <p
          className="hover:text-brownHover transition duration-300 text-xl cursor-pointer"
        >
          {name}
        </p>
      </li>
    );
  };

  return (
    <nav className="fixed top-0 left-0 bg-peach text-black shadow-md h-16 md:h-24 flex justify-between items-center w-full lg:px-20 z-50 box-border">
      <button className="lg:hidden hover:cursor-pointer z-40 h-16 md:h-24">
        <Image src={drawer} alt="drawer" className="h-8 md:h-10"></Image>
      </button>
      <Link
        href="/"
        className="h-16 md:h-24 flex-1 lg:flex-none text-center lg:text-left absolute inset-0 flex justify-center items-center lg:static lg:justify-start"
      >
        <Image src={logo} alt="logo" className="h-full object-contain" />
      </Link>
      <ul className="hidden lg:flex space-x-12">
        {getLink("Acasă")}
        {getLink("Cum procedăm?")}
        {getLink("Despre noi")}
        {getLink("Servicii")}
        {getLink("Programări")}
      </ul>
    </nav>
  );
};

export default Navbar;
