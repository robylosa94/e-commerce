module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans'", "sans-serif"],
      },
      colors: {
        graylighter: "var(--graylighter)",
        graylight: "var(--graylight)",
        gray: "var(--gray)",
        graydarker: "var(--graydarker)",
        primarylight: "var(--primarylight)",
        primary: "var(--primary)",
      },
    },
  },
}
