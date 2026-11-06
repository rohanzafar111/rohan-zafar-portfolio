export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { navy: '#07111F', navy2: '#0D1B2A', teal: '#00D6C9', blue: '#4285FF', violet: '#8B5CF6' },
      fontFamily: { sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'] },
      boxShadow: { glow: '0 0 32px rgba(0,214,201,.35)' },
    },
  },
  plugins: [],
}
