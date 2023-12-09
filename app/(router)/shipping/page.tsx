import BreadcrumbsDetail from "@/app/components/UI/Breadcrumbs";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Dostava", link: "/shipping" },
];

const ShippingPage = () => {
  return (
    <section className="min-h-screen flex justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <div className="max-w-3xl py-8 sm:pt-20 font-poppins mx-4">
        <div className="pb-10">
          <BreadcrumbsDetail items={breadcrumbItems} />
        </div>
        <h1 className="text-4xl font-semibold">Brza Isporuka</h1>
        <p className="pt-4  text-xl">
          Dobrodošli na našu stranicu posvećenu brzoj isporuci vaših narudžbi.
          Nudimo efikasan sustav dostave kako biste što prije uživali u svojim
          proizvodima. Evo nekoliko ključnih informacija o našoj brzoj isporuci:
        </p>

        <h2 className="pt-8 font-semibold text-xl text-primary">
          Kako funkcionira?
        </h2>
        <p className="pt-2 text-gray-400">
          Naš tim posvećen je obradi vaših narudžbi što je brže moguće. Nakon
          što narudžba bude potvrđena, pripremamo je za otpremu. U suradnji s
          pouzdanim dostavnim partnerima, osiguravamo da vaši proizvodi stignu
          do vas unutar 72 sata od trenutka otpreme.
        </p>

        <h2 className="pt-4 text-primary font-semibold text-xl">
          Praćenje narudžbe
        </h2>
        <p className="pt-2 text-gray-400">
          Da biste pratili status vaše narudžbe i saznali očekivano vrijeme
          isporuke, možete koristiti naš sustav praćenja. Prilikom otpreme,
          pružit ćemo vam broj za praćenje kako biste bili informirani o
          kretanjima vaše pošiljke.
        </p>

        <h2 className="pt-4 text-primary font-semibold text-xl">
          Kontaktirajte nas
        </h2>
        <p className="pt-2 text-gray-400">
          Ako imate dodatna pitanja o našoj usluzi isporuke ili trebate pomoć
          oko vaše narudžbe, slobodno nas kontaktirajte. Naš tim za podršku tu
          je da vam pruži potrebne informacije i riješi sve nedoumice.
        </p>

        <p className="pt-8 text-lg">
          Hvala vam što ste odabrali našu brzu isporuku. Radujemo se što ćemo
          vam omogućiti uživanje u vašim proizvodima u najkraćem mogućem roku!
        </p>
      </div>
    </section>
  );
};

export default ShippingPage;
