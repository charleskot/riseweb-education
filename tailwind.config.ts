import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        'wr-dark':        '#0A0E14',
        'wr-navy':        '#0D2A2A',
        'wr-lime':        '#D4E040',
        'wr-lime-lt':     '#E8F06B',
        'wr-gray':        '#8A8F96',
        'wr-surface':     '#111820',
        'wr-border':      '#1E2730',
        'wr-white':       '#F4F2EC',
        // IA accent — used exclusively in the AI & Agents layer
        'wr-electric':    '#7B6EF8',
        'wr-electric-lt': '#A89FF8',
      },
      fontFamily: {
        sans:  ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-instrument)', 'serif'],
      },
      letterSpacing: {
        'widest-xl': '0.15em',
      },
      backgroundImage: {
        // Dot grid used in AI sections
        'dot-grid': `radial-gradient(rgba(123,110,248,0.04) 1px, transparent 1px),
                     radial-gradient(rgba(212,224,64,0.03) 1px, transparent 1px)`,
        // Subtle grid lines for hero backgrounds
        'grid-lines': `linear-gradient(rgba(244,242,236,0.03) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(244,242,236,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'dot-grid':   '40px 40px, 60px 60px',
        'grid-lines': '80px 80px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
