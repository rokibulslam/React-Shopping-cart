/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        silver: {
          100: "rgba(190, 190, 190, 0.5)",
          200: "rgba(185, 185, 185, 0.75)",
        },
        black: "#000",
        darkslategray: "#474747",
        lightGray: "#82828B",
        gray: "#949494",
        salmon: {
          100: "#ff7979",
          200: "rgba(255, 121, 121, 0.5)",
        },
        dodgerblue: "rgba(0, 133, 255, 0.7)",
        cornflowerblue: "rgba(0, 152, 237, 0.5)",
        darkgray: "rgba(164, 164, 164, 0.3)",
        limegreen: {
          100: "rgba(0, 202, 20, 0.5)",
          200: "rgba(0, 167, 17, 0.5)",
        },
        coral: {
          100: "rgba(255, 148, 70, 0.5)",
          200: "rgba(255, 147, 69, 0.8)",
        },
      },
      fontFamily: {
        almarai: "Almarai",
      },
      borderRadius: {
        "11xl": "30px",
        "81xl": "100px",
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      sm: "14px",
      xl: "20px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  }
};
