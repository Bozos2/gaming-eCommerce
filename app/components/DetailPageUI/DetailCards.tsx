import TruckIcon from "@/app/assets/TruckIcon";
import ReturnIcon from "@/app/assets/ReturnIcon";
import PackageIcon from "@/app/assets/PackageIcon";

const DetailCards = () => {
  return (
    <div className="flex xl:flex-row flex-col justify-between items-center gap-2  max-w-xl lg:max-w-3xl  xl:max-w-full py-12 border-b border-white">
      <div className="max-w-[420px] bg-zinc-900 font-poppins text-white rounded-lg shadow-md shadow-neutral-500 border p-4 flex flex-row justify-center gap-2 items-center hover:cursor-pointer hover:shadow-rose-600">
        <div>
          <TruckIcon width={64} height={64} />{" "}
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Besplatna & Brza Dostava</h3>
          <p className="text-sm text-gray-400">
            Ukoliko narucičite broj proizvoda u vrednosti preko 100€ poštarina
            je besplatna
          </p>
        </div>
      </div>
      <div className="max-w-[420px] bg-zinc-900 font-poppins text-white rounded-lg shadow-md shadow-neutral-500 border p-4 flex flex-row justify-center gap-2 items-center hover:cursor-pointer hover:shadow-rose-600">
        <div>
          <ReturnIcon width={64} height={64} />{" "}
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Besplatan Povrat Figurice</h3>
          <p className="text-sm text-gray-400">
            Ukoliko niste zadovoljni s vašom figuricom imate pravo vratiti ju u
            roku 7 dana
          </p>
        </div>
      </div>
      <div className="max-w-[420px] bg-zinc-900 font-poppins text-white rounded-lg shadow-md shadow-neutral-500 border p-4 flex flex-row justify-center gap-2 items-center hover:cursor-pointer hover:shadow-rose-600">
        <div>
          <PackageIcon width={64} height={64} />{" "}
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Obavest Pošiljke</h3>
          <p className="text-sm text-gray-400">
            Mi Vam šaljemo mail kada je vaša pošilja otpremljena
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailCards;
