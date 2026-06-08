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
  name: "Kscope26: Edward Is Not Here",
  week: "2026-06-13",
  inspiration: "ODTUG Kscope26 runs June 14-18 at the Gaylord Rockies Resort in Aurora, Colorado. It's the largest Oracle EPM and APEX conference of the year, and for the first time since 2007, Edward is officially not attending. (He announced last summer at Kscope25 in Grapevine, when he accepted the ODTUG Lifetime Achievement Award, that Kscope25 would be his last as a regular.) The site reads as the Kscope26 conference program for the week, with one running visual gag: attendees show their support by all wearing his blue fedora, and Edward, who definitely is not at Kscope, definitely is not also sneaking into the back of every session in a series of unconvincing disguises. The fedora is the giveaway. The fedora is always the giveaway.",
  tagline: "Tech at new heights. Edward at sea level. (See if you can spot the fedora.)",

  colors: {
    // ODTUG / Oracle conference palette: deep convention-center navy,
    // ODTUG orange, brass-fedora gold. Light mode is the off-white of a
    // printed conference program; dark mode is the keynote room before
    // the lights come up.
    primary: "#0b2e54",          // ODTUG navy
    secondary: "#f37021",         // ODTUG / Oracle orange
    accent: "#ff7a1f",            // brighter session-CTA orange
    accentHover: "#ffb072",
    background: "#07172e",        // keynote-hall blackout navy (dark mode)
    backgroundLight: "#eef2f8",   // printed-program off-white (light mode)
    surface: "#102a4d",            // session-card navy
    surfaceLight: "#ffffff",       // program-card white
    text: "#eef2f8",               // program white on dark
    textMuted: "#8fa3bf",          // session-meta gray-blue
    textDark: "#0b2e54",           // navy on cream
    textDarkMuted: "#4a5f7a",      // muted navy
    border: "#1f3d66",             // session-card rule (dark)
    borderLight: "#c5d0e0",        // program rule (light)
    gradient: "linear-gradient(135deg, #07172e 0%, #0b2e54 45%, #f37021 100%)",
  },

  fonts: {
    // Space Grotesk for the conference-modern display work (Kscope branding
    // reads as clean geometric sans). Inter for body. JetBrains Mono for
    // session codes, room numbers, badge IDs, and the timestamps stamped on
    // every disguise photo.
    heading: "'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif",
    body: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'IBM Plex Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "fixed",
    cardStyle: "elevated",
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
    subtitle: "Tech at new heights. Edward at sea level.",
    description: "ODTUG Kscope26 runs June 14 through 18 at the Gaylord Rockies in Aurora, Colorado. For the first time since 2007, Edward is officially not on the speaker list. We checked twice. (Attendees have shown their support by all wearing his hat, which was deeply touching for the first half hour and is now mostly blocking everyone's views of the speakers.)",
    heroImage: "hero-2026-06-13.png",
    imageAlt: "A packed Kscope26 keynote hall at the Gaylord Rockies in Aurora, Colorado. Approximately 600 conference attendees, the presenter on stage, and the AV crew along the wings are all wearing identical royal-blue felt fedora hats. The stage backdrop reads KSCOPE26 TECH AT NEW HEIGHTS with the ODTUG logo. The mood is overwhelming support for the absent honoree.",
    ctaText: "See what he claims he's doing instead",
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
