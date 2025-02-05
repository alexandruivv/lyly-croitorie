import React from 'react';
import Image from "next/image";
import checkIcon from '../../../public/images/check_icon.png';


interface Props {
    text: string;
}

const CheckboxText = ({text}: Props) => {
    return (
        <div className="flex flex-row gap-4 items-center w-full lg:w-[49%]">
            <Image src={checkIcon} alt="check-icon" className="max-md:w-10 max-lg:w-20 w-20"/>
            <p className='text-sm lg:text-2xl font-semibold'>{text}</p>
        </div>
    );
};

export default CheckboxText;