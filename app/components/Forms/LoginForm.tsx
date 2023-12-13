"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "../../context/auth-context";

import LoginImage from "../../assets/Images/LoginIllustration.png";
import LockIcon from "@/app/assets/FormIcons/LockIcon";
import MailIcon from "@/app/assets/FormIcons/MailIcon";
import ResetPasswordModal from "../UI/helper/ResetPasswordModal";

const imageStyle = {
  width: "603px",
  height: "452px",
  marginTop: "22px",
};

const LoginForm = () => {
  const router = useRouter();
  const authCtx = useAuth();
  const { toast } = useToast();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const emailValue = emailRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    const data = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const response = await fetch("http://localhost:3001/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.status === 200) {
        router.push("/");
        toast({
          title: "Uspješna prijava!",
          description: "Dobrodošli nazat!",
        });
        authCtx.setUserData({
          firstName: responseData.result.firstname,
          lastName: responseData.result.lastname,
          email: responseData.result.email,
          date_of_birth: responseData.result.date_of_birth,
          gender: responseData.result.gender,
          created: responseData.result.created_at,
          purchases: [],
        });

        const cookie = document.cookie;

        console.log("testestest", cookie);

        if (cookie) {
          authCtx.setToken(cookie);
        }

        console.log("podaci", responseData.result);
      } else if (response.status === 400 && responseData.err) {
        console.log("Invalid credentials");
        toast({
          variant: "destructive",
          title: "Neuspješna prijava!",
          description:
            "Nismo pronašli unesene podatke u našoj bazi podataka. Pokušajte ponovno.",
        });
      }

      console.log("Email:", emailRef.current?.value);
      console.log("passwordRef", passwordRef.current?.value);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <div className="max-w-5xl lg:w-full h-[450px] flex justify-center   bg-zinc-950 border shadow-md shadow-neutral-500  rounded-lg mx-4 my-12 sm:my-0 font-poppins">
      <div className="w-3/5 hidden h-full   lg:flex items-center justify-center">
        <Image
          alt="Login illustration"
          src={LoginImage}
          priority={true}
          style={imageStyle}
        />
      </div>
      <div className="w-full lg:w-2/5 lg:pr-4 px-6 lg:px-0">
        <form onSubmit={submitHandler}>
          <h1 className="text-3xl font-semibold tracking-wider text-primary font-blackops mt-12 mb-6">
            Prijavi se
          </h1>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 text-lg">
              Email:
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0  h-full pl-3 pr-2 pt-2.5">
                <MailIcon />
              </span>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                placeholder="Unesite email..."
                className="w-full py-2 pl-10 border rounded-xl focus:outline-none focus:border-rose-600"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="mb-1 text-lg">
              Lozinka:
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0  h-full pl-3 pr-2 pt-2.5">
                <LockIcon />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                ref={passwordRef}
                placeholder="Unesite password..."
                className="w-full py-2 pl-10 border rounded-xl focus:outline-none focus:border-rose-600"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <ResetPasswordModal title="Zaboravili ste lozinku?" />
          </div>
          <div className="flex justify-center mt-4">
            <Button
              type="submit"
              variant="default"
              className="py-6 px-24 sm:px-36 hover:bg-foreground hover:text-primary font-bold tracking-wider"
            >
              Spremi
            </Button>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-sm">
              Nemate korisnički račun?
              <Link
                href="/signup"
                className="ml-1 text-blue-500 hover:underline hover:text-blue-700"
              >
                Registriraj se
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
