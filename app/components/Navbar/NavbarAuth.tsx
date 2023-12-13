"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { useAuth } from "@/app/context/auth-context";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const NavbarAuth = () => {
  const authData = useAuth();
  const cookie = authData.token;

  const LogoutHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.status === 200) {
        authData.logout();
      } else {
        console.log("Error during logout!");
      }
    } catch (error) {
      console.error("Greška prilikom izvršavanja logout-a:", error);
    }
  };

  return (
    <main className="flex justify-center items-center gap-2">
      {cookie ? (
        <>
          <Link
            href="/profile"
            className="text-blue-500 hover:underline hover:underline-offset-2 hidden sm:block"
          >
            {authData.data.firstName} {authData.data.lastName}
          </Link>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button
                className={`${buttonVariants({
                  variant: "outline",
                })}  ml-2`}
              >
                Log Out
              </Button>{" "}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Jeste li sigurni da želite izvršiti ovu radnju?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Ova radnja će vas odjaviti s korisničkog računa.Samim tim ne
                  možete naručiti proizvod s naše web stranice.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Natrag</AlertDialogCancel>
                <AlertDialogAction onClick={LogoutHandler}>
                  Nastavi
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className={`${buttonVariants({
              variant: "outline",
            })} hidden sm:block`}
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className={buttonVariants({ variant: "default" })}
          >
            Sign up
          </Link>
        </>
      )}
    </main>
  );
};

export default NavbarAuth;
