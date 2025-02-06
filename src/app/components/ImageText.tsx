import React from 'react';
import Image, {StaticImageData} from "next/image";

interface Props {
    text: string;
    classNameContainer?: string;
    classNameImg?: string;
    classNameParagraph?: string;
    img: StaticImageData;
}

const ImageText = ({text, classNameContainer, classNameImg, classNameParagraph, img}: Props) => {
    return (
        <div className={`flex flex-row gap-2 items-center ${classNameContainer}`}>
            <Image src={img} alt="check-icon" className={classNameImg}/>
            <p className={`font-semibold break-all ${classNameParagraph}`}>{text}</p>
        </div>
    );
};

export default ImageText;