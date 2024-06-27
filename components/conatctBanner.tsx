"use client";

export default function ContactBanner() {
  return (
    <div className="w-full flex justify-center items-center text-text-reverse py-4 bg-[#0C0C0C] mt-6">
      <h2 className="font-custom-paragraph">
        Des questions ? Des idées ?{" "}
        <a href="/contact" className="inline underline" title="Contactez nous !">
          Contactez nous !
        </a>
      </h2>
    </div>
  );
}
