/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: '#2CE5A7',
      primaryDark: '#2B5D68',
      primaryLight: '#84F7D8',
      secondary: '#6D43C0',
      secondaryLight: '#BCAAE8',
      neutral: '#587481',
      neutralDark: '#262C3A',
      gold: {
        light: '#FCE33E',
        dark: '#BC7824',
      },
    },
  },
  plugins: [],
};
