import Link from "next/link";
import DiscordIcon from "@/app/assets/CommunityIcons/DiscordIcon";
import TwitterIcon from "@/app/assets/CommunityIcons/TwitterIcon";
import FacebookIcon from "@/app/assets/CommunityIcons/FacebookIcon";
import InstagramIcon from "@/app/assets/CommunityIcons/InstagramIcon";
import TelegramIcon from "@/app/assets/CommunityIcons/TelegramIcon";
import LinkedinIcon from "@/app/assets/CommunityIcons/LinkedinIcon";
import TiktokIcon from "@/app/assets/CommunityIcons/TiktokIcon";
import PinterestIcon from "@/app/assets/CommunityIcons/PinterestIcon";

const Links = () => {
  return (
    <div className="hidden xl:flex flex-row gap-20">
      <div>
        <h1 className="text-2xl font-bold underline underline-offset-4 decoration-rose-600">
          Brzi Linkovi
        </h1>
        <ul className="font-poppins font-light text-base py-2 text-foreground">
          <li className="hover:text-rose-600 pb-1">
            <Link href="/home">Početna</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/proizvodi">Proizvodi</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/special">Special</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/profil">Profil</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/login">Prijava</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/signup">Registracija</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold underline underline-offset-4 decoration-rose-600">
          Trebam Pomoć
        </h1>
        <ul className="font-poppins font-light text-base py-2 text-foreground">
          <li className="hover:text-rose-600 pb-1">
            <Link href="/faq">Česta pitanja</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/dostava">Način dostave</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/online trgovina">Način plaćanja</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/kontakt informacije">Korisnička podrška</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/garancija i povrat">Povrat novca</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold underline underline-offset-4 decoration-rose-600">
          Poveži se
        </h1>
        <ul className="font-poppins font-light text-base py-2 text-foreground">
          <li className="hover:text-rose-600">
            <Link href="/faq" className="flex flex-row gap-2 pb-1">
              <DiscordIcon width={22} height={22} /> Discord
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link href="/dostava" className="flex flex-row gap-2 pb-1">
              <TwitterIcon width={22} height={22} /> Twitter
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link href="/online trgovina" className="flex flex-row gap-2 pb-1">
              <FacebookIcon width={20} height={20} /> Facebook
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/kontakt informacije"
              className="flex flex-row gap-2 pb-1"
            >
              <InstagramIcon width={20} height={20} /> Instagram
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/garancija i povrat"
              className="flex flex-row gap-2 pb-1"
            >
              <TelegramIcon width={20} height={20} /> Telegram
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/garancija i povrat"
              className="flex flex-row gap-2 pb-1"
            >
              <LinkedinIcon width={20} height={20} /> LinkedIn
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/garancija i povrat"
              className="flex flex-row gap-2 pb-1"
            >
              <TiktokIcon width={20} height={20} /> Tiktok
            </Link>
          </li>
          <li className="hover:text-rose-600">
            <Link
              href="/garancija i povrat"
              className="flex flex-row gap-2 pb-1"
            >
              <PinterestIcon width={20} height={20} /> Pinterest
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold underline underline-offset-4 decoration-rose-600">
          Kontakt
        </h1>
        <ul className="font-poppins font-light text-base py-2 text-foreground">
          <li className="hover:text-rose-600 pb-1">
            <Link href="/faq">+123 456 789</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/dostava">+987 6543210</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/online trgovina">trgovinamainhem2@gmail.com</Link>
          </li>
          <li className="hover:text-rose-600 pb-1">
            <Link href="/kontakt informacije">mainhemtrgovina@gmail.com</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
