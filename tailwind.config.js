export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#39FF14', // 🔥 verde fosforescente (ajústalo si quieres más cercano al logo)
        },
        base: {
          bg: '#0B0F14',
          card: '#121826',
          text: '#E6F1FF',
        }
      },
      boxShadow: {
        neon: '0 0 20px rgba(57,255,20,0.6), 0 0 40px rgba(57,255,20,0.4)',
      },
      dropShadow: {
        neon: '0 0 0.5rem rgba(57,255,20,0.8)',
      }
    },
  },
  plugins: [],
}
