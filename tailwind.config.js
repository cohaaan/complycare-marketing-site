/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: '#36f154', // Custom primary green color
        bedButton: '#38b6ff', // Custom blue color for manage bed buttons
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontWeight: {
        normal: '500',
        medium: '600',
        semibold: '700',
        bold: '800',
        extrabold: '900',
      },
      fontSize: {
        'base': ['16px', { lineHeight: '24px', letterSpacing: '-0.01em' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        'xl': ['20px', { lineHeight: '30px', letterSpacing: '-0.01em' }],
        '2xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em' }],
        'sidebar': ['17px', { lineHeight: '24px', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '3.5': '0.875rem',
        '7': '1.75rem',
      },
      borderRadius: {
        'lg': '8px', 
      },
    },
  },
  plugins: [],
};