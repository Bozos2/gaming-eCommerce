import BreadcrumbsDetail from "@/app/components/UI/Breadcrumbs";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Online Plaćanja", link: "/online-payment" },
];

const OnlinePayments = () => {
  return (
    <section className="min-h-screen flex justify-center py-16 font-poppins bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <div className=" max-w-4xl mx-4">
        <div className="pb-10">
          <BreadcrumbsDetail items={breadcrumbItems} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-roboto">
          Dobrodošli na našu platformu! Kako bismo vam osigurali brz i siguran
          način plaćanja, surađujemo s pouzdanim partnerom - Stripe-om. Vaša
          sigurnost nam je na prvom mjestu, stoga smo odabrali Stripe zbog
          njihove izvrsne reputacije u osiguravanju sigurnih online transakcija.
        </h1>{" "}
        <h3 className="text-xl text-primary font-semibold tracking-wide pt-12">
          Što to znači za vas?
        </h3>{" "}
        <ul className="py-6 sm:list-disc">
          <li className="py-2 text-gray-400">
            <span className="text-white font-semibold">Brzina:</span> Plaćanja
            su trenutačna, omogućujući vam jednostavno i učinkovito završavanje
            kupovine.
          </li>
          <li className="py-2 text-gray-400">
            {" "}
            <span className="text-white font-semibold">
              Sigurnost podataka:
            </span>{" "}
            Svi vaši osjetljivi podaci o plaćanju enkriptirani su na najvišim
            standardima industrije. Vaši podaci ostaju privatni i nedostupni
            trećim stranama.{" "}
          </li>
          <li className="py-2 text-gray-400">
            <span className="text-white font-semibold">
              Zaštita od prijevara:
            </span>{" "}
            Stripe pruža napredne sustave zaštite od prijevara kako bi osigurao
            da su vaše transakcije sigurne od bilo kakvih neovlaštenih
            aktivnosti.
          </li>
          <li className="py-2 text-gray-400">
            <span className="text-white font-semibold">
              Jednostavnost korištenja:
            </span>{" "}
            Intuitivan i korisniku prijateljski sučelje Stripe-a olakšava vam
            proces plaćanja bez stresa ili poteškoća.
          </li>
        </ul>{" "}
        Saznajte više o prednostima korištenja Stripe-a odlaskom na njihovu
        stranicu. Ako imate dodatna pitanja ili nedoumice, slobodno nas
        kontaktirajte putem emaila ili pozivom na broj. Hvala vam što ste
        odabrali našu uslugu!
      </div>
    </section>
  );
};

export default OnlinePayments;
