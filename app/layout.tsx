import type { Metadata } from "next";
import { Roboto_Mono, Poppins, Black_Ops_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const blackops = Black_Ops_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-blackops",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${poppins.variable} ${blackops.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <MobileNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
