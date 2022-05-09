module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Monument Extended", "sans-serif"],
        paragraph: ["Inter", "sans-serif"],
      },
      screens: {
        "3xl": "1440px",
      },
      colors: {
        primary: "#272626",
        secondary: "#727272",
        tertiary: "#DFDFDF",
        quaternary: "#B80000",
        quinary: "#FCA311",
      },
      height: {
        main: "calc(100vh - 72px)",
      },
      gridTemplateColumns: {
        "product-list": "repeat(auto-fill, minmax(300px, 1fr))",
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
