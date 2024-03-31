/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      "colors" :{
        "primary": 'hsl(259, 100%, 65%)',
        "secondary": 'hsl(0, 100%, 67%)',
        "offWhite": 'hsl(0, 0%, 94%)',
        "smokeGray": 'hsl(0, 1%, 44%)'
      },
      animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      }
    },
  },
  plugins: [],
}
