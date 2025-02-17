import React from "react";
import Image from "next/image";
import logo from "../../../public/images/LOGO.png";
import GoArrow, { GoArrowDirection } from "@/app/components/GoArrow";
import { scrollToSection } from "@/app/utils/utils";

interface Props {
  isOpen: boolean;
  onCloseSidebar: () => void;
}

const Sidebar = ({ isOpen, onCloseSidebar }: Props) => {
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
      if (sectionName) {
        scrollToSection(sectionName);
        onCloseSidebar();
      }
    };

    return (
      <li onClick={scrollToCorrespondingPage} className="cursor-pointer">
        <p>{name}</p>
      </li>
    );
  };

  return (
    <aside
      className={`fixed top-0 left-0 bg-peach shadow-lg h-screen w-3/4 z-50 text-black transform transition-all ${
        isOpen
          ? "translate-x-0 opacity-100 duration-300 ease-in-out"
          : "-translate-x-full opacity-0 duration-500 ease-in-out"
      }`}
    >
      <div className="flex flex-col justify-between h-full py-5 overflow-y-auto">
        <div className="px-8">
          <GoArrow direction={GoArrowDirection.LEFT} onClick={onCloseSidebar} />
          <ul className="flex flex-col gap-10 mt-10">
            {getLink("Acasă")}
            {getLink("Cum procedăm?")}
            {getLink("Despre noi")}
            {getLink("Creații")}
            {getLink("Servicii")}
            {getLink("Întrebări")}
            {getLink("Prețuri")}
            {getLink("Programări")}
          </ul>
        </div>
        <div className="h-20 text-center w-full flex items-center justify-center">
          <img src={logo.src} alt="logo" className="h-full object-contain" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
