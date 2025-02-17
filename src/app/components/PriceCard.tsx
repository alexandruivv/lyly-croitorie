import React from "react";

export interface PriceCardModel {
  category: string;
  prices: PriceModel[];
}

export interface PriceModel {
  title: string;
  price: string;
}

const PriceCard = ({ category, prices }: PriceCardModel) => {
  return (
    <div className="flex flex-col items-center min-w-[300px] min-h-[400px] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="bg-secondary60 text-black font-bold text-lg p-4 w-full text-center rounded-t-md">
        {category}
      </div>
      <div className="bg-peach p-4 w-full flex-grow flex flex-col justify-between rounded-b-2xl shadow-md">
        <div className="flex-grow flex flex-col justify-center">
          {prices.map((price, index) => (
            <div key={index} className="flex justify-between py-2">
              <span>{price.title}</span>
              <span className="ml-10">{price.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
