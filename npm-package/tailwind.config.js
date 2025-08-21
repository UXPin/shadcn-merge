/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content:  [
    '../src/**/*.{ts,tsx}',
  ],
  prefix: '',
  safelist: [
    'ng-canvas',
    { pattern: /./ },
    { pattern: /^font-(sans|serif|mono)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Text colors ===
    { pattern: /^text-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^text-(white|black)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Background colors ===
    { pattern: /^bg-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^bg-(white|black|transparent)$/ },
    { pattern: /^bg-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose|white|black)\/(5|10|20|30|40|50|60|70|80|90|95|100)$/ },
    { pattern: /^bg-gradient-to-(t|tr|r|br|b|bl|l|tl)$/ },
    { pattern: /^(from|via|to)-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^(from|via|to)-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose|white|black)\/(5|10|20|30|40|50|60|70|80|90|95|100)$/ },

    // === Border colors ===
    { pattern: /^border-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/ },

    // === Text size ===
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Font weight ===
    { pattern: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Padding / Margin ===
    { pattern: /^(p|px|py|pt|pb|pl|pr)-([0-9]{1,2}|100)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^(m|mx|my|mt|mb|ml|mr)-([0-9]{1,2}|100)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Border radius ===
    { pattern: /^rounded(-(none|sm|md|lg|xl|2xl|3xl|full))?$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Width / Height ===
    { pattern: /^(w|h)-(?:[0-9]{1,2}|100|auto|full|screen|min|max|fit|[1-9]\/[1-9]|[1-9]\/10|10\/10|11\/12|5\/6|2\/5|3\/5|4\/5)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Flex / Grid ===
    { pattern: /^flex(-(?:(row|row-reverse|col|col-reverse|wrap|wrap-reverse|nowrap)))?$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^flex-(1|auto|initial|none)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^items-(start|end|center|baseline|stretch)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^justify-(start|end|center|between|around|evenly)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^gap-([0-9]{1,2}|100)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^grid-cols-([1-9]|1[0-2])$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^col-span-([1-9]|1[0-2])$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^grid-rows-([1-9]|1[0-2])$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^row-span-([1-9]|1[0-2])$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^grow(-0)?$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^shrink(-0)?$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Display ===
    { pattern: /^block|inline|inline-block|flex|grid|hidden$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Shadow ===
    { pattern: /^shadow(-(sm|md|lg|xl|2xl|inner|none))?$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Transition / Animation ===
    { pattern: /^transition(-(all|colors|opacity|shadow|transform))?$/ },
    { pattern: /^duration-(75|100|150|200|300|500|700|1000)$/ },
    { pattern: /^ease-(linear|in|out|in-out)$/ },
    { pattern: /^animate-(spin|ping|pulse|bounce|none|fadeIn|fadeOut|slideIn|slideOut)$/ },

    // === Hover / Focus ===
    {
      pattern: /^(bg|text|border)-(red|green|blue|gray|slate|neutral|zinc|stone|yellow|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/,
      variants: ['hover', 'focus', 'active', 'dark']
    },

    // === Overflow / Z-index / Positioning ===
    { pattern: /^overflow-(auto|hidden|visible|scroll)$/ },
    { pattern: /^overflow-(x|y)-(auto|hidden|visible|scroll)$/ },
    { pattern: /^scroll-(auto|smooth)$/ },
    { pattern: /^z-(0|10|20|30|40|50|auto)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^relative|absolute|fixed|sticky$/ },

    // === Ring ===
    { pattern: /^ring(-(0|1|2|4|8))?$/ },
    { pattern: /^ring-(red|blue|green|gray|purple)-(100|200|400|600)$/ },

    // === Opacity ===
    { pattern: /^opacity-(0|25|50|75|100)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

    // === Theme-based classes ===
    { pattern: /^bg-(background|foreground|card|popover|primary|secondary|accent|muted|destructive)$/ },
    { pattern: /^bg-(sidebar|sidebar-foreground|sidebar-primary|sidebar-accent)$/ },
    { pattern: /^text-(foreground|card|popover|primary|secondary|accent|muted|destructive)$/ },
    { pattern: /^border-(input|border|ring|primary|secondary|accent|destructive)$/ },

    // === Text utilities ===
    { pattern: /^tracking-(tighter|tight|normal|wide|wider|widest)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^leading-(none|tight|snug|normal|relaxed|loose)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^text-(left|center|right|justify)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^uppercase|lowercase|capitalize|normal-case$/ },
    { pattern: /^align-(top|middle|bottom|baseline|text-top|text-bottom)$/ },

    // === Sizing utilities ===
    { pattern: /^min-w-(0|full|min|max|fit)$/ },
    { pattern: /^max-w-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full)$/ },
    { pattern: /^min-h-(0|full|min|max|screen)$/ },
    { pattern: /^max-h-(0|full|min|max|screen)$/ },

    // === Space / Divide ===
    { pattern: /^space-(x|y)-([1-9]|1[0-2])$/ },
    { pattern: /^divide-(x|y)-([1-9]|1[0-2])$/ },
    { pattern: /^divide-(red|gray|border)$/ },

    // === Interactivity ===
    { pattern: /^pointer-events-(none|auto)$/ },
    { pattern: /^select-(none|text|all|auto)$/ },
    { pattern: /^cursor-(default|pointer|wait|text|move|not-allowed)$/ },

    // === Plugins / Misc ===
    { pattern: /^aspect-(auto|square|video)$/ },

    { pattern: /^-(top|right|bottom|left)-([0-9]{1,2}|100)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^(top|right|bottom|left)-([0-9]{1,2}|100)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^-?inset-([0-9]{1,2}|100)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },
    { pattern: /^-?(inset-(x|y))?-([0-9]{1,2}|100)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'] },

  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
          'caret-blink': {
            '0%,70%,100%': { opacity: '1' },
            '20%,50%': { opacity: '0' },
          },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
