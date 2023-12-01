import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileLinks = () => {
  return (
    <div className="flex xl:hidden pb-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b-2">
          <AccordionTrigger className="text-lg pr-1">
            Brzi Linkovi
          </AccordionTrigger>
          <AccordionContent>
            <ul className="font-poppins font-light text-base text-foreground">
              <li className="hover:text-rose-600 pb-1">
                <Link href="/home">Početna</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/products">Proizvodi</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/special">Special</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/profile" scroll={false}>
                  Profil
                </Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/login">Prijava</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/signup">Registracija</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-2">
          <AccordionTrigger className="text-lg pr-1">
            Trebam pomoć
          </AccordionTrigger>
          <AccordionContent>
            <ul className="font-poppins font-light text-base text-foreground">
              <li className="hover:text-rose-600 pb-1">
                <Link href="/faq">Česta pitanja</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/shipping">Način dostave</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/online-payments">Način plaćanja</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/contact">Korisnička podrška</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/warranty">Povrat novca</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-2">
          <AccordionTrigger className="text-lg  pr-1">
            Poveži se
          </AccordionTrigger>
          <AccordionContent>
            <ul className="font-poppins font-light text-base  text-foreground">
              <li className="hover:text-rose-600">
                <Link href="/faq">Discord</Link>
              </li>
              <li className="hover:text-rose-600">
                <Link href="/dostava">Twitter</Link>
              </li>
              <li className="hover:text-rose-600">
                <Link href="/online trgovina">Facebook</Link>
              </li>
              <li className="hover:text-rose-600">
                <Link href="/kontakt informacije">Instagram</Link>
              </li>
              <li className="hover:text-rose-600">
                <Link href="/garancija i povrat">Telegram</Link>
              </li>
              <li className="hover:text-rose-600">
                <Link href="/garancija i povrat">LinkedIn</Link>
              </li>
              <li className="hover:text-rose-600">
                <Link href="/garancija i povrat">Tiktok</Link>
              </li>
              <li className="hover:text-rose-600">
                <Link href="/garancija i povrat">Pinterest</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-2">
          <AccordionTrigger className="text-lg  pr-1">Kontakt</AccordionTrigger>
          <AccordionContent>
            <ul className="font-poppins font-light text-base  text-foreground">
              <li className="hover:text-rose-600 pb-1">
                <Link href="/contact">+123 456 789</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/contact">+987 6543210</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/contact">gameloot2@gmail.com</Link>
              </li>
              <li className="hover:text-rose-600 pb-1">
                <Link href="/contact">gameloottrgovina@gmail.com</Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileLinks;
