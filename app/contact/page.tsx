"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Newsletter from "@/components/newsletter";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center pt-24">
        <section className="w-full min-h-[450px] p-mobile sm:p-desktop bg-bg-reverse text-text-reverse font-custom-paragraph flex justify-start items-center flex-col gap-14 md:gap-0 md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col gap-8 text-text-reverse">
            <h1 className="flex flex-col">
              <span className="font-custom-titre text-text-secondary text-3xl">Des questions ? Des idées ?</span>
            </h1>
            <p className="font-custom-paragraph text-lg sm:text-xl flex flex-col gap-4">
              <span>Vous avez des questions ? Vous souhaitez en savoir plus sur Active Gaming et son fonctionnement ?</span>
              <span>Ou bien avez-vous une idée de partenariat ?</span>
            </p>

            <a
              href="mailto:contact.active-gaming@lorisplante.fr"
              title="envoyez ous un mail"
              className="cursor-pointer w-fit px-6 py-2  bg-button-reverse text-button-text-reverse rounded text-xl font-custom-paragraph z-30">
              <span>contact.active-gaming@lorisplante.fr</span>
            </a>
          </div>
          <div className="relative w-full md:w-1/2 h-full flex justify-center items-center">
            <svg viewBox="0 0 441 285" fill="none" className="w-1/2 z-10">
              <path
                d="M433 41.6667C433 23.15 413.875 8 390.5 8H50.5C27.125 8 8 23.15 8 41.6667M433 41.6667V243.667C433 262.183 413.875 277.333 390.5 277.333H50.5C27.125 277.333 8 262.183 8 243.667V41.6667M433 41.6667L220.5 159.5L8 41.6667"
                className="stroke-text-secondary"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute top-0 left-0 w-full h-[200%] transform -translate-y-1/4 bg-radial-gradient opacity-40"></div>
          </div>
        </section>
        <section className="w-full">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </>
  );
}
