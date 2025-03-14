"use client";

import GoArrow from "../components/GoArrow";
import Button from "../components/Button";
import { scrollToSection } from "@/app/utils/utils";
import bgMobileImg from "../../../public/images/despre_ce_e_vorba_bg_mobile.webp";
import bgImg from "../../../public/images/despre_ce_e_vorba_bg.webp";
import numberOneImg from "../../../public/svg/number-one.svg";
import numberTwoImg from "../../../public/svg/number-two.svg";
import numberThreeImg from "../../../public/svg/number-three.svg";
import officePinImg from "../../../public/svg/office-pin.svg";
import whatsAppImg from "../../../public/svg/whatsapp.svg";
import fbImg from "../../../public/svg/facebook.svg";
import phoneImg from "../../../public/svg/phone.svg";
import emailImg from "../../../public/svg/mail.svg";
import ideaImg from "../../../public/svg/idea.svg";
import { CustomCSSProperties } from "@/app/types/CustomCSSProperties";
import ExpansionPanel from "../components/ExpansionPanel";
import ImageText from "../components/ImageText";
import ReactGA from "react-ga4";

const Intrebari = () => {
  const faqs = [
    {
      id: 'CumFunctioneaza_intrebare',
      question: "Cum funcționează serviciul de croitorie mobilă?",
      answer: (
        <div>
          <ImageText
            classNameImg="w-6 mb-8"
            classNameParagraph="mb-8"
            elements="Serviciul nostru este simplu și comod:"
            img={officePinImg}
          />

          <ol className="list-decimal pl-5">
            <ImageText
              classNameImg="w-4 mb-12"
              classNameParagraph="mb-6"
              elements="Un reprezentant vine la domiciliul tău pentru a prelua produsele sau
              pentru a lua măsurători."
              img={numberOneImg}
            />
            <ImageText
              classNameImg="w-4 mb-8"
              classNameParagraph="mb-8"
              elements="Executăm retușurile sau confecționăm articolele dorite."
              img={numberTwoImg}
            />
            <ImageText
              classNameImg="w-4 mb-8"
              classNameParagraph="mb-6"
              elements="Livrăm produsele finalizate direct la tine."
              img={numberThreeImg}
            />
          </ol>
        </div>
      ),
    },
    {
      id: 'InCeLocalitati_intrebare',
      question: "În ce localități oferiți serviciul?",
      answer: (
        <div>
          <ImageText
            classNameImg="w-6 mb-12"
            elements="Oferim servicii de croitorie mobilă în Piatra-Neamț și zonele
                apropiate. Dacă ești dintr-o localitate învecinată, contactează-ne și
                vedem cum te putem ajuta!"
            img={officePinImg}
          />
        </div>
      ),
    },
    {
      id: 'ExistaOTaxa_intrebare',
      question: "Există o taxă pentru deplasare?",
      answer: (
        <div>
          <ImageText
            classNameImg="w-6 mb-12"
            elements="Deplasarea este gratuită pentru comenzi peste o anumită sumă. Pentru comenzi mai mici, se poate percepe o taxă de transport în funcție de distanță. Contactează-ne pentru detalii!"
            img={officePinImg}
          />
        </div>
      ),
    },
    {
      id: 'CatDureaza_intrebare',
      question: "Cât durează un retuș obișnuit?",
      answer: (
        <div>
          <ImageText
            classNameImg="w-6 mb-12"
            elements="Retușurile simple (scurtare, ajustare talie, înlocuire fermoar) sunt gata în 24-72 de ore, în funcție de volumul comenzilor. Articolele mai complexe pot necesita un timp suplimentar."
            img={officePinImg}
          />
        </div>
      ),
    },
    {
      id: 'OferitiServiciiUrgente_intrebare',
      question: "Oferiți servicii urgente?",
      answer: (
        <div>
          <ImageText
            classNameImg="w-6 mb-6"
            elements="Da! Oferim retușuri rapide, uneori chiar în aceeași zi, în funcție de disponibilitate. Pentru servicii urgente, te rugăm să ne contactezi în avans."
            img={officePinImg}
          />
        </div>
      ),
    },
    {
      id: 'ComandaConfectDeLaZero_intrebare',
      question: "Se poate comanda și confecționarea unui produs de la zero?",
      answer: (
        <div>
          <ImageText
            classNameImg="w-6 mb-12"
            elements="Da! Realizăm produse personalizate, fie pe baza unei schițe, fie pornind de la un model dorit. Îți oferim consultanță pentru alegerea materialului, croielii și detaliilor."
            img={officePinImg}
          />
        </div>
      ),
    },
    {
      id: 'CumPotFaceProg_intrebare',
      question: "Cum pot face o programare?",
      answer: (
        <div>
          <ImageText
            classNameImg="w-6 mb-8"
            classNameParagraph="mb-8"
            elements="Ne poți contacta pentru programări prin:"
            img={officePinImg}
          />
          <ol className="list-decimal pl-5">
            <ImageText
              classNameImg="w-4 mb-6"
              classNameParagraph="mb-6"
              elements={
                <p>
                  Telefon:
                  <a
                    className="font-bold text-secondary ml-2 cursor-pointer hover:text-brownHover transition duration-300"
                    href="tel:0742153656"
                  >
                    0742 153 656
                  </a>
                </p>
              }
              img={phoneImg}
            />
            <ImageText
              classNameImg="w-4 mb-6"
              classNameParagraph="mb-6"
              elements={
                <p>
                  Email:
                  <a
                    className="font-bold text-secondary ml-2 cursor-pointer hover:text-brownHover transition duration-300"
                    href="mailto:contact@lylydesign.ro"
                  >
                    contact@lylydesign.ro
                  </a>
                </p>
              }
              img={emailImg}
            />
            <ImageText
              classNameImg="w-4 mb-6"
              classNameParagraph="mb-6"
              elements={
                <p>
                  WhatsApp:
                  <a
                    className="font-bold text-secondary ml-2 cursor-pointer hover:text-brownHover transition duration-300"
                    href="https://wa.me/40742153656"
                  >
                    0742 153 656
                  </a>
                </p>
              }
              img={whatsAppImg}
            />
            <ImageText
              classNameImg="w-4 mb-6"
              classNameParagraph="mb-6"
              elements={
                <p>
                  Facebook Messenger:
                  <a
                    className="font-bold text-secondary ml-2 cursor-pointer hover:text-brownHover transition duration-300"
                    href="https://m.me/lylycroitorie"
                  >
                    lylycroitorie
                  </a>
                </p>
              }
              img={fbImg}
            />
            <ImageText
              classNameImg="w-4 mb-6"
              classNameParagraph="mb-6"
              elements={
                <p>
                  Accesând secțiunea
                  <a
                    className="font-bold text-secondary ml-2 cursor-pointer hover:text-brownHover transition duration-300"
                    onClick={() => scrollToSection("programari")}
                  >
                    Programări
                  </a>
                </p>
              }
              img={ideaImg}
            />
          </ol>
        </div>
      ),
    },
    {
      id: 'AjustariSuplim_intrebare',
      question: "Dacă sunt necesare ajustări suplimentare, ce soluții oferiți?",
      answer: (
        <div>
          <ImageText
            classNameImg="w-6 mb-12"
            elements="Ne dorim ca fiecare client să fie mulțumit! Dacă apar probleme, ne poți contacta în termen de 48 de ore de la livrare și vom remedia ajustările fără costuri suplimentare."
            img={officePinImg}
          />
        </div>
      ),
    },
    {
      id: 'CroitorieEvenSpec_intrebare',
      question:
        "Faceți și croitorie pentru evenimente speciale (nuntă, botez, costume elegante)?",
      answer: (
        <div>
          <ImageText
            classNameImg="w-6 mb-6"
            elements="Da! Confecționăm rochii elegante, costume la comandă și ținute pentru ocazii speciale doar cu materialul clientului. Contactează-ne pentru o consultație personalizată!"
            img={officePinImg}
          />
        </div>
      ),
    },
  ];

  return (
    <div
      id="intrebari"
      style={
        {
          "--mobile-image-url": `url(${bgMobileImg.src})`,
          "--image-url": `url(${bgImg.src})`,
        } as CustomCSSProperties
      }
      className="relative w-full bg-cover bg-center bg-no-repeat bg-[image:var(--mobile-image-url)] lg:bg-[image:var(--image-url)]"
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="fade-overlay"></div>
      <div className="relative h-full flex flex-col justify-between py-24 px-5 lg:py-32 max-md:pb-32 text-black w-full gap-10">
        <h1 className="font-bold text-2xl md:text-5xl text-center max-lg:mt-5 lg:my-10">
          Întrebări frecvente
        </h1>

        <div className="w-full flex flex-col items-center">
          <div className="max-w-2xl w-full">
            {faqs.map((faq, index) => (
              <ExpansionPanel
                key={index}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <ImageText
            classNameImg="w-6 mb-8"
            elements={
              <h1 className="text-2xl font-bold mb-8 text-center">
                Nu ai găsit răspunsul dorit?
              </h1>
            }
            img={officePinImg}
          />
          <ImageText
            classNameImg="w-6 mb-2"
            elements={
              <p className="text-center">
                Sună-ne la
                <a
                  className="font-bold text-secondary ml-2 cursor-pointer hover:text-brownHover transition duration-300 mr-2"
                  href="tel:0742153656"
                  onClick={() => {
                    ReactGA.event({
                      category: "cere_oferta",
                      action: "Telefon_intrebari_click",
                      label: "Click pe cere oferta telefon",
                    });
                  }}
                >
                  0742 153 656
                </a>
                , scrie-ne pe
                <a
                  className="font-bold text-secondary ml-2 cursor-pointer hover:text-brownHover transition duration-300 mr-2"
                  href="https://wa.me/40742153656"
                  onClick={() => {
                    ReactGA.event({
                      category: "cere_oferta",
                      action: "Whatsapp_telefon_click",
                      label: "Click pe cere oferta whatsapp",
                    });
                  }}
                >
                  WhatsApp
                </a>
                sau accesează secțiunea
                <a
                  className="font-bold text-secondary ml-2 cursor-pointer hover:text-brownHover transition duration-300 mr-2"
                  onClick={() => scrollToSection("programari")}
                >
                  Programări
                </a>
                pentru orice întrebare!
              </p>
            }
            img={ideaImg}
          />
        </div>
        <Button
          text="Cere ofertă rapidă ➔"
          className="mx-auto"
          onClick={() => {
            scrollToSection("programari");
            ReactGA.event({
              category: "cere_oferta",
              action: "Intrebari_oferta_btn",
              label: "Click pe cere oferta intrebari",
            });
          }}
        />
        <div className="w-full flex items-center">
          <GoArrow
            className="w-20 mx-auto"
            onClick={() => scrollToSection("preturi")}
          />
        </div>
      </div>
    </div>
  );
};

export default Intrebari;
