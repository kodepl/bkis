/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'radio-dark': '#0a0a0f',
        'radio-panel': '#12121a',
        'radio-surface': '#1a1a25',
        'radio-border': '#2a2a3a',
        'radio-green': '#00ff88',
        'radio-green-dim': '#00cc6a',
        'radio-cyan': '#00d4ff',
        'radio-purple': '#8b5cf6',
        'radio-text': '#e0e0e0',
        'radio-muted': '#6b7280',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'equalizer': 'equalizer 1.2s ease-in-out infinite',
        'equalizer-delayed': 'equalizer 1.2s ease-in-out 0.3s infinite',
        'equalizer-slow': 'equalizer 1.2s ease-in-out 0.6s infinite',
        'scanline': 'scanline 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        equalizer: {
          '0%, 100%': { height: '20%' },
          '50%': { height: '100%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00ff88, 0 0 10px #00ff88' },
          '100%': { boxShadow: '0 0 20px #00ff88, 0 0 40px #00ff88' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
