/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    colors: {
      primary: {
        light: "#FFC107",
        dark: "#F57C00"
      },
      blue: "#1d4ed8"
    },
    fontSize: {
      10: "10px",
      16: "16px",
      32: "32px",
      // [fontsize, line height]
      64: ["64px", "120px"]
    },
    extend: {
      spacing: {
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
        "40px": "40px"
      }
    }
  },
  plugins: []
};
