/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mobile-hero': "url(/)"
      },
      fontWeight: {
      '2extrabold': '900'
      },
      backgroundColor: {
        'greyish-blue': '#a7abae',
        'moderate-cyan': '#458c7e',
        'dark-greyish-blue': '#818498',
        'very-dark-grayish-blue': '#5a636c',
        'desaturated-blue': '#23303e',
        'dark-blue': '#19536b',
        'desaturated-cyan': '#25564b',
        'moderate-cyan': '#458c7e'
      },
      textColor: {
        'dark-greyish-blue': '#818498',
        'very-dark-grayish-blue': '#5a636c',
        'desaturated-blue': '#23303e',
        'dark-blue': '#19536b',
        'desaturated-cyan': '#25564b',
        'moderate-cyan': '#458c7e'
      }
    },
  },
  plugins: [],
}
