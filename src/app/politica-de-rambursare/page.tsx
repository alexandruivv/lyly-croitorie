import React from "react";

const RefundPolicy = () => {
  return (
    <div className='py-24 lg:h-screen lg:flex lg:items-center'>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Politica de Rambursare</h1>
        <p className="mb-4">
          Această politică de rambursare descrie condițiile și procedurile pentru returnarea plăților efectuate pentru
          serviciile noastre.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Eligibilitatea pentru Rambursare</h2>
        <div className="mb-4">
          Rambursările sunt disponibile doar în anumite condiții, cum ar fi:
          <ul className="list-disc pl-5">
            <li>Serviciul nu a fost prestat conform descrierii.</li>
            <li>O anulare efectuată înainte de procesarea comenzilor.</li>
            <li>O eroare de plată din partea noastră.</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mt-4">2. Procedura de Rambursare</h2>
        <div className="mb-4">
          Pentru a solicita o rambursare, vă rugăm să urmați acești pași:
          <ul className="list-disc pl-5">
            <li>Trimiteți o solicitare scrisă la contact@lylydesign.ro.</li>
            <li>Includeți detaliile plății și motivul cererii.</li>
            <li>Noi vom analiza solicitarea și vom răspunde în termen de 7 zile lucrătoare.</li>
          </ul>
        </div>

        <h2 className="text-xl font-semibold mt-4">3. Rambursări Parțiale</h2>
        <p className="mb-4">
          În anumite cazuri, putem oferi rambursări parțiale, în funcție de progresul serviciului prestat până în
          momentul solicitării.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Rambursarea Fondurilor</h2>
        <p className="mb-4">
          Rambursările aprobate vor fi procesate în termen de 10 zile lucrătoare și vor fi returnate prin aceeași metodă
          de plată utilizată la efectuarea comenzii.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Contact</h2>
        <p className="mb-4">
          Pentru orice întrebări sau solicitări privind politica de rambursare, ne puteți contacta la:
          <br/>
          📧 Email: contact@lylydesign.ro
          <br/>
          📞 Telefon: 0742 153 656
        </p>
      </div>
    </div>

  );
};

export default RefundPolicy;
