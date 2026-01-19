/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0e1a',
        'dark-card': '#1a1f2e',
        'purple-primary': '#8b5cf6',
        'cyan-primary': '#22d3ee',
        'teal-primary': '#14b8a6',
      },
    },
  },
  plugins: [],
}
