import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx,md}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:
      {
        'primary-black': '#090909',
        'primary-black-link-hover': '#131313',
        'primary-border': '#FAFAFA',
        'primary-gray': { '500': '#736f70' },
        'highlight': '#ff8000',
        'highlight-50': '#ff80001a',
        'highlight-100': '#ff80002a',
        "dark-white": {
          '50': '#ffffff0a',
          '100': '#ffffff1a',
          '300': '#fafafaa3',
          '400': '#fafafaa5',
          '900': '#fafafa',
        }
      }
    },
  },
  plugins: [],
}
export default config
