import Header from "@/components/header";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";
import ContactBanner from "@/components/conatctBanner";

// Définir le type pour les props
type Actu = {
  _id: number;
  title: string;
  date: string;
  desc: string;
  url?: string;
  alt?: string;
};

export async function generateStaticParams() {
  try {
    const res = await fetch(`https://www.active-gaming.lorisplante.fr/actualites.json`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    const data = await res.json();
    // Validate data structure if needed (optional)
    return data.actus.map((actu: Actu) => ({ actualiteId: actu._id.toString() }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // or handle error as needed
  }
}

async function getData(actualiteId: string) {
  try {
    const res = await fetch(`https://www.active-gaming.lorisplante.fr/actualites.json`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    const data = await res.json();
    return data.actus.find((actu: Actu) => actu._id.toString() === actualiteId);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Return a default value or display an error message
    return null; // or { title: "Error fetching data", desc: "Please try again later." }
  }
}

// Composant de la page d'actualité
const ActualitePage = async ({ params }: { params: { actualiteId: string } }) => {
  const actualite = await getData(params.actualiteId);

  if (!actualite) {
    return <div>Actualité non trouvée</div>;
  }

  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center pt-24">
        <a href="/actualites" className="w-fit px-20 py-2 bg-transparent text-text-reverse border-custom-reverse border-2 rounded block  sm:self-start self-center mx-6 mt-2">
          Toute l'actualité
        </a>
        <section className="w-full p-mobile sm:p-desktop bg-bg-reverse text-text-reverse font-custom-paragraph flex justify-center items-center">
          <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-start items-center gap-2 sm:gap-[1.5vw] text-text-reverse font-custom-paragraph">
            {actualite.url && actualite.alt && <img src={actualite.url} alt={actualite.alt} className="rounded-lg" />}
            <p className="w-full px-4 text-sm text-text-reverse text-right">{actualite.date}</p>
            <h2 className="w-full px-4 text-xl text-text-secondary font-custom-titre font-bold">{actualite.title}</h2>
            <p className="w-full px-4">{actualite.desc}</p>
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
};

export default ActualitePage;
