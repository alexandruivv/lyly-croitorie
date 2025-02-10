"use client";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
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

const Button: React.FC<Props> = ({ text, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-black rounded-3xl shadow-lg px-5 py-3 sm:py-5 font-normal ${hoverAnimation} ${className}`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
