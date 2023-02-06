/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html,js,ts}"],
  theme: {
    extend: {
      colors:{
        'webblue':'#0f1d40',
        'smoke':'#f8f8f8',
        'greyt':'#525C76',
        'greyp':'#8C93A3',
        'bluep':'#525C76',
        'whitesmoke':'whitesmoke',
        'solidblue':'#0F1D40'
      },
      fontFamily:{
        'popi': ['Poppins']
      },
      width:{
        'w400':'400px'
      },
      fontSize:{
        'font10':'10px'
      },
      boxShadow: {
        'sidesha': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      }
    },
  },
  plugins: [],
}
