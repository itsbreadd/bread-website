module.exports = {
  content: [
    './index.html',
    './onepage.html',
    "./js/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Courier New', 'monospace']
      },
      colors: {
        'stone-950': '#0c0a09',
        'close': '#EC6A5F',
        'close-inner': '#A90000',
        'minimize': '#F5C04F',
        'maximize': '#64CC57',
        'close-dark': '#D04E42',
        'minimize-dark': '#D6A13D',
        'maximize-dark': '#4EA73B'
      }
    },
    screens: {
      xs: '336px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    }
  },
  plugins: [],
}