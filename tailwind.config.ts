import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:
      {
        'primary-black': '#090909',
        'primary-white': '#fafafa',
        'primary-black-link-hover': '#131313',
        'primary-white-50': '#ffffff0a',
        'primary-white-100': '#ffffff1a',
        'primary-white-300': '#fafafaa3',
        'primary-white-400': '#fafafaa5',
        'primary-border': '#FAFAFA',
        'primary-card': '#101010',
        'highlight': '#ff8000',
        'highlight-50': '#ff80001a',
        'highlight-100': '#ff80002a',
        'primary-green': '#aaff00',
        'primary-green-50': '#aaff001a',
        'primary-green-100': '#aaff00a3',
        'primary-green-300': '#aaff00a5',
        'cream-800': '#CE9178FF'
      }
    },
  },
  plugins: [],
}
export default config
