/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
        screens: {
            'sm': '100%',
            'md': '100%',
            'lg': '900px',
            'xl': '1000px',
            '2xl': '1200px',
        }
    }
},
  plugins: []
};