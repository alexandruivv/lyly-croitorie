"use client";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
}

const hoverAnimation = `
  before:ease
  relative
  overflow-hidden
  transition-all
  before:absolute
  before:right-0
  before:top-0
  before:h-16
  before:w-12
  before:translate-x-12
  before:rotate-6
  before:bg-white
  before:opacity-10
  before:duration-700
  hover:before:-translate-x-40
`;

const Button: React.FC<Props> = ({ text, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-black rounded-3xl shadow-lg px-5 py-3 sm:py-5 font-normal transition-shadow duration-30 ${hoverAnimation} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
