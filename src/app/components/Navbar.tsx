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
          href="/"
          className="hover:text-brownHover transition duration-300 text-xl"
        >
          {name}
        </Link>
      </li>
    );
  };

  return (
    <nav className="fixed top-0 left-0 bg-peach text-black shadow-md h-24 flex justify-between items-center w-full lg:px-20 lg:py-14 z-50">
      <button className="lg:hidden hover:cursor-pointer z-40 h-24">
        <Image src={drawer} alt="drawer" className="h-10"></Image>
      </button>
      <Link
        href="/"
        className="h-24 flex-1 lg:flex-none text-center lg:text-left absolute inset-0 flex justify-center items-center lg:static lg:justify-start"
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
