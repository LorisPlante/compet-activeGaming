"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  function toggleMenu() {
    setMenu(!menu);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header>
      <nav id="navMobile" className="z-40 bg-bg-reverse fixed top-0 left-0 w-full flex md:hidden justify-between items-center py-4 px-[5vw] border-b-access border-custom">
        <a href="/" className="flex justify-center items-center">
          <Logo sizew={97} sizeh={64} color="fill-text-reverse" />
          <p className="font-spaceGrotesk font-semibold text-text-reverse text-xl">ACTIVE GAMING</p>
        </a>

        <div onClick={toggleMenu} id="burgerOpen" className="block cursor-pointer">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
            <path
              d="M39.2754 33.2607L6.2762 33.0359M39.3504 22.261L6.35113 22.0362M39.4253 11.2612L6.42606 11.0364"
              className="stroke-text-secondary"
              strokeWidth="3.64194"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </nav>
      <div
        id="menu"
        className={`z-50 overflow-hidden fixed top-0 left-0 w-full h-screen bg-bg-reverse text-text-reverse font-custom-paragraph flex justify-start items-start flex-col gap-4 px-[5vw] transform transition-all duration-300 ${
          menu ? " translate-x-0" : "translate-x-full"
        }`}>
        <div className="w-full flex justify-between items-center py-4 ">
          <a href="/" className="flex justify-center items-center">
            <Logo sizew={97} sizeh={64} color="fill-text-reverse" />
            <p className="font-spaceGrotesk font-semibold text-text-reverse text-xl">ACTIVE GAMING</p>
          </a>
          <div onClick={toggleMenu} id="burgerClose" className="block cursor-pointer">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <g clipPath="url(#clip0_537_781)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 24.5924L32.3712 34.9636C32.7169 35.2976 33.18 35.4824 33.6607 35.4782C34.1414 35.474 34.6013 35.2812 34.9412 34.9413C35.2811 34.6014 35.4739 34.1415 35.4781 33.6608C35.4822 33.1802 35.2975 32.717 34.9635 32.3713L24.5923 22.0001L34.9635 11.6289C35.2975 11.2832 35.4822 10.8201 35.4781 10.3394C35.4739 9.85868 35.2811 9.39886 34.9412 9.05894C34.6013 8.71903 34.1414 8.52622 33.6607 8.52204C33.18 8.51786 32.7169 8.70265 32.3712 9.03661L22 19.4078L11.6288 9.03661C11.2815 8.71091 10.8211 8.53311 10.345 8.54085C9.86892 8.54858 9.41452 8.74123 9.07795 9.07803C8.74138 9.41484 8.54905 9.86938 8.54166 10.3455C8.53427 10.8216 8.71239 11.2818 9.03833 11.6289L19.4077 22.0001L9.0365 32.3713C8.8614 32.5404 8.72173 32.7427 8.62565 32.9664C8.52957 33.19 8.47899 33.4306 8.47688 33.674C8.47476 33.9175 8.52115 34.1589 8.61333 34.3842C8.70551 34.6095 8.84164 34.8142 9.01378 34.9863C9.18591 35.1585 9.39061 35.2946 9.61592 35.3868C9.84123 35.479 10.0826 35.5254 10.3261 35.5232C10.5695 35.5211 10.8101 35.4705 11.0337 35.3745C11.2574 35.2784 11.4597 35.1387 11.6288 34.9636L22 24.5924Z"
                  className="fill-text-secondary"
                />
              </g>
              <defs>
                <clipPath id="clip0_537_781">
                  <rect width="44" height="44" className="fill-text-reverse" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <ul className="flex flex-col items-center gap-8 text-3xl w-full mt-10">
          <li>
            <a href="/" title="Retourner à l'accueil">
              <span>Accueil</span>
            </a>
          </li>
          <li>
            <a href="/actualites" title="Voir nos actualités">
              <span>Actualités</span>
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="/telechargement" className="w-fit px-8 py-2 mt-14  bg-button-reverse text-button-text-reverse rounded text-xl" title="Télécharger l'application">
              <span>Télécharger l'application</span>
            </a>
          </li>
        </ul>
      </div>
      <nav
        id="navDesktop"
        className={`fixed z-50 top-0 left-0 hidden md:flex items-center justify-between py-4 px-[5vw] bg-bg-reverse text-text-reverse font-custom-paragraph w-full transition-all duration-300 ${
          isVisible ? "" : "-translate-y-full"
        }`}>
        <a href="/" className="flex justify-center items-center">
          <Logo sizew={97} sizeh={64} color="fill-text-reverse" />
          <p className="font-spaceGrotesk font-semibold text-text-reverse text-xl">ACTIVE GAMING</p>
        </a>
        <ul className="flex gap-5 items-center">
          <li>
            <a href="/" className="block w-fit px-3 py-2" title="Retourner à l'accueil">
              <span>Accueil</span>
            </a>
          </li>
          <li>
            <a href="/actualites" className="block w-fit px-3 py-2" title="Voir nos actualités">
              <span>Actualités</span>
            </a>
          </li>

          <li className="cursor-pointer">
            <a href="/telechargement" className="w-fit px-6 py-2 bg-button-reverse text-button-text-reverse rounded" title="Télécharger l'application">
              <span>Télécharger</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
