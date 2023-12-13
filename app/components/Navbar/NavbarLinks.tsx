"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import StripeIcon from "@/app/assets/NavbarIcons/StripeIcon";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Svi Proizvodi",
    href: "/products",
    description: "Pogledaj listu svih naših proizvoda na jednome mestu",
  },
  {
    title: "League of legends",
    href: "/products?category=League%20of%20legends",
    description:
      "Ovde možete pronađi razne heroje kao i karaktere iz Arcane serijala",
  },
  {
    title: "Warcraft",
    href: "/products?category=Warcraft",
    description:
      "Možete izabrati karaktera iz Horde,Alliancea ili pak neutralne rase",
  },
  {
    title: "Starcraft",
    href: "/products?category=Starcraft",
    description:
      "U ovoj sekciji cemo se prisjetiti starih dana gejminga uz naše figurice",
  },
  {
    title: "Battle Royale",
    href: "/products?category=Battle%20Royale",
    description: "Figurice od PUBG-a,Fortnite,Warzonea pa sve do Apexa",
  },
  {
    title: "Others",
    href: "/products?category=Others",
    description:
      "Ovdje možete pronaći raznolike figurice poput onih iz Minecrafta,GTA,Withera i mnoge druge",
  },
];

const NavbarLinks = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-neutral-900">
            Stranice
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/online-payments"
                  >
                    <StripeIcon className="h-24 w-24" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Način plaćanja
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Uz Stripe vam omogućavamo brz i siguran način plaćanja.
                      Klikom saznajte više
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <Link href="/home">
                <ListItem title="Početna">
                  Na početnoj stranici saznajte najbitnije stvari o nasim
                  produktim i nasem poslovanju
                </ListItem>
              </Link>
              <Link href="/faq">
                <ListItem title="Najčešća pitanja">
                  Ovdje možete vidjeti najčešća postavljena pitanja korisnika
                </ListItem>
              </Link>
              <Link href="/contact">
                <ListItem title="Kontakt">
                  Ukoliko imate bilo kakvih pitanja i problema možete nas
                  kontaktirati
                </ListItem>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-neutral-900">
            Proizvodi
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link href={component.href} key={component.title}>
                  <ListItem title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/special" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Special
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavbarLinks;
