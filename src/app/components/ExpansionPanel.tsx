"use client";

import React, { useState } from "react";
import ReactGA from "react-ga4";

interface Props {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const ExpansionPanel = ({ question, answer, id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg shadow-md mb-4" onClick={() => {
      ReactGA.event({
        category: "intrebari",
        action: id,
        label: "Click pe cere oferta " + id,
      });
    }}>
      <div
        className={`bg-peach p-4 cursor-pointer flex justify-between items-center transition-transform duration-300 ease-in-out ${
          isOpen
            ? "bg-opacity-80"
            : "hover:scale-105 hover:bg-secondary hover:bg-opacity-70"
        }`}
        onClick={togglePanel}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span>{isOpen ? "−" : "+"}</span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-white">{answer}</div>
      </div>
    </div>
  );
};

export default ExpansionPanel;
