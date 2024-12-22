const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#f5eee2',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#99948c',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'black': '#000000',
      'orange': '#c99d4d',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1.125rem',
      xl: '1.125rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'h2':'3.375rem',
      'h3':'1.68rem',
    },
    extend: {
      spacing:{
        '36px':'2.25rem',
        '45px':'2.813rem',
      }
    },
  },
  plugins: [],
};
