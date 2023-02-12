/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#009688",
        dark: "#0f172a",
        secondary: "#64748b",
        footer: "#1e283a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
