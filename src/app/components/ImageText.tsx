import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  elements: ReactNode;
  classNameContainer?: string;
  classNameImg?: string;
  classNameParagraph?: string;
  className?: string;
  img: StaticImageData;
  href?: string;
  onClick?: () => void;
  blank?: boolean;
}

const ImageText = ({
  elements,
  classNameContainer,
  classNameImg,
  classNameParagraph,
  className,
  img,
  href,
  blank,
  onClick,
}: Props) => {
  const content = (
    <div className={`flex flex-row justify-start items-center gap-2 p-2 ${className}`}>
      <Image src={img} alt="check-icon" className={classNameImg} />
      <span className={`break-words ${classNameParagraph}`}>{elements}</span>
    </div>
  );

  const containerClass = `flex flex-row gap-2 items-center ${classNameContainer} ${
    href || onClick
      ? "hover:text-brownHover transition-colors duration-300 cursor-pointer"
      : ""
  }`;

  if (href || onClick) {
    return (
      <a href={href} target={blank? '_blank' : undefined} onClick={onClick} className={containerClass}>
        {content}
      </a>
    );
  }

  return <div className={containerClass}>{content}</div>;
};

export default ImageText;
