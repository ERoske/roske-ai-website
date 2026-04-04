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
  name: "Super Mario Galaxy",
  week: "2026-04-04",
  inspiration: "The Super Mario Galaxy Movie opened April 1, 2026. Edward requested a 2-D side-scroller aesthetic with an 8-bit version of himself (blue fedora, full beard) running around the screen. It's-a me, Edward-o.",
  tagline: "CEO. Speaker. Data Scientist. Dungeon Master. Your Princess Is in Another Castle.",

  colors: {
    primary: "#1a0a2e",
    secondary: "#0d1b3e",
    accent: "#e52521",
    accentHover: "#c41e1a",
    background: "#0a0618",
    backgroundLight: "#f0f4ff",
    surface: "#140e28",
    surfaceLight: "#ffffff",
    text: "#e8e0f0",
    textMuted: "#8a80a0",
    textDark: "#1a0a2e",
    textDarkMuted: "#5a4e70",
    border: "#2a1e48",
    borderLight: "#d0c8e0",
    gradient: "linear-gradient(135deg, #0a0618 0%, #1a0a2e 25%, #0d1b3e 50%, #1a0a2e 75%, #0a0618 100%)",
  },

  fonts: {
    heading: "'Press Start 2P', 'Courier New', monospace",
    body: "'Inter', system-ui, sans-serif",
    mono: "'Press Start 2P', 'JetBrains Mono', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@300;400;500;600;700&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "fixed",
    cardStyle: "elevated",
    sectionStyle: "standard",
    footerStyle: "minimal",
  },

  animations: {
    entrance: "scale-up",
    hover: "glow",
    background: "particles",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "Currently speed-running the Everest Base Camp level. No warp pipes. No extra lives.",
    description: "Edward Roske builds AI companies, MCP servers, keynotes, and D&D campaigns. This week he's trekking to Everest Base Camp in Nepal (April 4-18), building the Caribbean AI Summit, and collecting power stars in between.",
    heroImage: "hero-2026-04-04.png",
    imageAlt: "Edward Roske as a Super Mario-style character in a galaxy setting, wearing his signature blue fedora instead of a red cap, floating among stars and planets",
    ctaText: "Start Game",
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
