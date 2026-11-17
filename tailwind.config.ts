import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sarabun', 'system-ui', 'sans-serif'],
        heading: ['Prompt', 'Sarabun', 'sans-serif'],
      },
      colors: {
        igenco: {
          50: '#F0FDF4', 100: '#DCFCE7', 200: '#BBF7D0', 500: '#22C55E',
          600: '#16A34A', 700: '#15803D', 800: '#166534', 900: '#064E3B',
        },
      },
    },
  },
}
