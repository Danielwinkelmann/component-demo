import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

export default <Partial<Config>>{
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
