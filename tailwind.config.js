module.exports = {
  purge: ["./src/**/*.njk"],
  theme: {
    extend: {
      colors: {
        brand: "#1d3557"
      },
      animation: {
        "fade-in": "animateIn 350ms ease-in-out both"
      }
    },
  },
  variants: {},
  plugins: [],
};
