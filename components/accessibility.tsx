"use client";

import { useEffect, useState } from "react";
import AccessToggles from "./accessToggles";
import { SettingsIcon } from "./icons/settings";

export default function Accessibility() {
  const [accessibility, setAccessibility] = useState(false);
  function toggleAccessibility() {
    setAccessibility(!accessibility);
  }

  return (
    <div className="fixed bottom-6 right-[4vw] sm:right-[2.5vw] cursor-pointer z-50">
      <div onClick={toggleAccessibility} className="w-fit p-2 bg-bg-reverse border-text-reverse text-text border-2 rounded-full">
        <SettingsIcon sizew={36} sizeh={36} />
      </div>

      <div className={`fixed top-0 left-0 w-full h-screen ${accessibility ? "block" : "hidden"}`}>
        <div onClick={toggleAccessibility} className="absolute top-0 left-0 w-full h-full"></div>
        <AccessToggles />
      </div>
    </div>
  );
}
