import BreadcrumbsDetail from "@/app/components/UI/Breadcrumbs";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Najčešća Pitanja", link: "/faq" },
];

const WarrantyPage = () => {
  return (
    <section className="min-h-screen flex justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <div className="max-w-3xl py-8 sm:pt-20 font-poppins mx-4">
        <div className="pb-10">
          <BreadcrumbsDetail items={breadcrumbItems} />
        </div>
        <h1 className="text-4xl font-semibold">Jamstvo i Povrat</h1>
        <p className="pt-4  text-xl">
          Dobrodošli na našu stranicu posvećenu jamstvu i politici povrata
          proizvoda. Želimo osigurati da ste potpuno zadovoljni vašom kupnjom.
          Evo informacija o našem jamstvu i postupku povrata:
        </p>

        <h2 className="pt-8 font-semibold text-xl text-primary">
          Jamstvo proizvoda
        </h2>
        <p className="pt-2 text-gray-400">
          Svi naši proizvodi dolaze s jamstvom kvalitete. Ako primijetite bilo
          kakve nedostatke ili probleme s proizvodom tijekom razdoblja jamstva,
          slobodno nas obavijestite. Nudimo rješenja kao što su popravak,
          zamjena ili povrat novca, ovisno o vrsti problema.
        </p>

        <h2 className="pt-4 text-primary font-semibold text-xl">
          Politika povrata
        </h2>
        <p className="pt-2 text-gray-400">
          Ako niste potpuno zadovoljni svojom kupnjom, imate pravo na povrat
          proizvoda unutar 7 dana od primitka. Proizvodi moraju biti neoštećeni
          i u originalnom pakiranju. Kontaktirajte naš tim za podršku kako biste
          pokrenuli postupak povrata i saznali više o uvjetima.
        </p>

        <h2 className="pt-4 text-primary font-semibold text-xl">
          Kontaktirajte nas
        </h2>
        <p className="pt-2 text-gray-400">
          Ako imate bilo kakvih pitanja ili trebate pomoć u vezi s jamstvom ili
          povratom proizvoda, slobodno nas kontaktirajte. Naš tim za podršku
          posvećen je pružanju vrhunske usluge i rješavanju vaših nedoumica.
        </p>

        <p className="pt-8 text-lg">
          Zahvaljujemo vam na povjerenju. Uvjereni smo da će naša politika
          jamstva i povrata osigurati vaše potpuno zadovoljstvo prilikom kupnje.
        </p>
      </div>
    </section>
  );
};

export default WarrantyPage;
