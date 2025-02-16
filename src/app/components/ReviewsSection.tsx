import React from "react";

const reviews = [
  {
    id: 1,
    name: "Andreea M.",
    text: "Servicii excelente! Rochia mea a fost ajustată perfect și livrată rapid. Recomand cu încredere!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mihai P.",
    text: "Profesionalism și atenție la detalii! Am fost impresionat de calitatea croitoriei. Cu siguranță voi reveni!",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena R.",
    text: "Foarte mulțumită de serviciul de croitorie mobilă! Totul a fost comod și fără stres.",
    rating: 4,
  },
  {
    id: 4,
    name: "Cristian D.",
    text: "Calitate superioară și livrare rapidă. Nu mă așteptam să fie atât de ușor să fac modificări la haine!",
    rating: 5,
  },
];

interface Props {
  name: string;
  text: string;
  rating: number;
}

const ReviewCard = ({ name, text, rating }: Props) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600">{text}</p>
      <div className="text-yellow-500 mt-2">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
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
