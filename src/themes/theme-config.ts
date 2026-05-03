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
  name: "Edward Kombat II",
  week: "2026-05-09",
  inspiration: "Mortal Kombat II hits theaters this weekend (May 8, 2026), so roske.ai is rebuilt as a parody arcade fight game titled 'Edward Kombat II,' in which Edward fights every iconic Mortal Kombat character (and tells Scorpion 'No, you get over here!'). The site mixes cinematic movie stills with authentic 16-bit pixel art for arcade purists.",
  tagline: "Test Your Might. (Or Your Q4 Forecast.)",

  colors: {
    primary: "#0a0205",
    secondary: "#c8102e",
    accent: "#ffb800",
    accentHover: "#ffd84d",
    background: "#0a0205",
    backgroundLight: "#f4ece0",
    surface: "#160508",
    surfaceLight: "#ffffff",
    text: "#fff4d9",
    textMuted: "#a89888",
    textDark: "#170306",
    textDarkMuted: "#5a3a3a",
    border: "#3a0a14",
    borderLight: "#d8c4a0",
    gradient: "linear-gradient(135deg, #0a0205 0%, #2a0510 50%, #c8102e 100%)",
  },

  fonts: {
    heading: "'Press Start 2P', 'VT323', 'JetBrains Mono', monospace",
    body: "'Rajdhani', 'Inter', system-ui, sans-serif",
    mono: "'VT323', 'JetBrains Mono', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Rajdhani:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
  },

  layout: {
    heroStyle: "fullscreen",
    navStyle: "fixed",
    cardStyle: "outlined",
    sectionStyle: "alternating",
    footerStyle: "minimal",
  },

  animations: {
    entrance: "glitch",
    hover: "glow",
    background: "grid",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "An arcade tie-in no one licensed. Round 1: Q4 close. Fight!",
    description: "Mortal Kombat II opens this weekend, which felt like a personal challenge from the universe. So this week roske.ai is the unofficial press kit for 'Edward Kombat II,' a parody arcade fighter where Edward takes on every iconic MK character. He plays them all, including the boss. (Edward is, on the record, also available to be fought. He brought his own fedora. He has notes on the spear toss.)",
    heroImage: "hero-2026-05-09.png",
    imageAlt: "Movie-poster parody for 'Edward Kombat II': Edward Roske in a martial arts fighting stance wearing a deep-red fedora, surrounded by silhouettes of Mortal Kombat fighters under a stormy sky with a glowing red dragon emblem.",
    ctaText: "Insert Coin",
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
