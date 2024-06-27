"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col justify-center items-center gap-11 pt-24 min-h-screen text-text-reverse text-6xl font-bold">
        <h1>Page introuvable !</h1>
        <a href="https://active-gaming.lorisplante.fr" className="text-2xl text-text-secondary underline font-medium transition-all duration-300 hover:scale-125">
          Accueil
        </a>
      </main>
      <Footer></Footer>
    </>
  );
}
