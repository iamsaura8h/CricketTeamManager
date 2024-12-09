/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans:["Open Sans", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        spartan: ["League Spartan", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        // open: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    plugins: [],
  },
};
