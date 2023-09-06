/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-desktop": "url('/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/bg-shorten-mobile.svg')",
        "boost-desktop": "url('/bg-boost-desktop.svg')",
        "boost-mobile": "url('/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
};
