"use client";

import { useEffect, useState } from "react";
import AccessToggles from "./accessToggles";
import { AccessIcon } from "./icons/acessIcon";

export default function Accessibility() {
  const [accessibility, setAccessibility] = useState(false);
  function toggleAccessibility() {
    setAccessibility(!accessibility);
  }

  return (
    <div className="fixed bottom-6 right-[4vw] sm:right-[2.5vw] cursor-pointer z-50">
      <div onClick={toggleAccessibility} className="w-fit p-3 bg-bg-reverse border-text-reverse text-text border-2 rounded-full" title="Accessibilité">
        <AccessIcon sizew={34} sizeh={34} />
      </div>

      <div className={`fixed top-0 left-0 w-full h-screen ${accessibility ? "block" : "hidden"}`}>
        <div onClick={toggleAccessibility} className="absolute top-0 left-0 w-full h-full"></div>
        <AccessToggles />
      </div>
    </div>
  );
}
