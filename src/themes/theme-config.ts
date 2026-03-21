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
    imageAlt: string;      // Alt text for hero image
    ctaText: string;       // Call-to-action button text
    ctaLink: string;       // CTA destination
  };
}

// ============================================
// CURRENT THEME — overwritten weekly
// ============================================

export const currentTheme: ThemeConfig = {
  name: "Project Hail Mary",
  week: "2026-03-21",
  inspiration: "Project Hail Mary movie (March 20, 2026): Ryan Gosling wakes up alone in space to save Earth. Bioluminescent Astrophage, Tau Ceti, and an alien named Rocky.",
  tagline: "CEO. Speaker. Data Scientist. Dungeon Master. Sole Surviving Crew Member.",

  colors: {
    primary: "#0b1628",
    secondary: "#1a0f2e",
    accent: "#00d4aa",
    accentHover: "#00b894",
    background: "#050a14",
    backgroundLight: "#f0f4f8",
    surface: "#0d1a2d",
    surfaceLight: "#ffffff",
    text: "#d0dce8",
    textMuted: "#6889a8",
    textDark: "#0b1628",
    textDarkMuted: "#4a6580",
    border: "#1a3050",
    borderLight: "#c8d8e8",
    gradient: "linear-gradient(135deg, #050a14 0%, #0d1a2d 40%, #1a0f2e 70%, #050a14 100%)",
  },

  fonts: {
    heading: "'Space Grotesk', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
  },

  layout: {
    heroStyle: "fullscreen",
    navStyle: "fixed",
    cardStyle: "glass",
    sectionStyle: "alternating",
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
    subtitle: "Woke up in space. No memory. No crew. Just a laptop and a to-do list.",
    description: "Edward Roske builds AI companies, MCP servers, keynotes, and D&D campaigns. This week he's preparing for Everest Base Camp, building the Caribbean AI Summit, and wondering if a five-legged alien named Rocky would be any good at Oracle Essbase.",
    imageAlt: "Edward Roske in a spacesuit with his signature blue fedora perched on the space helmet, standing on a rocky alien planet with a glowing Tau Ceti star and colorful moons in the sky, casually holding an open laptop",
    ctaText: "Begin the Mission",
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
