import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        Great: ['Fredericka the Great', 'cursive'],
      },
      backgroundImage: {
        Hero: "url('Assets/Images/poke_hero5.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config

