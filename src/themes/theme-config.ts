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
  name: "March Madness",
  week: "2026-03-28",
  inspiration: "March Madness 2026: NCAA Tournament Elite Eight (March 28-29) building to the Final Four (April 4). Brackets, buzzer-beaters, and one CEO who filled out his bracket using a regression model.",
  tagline: "CEO. Speaker. Data Scientist. Dungeon Master. 16-Seed Upset Waiting to Happen.",

  colors: {
    primary: "#1a1028",
    secondary: "#2a1810",
    accent: "#e8601c",
    accentHover: "#d04e10",
    background: "#0c0816",
    backgroundLight: "#faf5f0",
    surface: "#161020",
    surfaceLight: "#ffffff",
    text: "#e0d8cc",
    textMuted: "#9088a0",
    textDark: "#1a1028",
    textDarkMuted: "#6a5e70",
    border: "#302840",
    borderLight: "#d8d0c0",
    gradient: "linear-gradient(135deg, #0c0816 0%, #1a1028 30%, #2a1810 60%, #0c0816 100%)",
  },

  fonts: {
    heading: "'Oswald', system-ui, sans-serif",
    body: "'Source Sans 3', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "fixed",
    cardStyle: "elevated",
    sectionStyle: "magazine",
    footerStyle: "minimal",
  },

  animations: {
    entrance: "slide-in",
    hover: "lift",
    background: "gradient",
    pageTransition: "slide",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "Currently filling out a 64-team bracket for 'Which AI Model Will Replace My Job First.'",
    description: "Edward Roske builds AI companies, MCP servers, keynotes, and D&D campaigns. This week he's altitude training in Santa Fe before his Everest Base Camp trek (April 4), building the Caribbean AI Summit, and watching his bracket implode like everyone else's.",
    heroImage: "hero-2026-03-28.png",
    imageAlt: "Edward Roske as a basketball coach wearing his signature blue fedora instead of a ball cap, clipboard in hand, standing courtside in a packed arena with a giant bracket board behind him",
    ctaText: "Check My Bracket",
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
