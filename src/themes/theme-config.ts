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
  name: "This Is the Way",
  week: "2026-05-24",
  inspiration: "Star Wars: The Mandalorian and Grogu opened in theaters on Friday, May 22, 2026, the first theatrical Star Wars release since 2019, and also (in a coincidence the universe arranged on its own) Edward's birthday. So roske.ai becomes a Mandalorian bounty hunter's logbook for the week: Edward as a Mando who flatly refuses to swap the blue fedora for the beskar helmet, Grogu in a side satchel, and the targets are AI companies. The fedora-versus-helmet schism is the whole bit. (Memorial Day on Monday gets a brief, sober tip of the same fedora.)",
  tagline: "A bounty hunter in a blue fedora. The marks are AI companies. The kid stays in the satchel.",

  colors: {
    // Tatooine night and beskar steel. Deep indigo space, cool steel,
    // a sharp Mando-red accent stripe, warm bone parchment for daylight.
    primary: "#0e1422",          // deep Tatooine night
    secondary: "#8a96a3",        // beskar steel
    accent: "#b03a2e",           // Mando shoulder-stripe red
    accentHover: "#cf4a3a",
    background: "#0a0d14",       // deep space black-blue
    backgroundLight: "#e9dcb8",  // sun-warmed parchment / Tatooine sand
    surface: "#141a2a",          // lifted indigo (cards, dark)
    surfaceLight: "#f3e8c6",     // pale sand parchment (cards, light)
    text: "#ece2c4",             // warm bone
    textMuted: "#8a8474",        // muted dust
    textDark: "#1a1f30",         // dark navy text on light
    textDarkMuted: "#5a5240",    // muted saddle on light
    border: "#2c3345",           // night-edge blue
    borderLight: "#c4b58a",      // warm sand line
    gradient: "linear-gradient(180deg, #0a0d14 0%, #1b1322 45%, #8a3a1c 85%, #c46a26 100%)",
  },

  fonts: {
    // Black Ops One: stencil/military display for big beskar headlines.
    // Cormorant Garamond italic: noble serif for creed phrasing and pull quotes.
    // Manrope: clean modern sans for body, readable in both modes.
    // Share Tech Mono: HUD/console look for ledger tags, lot numbers, beskar plate stamps.
    heading: "'Black Ops One', 'Bebas Neue', Impact, sans-serif",
    body: "'Manrope', 'Inter', system-ui, -apple-system, sans-serif",
    mono: "'Share Tech Mono', 'Courier Prime', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Manrope:wght@300;400;500;600;700;800&family=Share+Tech+Mono&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "fixed",
    cardStyle: "outlined",
    sectionStyle: "alternating",
    footerStyle: "detailed",
  },

  animations: {
    entrance: "fade-up",
    hover: "lift",
    background: "none",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "A Mandalorian bounty hunter who refuses the helmet. The targets are AI companies. The apprentice in the satchel uses the Force only to lift snacks.",
    description: "Star Wars: The Mandalorian and Grogu opened in theaters on Friday, May 22, the same day I turned a year older. (The universe arranged that on its own. I take no credit.) So roske.ai is a bounty hunter's logbook this week: beskar where the suit jacket usually goes, Grogu where the laptop bag usually sits, and the targets are AI companies that have not yet been brought in. The fedora stays. The fedora was never up for negotiation.",
    heroImage: "hero-2026-05-24.png",
    imageAlt: "Edward Roske in full beskar Mandalorian armor standing on a Tatooine ridge at twin-sunset, wearing his signature blue fedora hat instead of a Mandalorian helmet, the helmet held under one arm. Grogu sits in a leather satchel at Edward's hip, looking up. Twin suns on the horizon, blaster on his hip, cape moving in the wind.",
    ctaText: "Open the bounty board",
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
