/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#01723E',
        'secondary-color': '#FB923C',
        'color-3':'#FDE043'
      },
    },
  },
  plugins: [],
};
