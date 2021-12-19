module.exports = {
  content: ["./*.{html,js}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Courier New', 'monospace']
      },
      colors: {
        'light-1' : '#FED053',
        'light-2' : '#F5B301',
        'light-3' : '#FF8800',
        'dark-1' : '#3B3F46',
        'dark-2' : '#2A2E34',
        'dark-3' : '#1E2328',
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