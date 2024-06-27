"use client";
import ContactBanner from "@/components/conatctBanner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { CyberHeart } from "@/components/icons/cyberHeart";
import { Logo } from "@/components/logo";
import Newsletter from "@/components/newsletter";
import { useEffect, useState } from "react";

type Actu = {
  _id: number;
  title: string;
  date: string;
  desc: string;
  url: string;
  alt: string;
};

export default function Home() {
  const [actus, setActus] = useState<Actu[]>([]);

  useEffect(() => {
    fetch(`/actualites.json`)
      .then((response) => response.json())
      .then((data: { actus: Actu[] }) => setActus(data.actus));
  }, []);
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center pt-24">
        <section className="relative bg-bg-reverse p-mobile sm:p-desktop w-full min-h-[calc(100vh-148px)] text-text-reverse flex justify-start items-center sm:items-start flex-col lg:gap-6 gap-80">
          <h1 className="font-custom-titre font-thin flex flex-col text-4xl sm:text-6xl lg:text-8xl z-30">
            <span className="text-4xl sm:text-6xl lg:text-7xl pl-5 sm:pl-0">DANS</span>
            <span className="font-custom-paragraph font-semibold text-text-secondary">E-SPORT</span>
            <span className="text-4xl sm:text-6xl lg:text-7xl pl-8 sm:pl-0">IL Y A</span>
            <span className="font-custom-paragraph font-semibold text-text-secondary">SPORT</span>
          </h1>
          <a href="/telechargement" className="w-fit px-6 py-2 bg-button-reverse text-button-text-reverse rounded text-xl mt-11 font-custom-paragraph z-30">
            <span>Télécharger l'application</span>
          </a>
          <div className="w-full md:w-3/4 lg:w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
            <img
              src="/medias/img/png/landing_robot.png"
              alt="illustration générée par Firefly d'un robot faisant des pompes"
              className="w-2/3 aspect-auto absolute bottom-1/4 left-1/2 transform -translate-x-1/2 pointer-events-none z-20 opacity-100"
            />
            <div className="w-[20vw] aspect-video bg-radial-gradient-2 absolute bottom-1/4 left-1/2 transform translate-y-1/3 -translate-x-1/2 z-10 opacity-40"></div>
            <div className="w-full aspect-video bg-radial-gradient z-0 opacity-40"></div>
            <div className="w-[13vw] h-[1px] absolute bottom-[30%] left-[5%] border border-text-reverse blur-sm -rotate-45  bg-bg opacity-100 shadow-lg shadow-white"></div>
            <div className="w-[11vw] h-[1px] absolute bottom-[25%] right-[30%] border border-text-reverse blur-sm -rotate-45  bg-bg opacity-100 shadow-lg shadow-white"></div>
            <div className="w-[7vw] h-[1px] absolute bottom-[60%] right-[10%] md:right-[0%] border border-text-reverse blur-sm -rotate-45  bg-bg opacity-100 shadow-lg shadow-white"></div>
            <div className="w-[10vw] h-[1px] absolute top-[0%] left-[27%] border border-text-reverse blur-sm -rotate-45  bg-bg opacity-100 shadow-lg shadow-white"></div>
            <div className="w-[12vw] h-[1px] absolute top-[10%] right-[15%] border border-text-reverse blur-sm -rotate-45  bg-bg opacity-100 shadow-lg shadow-white"></div>
          </div>
        </section>
        <section className="w-full flex justify-center items-center text-text-reverse py-4 bg-[#0C0C0C] z-30">
          <h2 className="font-custom-titre">EXPLORE LE MONDE D’ACTIVE GAMING MAINTENANT</h2>
        </section>
        <section className="py-11 w-full flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start gap-8 md:gap-0">
          <div className="flex flex-col justify-center items-start gap-6 max-w-min text-text-reverse text-center uppercase">
            <CyberHeart sizew={230} sizeh={80} fillContent="fill-text-secondary" fillContent2="fill-text-reverse" strokeContent="stroke-text-reverse" />
            <p>
              <span className="font-custom-paragraph font-bold">Nous aidons les joueurs a devenir meilleur</span>{" "}
              <span className="font-custom-paragraph !font-thin">chaque jour</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-6 max-w-min text-text-reverse text-center uppercase">
            <CyberHeart sizew={255} sizeh={80} fillContent="fill-text-secondary" fillContent2="fill-text-reverse" strokeContent="stroke-text-reverse" />
            <p>
              <span className="font-custom-paragraph font-bold">S'élever vers de nouveaux sommets,</span>{" "}
              <span className="font-custom-paragraph !font-thin">tout en savourant le confort de son foyer grâce au sport.</span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-start gap-6 max-w-min text-text-reverse text-center uppercase">
            <CyberHeart sizew={230} sizeh={80} fillContent="fill-text-secondary" fillContent2="fill-text-reverse" strokeContent="stroke-text-reverse" />
            <p>
              <span className="font-custom-paragraph font-bold">Forger ses habitudes sportives </span>{" "}
              <span className="font-custom-paragraph !font-thin">grâce à une aventure ludique et magique.</span>
            </p>
          </div>
        </section>
        <section className="relative w-full min-h-[450px] p-mobile sm:p-desktop text-text-reverse font-custom-paragraph flex justify-start items-start flex-col gap-24">
          <div className="bg-radial-gradient absolute top-0 left-1/2 w-3/4 h-full transform -translate-x-1/2 -z-10 opacity-40"></div>
          <div className="relative flex justify-center items-center gap-6 w-full">
            <h2 className="font-custom-titre w-fit block text-3xl font-bold">Actualités</h2>
            <a href="/actualites" className="absolute top-0 right-[5vw] w-fit px-6 py-2 bg-transparent text-text-reverse border-custom-reverse border-2 rounded hidden sm:block">
              Tout voir
            </a>
          </div>
          <div className="w-full flex flex-col sm:flex-row flex-wrap justify-start items-center gap-4 sm:gap-[2%] text-text-reverse font-custom-paragraph">
            {actus.slice(0, 3).map((actu) => (
              <a
                href={`/actualite/${actu._id}`}
                key={actu._id}
                className="w-full p-4 sm:w-[49%] lg:w-[32%] my-4 sm:my-0 bg-bg-reverse flex flex-col gap-3 rounded-lg border-access border-custom font-custom-paragraph hover:bg-bg-reverse sm:hover:bg-hover-actu">
                <div></div>
                <img src={actu.url} alt={actu.alt} className="rounded-lg w-3/4 mx-auto" />
                <p className="w-full text-sm text-text-reverse text-right">{actu.date}</p>
                <h2 className="w-full text-xl text-text-secondary font-custom-titre font-bold">{actu.title}</h2>
                <p className="w-full">{actu.desc}</p>
              </a>
            ))}
            <a href="/actualites" className="w-fit px-20 py-2 bg-transparent text-text-reverse border-custom-reverse border-2 rounded sm:hidden block">
              Tout voir
            </a>
          </div>
        </section>
        <section className="relative p-mobile sm:p-desktop w-full flex flex-col justify-center items-center gap-24 overflow-hidden overflow-x-hidden overflow-y-clip z-30">
          <div className="absolute top-[1vw] -left-[24vw] w-[45vw] transform ">
            <Logo sizew={400} sizeh={400} color="fill-text-transparent" className="w-full rotate-[120deg]" />
          </div>
          <div className="absolute bottom-[1vw] -right-[24vw] w-[45vw] transform">
            <Logo sizew={400} sizeh={400} color="fill-text-transparent" className="w-full rotate-[300deg]" />
          </div>
          <h2 className="font-custom-titre text-3xl text-text-reverse font-bold">Nos partenaires</h2>
          <div className="w-full flex justify-around items-center">
            <div className="relative bg-[#eee] w-[26vw] sm:w-[15vw] h-[42vw] sm:h-[23vw] rounded-lg">
              <img src="/medias/img/png/logo_wow.png" alt="logo World of Woarcraft" className=" absolute bottom-1 sm:bottom-3 left-1 sm:left-3 w-1/2" />
              <img src="/medias/img/png/visu_wow.png" alt="Personage du jeu World of Warcraft" className="absolute -bottom-[1vw] -right-[3vw] w-4/5" />
            </div>
            <div className="relative bg-[#eee] w-[26vw] sm:w-[15vw] h-[42vw] sm:h-[23vw] rounded-lg">
              <img src="/medias/img/png/logo_fortnite.png" alt="logo Fornite" className=" absolute bottom-1 sm:bottom-3 left-1 sm:left-3 w-1/2" />
              <img src="/medias/img/png/visu_fortnite.png" alt="Personage du jeu Fortnite" className="absolute -bottom-[1.5vw] -right-[3vw] w-2/3" />
            </div>
            <div className="relative bg-[#eee] w-[26vw] sm:w-[15vw] h-[42vw] sm:h-[23vw] rounded-lg">
              <img src="/medias/img/png/logo_apex.png" alt="logo Apex Legends" className=" absolute bottom-1 sm:bottom-3 left-1 sm:left-3 w-1/2" />
              <img src="/medias/img/png/visu_apex.png" alt="Arme fictive du jeu Apex Legends" className="absolute bottom-1/4 -right-[2.5vw] w-full scale-110 sm:scale-125" />
            </div>
          </div>
          <a href="/telechargement" className="w-fit px-6 py-2 bg-button-reverse text-button-text-reverse rounded text-xl mt-11 font-custom-paragraph">
            <span>Télécharger l'application</span>
          </a>
        </section>
        <ContactBanner />
        <section className="w-full bg-bg-reverse">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </>
  );
}
