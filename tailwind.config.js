module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9D9D9",
        secondary: "#4592AF",
      },
      gridTemplateColumns: {
        "product-list": "repeat(auto-fit, minmax(400px, 1fr))",
      },
      gridTemplateRows: {
        "product-carousel": "1fr 3fr",
      },
      backgroundImage: {
        product: "linear-gradient(90deg, #D9D9D9 50%, black 50%)",
        productMobile: "linear-gradient(180deg, #D9D9D9 36%, black 36%)",
      },
    },
  },
  plugins: [],
};
