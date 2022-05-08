module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1440px",
      },
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        tertiary: "#E5E5E5",
        quaternary: "#14213D",
        quinary: "#FCA311",
      },
      height: {
        main: "calc(100vh - 72px)",
      },
      gridTemplateColumns: {
        "product-list": "repeat(auto-fill, minmax(250px, 1fr))",
      },
      gridTemplateRows: {
        "product-carousel": "1fr 3fr",
      },
      backgroundImage: {
        product: "linear-gradient(90deg, #ffffff 50%, #000000 50%)",
        productMobile: "linear-gradient(180deg, #ffffff 36%, #000000 36%)",
      },
    },
  },
  plugins: [],
};
