import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  keyframes: {
    'move-bg': {
      to: {
        backgroundPosition: '400% 0',
      },
    },
  },
  animation: {
    'move-bg': 'move-bg 8s infinite linear',
  },
  backgroundSize: {
    'size-300': '300% 300%',
  },
  plugins: [],
}
export default config
