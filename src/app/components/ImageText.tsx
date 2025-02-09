import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  text: string;
  classNameContainer?: string;
  classNameImg?: string;
  classNameParagraph?: string;
  img: StaticImageData;
  href?: string;
  onClick?: () => void;
}

const ImageText = ({
  text,
  classNameContainer,
  classNameImg,
  classNameParagraph,
  img,
  href,
  onClick,
}: Props) => {
  const content = (
    <>
      <Image src={img} alt="check-icon" className={classNameImg} />
      <span className={`font-semibold break-all ${classNameParagraph}`}>
        {text}
      </span>
    </>
  );

  const containerClass = `flex flex-row gap-2 items-center ${classNameContainer} ${
    href || onClick
      ? "hover:text-brownHover transition-colors duration-300 cursor-pointer"
      : ""
  }`;

  if (href || onClick) {
    return (
      <a href={href} onClick={onClick} className={containerClass}>
        {content}
      </a>
    );
  }

  return <div className={containerClass}>{content}</div>;
};

export default ImageText;
