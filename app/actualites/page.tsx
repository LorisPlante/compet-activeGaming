"use client";
import ContactBanner from "@/components/conatctBanner";
import Footer from "@/components/footer";
import Header from "@/components/header";
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

export default function Actualites() {
  const [actus, setActus] = useState<Actu[]>([]);

  useEffect(() => {
    try {
      fetch(`/actualites.json`)
        .then((response) => response.json())
        .then((data: { actus: Actu[] }) => setActus(data.actus));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error gracefully, e.g., display an error message to the user
    }
  }, []);
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center pt-24">
        <section className="w-full min-h-[450px] p-mobile sm:p-desktop bg-bg-reverse text-text-reverse font-custom-paragraph flex justify-start items-start flex-col gap-24">
          <div className="relative flex justify-center items-center gap-6 w-full">
            <h1 className="font-custom-titre w-fit block text-3xl font-bold">Actualités</h1>
          </div>
          <div className="w-full flex flex-col sm:flex-row flex-wrap justify-start items-center gap-4 sm:gap-[1.5vw] text-text-reverse font-custom-paragraph">
            {actus.map((actu) => (
              <a
                href={`/actualite/${actu._id}`}
                key={actu._id}
                className="actu w-full p-4 sm:w-[49%] lg:w-[32%] my-4 sm:my-0 bg-bg-reverse flex flex-col gap-3 rounded-lg border-access border-custom font-custom-paragraph">
                <img src={actu.url} alt={actu.alt} className="rounded-lg w-3/4 mx-auto" />
                <p className="w-full text-sm text-text-reverse text-right">{actu.date}</p>
                <h2 className="w-full text-xl text-text-secondary font-custom-titre font-bold">{actu.title}</h2>
                <p className="w-full">{actu.desc}</p>
              </a>
            ))}
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
