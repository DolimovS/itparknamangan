/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E6E4E',
          dark: '#0A4F38',
          50: '#EAF5F0',
        },
        accent: {
          DEFAULT: '#1FAE73',
          soft: '#DFF3E9',
        },
        ink: '#0B1F17',
        muted: '#5C6B64',
        fog: '#F4F7F5',
        line: '#E3E9E6',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,31,23,0.04), 0 8px 24px -8px rgba(11,31,23,0.10)',
        cardHover: '0 4px 10px rgba(11,31,23,0.06), 0 20px 40px -12px rgba(14,110,78,0.22)',
      },
      keyframes: {
        logoPop: {
          '0%': { opacity: 0, transform: 'scale(.75) translateY(6px)' },
          '100%': { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.55, transform: 'scale(0.92)' },
        },
        slideBar: {
          '0%': { transform: 'translateX(-120%)' },
          '50%': { transform: 'translateX(60%)' },
          '100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        logoPop: 'logoPop .9s cubic-bezier(.2,.9,.25,1.2) both',
        pulseSoft: 'pulseSoft 1.8s ease-in-out infinite',
        slideBar: 'slideBar 1.1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
