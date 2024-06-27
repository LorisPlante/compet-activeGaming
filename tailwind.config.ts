import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        "text-secondary": "var(--color-text-secondary)",
        button: "var(--button-bg)",
        "bg-reverse": "var(--color-bg-reverse)",
        "text-reverse": "var(--color-text-reverse)",
        "button-reverse": "var(--button-bg-reverse)",
        "button-text": "var(--button-text)",
        "button-text-reverse": "var(--button-text-reverse)",
        "hover-actu": "var(--hover-actu)",
        links: "var(--links)",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(50% 50% at 50% 50%, var(--color-text-secondary) 0%, var(--color-bg-reverse) 100%)",
        "radial-gradient-2": "radial-gradient(50% 50% at 50% 50%, rgba(19, 18, 18, 0.80) 0%, rgba(19, 18, 18, 0.00) 100%)",
      },
      fontFamily: {
        spaceGrotesk: "Space Grotesk",
        "custom-titre": "var(--font-family-titre)",
        "custom-paragraph": "var(--font-family-paragraph)",
      },
      borderColor: {
        custom: "var(--border-clr)",
        "custom-reverse": "var(--border-clr-reverse)",
      },
      borderWidth: {
        access: "var(--border-access)",
      },
      padding: {
        desktop: "44px 5vw",
        mobile: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
