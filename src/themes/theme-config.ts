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
  name: "Stranger Things: Tales from '85",
  week: "2026-04-18",
  inspiration: "Stranger Things: Tales from '85 premieres April 23, 2026 on Netflix. The kids are back in Hawkins, rolling D20s, and something is stirring under the ice. Edward the DM approves. Also, he just got back from Everest Base Camp, which in retrospect may have been a portal.",
  tagline: "CEO. Speaker. Data Scientist. Dungeon Master. (Also Demogorgon-adjacent.)",

  colors: {
    primary: "#8b0000",
    secondary: "#1a0808",
    accent: "#ff2a2a",
    accentHover: "#ff6666",
    background: "#0a0404",
    backgroundLight: "#fbf3ed",
    surface: "#140808",
    surfaceLight: "#ffffff",
    text: "#f5e6e0",
    textMuted: "#a88a86",
    textDark: "#1a0808",
    textDarkMuted: "#5a3030",
    border: "#3a1010",
    borderLight: "#d8c0bc",
    gradient: "linear-gradient(135deg, #0a0404 0%, #1a0808 30%, #3a0a0a 60%, #1a0808 100%)",
  },

  fonts: {
    heading: "'Metamorphous', 'Cinzel', serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Metamorphous&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
  },

  layout: {
    heroStyle: "editorial",
    navStyle: "fixed",
    cardStyle: "elevated",
    sectionStyle: "alternating",
    footerStyle: "minimal",
  },

  animations: {
    entrance: "glitch",
    hover: "glow",
    background: "particles",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "Back from Everest. Back from the Upside Down. Still running the campaign.",
    description: "Edward Roske just returned from Everest Base Camp (the real one, not the one with vines). Now he's rolling initiative against enterprise AI problems, running a D&D campaign, and soliciting speakers for the Caribbean AI Summit in October. No Demogorgons were harmed in the making of this website.",
    heroImage: "hero-2026-04-18.png",
    imageAlt: "Edward Roske as a 1980s Hawkins basement Dungeon Master in his signature blue fedora, seated behind a DM screen with polyhedral dice, hand-drawn maps, D&D manuals, and a painted Demogorgon miniature. Christmas lights on the wood-paneled wall behind him spell ROSKEDM. A red glow bleeds in from the doorway to the right.",
    ctaText: "Roll for Initiative",
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
