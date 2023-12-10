import ImageGallery from "./ImageGallery";
import { imgProps } from "./ImageGallery";
import RatingStar from "@/app/assets/RatingStarIcon";
import TruckIcon from "@/app/assets/TruckIcon";
import { Button } from "@/components/ui/button";
import { DetailData } from "@/app/types/ProductTypes";

const DetailPage: React.FC<DetailData & { images: string[] }> = (props) => {
  return (
    <section className="flex flex-col xl:flex-row gap-8 mt-6 font-poppins pb-10 xl:border-b border-white">
      <div>
        <ImageGallery images={props.images} />
      </div>
      <div className="max-w-xl lg:max-w-3xl xl:max-w-lg 2xl:h-[585px] border-b border-white xl:border-b-0 flex flex-col justify-between items-between pb-10 xl:pb-0">
        <div>
          <div className="flex justify-start border-b border-white">
            <h1 className="pb-2 font-bold text-primary font-roboto text-lg tracking-wider">
              {props.category}
            </h1>
          </div>

          <div>
            <h1 className="text-4xl pt-4 font-medium w-2/3">{props.title}</h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row justify-center items-center gap-4 w-24 h-8 rounded-lg bg-primary mt-4 hover:cursor-pointer transition  duration-250 hover:scale-110">
              <span className="text-sm font-semibold">{props.rating}</span>
              <RatingStar />
            </div>
            <p className="pt-4 text-sm text-gray-400">{props.reviews} ocena</p>
          </div>
          <div className="mt-12">
            <div className="flex flex-row">
              <p className="text-3xl">{props.price}.00€</p>
              <span className="text-xl text-gray-400 pt-1 pl-2">
                {props.dimensions}
              </span>
            </div>
            <p className="text-sm">Bez dostave i PDV-a</p>
            <div className="mt-2 flex flex-row">
              <TruckIcon width={24} height={24} />{" "}
              <p className="text-sm ml-1 text-gray-400">
                dostava 2-5 radnih dana
              </p>
            </div>
          </div>
          <div>
            <p className="pb-5">{props.description}</p>
          </div>
        </div>
        <div className="mt-2 flex flex-row justify-between">
          <Button
            type="submit"
            variant="default"
            className="py-6 hover:bg-foreground hover:text-primary font-bold tracking-wider flex grow mr-4"
          >
            Dodaj u košaricu
          </Button>
          <Button
            type="submit"
            variant="outline"
            className="py-6 font-bold tracking-wider"
          >
            Kupi Odmah
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
