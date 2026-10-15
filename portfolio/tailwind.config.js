export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { bg: '#e9eef3', panel: '#f3f6f8', line: '#d2dae3', accent: '#0f766e', eyebrow: '#475569', ink: '#111827', mute: '#1f2937', dim: '#4b5563' },
    fontFamily: { serif: ['Fraunces', 'Georgia', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] }
  } }, plugins: []
}
