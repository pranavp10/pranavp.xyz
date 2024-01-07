import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        'primary-border': '#FAFAFA',
        'primary-card': '#101010',
        'highlight': '#ff8000',
        'highlight-50': '#ff80001a',
        'highlight-100': '#ff80002a'
      }
    },
  },
  plugins: [],
}
export default config
