import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import typographyPlugin from "@tailwindcss/typography";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)"
        },
        info: {
          DEFAULT: "hsl(var(--info) / <alpha-value>)",
          foreground: "hsl(var(--info-foreground) / <alpha-value>)"
        },
        warning: {
          DEFAULT: "hsl(var(--warning) / <alpha-value>)",
          foreground: "hsl(var(--warning-foreground) / <alpha-value>)"
        },
        syntax: {
          keyword: "hsl(var(--syntax-keyword) / <alpha-value>)",
          string: "hsl(var(--syntax-string) / <alpha-value>)",
          comment: "hsl(var(--syntax-comment) / <alpha-value>)",
          function: "hsl(var(--syntax-function) / <alpha-value>)",
          variable: "hsl(var(--syntax-variable) / <alpha-value>)",
          operator: "hsl(var(--syntax-operator) / <alpha-value>)"
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      fontFamily: {
        sans: ["Inter var", "SF Pro Display", "Roboto", ...fontFamily.sans],
        code: ["JetBrains Mono", "Fira Code", "Menlo", "monospace"]
      },
      animation: {
        "cursor-blink": "cursor-blink 1.25s steps(2) infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        "orbit-reverse": "orbit-reverse calc(var(--duration)*1s) linear infinite"
      },
      keyframes: {
        "cursor-blink": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" }
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)"
          }
        },
        "orbit-reverse": {
          "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)"
          },
          "100%": {
            transform: "rotate(-360deg) translateY(calc(var(--radius) * 1px)) rotate(360deg)"
          }
        }
      }
    }
  },
  plugins: [typographyPlugin, animatePlugin]
};

export default config;