import React from "react";

const Banner = () => {
  return (
    <div className='fixed top-0 left-0 h-10 bg-black w-full text-white text-xs z-50 flex flex-col lg:flex-row lg:gap-1 items-center justify-center'>
        <p>🎁 Prinde oferta doar azi de -10% </p>
        <p>⏱️ Retușuri în 24h  🚗 Acoperim Piatra-Neamț (+10 km)</p>
    </div>
  );
};

export default Banner;