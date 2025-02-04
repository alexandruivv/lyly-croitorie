import goDownArrow from "../../../public/svg/go-down-arrow.svg";
import Image from "next/image";

interface Props {
  className?: string;
  onClick?: () => void;
}

const GoDownArrow: React.FC<Props> = ({ className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`transform scale-75 hover:scale-100 hover:brightness-75 transition-all duration-300 ease-in-out ${className}`}
    >
      <Image src={goDownArrow} alt="Go down arrow" className="h-full w-20" />
    </button>
  );
};

export default GoDownArrow;
