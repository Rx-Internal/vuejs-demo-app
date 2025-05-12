import PrimeUI from 'tailwindcss-primeui';



module.exports = {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    safelist: [
      {
        pattern: /^(pi|pi-[\w-]+)$/,
      },
    ],
    theme: {
      extend: {},
    },
    plugins: [PrimeUI],
  }
  