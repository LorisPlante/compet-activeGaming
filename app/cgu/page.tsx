"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Cgu() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col justify-start items-start pt-24 font-custom-paragraph">
        <section id="cgu" className="p-mobile sm:p-desktop w-full text-text-reverse">
          <div className="w-full sm:w-3/4 flex flex-col justify-start items-start gap-5">
            <h2 className="font-custom-titre text-text-reverse font-bold text-4xl">{`Conditions Générales d'Utilisation (CGU)`}</h2>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`1. Introduction`}</h2>
            <p>{`Bienvenue sur Active Gaming (le "Site"). Le Site propose le téléchargement de l'application mobile Active Gaming et l'inscription à notre newsletter.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`2. Utilisation du Site`}</h2>
            <p>{`Vous vous engagez à utiliser ce site uniquement à des fins légales et d'une manière qui n'enfreint pas les droits de tiers ni ne restreint ou n'empêche leur utilisation et
        leur jouissance du site.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`3. Propriété Intellectuelle`}</h2>
            <p>{`Tout le contenu présent sur ce site, y compris les textes, images, logos et autres éléments, est protégé par des droits d'auteur et d'autres droits de propriété
        intellectuelle. Vous ne pouvez pas utiliser, reproduire, distribuer ou exploiter ce contenu sans notre autorisation écrite préalable.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`4. Données Personnelles et Confidentialité`}</h2>
            <p>
              {`Nous prenons la confidentialité de vos données personnelles très au sérieux et nous nous engageons à protéger vos informations conformément au `}
              <a href="#rgpd" className="inline underline text-links">
                Règlement Général sur la Protection des Données (RGPD)
              </a>
            </p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`5. Liens vers des Sites Tiers`}</h2>
            <p>{`Notre site peut contenir des liens vers d'autres sites web qui ne sont pas sous notre contrôle. Nous ne sommes pas responsables des pratiques de confidentialité ou du
        contenu de ces sites tiers.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`6. Limitation de Responsabilité`}</h2>
            <p>{`Nous nous efforçons de garantir l'exactitude des informations sur notre site, mais nous ne pouvons garantir qu'elles soient complètes, exactes ou à jour. Nous ne sommes pas
        responsables des erreurs ou omissions dans le contenu du site.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`7. Loi Applicable`}</h2>
            <p>{`Ces CGU sont régies par la loi française. Tout litige découlant de l'utilisation de ce site sera soumis à la compétence exclusive des tribunaux français.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`8. Contact`}</h2>
            <p>
              {`Pour toute question relative à ces CGU ou à notre politique de confidentialité, veuillez nous contacter à l'adresse suivante :`}{" "}
              <a href="mailto:conatct.active-gaming@lorisplante.fr" className="underline text-links fon-bold">
                conatct.active-gaming@lorisplante.fr
              </a>
            </p>
          </div>
        </section>
        <section id="mentionsLegales" className="p-mobile sm:p-desktop w-full text-text-reverse">
          <div className="w-full sm:w-3/4 flex flex-col justify-start items-start gap-5">
            <h2 className="font-custom-titre text-text-reverse font-bold text-4xl">{`Mentions légales`}</h2>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`1. Identification du site`}</h2>
            <ul className="flex flex-col gap-2">
              <li>Nom du site : Active Gaming</li>
              <li>URL du site : https://www.active-gaming.lorisplante.fr</li>
              <li>Responsable de la publication : Loris Planté</li>
              <li>Adresse : 8 bis Rue de la Fontaine au Roi, 75011 Paris</li>
              <li>Email : contact.active-gaming@lorisplante.fr</li>
              <li></li>
            </ul>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`2. Hébergeur`}</h2>
            <ul className="flex flex-col gap-2">
              <li>Nom : OVH</li>
              <li>Adresse : 2, rue Kellermann, 59100 Roubaix</li>
              <li>Téléphone : 1007</li>
            </ul>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`3. Directeur de publication`}</h2>
            <p>{`Loris Planté`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`4. Conception et réalisation`}</h2>
            <ul className="flex flex-col gap-2">
              <li>Agence : Rescape Agency</li>
              <li>Développeurs : Loris Planté / Chainez Mouelhi</li>
            </ul>
          </div>
        </section>
        <section id="rgpd" className="p-mobile sm:p-desktop w-full text-text-reverse">
          <div className="w-full sm:w-3/4 flex flex-col justify-start items-start gap-5">
            <h2 className="font-custom-titre text-text-reverse font-bold text-4xl">{`Politique de protection des données (RGPD)`}</h2>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`1. Préambule`}</h2>
            <p>{`Nous nous engageons à protéger vos données personnelles.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`2. Collecte des données`}</h2>
            <p>{`Nous collectons les données suivantes : adresses email, données de navigation via Google Analytics.`}</p>

            <h3 className="font-custom-titre text-text-secondary font-bold text-2xl">{`2.2 Consentement`}</h3>
            <p>{`Nous obtenons votre consentement explicite avant d'utiliser Google Analytics pour suivre votre comportement sur notre site. Vous pouvez retirer votre consentement à tout
        moment en ajustant les paramètres de votre navigateur pour refuser les cookies ou en utilisant un module complémentaire de navigateur pour désactiver Google Analytics.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`3.Utilisation des données`}</h2>
            <p>{`Vos données sont utilisées pour : l'envoi de newsletters, l'amélioration de nos services.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`4. Partage des données`}</h2>
            <p>{`Nous partageons vos données avec Google pour l'analyse des données de navigation via Google Analytics.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`5. Droits des utilisateurs`}</h2>
            <p>
              {`Vous avez le droit d'accéder, de rectifier, de supprimer vos données, et de vous opposer à leur traitement. Contactez-nous à `}
              <a href="mailto:conatct.active-gaming@lorisplante.fr" className="inline underline text-links fon-bold">
                conatct.active-gaming@lorisplante.fr
              </a>
              {` pour toute demande.`}
            </p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`6. Durée de conservation des données`}</h2>
            <p>{`Vos données sont conservées pendant 3 ans après la dernière interaction.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`7. Sécurité des données`}</h2>
            <p>{`Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`8. Cookies`}</h2>
            <p>{`Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences en matière de cookies via votre navigateur.`}</p>

            <h2 className="font-custom-titre text-text-secondary font-bold text-3xl">{`9. Contact`}</h2>
            <p>
              {`Pour toute question concernant vos données personnelles, contactez-nous à l'adresse suivante : `}
              <a href="mailto:conatct.active-gaming@lorisplante.fr" className="underline text-links fon-bold">
                conatct.active-gaming@lorisplante.fr
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
