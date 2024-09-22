import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        principale: {
          700: 'var(--principale)', // Couleur principale
        },
        secondaire: {
          500: 'var(--secondaire)', // Couleur secondaire
        },
        accentuation: 'var(--accentuation)', // Couleur d'accentuation
      },
    },
  },
  plugins: [],
};

export default config;
