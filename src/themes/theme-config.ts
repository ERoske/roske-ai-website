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
  name: "Roske à Cannes",
  week: "2026-05-11",
  inspiration: "The 79th Cannes Film Festival opens May 12 on the Croisette. Roske.ai is rebuilt this week as the official press kit for an unauthorized parody competition entry from a director nobody has ever heard of, in which Edward Roske is the auteur, the leading man, the unpaid intern, and (somehow) the gentleman holding the Palme d'Or above his head with tears in his eyes.",
  tagline: "Une Sélection Officielle. Officieusement.",

  colors: {
    primary: "#0a0907",         // ink black
    secondary: "#c8a04a",        // worn brass / Palme d'Or
    accent: "#b8202a",            // Cannes red / programme red
    accentHover: "#e23a45",
    background: "#0a0907",
    backgroundLight: "#f4ecdc",  // aged paper / programme cream
    surface: "#15110d",
    surfaceLight: "#fbf5e4",
    text: "#f4ecdc",
    textMuted: "#b5a78d",
    textDark: "#15110d",
    textDarkMuted: "#5a4a36",
    border: "#3a2f24",
    borderLight: "#d8c69e",
    gradient: "linear-gradient(180deg, #0a0907 0%, #161009 50%, #261810 100%)",
  },

  fonts: {
    // Italiana: high-contrast French display, perfect for festival posters.
    // DM Serif Display: oversized editorial serif for headlines.
    // EB Garamond: classic body serif. Special Elite: typewriter mono for credits.
    heading: "'Italiana', 'DM Serif Display', 'Didot', serif",
    body: "'EB Garamond', 'Garamond', Georgia, serif",
    mono: "'Special Elite', 'Courier Prime', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Italiana&family=DM+Serif+Display:ital@0;1&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Special+Elite&family=Inter:wght@400;500;600&display=swap",
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
    subtitle: "Une selection officielle (mais pas vraiment). On the Croisette this week, in spirit, in spreadsheets, and in an unwisely white dinner jacket.",
    description: "The 79th Cannes Film Festival opens this week, so roske.ai is rebuilt as the official press kit for a film no jury has ever screened: 'Roske', a French-language autobiographical fever dream in which Edward plays the director, the leading man, the sound mixer, and (in one bewildering scene) the catering. The Palme d'Or in the hero image is a rental. Edward is paying for it in installments. (The fedora, of course, is his.)",
    heroImage: "hero-2026-05-11.png",
    imageAlt: "Cannes Film Festival 2026 press photo: Edward Roske in a black tuxedo and his signature blue fedora, holding a Palme d'Or trophy on the red carpet outside the Palais des Festivals, paparazzi flashbulbs bursting around him at golden hour.",
    ctaText: "Voir la Selection",
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
