/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'github-white':
        "url('/images/github-mark-white.png')",
        'github-black':
        "url('/images/github-mark.png')",
        'linkedin':
        "url('/images/LI-In-Bug.png')"
      })
    },
  },
  plugins: [],
}
