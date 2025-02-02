import React from 'react';

interface Props {
    text: string;
    className?: string;
}

const Button = ({text, className}: Props) => {
    return (
        <button className={'rounded-3xl shadow-lg bg-secondary cursor-pointer z-40 w-56 py-5 px-3 ' + className}>
            {text}
        </button>
    );
};

export default Button;