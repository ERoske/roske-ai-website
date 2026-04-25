/**
 * Theme Configuration System for Roske.AI
 *
 * This file defines the weekly theme. Every Saturday at 5 AM,
 * Claude Code overwrites this file with a new theme based on
 * whatever is topical that week (movies, TV, sports, culture).
 *
 * The theme controls: colors, typography, layout variant, animations,
 * hero content, and overall visual personality.
 */

export interface ThemeConfig {
  // Metadata
  name: string;
  week: string;           // e.g. "2026-02-22"
  inspiration: string;    // What inspired this week's theme
  tagline: string;        // Edward's tagline for the week

  // Color palette
  colors: {
    primary: string;       // Main brand color
    secondary: string;     // Supporting color
    accent: string;        // Call-to-action, highlights
    accentHover: string;   // Accent hover state
    background: string;    // Page background (dark mode)
    backgroundLight: string; // Page background (light mode)
    surface: string;       // Card/section backgrounds (dark)
    surfaceLight: string;  // Card/section backgrounds (light)
    text: string;          // Primary text (dark mode)
    textMuted: string;     // Secondary text (dark mode)
    textDark: string;      // Primary text (light mode)
    textDarkMuted: string; // Secondary text (light mode)
    border: string;        // Borders (dark mode)
    borderLight: string;   // Borders (light mode)
    gradient: string;      // CSS gradient for hero/accents
  };

  // Typography
  fonts: {
    heading: string;       // Font family for headings
    body: string;          // Font family for body text
    mono: string;          // Font family for code/tech text
    googleFontsUrl: string; // Google Fonts import URL
  };

  // Layout variant
  layout: {
    heroStyle: 'centered' | 'split' | 'fullscreen' | 'asymmetric' | 'editorial';
    navStyle: 'fixed' | 'sticky' | 'floating' | 'transparent';
    cardStyle: 'glass' | 'solid' | 'outlined' | 'elevated' | 'minimal';
    sectionStyle: 'standard' | 'alternating' | 'overlapping' | 'magazine';
    footerStyle: 'minimal' | 'detailed' | 'creative';
  };

  // Animations
  animations: {
    entrance: 'fade-up' | 'fade-in' | 'slide-in' | 'scale-up' | 'typewriter' | 'glitch';
    hover: 'lift' | 'glow' | 'tilt' | 'pulse' | 'underline';
    background: 'gradient' | 'particles' | 'grid' | 'waves' | 'noise' | 'none';
    pageTransition: 'fade' | 'slide' | 'morph' | 'none';
  };

  // Hero section
  hero: {
    title: string;         // Main title (usually "ROSKE.AI")
    subtitle: string;      // Subtitle for the week
    description: string;   // Brief themed description
    heroImage: string;     // Hero image filename (unique per week, e.g. "hero-2026-03-28.png")
    imageAlt: string;      // Alt text for hero image
    ctaText: string;       // Call-to-action button text
    ctaLink: string;       // CTA destination
  };
}

// ============================================
// CURRENT THEME — overwritten weekly
// ============================================

export const currentTheme: ThemeConfig = {
  name: "Roske International: Final Season",
  week: "2026-04-25",
  inspiration: "The Boys is mid-final-season on Prime Video. Edward has, on the record, said he'd make a great Billy Butcher or even Starlight (or both). So this week roske.ai is rebuilt as a glossy Vought-style propaganda site for a fictional corporate-superhero firm called Roske International, where the keynote speaker, the CEO, and the entire press kit are all Edward.",
  tagline: "CEO. Speaker. Data Scientist. Dungeon Master. (Probationary Supe.)",

  colors: {
    primary: "#c8102e",
    secondary: "#1b2c5f",
    accent: "#e63946",
    accentHover: "#ff6b6b",
    background: "#0a0e1c",
    backgroundLight: "#f7f1e3",
    surface: "#11182a",
    surfaceLight: "#fffaf0",
    text: "#f7f1e3",
    textMuted: "#a8aec1",
    textDark: "#0a0e1c",
    textDarkMuted: "#475063",
    border: "#1f2a44",
    borderLight: "#d8c89c",
    gradient: "linear-gradient(135deg, #0a0e1c 0%, #11182a 35%, #1b2c5f 70%, #4a0814 100%)",
  },

  fonts: {
    heading: "'Anton', 'Bebas Neue', 'Impact', sans-serif",
    body: "'IBM Plex Sans', 'Inter', system-ui, sans-serif",
    mono: "'IBM Plex Mono', 'JetBrains Mono', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=DM+Serif+Display:ital@0;1&display=swap",
  },

  layout: {
    heroStyle: "editorial",
    navStyle: "fixed",
    cardStyle: "outlined",
    sectionStyle: "magazine",
    footerStyle: "minimal",
  },

  animations: {
    entrance: "fade-up",
    hover: "lift",
    background: "noise",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "American hero (probationary). Available for keynotes, podcasts, and ribbon-cuttings.",
    description: "The Boys is wrapping up its final season on Prime Video, which got Edward thinking: what would happen if a corporate-superhero firm pivoted into enterprise AI? The PR is glossy, the spreadsheets are sealed, and the Q3 numbers are absolutely classified. (No Supes were harmed in the making of this website. The fedora is real.)",
    heroImage: "hero-2026-04-25.png",
    imageAlt: "Edward Roske in a pulpy 1970s-style propaganda poster pose: navy and crimson superhero suit, billowing cape, glowing chest emblem, signature blue fedora, an American flag and a city skyline behind him.",
    ctaText: "View the Roster",
    ctaLink: "#current-work",
  },
};

/**
 * Generate CSS custom properties from theme config.
 * Used by BaseLayout.astro to apply the theme.
 */
export function themeToCSS(theme: ThemeConfig): string {
  return `
    --color-primary: ${theme.colors.primary};
    --color-secondary: ${theme.colors.secondary};
    --color-accent: ${theme.colors.accent};
    --color-accent-hover: ${theme.colors.accentHover};
    --color-background: ${theme.colors.background};
    --color-background-light: ${theme.colors.backgroundLight};
    --color-surface: ${theme.colors.surface};
    --color-surface-light: ${theme.colors.surfaceLight};
    --color-text: ${theme.colors.text};
    --color-text-muted: ${theme.colors.textMuted};
    --color-text-dark: ${theme.colors.textDark};
    --color-text-dark-muted: ${theme.colors.textDarkMuted};
    --color-border: ${theme.colors.border};
    --color-border-light: ${theme.colors.borderLight};
    --font-heading: ${theme.fonts.heading};
    --font-body: ${theme.fonts.body};
    --font-mono: ${theme.fonts.mono};
  `.trim();
}
