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
  name: "The Devil Fears AI Too",
  week: "2026-05-02",
  inspiration: "The Devil Wears Prada 2 hit theaters May 1, 2026, so roske.ai is rebuilt this week as a glossy Vogue-style fashion magazine for a parody summer release titled 'The Devil Fears AI Too,' in which Edward plays both the bumbling AI intern and the silver-wigged Meryl Streep editor who keeps sending him back for better lattes.",
  tagline: "AI Intern. Cover Model. Allegedly Both.",

  colors: {
    primary: "#0a0a0a",
    secondary: "#b8001f",
    accent: "#d4007a",
    accentHover: "#ff2a8f",
    background: "#0a0a0a",
    backgroundLight: "#fbf8f3",
    surface: "#141414",
    surfaceLight: "#ffffff",
    text: "#fbf8f3",
    textMuted: "#9d9690",
    textDark: "#0a0a0a",
    textDarkMuted: "#5a5550",
    border: "#2a2521",
    borderLight: "#e8e1d6",
    gradient: "linear-gradient(135deg, #0a0a0a 0%, #1a0d10 50%, #2a0816 100%)",
  },

  fonts: {
    heading: "'Bodoni Moda', 'Didot', 'Playfair Display', serif",
    body: "'Cormorant Garamond', 'Garamond', Georgia, serif",
    mono: "'JetBrains Mono', 'IBM Plex Mono', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,700;0,6..96,800;0,6..96,900;1,6..96,400;1,6..96,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap",
  },

  layout: {
    heroStyle: "editorial",
    navStyle: "fixed",
    cardStyle: "minimal",
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
    subtitle: "A summer 2026 release no one asked for. Currently fetching coffee, occasionally closing the books.",
    description: "The Devil Wears Prada 2 came out yesterday, which felt like a personal attack on every AI intern in Manhattan. So this week roske.ai is rebuilt as the official press kit for an unauthorized parody titled 'The Devil Fears AI Too,' in which Edward plays both the harried intern and the silver-wigged editor who keeps sending him back for a less-burnt latte. (Edward is, on the record, available for both roles. He brought his own fedora.)",
    heroImage: "hero-2026-05-02.png",
    imageAlt: "Movie-poster parody for 'The Devil Fears AI Too': Edward Roske in the foreground as a glamorous Meryl Streep style fashion editor in a silver wig and blue fedora, with a second Edward in the background as a flustered intern juggling coffees and binders.",
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
