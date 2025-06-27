import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#2563EB'
        },
        accent: {
          green: '#10B981',
          orange: '#F97316',
          yellow: '#FBBF24'
        }
      },
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
        heading: ['Poppins', ...fontFamily.sans],
        body: ['Roboto', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}