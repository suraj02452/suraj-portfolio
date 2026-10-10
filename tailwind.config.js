/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0C0B',
        coal: '#161413',
        ash: '#24211F',
        bone: '#EEE9E2',
        dust: '#9A938A',
        brass: '#D7B98A',
        live: '#5FD49A',
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'Impact', 'Arial Narrow', 'sans-serif'],
        sans: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-rev': 'marquee 46s linear infinite reverse',
      },
    },
  },
  plugins: [],
}
