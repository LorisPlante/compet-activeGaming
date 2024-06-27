"use client";

import { useEffect, useState } from "react";

export default function AccessToggles() {
  const getStoredValue = (key: string, defaultValue: string) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key) || defaultValue;
    }
    return defaultValue;
  };

  const [theme, setTheme] = useState<string>("default");
  const [fontTheme, setFontTheme] = useState<string>("default");
  const [interligneTheme, setInterligneTheme] = useState<string>("default");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTheme(getStoredValue("theme", "default"));
    setFontTheme(getStoredValue("font-theme", "default"));
    setInterligneTheme(getStoredValue("interligne-theme", "default"));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.setAttribute("data-font-theme", fontTheme);
      localStorage.setItem("font-theme", fontTheme);
    }
  }, [fontTheme, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      document.documentElement.setAttribute("data-interligne-theme", interligneTheme);
      localStorage.setItem("interligne-theme", interligneTheme);
    }
  }, [interligneTheme, isLoaded]);

  const switchTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  const switchFontTheme = (newFontTheme: string) => {
    setFontTheme(newFontTheme);
  };

  const switchInterligneTheme = (newInterligneTheme: string) => {
    setInterligneTheme(newInterligneTheme);
  };

  const buttonClass = (currentTheme: string, buttonTheme: string): string => {
    return `min-w-max border-2 border-custom px-3 py-2 rounded-full ${currentTheme === buttonTheme ? "bg-button-reverse text-button-text-reverse" : "bg-bg text-text"}`;
  };

  return (
    <div className="absolute bottom-24 right-[2vw] bg-bg p-4 text-text flex flex-col gap-3 justify-start items-start w-[calc(100%-4vw)] sm:w-fit rounded-xl border-2 border-custom-reverse font-custom text-custom-paragraph font-custom-paragraph">
      <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
        <p className="min-w-max">{`Contrastes :`}</p>
        <div className="w-full flex gap-1 flex-wrap">
          <button onClick={() => switchTheme("default")} className={buttonClass(theme, "default")}>
            Par défaut
          </button>
          <button onClick={() => switchTheme("theme1")} className={buttonClass(theme, "theme1")}>
            Renforcés
          </button>
          <button onClick={() => switchTheme("theme2")} className={buttonClass(theme, "theme2")}>
            Inversés
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
        <p className="min-w-max">{`Police (dyslexie) :`}</p>
        <div className="flex gap-1">
          <button onClick={() => switchFontTheme("default")} className={buttonClass(fontTheme, "default")}>
            Par défaut
          </button>
          <button onClick={() => switchFontTheme("font1")} className={buttonClass(fontTheme, "font1")}>
            Adaptée
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-start md:items-center">
        <p className="min-w-max">{`Interligne :`}</p>
        <div className="flex gap-1">
          <button onClick={() => switchInterligneTheme("default")} className={buttonClass(interligneTheme, "default")}>
            Par défaut
          </button>
          <button onClick={() => switchInterligneTheme("interligne1")} className={buttonClass(interligneTheme, "interligne1")}>
            Adapté
          </button>
        </div>
      </div>
    </div>
  );
}
