/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../cms/templates/**/*.{twig,html}',
    './src/vue/**/*.{vue,html}',
    './src/css/components/**/*.css',
    './node_modules/vuetable-2/src/components/**/*.{vue,html}',
  ],
  theme: {
    // Extend the default Tailwind config
    extend: {
      colors: {
        'devmode-pink': '#eb5286',
        'devmode-aqua': '#00b2c2',
        'devmode-yellow': '#f2d024',
      },
      fontSize: {
        xxs: '0.5rem',
        huge: '5rem',
      },
    },
    // Replace the default Tailwind config
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
  plugins: [],
};
