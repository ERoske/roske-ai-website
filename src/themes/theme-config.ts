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
  name: "America 250: Still Shipping",
  week: "2026-07-04",
  inspiration: "July 4, 2026 is America's Semiquincentennial, the 250th, which happens exactly once, and the rebuild ships on Independence Day itself. Fresh hook (NOT 'Edward plays every character' again, which just ran twice): America as the world's most improbable long-running startup, founded 1776 by a small unfunded team with a strongly worded exit memo, still shipping updates a quarter-millennium later. Edward, the data scientist who can't resist a longevity stat, spends the week trying to help celebrate and mostly inserting himself into the festivities: he tries out for the USMNT and pulls a hamstring, crashes the 250th birthday party, shows up 250 years late to sign the Declaration, and finally does the one thing he's actually qualified for, running America's longevity report. The 2026 World Cup (co-hosted by the USA) is in the knockout rounds: the USMNT beat Bosnia 2-0 on July 1 and is alive heading into Monday's Belgium match (no US match before publish, so status is locked; do not claim a July 6 result). The hero is Edward as Uncle Sam in the classic 'I Want You' pose, wearing a stars-and-stripes FEDORA (not a top hat), captioned 'I want you to ask good questions.' Design is a vintage American commemorative broadside / WPA recruiting poster: aged cream paper, Old-Glory red, federal navy, brass gold, halftone print grain, bunting. Fireworks animation is justified (holiday carve-out). The fedora is the one constant across 250 years.",
  tagline: "America turns 250. Edward tried to help, mostly by pulling a hamstring. The fedora survived.",

  colors: {
    // Vintage commemorative broadside: Old-Glory red, federal navy, brass
    // gold, on deep navy night (dark) or aged cream paper (light).
    primary: "#1b3a6b",           // federal navy
    secondary: "#b8862b",          // brass / commemorative gold
    accent: "#b22234",             // Old Glory red, the CTA pop
    accentHover: "#9a1d2c",
    background: "#0b1a33",         // deep navy night (dark mode)
    backgroundLight: "#f4ecd8",    // aged cream paper (light mode)
    surface: "#12294d",            // panel navy (dark)
    surfaceLight: "#fbf6e9",       // paper white (light)
    text: "#f4ecd8",               // warm cream on dark
    textMuted: "#a7bad9",          // muted federal-blue gray (AA on surface)
    textDark: "#152a4d",           // ink navy on light
    textDarkMuted: "#5c5340",      // aged ink (AA on cream)
    border: "#274873",             // rule (dark)
    borderLight: "#d6c8a4",        // rule (light)
    gradient: "linear-gradient(135deg, #1b3a6b 0%, #b22234 100%)",
  },

  fonts: {
    // Big Shoulders Display: bold civic/WPA condensed display (American public
    //   signage DNA), the broadside shout.
    // Bitter: warm slab serif, reads like an old newspaper / almanac body.
    // Space Mono: the cold "tech / data-scientist" voice for labels and stats.
    heading: "'Big Shoulders Display', 'Arial Narrow', system-ui, sans-serif",
    body: "'Bitter', Georgia, 'Times New Roman', serif",
    mono: "'Space Mono', 'JetBrains Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600;700;800;900&family=Bitter:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Mono:wght@400;700&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "fixed",
    cardStyle: "outlined",
    sectionStyle: "alternating",
    footerStyle: "creative",
  },

  animations: {
    entrance: "fade-up",
    hover: "lift",
    background: "none",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "America turns 250. Edward spent the week trying to help.",
    description: "America turns 250 this weekend, which makes it the longest-running startup I've ever studied. It was founded by a small team with no funding and a strongly worded exit memo, and it's still shipping updates a quarter-millennium later. Naturally, I tried to help celebrate. I tried out for the World Cup squad and pulled a hamstring, crashed the birthday party, and showed up 250 years late to sign the Declaration. The stars-and-stripes fedora stayed on through all of it. Then I did the one useful thing I'm actually qualified for.",
    heroImage: "hero-2026-07-04.jpg",
    imageAlt: "Edward Roske illustrated as Uncle Sam in the classic 'I Want You' recruiting-poster pose, pointing directly at the viewer, wearing a wide-brimmed stars-and-stripes American flag fedora (not a top hat), a navy tailcoat and star-spangled vest, with his glasses and a white goatee, against a weathered American flag with a faint 250 and fireworks.",
    ctaText: "See the attempts",
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
