module.exports = {
  content: [
    "./landing-pages/biznes-bez-firmy/index.html",
    "./landing-pages/biznes-bez-firmy/dziekuje/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      colors: {
        sand: "#f6efe7",
        ink: "#35271f",
        clay: "#b2643c",
        mist: "#e7dbce",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(96, 70, 50, 0.12)",
        card: "0 28px 70px rgba(79, 57, 39, 0.14)",
      },
    },
  },
};
