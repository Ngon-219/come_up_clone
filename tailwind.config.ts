import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'nav-bar': '#00A9F4',
        'background': 'rgba(0, 169, 244, 1)'

      },
      spacing: {
        '50vh': '50vh',
        '40vh': '40vh',
        '45vh': '45vh',
        '80vh': '80vh',
        '20vh': '20vh'
      },
      screens: {
        // 'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1420px',
        'laptop1': '1052px'
        // => @media (min-width: 1024px) { ... }
  
        // 'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      gridColumn: {
        'span-1-2': '1 / span 2',
      }
    },
  },
  plugins: [],
}
export default config
