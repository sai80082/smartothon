/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indianred: "#e55858",
        gray: "#8a8a8a",
        royalblue: "#0077ff",
        aliceblue: "#f0f7ff",
        dodgerblue: "#5285f2",
        coral: "#ff7e3e",
        deeppink: "#ff1d86",
        limegreen: "#16d03b",
        silver: "#c0c0c0",
        gold: "#ffd700",
        burlywood: "#d9ab7d",
        whitesmoke: "#eee",
        seashell: "#fff5f0",
        honeydew: "#f0fff3",
        lavenderblush: "#fff0f7",
        "light-selected": "#fff",
        "light-secondary": "#666",
        "light-primary": "#333",
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
        ubuntu: "Ubuntu",
        poppins: "Poppins",
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "31xl": "50px",
        xl: "20px",
        "3xs-6": "9.6px",
      },
    },
    fontSize: {
      xl: "20px",
      "3xs": "10px",
      mini: "15px",
      smi: "13px",
      "6xl": "25px",
      "base-5": "16.5px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
