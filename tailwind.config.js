/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sf-bold": "sf-pro-bold",
        "sf-med": "sf-pro-med",
        "sf-reg": "sf-pro-reg",
      },
      linearGradientColors: {
        'blue-black': ['rgba(52, 152, 219, 0.8)', '#000000'],
      },
    },
  },
  plugins: [],
};
