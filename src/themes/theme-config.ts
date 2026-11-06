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
  name: "T-Minus Zero",
  week: "2026-11-07",
  inspiration: "Godzilla Minus Zero opened in North America on Friday, November 6, 2026, with a record $6.7M in Thursday previews. The argument: every giant-monster movie has a committee meeting in it, held while the monster is already in the harbor, and the people who save the city are never the committee, they're ordinary people with relevant skills and a plan. That's AI at most companies right now: the countdown everyone is still planning around ran out around November 30, 2022, and the thing they're forming a task force to study is already in their employees' browsers (75% of knowledge workers used AI at work by 2024, and 78% of them brought their own tools). Edward spends the week trying 5 ways companies deal with AI (form a task force, ban it, wait for version 2, commission a study, issue a statement), each one documented as a failed field report, then pivots to the civilian plan: the 6 things the companies that came through every landfall of his career (client-server, the web, the cloud, now this) actually did, plus a readiness check that gives you a verdict. The monster is an original creature, never the film's. Design: dark mode is the night harbor during an emergency broadcast (teal-black, searchlights, rain, signal red); light mode is the printed civil-defense pamphlet (paper, halftone, red bands). Dela Gothic One for display, Zen Kaku Gothic New for reading, DotGothic16 for the broadcast ticker. Animation off; one tremor on the hero photo at load.",
  tagline: "The countdown ended a while ago. It's already in the harbor.",

  colors: {
    // Measured, not eyeballed. Bone on harbor black is 16.4:1; muted is
    // 8.1:1 on the dark surface. Signal red #FF5A3C is 6.3:1 on the black
    // and carries near-black type on buttons (6.4:1). Light mode swaps to
    // pamphlet red #B3261E (5.5:1 on the paper, white type 6.5:1).
    primary: "#111518",            // ink (nav wordmark in light mode)
    secondary: "#6FD3FF",          // the glowing eye
    accent: "#FF5A3C",             // signal red
    accentHover: "#FF7A61",
    accentLight: "#B3261E",        // pamphlet red
    accentHoverLight: "#8E1C16",
    onAccent: "#120806",
    onAccentLight: "#FFFFFF",
    background: "#090C0E",         // harbor at night
    backgroundLight: "#F1ECE0",    // civil-defense pamphlet paper
    surface: "#121719",
    surfaceLight: "#FFFFFF",
    text: "#ECE6D8",               // bone
    textMuted: "#A8AFAD",
    textDark: "#111518",
    textDarkMuted: "#4A5254",
    border: "#26302F",
    borderLight: "#D6CEBD",
    gradient: "linear-gradient(90deg, #FF5A3C 0%, #B3261E 100%)",
  },

  fonts: {
    // Dela Gothic One: a heavy Japanese poster gothic, the kind of type that goes on a monster-movie one-sheet.
    // Zen Kaku Gothic New: a calm Japanese sans for the long paragraphs, so the panic stays in the headlines.
    // DotGothic16: a dot-matrix face for the emergency ticker, the stamps, and every label.
    heading: "'Dela Gothic One', 'Arial Black', sans-serif",
    body: "'Zen Kaku Gothic New', 'Helvetica Neue', Arial, sans-serif",
    mono: "'DotGothic16', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=DotGothic16&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap",
  },

  layout: {
    heroStyle: "fullscreen",
    navStyle: "sticky",
    cardStyle: "outlined",
    sectionStyle: "alternating",
    footerStyle: "detailed",
  },

  animations: {
    entrance: "fade-in",
    hover: "lift",
    background: "noise",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "Pretty much every monster movie has a committee meeting in it, held while the monster is already in the harbor. A lot of companies are holding that meeting about AI right now.",
    description: "Godzilla Minus Zero opened Friday, so I spent the week trying the 5 ways companies keep trying to deal with AI, from forming a task force to banning it with a sign (the monster was unimpressed by all 5), and then I wrote down the 6 things that actually work.",
    heroImage: "hero-2026-11-07.jpg",
    imageAlt: "Edward stands in a small wooden fishing boat in a stormy harbor at night, holding an open laptop up like a lantern and looking back at the camera, deadpan, in his blue fedora, while an enormous scaled sea monster rises out of the water behind him, its head lost in the fog and one glowing eye level with the city skyline.",
    ctaText: "See the 5 attempts",
    ctaLink: "#attempts",
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
