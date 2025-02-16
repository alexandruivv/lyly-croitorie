"use client";

import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className='py-24 lg:h-screen lg:flex lg:items-center'>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Termeni și Condiții</h1>
        <p className="mb-4">
          Acești termeni și condiții reglementează utilizarea serviciilor noastre și a site-ului web. Prin accesarea și
          utilizarea acestui site, sunteți de acord cu termenii și condițiile de mai jos.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Utilizarea Serviciilor</h2>
        <p className="mb-4">
          Serviciile oferite prin acest site sunt disponibile utilizatorilor care acceptă și respectă acești termeni. Ne
          rezervăm dreptul de a refuza accesul la servicii oricui nu respectă aceste condiții.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Drepturi de Proprietate Intelectuală</h2>
        <p className="mb-4">
          Conținutul site-ului, inclusiv texte, imagini și design, este protejat de legile privind drepturile de autor
          și nu poate fi utilizat fără permisiunea noastră expresă.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Responsabilități și Limitări</h2>
        <p className="mb-4">
          Nu ne asumăm responsabilitatea pentru eventualele erori sau omisiuni în conținutul site-ului. Utilizatorii
          sunt responsabili pentru utilizarea informațiilor disponibile.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Politica de Plată și Rambursare</h2>
        <p className="mb-4">
          Plățile pentru serviciile oferite trebuie efectuate conform detaliilor furnizate. Rambursările sunt
          disponibile doar în cazurile specificate în <Link href='/politica-de-rambursare'>politica noastră de rambursare.</Link>
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Modificări ale Termenilor</h2>
        <p className="mb-4">
          Ne rezervăm dreptul de a modifica acești termeni și condiții fără notificare prealabilă. Vă încurajăm să
          verificați periodic această pagină.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Contact</h2>
        <p className="mb-4">
          Pentru orice întrebări legate de acești termeni și condiții, ne puteți contacta la:
          <br/>
          📧 Email: contact@lylydesign.ro
          <br/>
          📞 Telefon: 0742 153 656
        </p>
      </div>
    </div>

  );
};

export default TermsAndConditions;
