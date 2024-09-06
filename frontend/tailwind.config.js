/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["caveat", "sans-serif"],
        "caveat-brush": ["caveat-brush", "sans-serif"],
        "shantell-sans": ["shantell-sans", "sans-serif"],
        inter: ["inter", "sans-serif"],
        "source-sans-3": ["source-sans-3", "sans-serif"],
        "above-the-sky-script": ["above-the-sky-script"],
        "above-the-sky-script-salt": [
          "above-the-sky-script",
          { fontFeatureSettings: "'salt' on" },
        ],
      },
      backgroundImage: {
        "home-hero-image": "url('/images/spectrum-flashes-coloured-light.jpg')",
      },
      dropShadow: {
        "custom-1": [
          "0 4px 3px rgb(0 0 0 / 0.5)",
          "0 2px 2px rgb(0 0 0 / 0.5)",
        ],
      },
    },
  },
  plugins: [],
};
