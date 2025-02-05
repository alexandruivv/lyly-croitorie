import Image from "next/image";
import checkCircle from "../../../public/svg/check-circle.svg";

interface Props {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
}

const ServiciiDescriere: React.FC<Props> = ({
  title,
  firstParagraph,
  secondParagraph,
}: Props) => {
  return (
    <div className="bg-peach p-3 md:p-6 rounded-lg shadow-lg w-[90vw] md:max-w-xl h-48 md:h-72 flex flex-col text-black">
      <h2 className="text-lg md:text-3xl font-bold mb-2 md:mb-8 text-center -mt-1 md:-mt-2">
        {title}
      </h2>
      <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-4">
        <Image
          src={checkCircle}
          alt="check"
          className="w-5 h-5 md:w-8 md:h-8 mt-1"
        />
        <p className="text-sm md:text-xl">{firstParagraph}</p>
      </div>
      <div className="flex items-start gap-2 md:gap-3">
        <Image
          src={checkCircle}
          alt="check"
          className="w-5 h-5 md:w-8 md:h-8 mt-1"
        />
        <p className="text-sm md:text-xl">{secondParagraph}</p>
      </div>
    </div>
  );
};

export default ServiciiDescriere;
