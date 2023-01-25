/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'blue-light': '#60a5fa',
        'blue': '#2ec7ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'bg-dark':'#0b1120',
        'white':'#e2e8f0',
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
    fontFamily: {
      opensans: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
  },
  },
  plugins: [],
}
}
