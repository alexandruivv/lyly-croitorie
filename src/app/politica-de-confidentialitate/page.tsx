"use client";

import React from "react";
import Footer from "@/app/components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="p-14 text-black">
        <h1 className="text-2xl font-bold mb-4">Politica de Confidențialitate</h1>
        <p className="mb-4">
          Această politică de confidențialitate descrie modul în care colectăm, utilizăm și protejăm informațiile dvs.
          personale atunci când utilizați serviciile noastre.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. Informațiile colectate</h2>
        <p className="mb-4">
          Putem colecta informații personale, cum ar fi numele, adresa de e-mail, numărul de telefon, atunci când le
          furnizați voluntar prin formularele de contact sau de programări.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Utilizarea informațiilor</h2>
        <p className="mb-4">
          Informațiile colectate sunt utilizate pentru a furniza servicii personalizate, a îmbunătăți experiența
          utilizatorului și pentru comunicări referitoare la programări sau servicii oferite.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Protecția datelor</h2>
        <p className="mb-4">
          Luăm măsuri adecvate pentru protejarea informațiilor dvs. personale împotriva accesului neautorizat,
          utilizării necorespunzătoare sau divulgării acestora.
        </p>

        <h2 className="text-xl font-semibold mt-4">4. Partajarea informațiilor</h2>
        <p className="mb-4">
          Nu vindem, nu închiriem și nu distribuim informațiile dvs. personale unor terțe părți fără consimțământul
          dvs., cu excepția cazurilor impuse de lege.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Drepturile utilizatorului</h2>
        <p className="mb-4">
          Aveți dreptul să solicitați accesul, modificarea sau ștergerea informațiilor personale colectate. Ne puteți
          contacta pentru astfel de cereri.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Modificări ale politicii</h2>
        <p className="mb-4">
          Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Vă recomandăm să verificați periodic
          această pagină pentru eventuale modificări.
        </p>

        <h2 className="text-xl font-semibold mt-4">7. Contact</h2>
        <p className="mb-4">
          Dacă aveți întrebări sau solicitări cu privire la această politică de confidențialitate, ne puteți contacta
          la:
          <br />
          📧 Email: contact@lylydesign.ro
          <br />
          📞 Telefon: 0742 153 656
        </p>

      </div>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default PrivacyPolicy;
