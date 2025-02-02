"use client";

import Link from "next/link";
import logo from "../../../public/images/LOGO.png";
import Image from "next/image";
import drawer from "../../../public/svg/drawer.svg";

const Navbar = () => {
  const getLink = (name: string) => {
    return (
      <li>
        <Link
          href="/home"
          className="hover:text-brownHover transition duration-300 text-xl"
        >
          {name}
        </Link>
      </li>
    );
  };

  return (
    <nav className="bg-peach text-black shadow-md h-24 flex justify-between items-center w-full md:px-20 md:py-14 relative">
      <button className="md:hidden hover:cursor-pointer z-40 h-24">
        <Image src={drawer} alt="drawer" className="h-10"></Image>
      </button>
      <div className="h-24 flex-1 md:flex-none text-center md:text-left absolute inset-0 flex justify-center items-center md:static md:justify-start">
        <Image src={logo} alt="logo" className="h-full object-contain" />
      </div>
      <ul className="hidden md:flex space-x-12">
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
