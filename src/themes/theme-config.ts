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
    accentLight?: string;      // Optional: accent override for light mode (when one hue can't clear AA on both surfaces)
    accentHoverLight?: string; // Optional: accent hover override for light mode
    onAccent?: string;         // Optional: text color placed ON the accent (buttons). Defaults to white.
    onAccentLight?: string;    // Optional: same, light mode
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
  name: "The Caribbean AI Summit",
  week: "2026-10-03",
  inspiration: "Booked theme, and the one week of the year that plays it straight. The Caribbean AI Summit runs October 9-10, 2026 at the Puerto Rico Convention Center in San Juan, Edward co-chairs it, and for 9 days roske.ai is the summit's front door. The job is filling seats and reassuring sponsors, so there's no costume and no generated Edward: the hero is the summit's own venue art, the speakers are their real headshots from caribbeansummit.ai, and the only picture of Edward is the official co-chair card. The argument is Puerto Rico as a real AI hub, and the lineup carries it (the World Economic Forum's former Head of AI, MIT's Senseable City Lab, the EU Parliament's AI advisor, the AAAI president) without the copy having to say so. Structure is a conference programme: lineup, the full 2-day agenda across 3 rooms with a marked route for finance leaders, venue and travel logistics, the hackathon, tickets, sponsors. Palette is the summit's own branding (navy #0B1220, teal #00D0C6, coral #FF6B5A), set in Bricolage Grotesque over Figtree (the summit's own text face) with JetBrains Mono for times and rooms. Dark mode is the convention center at night; light mode is the printed programme on sand. Forward-looking copy is tagged SUMMIT-FORWARD for the October 11 takedown. Animation off.",
  tagline: "For 9 days this site is the front door to the Caribbean AI Summit, and I'm the one holding it open.",

  colors: {
    // The summit's own palette, lifted from caribbeansummit.ai rather than
    // invented: night navy, sea teal, sunset coral. Measured, not eyeballed:
    // body text 16.6:1 dark and 16.8:1 light, muted 8.1:1 and 7.6:1 on their
    // surfaces, teal 9.7:1 on navy. Teal on sand fails, so light mode swaps
    // the accent to a deep reef teal (5.3:1 on sand, 6.0:1 on white) with
    // white type on its buttons; dark mode puts navy type on bright teal.
    primary: "#00D0C6",            // sea teal
    secondary: "#FF6B5A",          // sunset coral
    accent: "#00D0C6",
    accentHover: "#4FE3DB",
    accentLight: "#00706A",        // reef teal, daylight
    accentHoverLight: "#005A55",
    onAccent: "#0B1220",
    onAccentLight: "#FFFFFF",
    background: "#0B1220",         // the convention center at night
    backgroundLight: "#F6F2EA",    // the printed programme, on sand
    surface: "#121C30",
    surfaceLight: "#FFFFFF",
    text: "#F3F1EC",
    textMuted: "#A9B4C8",
    textDark: "#0B1220",
    textDarkMuted: "#4A5468",
    border: "#23304A",
    borderLight: "#DCD5C8",
    gradient: "linear-gradient(120deg, #0B1220 0%, #0d3a4a 55%, #00D0C6 100%)",
  },

  fonts: {
    // Bricolage Grotesque: confident, editorial, a little warm. Headlines
    //   and the big numbers. Reads like it cost money, which was the brief.
    // Figtree: the summit's own text face, so the two sites feel related.
    // JetBrains Mono: times, rooms, prices (JetBrains is a Silver sponsor,
    //   which I noticed after picking it and have decided not to explain).
    heading: "'Bricolage Grotesque', 'Helvetica Neue', Arial, sans-serif",
    body: "'Figtree', 'Helvetica Neue', Arial, sans-serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap",
  },

  layout: {
    heroStyle: "fullscreen",
    navStyle: "sticky",
    cardStyle: "outlined",
    sectionStyle: "magazine",
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
    // SUMMIT-FORWARD: subtitle, description, and ctaText all speak in the
    // upcoming tense and need the October 11 sweep.
    subtitle: "October 9-10, 2026 | Puerto Rico Convention Center | San Juan",
    description: "On October 9 and 10, the Caribbean AI Summit takes over the Puerto Rico Convention Center, and I'm co-chairing it (which mostly means telling everyone I know to come, so consider yourself told). More than 30 speakers across 3 tracks, 2 days, and every session subtitled live in English and Spanish, so pick your favorite language and come.",
    heroImage: "hero-2026-10-03.jpg",
    imageAlt: "The Puerto Rico Convention Center in San Juan at night, its white lattice roof lit from below over teal glass, palm trees and still water in front, with the Caribbean AI Summit's teal and coral wave lines sweeping across the dark sky.",
    ctaText: "Get a ticket, from $449",
    ctaLink: "https://787tickets.com/carrito/boleteria/evento/caribbean-ai-summit-2026",
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
