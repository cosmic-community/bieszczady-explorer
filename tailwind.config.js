module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f1f7f4',
          100: '#dcebe3',
          200: '#b8d7c7',
          300: '#93c3ac',
          400: '#6eaf90',
          500: '#4c9475',
          600: '#3b7560',
          700: '#2c5646',
          800: '#1d372d',
          900: '#0f1914'
        },
        earth: {
          50: '#faf7f3',
          100: '#f2e9dc',
          200: '#e7d4bb',
          300: '#d7b890',
          400: '#c69a66',
          500: '#b27d43',
          600: '#8e6235',
          700: '#6b4828',
          800: '#4a311c',
          900: '#2a1b10'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}