import BreadcrumbsDetail from "@/app/components/UI/Breadcrumbs";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Najčešća Pitanja", link: "/faq" },
];

const QA = [
  {
    question: "Kako mogu naručiti svoju 3D gaming figuricu?",
    answer:
      "Da biste naručili svoju omiljenu gaming figuricu, jednostavno odaberite proizvod, dodajte ga u košaricu i slijedite upute za završetak narudžbe.",
  },
  {
    question: "Koja je prosečna dostava za gaming figurice?",
    answer:
      "Prosečno vreme dostave za naše gaming figurice je unutar 3-5 radnih dana.",
  },
  {
    question: "Kako mogu pratiti status svoje narudžbe?",
    answer:
      "Nakon što završite narudžbu, primit ćete potvrdu e-pošte s informacijama o statusu vaše narudžbe. Također možete koristiti opciju praćenja koja će vam omogućiti uvid u trenutni položaj vaše gaming figurice tijekom dostave.",
  },
  {
    question: "Imate li opciju prilagođavanja gaming figurica?",
    answer:
      "Da, nudimo personalizaciju!Imate poseban dio na našem sajtu za personalizaciju sopstvene figurice.",
  },
  {
    question: "Koliko traje proces personalizacije gaming figurica?",
    answer:
      "Vrijeme obrade personalizirane narudžbe ovisi o složenosti personalizacije. U većini slučajeva, možete očekivati dodatno vrijeme obrade od 1-2 radna dana.",
  },
  {
    question: "Imate li međunarodnu dostavu?",
    answer:
      "Da, pružamo međunarodnu dostavu. Provjerite opcije dostave tijekom postupka narudžbe kako biste odabrali odgovarajuću zemlju dostave i saznali o vremenu isporuke.",
  },
  {
    question: "Kako se vrši plaćanje narudžbe?",
    answer:
      "Prihvatamo različite načine plaćanja, uključujući kreditne kartice i PayPal. Odaberite onu opciju koja vam najviše odgovara prilikom završetka narudžbe.",
  },
  {
    question: "Šta ako nisam zadovoljan svojom narudžbom?",
    answer:
      "Vaše zadovoljstvo je naš prioritet. Ako niste potpuno zadovoljni svojom narudžbom, slobodno nas kontaktirajte. Pružit ćemo vam podršku u vezi povrata ili zamene.",
  },
  {
    question:
      "Mogu li promijeniti ili otkazati svoju narudžbu nakon što je potvrđena?",
    answer:
      "Nakon potvrde narudžbe, promjene su ograničene, ali obratite nam se odmah. Pokušat ćemo vam pomoći ili prilagoditi narudžbu prema vašim potrebama, ako je moguće.",
  },
  {
    question: "Što uključuje politika povrata?",
    answer:
      "Naša politika povrata omogućuje vam vraćanje proizvoda unutar određenog vremenskog razdoblja ako niste zadovoljni. Pogledajte detalje politike povrata na našoj stranici ili nas kontaktirajte za dodatne informacije.",
  },
];

const FaqPage = () => {
  return (
    <section className="min-h-screen flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <div className="max-w-3xl pb-8 sm:pt-20 font-poppins mx-4">
        <div className="pb-10">
          <BreadcrumbsDetail items={breadcrumbItems} />
        </div>
        <h1 className="text-4xl font-semibold">Najčešće postavljena pitanja</h1>
        <p className="pt-4 text-xl">
          Dobrodošli na našu stranicu posvećenu najčešće postavljenih pitanja
          naših korisnika. Evo svih odgovora na pitanja na jednom mjestu:
        </p>
        <ul className="pt-8">
          {QA.map((data, i) => (
            <li key={i}>
              <h1 className="pt-4 font-semibold text-xl text-primary">
                {data.question}
              </h1>
              <p className="pt-2 text-gray-400">{data.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FaqPage;
