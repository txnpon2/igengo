import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', '"IBM Plex Sans Thai"', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'sans-serif'],
        heading: ['"Inter"', '"IBM Plex Sans Thai"', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'sans-serif'],
        thai: ['"IBM Plex Sans Thai"', '"Inter"', 'sans-serif'],
        en: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'sans-serif'],
      },
      letterSpacing: {
        'apple-tight': '-0.025em',
        'apple-headline': '-0.018em',
        'apple-subhead': '-0.011em',
        'apple-body': '-0.003em',
        'apple-badge': '0.06em',
      },
      lineHeight: {
        'apple-hero': '1.12',
        'apple-title': '1.18',
        'apple-subhead': '1.28',
        'apple-body': '1.65',
      },
      borderRadius: {
        '28px': '1.75rem',
        '32px': '2rem',
      },
      colors: {
        brand: {
          green: '#16834A',
          darkGreen: '#106B3B',
          black: '#171717',
          offWhite: '#F4F5F4',
          white: '#FFFFFF',
        },
        igenco: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          500: '#16834A',
          600: '#106B3B',
          700: '#106B3B',
          800: '#0C522D',
          900: '#083B20',
        },
        apple: {
          gray: '#F4F5F4',
          dark: '#171717',
          subtext: '#6E6E73',
          border: '#E5E5EA',
        },
      },
    },
  },
}
