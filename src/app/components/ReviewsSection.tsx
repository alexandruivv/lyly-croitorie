import React from "react";
import Image, { StaticImageData } from "next/image";
import recenzie1 from '../../../public/images/recenzii/recenzie1.jpg';
import recenzie2 from '../../../public/images/recenzii/recenzie2.jpg';
import recenzie3 from '../../../public/images/recenzii/recenzie3.jpg';
import recenzie4 from '../../../public/images/recenzii/recenzie4.jpg';
import recenzie5 from '../../../public/images/recenzii/recenzie5.jpg';

const reviews = [
  {
    id: 1,
    name: "Elena I.",
    text: "Lily are foarte multa rabdare si pune suflet in fiecare cusatura. Am avut o experienta foarte placuta,  intr-un timp foarte scurt si buget mic, am primit rochia pe care mi-o doream, din poze. Recomand!",
    rating: 5,
    recenzieImg: recenzie1
  },
  {
    id: 2,
    name: "Mitrut B.",
    text: "Raport calitate preț cea mai buna alegere . Recomand cu încredere!",
    rating: 5,
    recenzieImg: recenzie2
  },
  {
    id: 3,
    name: "Niculina M.",
    text: "Recomand! Atentie la detalii si la cerintele speciale ale clientilor.\n" +
      "Comunicarea a fost una eficienta si produsul final a fost livrat la timp si impecabil. ",
    rating: 4,
    recenzieImg: recenzie3
  },
  {
    id: 4,
    name: "Alex I.",
    text: "Recomand, foarte utila deplasarea la domiciliu!",
    rating: 5,
    recenzieImg: recenzie4
  },
  {
    id: 5,
    name: "Mihaela F.",
    text: "Recomand cu toată încrederea. Am avut nevoie de intervenții la rochii de seară și am fost mulțumită de fiecare dată.",
    rating: 5,
    recenzieImg: recenzie5
  },
];

interface Props {
  name: string;
  text: string;
  rating: number;
  recenzieImg: StaticImageData;
}

const ReviewCard = ({ name, text, rating, recenzieImg }: Props) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <div className='flex flex-row gap-2 items-center mb-1'>
        <Image className='rounded-full max-w-12' src={recenzieImg} alt={`recenzie-${name}`}/>
        <h3 className="font-semibold text-lg">{name} <span className='font-light text-sm'>din Piatra Neamt</span></h3>
      </div>
      <div className="text-yellow-500 mt-2">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
      <p className="text-black">{text}</p>
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:flex lg:flex-col lg:w-1/2 lg:mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </>

  );
};

export default ReviewsSection;
