/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
        "*.{js,ts,jsx,tsx,mdx}"
    ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f6f5f3',
          100: '#e8e6e1',
          200: '#d4cfc4',
          300: '#b8af9e',
          400: '#9f937d',
          500: '#8b7f67',
          600: '#7a6f5c',
          700: '#655b4d',
          800: '#524a41',
          900: '#443e37',
        },
        sage: {
          50: '#f4f6f4',
          100: '#e5ebe5',
          200: '#ccd8cd',
          300: '#a8bda9',
          400: '#809e81',
          500: '#5f7f61',
          600: '#4a664c',
          700: '#3b523d',
          800: '#314233',
          900: '#29372b',
        },
      },
    },
  },
  plugins: [],
}
