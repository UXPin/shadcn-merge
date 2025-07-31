/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  safelist: [
    'ng-canvas',
    // === Fonts ===
    { pattern: /^font-(sans|serif|mono)$/ },

    // === Text colors ===
    { pattern: /^text-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^text-(white|black)$/ },

    // === Background colors ===
    { pattern: /^bg-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/ },
    { pattern: /^bg-(white|black|transparent)$/ },
    {
      pattern: /^bg-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose|white|black)\/(5|10|20|30|40|50|60|70|80|90|95|100)$/,
    },
    {
      pattern: /^bg-gradient-to-(t|tr|r|br|b|bl|l|tl)$/,
    },
    {
      pattern: /^(from|via|to)-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/,
    },
    {
      pattern: /^(from|via|to)-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose|white|black)\/(5|10|20|30|40|50|60|70|80|90|95|100)$/,
    },
    // === Border colors ===
    { pattern: /^border-(red|green|blue|yellow|gray|slate|neutral|zinc|stone|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/ },

    // === Text size ===
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/ },

    // === Font weight ===
    { pattern: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/ },

    // === Padding / Margin ===
    { pattern: /^(p|px|py|pt|pb|pl|pr)-([0-9]{1,2}|100)$/ },
    { pattern: /^(m|mx|my|mt|mb|ml|mr)-([0-9]{1,2}|100)$/ },

    // === Border radius ===
    { pattern: /^rounded(-(none|sm|md|lg|xl|2xl|3xl|full))?$/ },

    // === Width / Height ===
    { pattern: /^(w|h)-(?:[0-9]{1,2}|100|auto|full|screen|min|max|fit|[1-9]\/[1-9]|[1-9]\/10|10\/10|11\/12|5\/6|2\/5|3\/5|4\/5)$/ },

    // === Flex / Grid ===
    // Flex (kierunki i wrapowanie)
    { pattern: /^flex(-(?:(row|row-reverse|col|col-reverse|wrap|wrap-reverse|nowrap)))?$/ },

// Flex basis/grow/shrink
    { pattern: /^flex-(1|auto|initial|none)$/ },

// Align items
    { pattern: /^items-(start|end|center|baseline|stretch)$/ },

// Justify content
    { pattern: /^justify-(start|end|center|between|around|evenly)$/ },

// Gap (standardowy zakres Tailwind + pełen numer od 0 do 100)
    { pattern: /^gap-([0-9]{1,2}|100)$/ },

// Grid columns (od 1 do 12)
    { pattern: /^grid-cols-([1-9]|1[0-2])$/ },

// Grid column span
    { pattern: /^col-span-([1-9]|1[0-2])$/ },

// Grid rows (od 1 do 12)
    { pattern: /^grid-rows-([1-9]|1[0-2])$/ },

// Grid row span
    { pattern: /^row-span-([1-9]|1[0-2])$/ },

// Grow: grow, grow-0
    { pattern: /^grow(-0)?$/ },

// Shrink: shrink, shrink-0
    { pattern: /^shrink(-0)?$/ },

    // === Display ===
    { pattern: /^block|inline|inline-block|flex|grid|hidden$/ },

    // === Shadow ===
    { pattern: /^shadow(-(sm|md|lg|xl|2xl|inner|none))?$/ },

    // === Transition / Animation ===
    { pattern: /^transition(-(all|colors|opacity|shadow|transform))?$/ },
    { pattern: /^duration-(75|100|150|200|300|500|700|1000)$/ },
    { pattern: /^ease-(linear|in|out|in-out)$/ },
    { pattern: /^animate-(spin|ping|pulse|bounce|none|fadeIn|fadeOut|slideIn|slideOut)$/ },

    // === Hover / Focus  ===
    {
      pattern: /^(bg|text|border)-(red|green|blue|gray|slate|neutral|zinc|stone|yellow|orange|amber|lime|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(100|200|300|400|500|600|700|800|900)$/,
      variants: ['hover', 'focus', 'active', 'dark'],
    },

    // === Overflow / Z-index / Positioning ===
    { pattern: /^overflow-(auto|hidden|visible|scroll)$/ },
    { pattern: /^overflow-(x|y)-(auto|hidden|visible|scroll)$/ },
    { pattern: /^scroll-(auto|smooth)$/ },
    { pattern: /^z-(0|10|20|30|40|50|auto)$/ },
    { pattern: /^relative|absolute|fixed|sticky$/ },

    // === Ring (focus outline) ===
    { pattern: /^ring(-(0|1|2|4|8))?$/ },
    { pattern: /^ring-(red|blue|green|gray|purple)-(100|200|400|600)$/ },

    // === Opacity ===
    { pattern: /^opacity-(0|25|50|75|100)$/ },

    // === Theme-based classes ===
    { pattern: /^bg-(background|foreground|card|popover|primary|secondary|accent|muted|destructive)$/ },
    { pattern: /^bg-(sidebar|sidebar-foreground|sidebar-primary|sidebar-accent)$/ },
    { pattern: /^text-(foreground|card|popover|primary|secondary|accent|muted|destructive)$/ },
    { pattern: /^border-(input|border|ring|primary|secondary|accent|destructive)$/ },

    // === Text utilities ===
    { pattern: /^tracking-(tighter|tight|normal|wide|wider|widest)$/ },
    { pattern: /^leading-(none|tight|snug|normal|relaxed|loose)$/ },
    { pattern: /^text-(left|center|right|justify)$/ },
    { pattern: /^uppercase|lowercase|capitalize|normal-case$/ },
    { pattern: /^align-(top|middle|bottom|baseline|text-top|text-bottom)$/ },

    // === Sizing utilities ===
    { pattern: /^min-w-(0|full|min|max|fit)$/ },
    { pattern: /^max-w-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full)$/ },
    { pattern: /^min-h-(0|full|min|max|screen)$/ },
    { pattern: /^max-h-(0|full|min|max|screen)$/ },

    // === Space / Divide ===
    { pattern: /^space-(x|y)-(0|1|2|3|4|5|6|8|10|12|16|20|24|32|40|48|56|64)$/ },
    { pattern: /^divide-(x|y)-(0|2|4|8)$/ },
    { pattern: /^divide-(red|gray|border)$/ },

    // === Interactivity ===
    { pattern: /^pointer-events-(none|auto)$/ },
    { pattern: /^select-(none|text|all|auto)$/ },
    { pattern: /^cursor-(default|pointer|wait|text|move|not-allowed)$/ },

    // === Plugins / Misc ===
    { pattern: /^aspect-(auto|square|video)$/ },

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
