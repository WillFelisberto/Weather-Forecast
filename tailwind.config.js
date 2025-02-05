/** @type {import('tailwindcss').Config} */
export const mode = 'jit';
export const content = ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      primary: ['var(--font-primary)', 'sans-serif'], // Inter
      secondary: ['var(--font-secondary)', 'sans-serif'] // Poppins
    }
  }
};
export const variants = {
  extend: {}
};
import tailwindScrollbar from 'tailwind-scrollbar';

export const plugins = [tailwindScrollbar];
