import goDownArrow from "../../../public/svg/go-down-arrow.svg";
import goUpArrow from "../../../public/svg/go-up-arrow.svg";
import goLeftArrow from "../../../public/svg/go-left-arrow.svg";
import Image from "next/image";

interface Props {
  className?: string;
  onClick?: () => void;
  direction?: GoArrowDirection;
}

export enum GoArrowDirection {
  UP='up', DOWN='down', LEFT='left'
}

const GoArrow: React.FC<Props> = ({ className, onClick, direction }: Props) => {
  const computeArrowImg =
      () => {
    if (!direction) {
      return goDownArrow;
    }
    if (direction === GoArrowDirection.UP) {
      return goUpArrow;
    } else if (direction === GoArrowDirection.LEFT) {
      return goLeftArrow;
    }
    return goDownArrow;
  }

  return (
    <button
      onClick={onClick}
      className={`transform scale-75 hover:scale-100 hover:brightness-75 transition-all duration-300 ease-in-out ${className}`}
    >
      <Image src={computeArrowImg()} alt={`Go ${direction} arrow`} className="md:w-20 w-14" />
    </button>
  );
};

export default GoArrow;
