"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);
  const handleAccept = () => {
    setCookieConsent(true);
    window.location.reload();
  };
  return (
    <div
      className={`my-12 mx-auto max-w-max md:max-w-screen-md fixed bottom-0 left-0 right-0 flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-[#eeeeee] rounded-lg shadow z-[51] ${
        cookieConsent != null ? "hidden" : "flex"
      }`}>
      <div className="text-[#111111]">
        <a href="/cgu">
          <p>
            🍪 Nous utilisons des <span className="font-bold text-sky-700">cookies</span> sur notre site.
          </p>
        </a>
      </div>

      <div className="flex gap-2">
        <button className="px-5 py-2 text-gray-700 rounded-md border border-gray-700" onClick={() => setCookieConsent(false)}>
          Refuser
        </button>
        <button className="bg-gray-900 px-5 py-2 text-white rounded-lg" onClick={handleAccept}>
          Accepter les Cookies
        </button>
      </div>
    </div>
  );
}
