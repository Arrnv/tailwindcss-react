/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_image:
          "url('./assets/images/775e56c4-c0bd-4240-8352-bed2ef1b430e.png')",
        blurImage: "url('images/f4dc2eb5-7a59-44fe-8021-ccc3a599bb86 1.png')",
        service1: "url('images/rectangle-12.png')",
        service2: "url('images/Rectangle 14.png')",
      },
      colors: {
        backgroundColor: "#e0e0e0",
      },
    },
  },
  plugins: [],
};
