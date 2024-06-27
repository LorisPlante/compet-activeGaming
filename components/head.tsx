"use client";
import { usePathname } from "next/navigation";

const HeadComponent = () => {
  const pathname = usePathname();
  const url = pathname;

  if (url === "/contact") {
    return (
      <>
        <title>Contact - Active Gaming</title>
        <meta name="description" content="N'hésitez pas à nous contacter" />
      </>
    );
  } else if (url === "/telechargement") {
    return (
      <>
        <title>Téléchargement - Active Gaming</title>
        <meta name="description" content="Téléchargez l'application Active Gaming" />
      </>
    );
  } else if (url === "/cgu") {
    return (
      <>
        <title>CGU - Active Gaming</title>
        <meta name="description" content="Conditions générales d'utilisation d'Active Gaming" />
      </>
    );
  } else if (url === "/actualites") {
    return (
      <>
        <title>Les actualités - Active Gaming</title>
        <meta name="description" content="Retrouvez toute l'actualité d'Active Gaming" />
      </>
    );
  }

  // Définir les métadonnées pour d'autres pages
  return (
    <>
      <title>Active Gaming</title>
      <meta name="description" content="Dans E-SPORT il y a SPORT" />
    </>
  );
};

export default HeadComponent;
