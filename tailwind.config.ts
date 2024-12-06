import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        frutiger: ["Frutiger", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        customBlack: "#e6e6e6",
      },
      boxShadow: {
        custom: "2px 2px 16px 0px rgba(219,215,215,0.75)",
      },
      backgroundImage: {
        "custom-gradient": `
          radial-gradient(#444cf7 0.5px, transparent 0.5px),
          radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)
        `,
      },
      screens: {
        md: { max: "768px" },
        lg: { min: "769px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
