"use client";

import React from "react";
import { ClipLoader } from "react-spinners";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const hoverAnimation = `
  relative
  overflow-hidden
  transition-all
  duration-300
  ease-in-out
  active:scale-95
  after:absolute
  after:inset-0
  after:bg-peach
  after:origin-left
  after:scale-x-0
  after:transition-transform
  after:duration-300
  after:ease-out
  md:hover:after:scale-x-100
  group
`;

const Button: React.FC<Props> = ({
  text,
  className = "",
  onClick,
  disabled = false,
  loading = false,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-3xl shadow-lg px-5 py-3 sm:py-5 font-normal flex items-center justify-center
        ${
          disabled
            ? `
              bg-gray-400 text-gray-700 cursor-not-allowed
              opacity-50
              transition-colors duration-300
            `
            : `
              bg-secondary text-black cursor-pointer
              ${hoverAnimation}
            `
        }
        ${className}
      `}
      aria-disabled={disabled}
    >
      {loading && <ClipLoader size={20} color="#000" className="mr-2" />}
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
