"use client";
import ContactBanner from "@/components/conatctBanner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Newsletter from "@/components/newsletter";

export default function Telechargement() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center pt-24">
        <section className="w-full min-h-[450px] p-mobile sm:p-desktop bg-bg-reverse text-text-reverse font-custom-paragraph flex justify-start items-center flex-col gap-10 md:gap-0 md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-8 text-text-reverse">
            <h1 className="flex flex-col">
              <span className="font-custom-paragraph text-3xl">Téléchargez l'application</span>
              <span className="font-custom-titre text-text-secondary text-4xl sm:text-7xl font-bold ml-6">ACTIVE GAMING</span>
            </h1>
            <p className="font-custom-paragraph text-lg sm:text-xl">
              <span>
                Et commencez a gagner des récompenses dans vos jeu préférés tout en faisant du sport afin d’améliorer votre condition physique et vos compétences in-game !
              </span>
            </p>
            <p className="font-custom-paragraph text-lg sm:text-xl">
              <span>Alors n’hésitez plus !</span>
            </p>
            <div className="cursor-pointer w-fit px-6 py-2 ml-6 bg-button-reverse text-button-text-reverse rounded text-xl font-custom-paragraph z-30">
              <span>Télécharger l'application</span>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <img src="/medias/img/png/mockup_AG_app.png" alt="Mockup de l'application ACTIVE GAMING" className="w-1/2 z-10" />
            <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient opacity-40"></div>
          </div>
        </section>
        <ContactBanner />
        <section className="w-full">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </>
  );
}
