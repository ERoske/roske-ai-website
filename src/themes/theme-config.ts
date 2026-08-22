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
    heroImage: string;     // Hero image filename (unique per week, e.g. "hero-2026-03-28.jpg")
    imageAlt: string;      // Alt text for hero image
    ctaText: string;       // Call-to-action button text
    ctaLink: string;       // CTA destination
  };
}

// ============================================
// CURRENT THEME (overwritten weekly)
// ============================================

export const currentTheme: ThemeConfig = {
  name: "Roske Air",
  week: "2026-08-22",
  inspiration: "A safety card is not about travel. It's instructions for what to do when things go wrong, written for people who aren't paying attention, by an operator who has seen the failure modes. So the site becomes Roske Air: an in-flight safety card, a route map, and a seat-back magazine, and every pictogram panel is real advice about deploying AI inside a finance organization, delivered completely straight in airline-instruction voice. Brace position is what you do when the model is confidently and fluently wrong. Secure your own mask before assisting others is getting your own data in order before you automate anyone else's job. Your nearest exit may be behind you is the rollback plan nobody writes. The seat cushion is not a flotation device is what the vendor SLA actually covers. The route map (80+ countries, 50+ spoken in, all 7 continents) is demoted from subject to credential: proof that the person giving the briefing has actually flown. Design is safety-card grammar: heavy-outline flat pictograms, numbered instruction panels, wordless illustration plus caption, boarding-pass perforations, great-circle arcs radiating from San Juan, mono for every piece of flight data. Archivo for signage, Public Sans for the regulatory register, Space Mono for gate and seat numbers. Palette is card white, aviation red, high-visibility amber, jet navy; dark mode is the night cabin, dimmed to navy with reading-light amber pools. Animation OFF.",
  tagline: "The pre-flight briefing nobody gives a finance team before an AI deployment.",

  colors: {
    // Safety-card palette. Card white and jet navy do the structural work,
    // aviation red is the emergency mark and every CTA, high-visibility amber
    // is the fill color on the pictograms and the reading light in dark mode.
    // Contrast checked in both modes: muted text clears 6:1 on its own surface.
    primary: "#132b4a",            // jet navy
    secondary: "#e0a92b",          // high-visibility amber (fills, reading light)
    accent: "#cf2130",             // aviation red (exits, CTAs, the emergency mark)
    accentHover: "#a3161f",
    background: "#0b1420",         // night cabin, lights dimmed for landing
    backgroundLight: "#f1efe9",    // the card stock itself
    surface: "#111e2e",            // seat-back panel (dark)
    surfaceLight: "#ffffff",       // the printed safety card (light)
    text: "#eef2f7",
    textMuted: "#9fb0c4",          // 7.6:1 on the dark seat-back panel
    textDark: "#111c2b",
    textDarkMuted: "#4d5a6b",      // 7.0:1 on white, 6.1:1 on card stock
    border: "#22364f",
    borderLight: "#cdd4dc",
    gradient: "linear-gradient(135deg, #0b1420 0%, #132b4a 58%, #cf2130 100%)",
  },

  fonts: {
    // Archivo: a grotesque with a real width axis, which is how airport
    //   signage and airline timetables have always been set. Display and headings.
    // Public Sans: the plain, unglamorous regulatory face. It reads like an
    //   instruction rather than a pitch, which is the entire register this week.
    // Space Mono: gate numbers, seat assignments, aircraft type, elapsed time.
    heading: "'Archivo', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    body: "'Public Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    mono: "'Space Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=Public+Sans:ital,wght@0,300..800;1,300..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "sticky",
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
    subtitle: "Please give the following your full attention, even if you fly this route often.",
    description: "I've been on the ground in more than 80 countries and spoken on stages in more than 50 of them, which mostly qualifies me to tell you that the safety briefing is the only part of a flight anybody skips on purpose. So here's the one nobody gives a finance team before an AI deployment. 6 panels, no jargon, every one of them a real failure I've watched happen (several of them to me, and one of them twice). Your nearest exit may be behind you, and the card itself is 2 sections down if you'd rather skip me and go straight to it.",
    heroImage: "hero-2026-08-22.jpg",
    imageAlt: "Edward Roske in a navy airline uniform and his signature blue fedora, standing in the aisle of a full airliner cabin holding up a laminated safety card, while every passenger around him ignores the demonstration.",
    ctaText: "Upgrade to business",
    ctaLink: "/speaking/",
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
