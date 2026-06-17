import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        "2xl": "1280px",
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
        gold: {
          50:  "hsl(var(--gold-50))",
          200: "hsl(var(--gold-200))",
          400: "hsl(var(--gold-400))",
          600: "hsl(var(--gold-600))",
          800: "hsl(var(--gold-800))",
        },
        ink: {
          900: "hsl(var(--ink-900))",
          700: "hsl(var(--ink-700))",
          500: "hsl(var(--ink-500))",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
      },
      letterSpacing: {
        wide: "0.06em",
        widest: "0.22em",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, hsl(42 70% 82%) 0%, hsl(40 55% 64%) 45%, hsl(34 50% 40%) 100%)",
        "ink-fade":
          "linear-gradient(180deg, hsl(152 38% 8% / 0) 0%, hsl(152 38% 8% / 0.85) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
