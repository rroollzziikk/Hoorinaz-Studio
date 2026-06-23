import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        "background-elevated": "hsl(var(--background-elevated))",
        foreground: "hsl(var(--foreground))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* Warm bronze accent ramp — used sparingly for eyebrows, dividers, prices */
        bronze: {
          50: "hsl(var(--bronze-50))",
          200: "hsl(var(--bronze-200))",
          400: "hsl(var(--bronze-400))",
          600: "hsl(var(--bronze-600))",
          800: "hsl(var(--bronze-800))",
        },
        /* Deep charcoal ramp — image scrims, the dark footer band */
        ink: {
          900: "hsl(var(--ink-900))",
          700: "hsl(var(--ink-700))",
          500: "hsl(var(--ink-500))",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.25rem",
        sm: "0.125rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        farsi: ["var(--font-farsi)", "Vazirmatn", "Tahoma", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.05em",
        widest: "0.22em",
      },
      maxWidth: {
        prose: "42rem",
      },
      backgroundImage: {
        /* Bottom-to-top dark scrim — for legible text over hero/image placeholders */
        "scrim-b": "linear-gradient(180deg, transparent 0%, hsl(var(--ink-900) / 0.55) 100%)",
        "scrim-t": "linear-gradient(0deg, transparent 0%, hsl(var(--ink-900) / 0.45) 100%)",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
