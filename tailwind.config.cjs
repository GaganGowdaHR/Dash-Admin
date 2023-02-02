/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html,js,ts}"],
  theme: {
    extend: {
      colors:{
        'webblue':'#0f1d40',
        'smoke':'#f8f8f8',
      }
    },
  },
  plugins: [],
}
