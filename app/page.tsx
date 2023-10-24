import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <p className="text-2xl text-muted-foreground">
        Ovo je tekst samo da testiram kako radi shadcnUI
      </p>
    </main>
  );
}
