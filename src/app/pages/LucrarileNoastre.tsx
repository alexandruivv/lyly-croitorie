"use client";

import GoArrow from "../components/GoArrow";
import Button from "../components/Button";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import {scrollToSection} from "@/app/utils/utils";
import {CustomCSSProperties} from "@/app/types/CustomCSSProperties";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../../../public/images/poze-lucrari/1.jpeg';
import img2 from '../../../public/images/poze-lucrari/2.jpeg';
import img3 from '../../../public/images/poze-lucrari/3.jpeg';
import img4 from '../../../public/images/poze-lucrari/4.jpeg';
import img6 from '../../../public/images/poze-lucrari/6.jpeg';
import img7 from '../../../public/images/poze-lucrari/7.jpeg';
import img8 from '../../../public/images/poze-lucrari/8.jpeg';
import img9 from '../../../public/images/poze-lucrari/9.jpeg';
import img10 from '../../../public/images/poze-lucrari/10.jpeg';
import img11 from '../../../public/images/poze-lucrari/11.jpeg';
import img12 from '../../../public/images/poze-lucrari/12.jpeg';
import img13 from '../../../public/images/poze-lucrari/13.jpeg';
import img15 from '../../../public/images/poze-lucrari/15.jpeg';
import img16 from '../../../public/images/poze-lucrari/16.jpeg';
import img17 from '../../../public/images/poze-lucrari/17.jpeg';
import img18 from '../../../public/images/poze-lucrari/18.jpeg';
import img19 from '../../../public/images/poze-lucrari/19.jpeg';
import img20 from '../../../public/images/poze-lucrari/20.jpeg';
import img21 from '../../../public/images/poze-lucrari/21.jpeg';
import img22 from '../../../public/images/poze-lucrari/22.jpeg';
import img23 from '../../../public/images/poze-lucrari/23.jpeg';
import img24 from '../../../public/images/poze-lucrari/24.jpeg';
import img25 from '../../../public/images/poze-lucrari/25.jpeg';
import img26 from '../../../public/images/poze-lucrari/26.jpg';
import img27 from '../../../public/images/poze-lucrari/27.jpg';
import img28 from '../../../public/images/poze-lucrari/28.jpg';
import img29 from '../../../public/images/poze-lucrari/29.jpeg';
import img30 from '../../../public/images/poze-lucrari/30.jpeg';
import ReviewsSection from "@/app/components/ReviewsSection";
import ReactGA from "react-ga4";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const imgClass='max-h-96 object-contain';

const LucrarileNoastre = () => {
  return (
    <div
      id="lucrarile-noastre"
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
      <div
        className="relative h-full flex flex-col justify-between py-24 px-5 lg:py-32 max-md:pb-32 text-black w-full gap-10">
        <h1 className="font-bold text-2xl md:text-5xl text-center max-lg:mt-5 lg:my-10">
          Creațiile noastre
        </h1>
        <p className="font-light text-medium md:text-xl text-center max-lg:mt-5 lg:my-10">
          Descoperă lucrările noastre realizate cu atenție la detalii și pasiune pentru croitorie. Fie că este vorba
          de <span className='text-secondary font-bold'>retușuri impecabile</span>, <span
          className='text-secondary font-bold'>haine personalizate</span> sau modele unice inspirate de <span
          className='text-secondary font-bold'>dorințele
          clienților</span>, fiecare piesă reflectă <span
          className='text-secondary font-bold'>profesionalismul</span> și
          <span className='text-secondary font-bold'> creativitatea noastră</span>. Alege calitatea și stilul perfect
          adaptat nevoilor tale! ✂️👗✨
        </p>
        <Carousel responsive={responsive}>
          <Image src={img15} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img16} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img17} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img18} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img19} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img26} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img27} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img28} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img29} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img30} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img20} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img21} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img22} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img23} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img24} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img25} alt='despre-noi-image-img14' className={imgClass}/>
          <Image src={img1} alt='despre-noi-image-img1' className={imgClass}/>
          <Image src={img2} alt='despre-noi-image-img2' className={imgClass}/>
          <Image src={img3} alt='despre-noi-image-img3' className={imgClass}/>
          <Image src={img4} alt='despre-noi-image-img4' className={imgClass}/>
          <Image src={img6} alt='despre-noi-image-img6' className={imgClass}/>
          <Image src={img7} alt='despre-noi-image-img7' className={imgClass}/>
          <Image src={img8} alt='despre-noi-image-img8' className={imgClass}/>
          <Image src={img9} alt='despre-noi-image-img9' className={imgClass}/>
          <Image src={img10} alt='despre-noi-image-img10' className={imgClass}/>
          <Image src={img11} alt='despre-noi-image-img11' className={imgClass}/>
          <Image src={img12} alt='despre-noi-image-img12' className={imgClass}/>
          <Image src={img13} alt='despre-noi-image-img13' className={imgClass}/>

        </Carousel>

        <Button
          text="Cere ofertă rapidă ➔"
          className="mx-auto"
          onClick={() => {
            scrollToSection("programari");
            ReactGA.event({
              category: "cere_oferta",
              action: "CreatiileNoastre_oferta_btn",
              label: "Click pe cere oferta creatiile noastre",
            });
          }}
        />
        <div className='w-full flex items-center'>
          <GoArrow
            className="w-20 mx-auto"
            onClick={() => scrollToSection("recenzii")}
          />
        </div>
      </div>
    </div>
  );
};

export default LucrarileNoastre;
