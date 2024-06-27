"use client";

export default function Newsletter() {
  return (
    <div id="newsletterBanner" className="w-full flex justify-evenly items-center bg-bg-reverse text-text-reverse p-mobile md:p-desktop border-custom border-y-2">
      <div className="w-full flex justify-evenly items-start flex-col lg:flex-row gap-11">
        <div className="w-full md:w-fit flex justify-start items-start flex-col gap-4">
          <h2 className="font-bold font-custom-titre text-3xl">Inscrivez-vous à notre newsletter</h2>
          <p className="font-custom-paragraph">Restez au courant de tout ce que vous devez savoir.</p>
        </div>
        <div className="w-full md:w-fit flex justify-start items-start flex-col gap-4">
          <form action="" method="POST" className=" w-full flex justify-start items-center gap-4">
            <label htmlFor="email" className="hidden">
              Entrez votre e-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Entrez votre e-mail"
              aria-label="Entrez votre e-mail"
              className="p-2 rounded min-w-28 w-64 max-w-64 font-custom-paragraph text-[#131212]"
            />
            <input type="submit" value="S'abonner" className="py-2 px-4 bg-button rounded cursor-pointer font-custom-paragraph border-custom border-access" />
          </form>
          <p className="font-custom-paragraph">
            Nous nous soucions de vos données dans notre <br />
            <a href="/cgu#rgpd" className="text-links underline" title="Voir nos politique de confidentialité">
              politique de confidentialité
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
