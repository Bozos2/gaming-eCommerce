import type { Metadata } from "next";
import { Roboto_Mono, Poppins, Black_Ops_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Providers } from "./NextUIProvider";
import { Toaster } from "@/components/ui/toaster";
import { ContextCartProvider } from "./ContextProvider";
import { AuthProvider } from "./context/auth-context";

import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import Footer from "./components/Footer/Footer";

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
  title: "GameLoot trgovina",
  description: "Generated by create next app",
  icons: "favicon.ico",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  parallel: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${poppins.variable} ${blackops.variable}`}
      >
        <AuthProvider>
          <ContextCartProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Providers>
                <Navbar />
                {props.children}
                {props.parallel}
                <Toaster />
                <Footer />
                <MobileNavbar />
              </Providers>
            </ThemeProvider>
          </ContextCartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
