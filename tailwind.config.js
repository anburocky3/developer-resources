module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.vue'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
