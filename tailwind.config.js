/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-cyan": "0px 0px 10px 2px #00d1cd",
        "custom-black": "0px 0px 15px 5px #000",
        "custom-black2": "0px 0px 10px 2px #000",
        "custom-white": "0px 0px 10px 2px #fff",
      },
      dropShadow: {
        text: "2px 4px 1px rgba(0, 0, 0, 1)",
        textSmall: "0px 0px 3px rgba(0, 0, 0, 1)",
        "custom-cyan": "0px 0px 2px #00d1cd",
      },
    },
  },
  plugins: [],
};
