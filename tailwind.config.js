/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#172339',
        'cream-white': '#FAF8F6',
        gray: '#49566D',
        cream: '#F3EDE7'
      }
    },
    backgroundImage: {
      'pattern-mobile': 'url("/pattern-blur-mobile.svg")',
      'pattern-tablet': 'url("/pattern-blur-tablet.svg")',
      'pattern-desktop': 'url("/pattern-blur-desktop.svg")'
    },
    fontFamily: {
      sans: ['Epilogue', 'sans-serif']
    },
    fontSize: {
      xl: '4.5rem', // 72px
      l: '3rem', // 48px
      m: '1.125rem', // 18px
      s: '1rem', // 16px
      body: '1.125rem', // 20px
      footer: '0.9375rem' // 15px
    },
    lineHeight: {
      xl: '4.875rem', // 78px
      l: '3.625rem', // 56px
      m: '2rem', // 32px
      s: '1.625rem', // 26px
      body: '2rem', // 32px
      footer: '2rem' // 32px
    },
    letterSpacing: {
      xl: '-1px',
      l: '-0.5px',
      m: '-0.2px',
      s: '-2.5px'
    },
    borderRadius: {
      btn: '6px',
      card: '15px'
    },
    maxWidth: {
      container: '1110px'
    },
    screens: {
      md: '768px',
      xl: '1110px'
    }
  },
  plugins: []
}
