"use client";

import Link from "next/link";
import logo from "../../../public/images/LOGO.png";
import Image from "next/image";
import drawer from "../../../public/svg/drawer.svg";
import { scrollToSection } from "@/app/utils/utils";
import { useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  const getLink = (name: string) => {
    const scrollToCorrespondingPage = () => {
      let sectionName = "";
      switch (name) {
        case "Acasă":
          sectionName = "acasa";
          break;
        case "Cum procedăm?":
          sectionName = "despre-ce-e-vorba";
          break;
        case "Despre noi":
          sectionName = "despre-noi";
          break;
        case "Creații":
          sectionName = "lucrarile-noastre";
          break;
        case "Servicii":
          sectionName = "servicii";
          break;
        case "Întrebări":
          sectionName = "intrebari";
          break;
        case "Prețuri":
          sectionName = "preturi";
          break;
        case "Programări":
          sectionName = "programari";
          break;
        default:
          sectionName = "";
      }
      if (pathName === "/" && sectionName) {
        scrollToSection(sectionName);
      }
      if (pathName !== "/") {
        router.push("/");
      }
    };

    return (
      <li onClick={scrollToCorrespondingPage}>
        <p className="hover:text-brownHover transition duration-300 text-xl cursor-pointer">
          {name}
        </p>
      </li>
    );
  };

  return (
    <>
      <nav className="fixed top-0 left-0 bg-peach text-black shadow-md h-16 md:h-24 flex justify-between items-center w-full lg:px-20 z-50 box-border">
        <button
          className="lg:hidden hover:cursor-pointer z-40 h-16 md:h-24"
          onClick={() => setShowSidebar((prev) => !prev)}
        >
          <Image src={drawer} alt="drawer" className="h-8 md:h-10" />
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
          {getLink("Creații")}
          {getLink("Servicii")}
          {getLink("Întrebări")}
          {getLink("Prețuri")}
          {getLink("Programări")}
        </ul>
      </nav>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ease-in-out ${
          showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowSidebar(false)}
      />
      <Sidebar
        isOpen={showSidebar}
        onCloseSidebar={() => setShowSidebar((prev) => !prev)}
      />
    </>
  );
};

export default Navbar;
