export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  // Suppress the PostCSS warning about missing 'from' option
  // This is expected in Vite's build process
  map: false,
}
