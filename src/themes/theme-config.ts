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
  name: "Doorbuster",
  week: "2026-11-27",
  inspiration: "Black Friday, Friday 2026-11-27, the day after Thanksgiving (Thursday 11-26), through Cyber Monday (11-30), with Small Business Saturday (11-28) in between. Booked by Edward on 2026-11-22 and launched at 12:00 AM AST on Black Friday instead of the usual Saturday, because doorbusters open at midnight. The argument: every AI deal this season comes with a doorbuster number (a slashed compare-at price, a free pilot, a discount that expires at quarter end), and the sticker is real, but it's the smallest number in the deal. The cost lives in the fine print: metering that switches from per seat to per token to per agent, unlimited plans that run out on Thursday afternoon, pilots that convert, renewals, models that get retired, and the line nobody quotes (connecting it to your data, cleaning the data, and the people who have to change how they work). Distinct from Halloween, which asked whether the AI is real; this week assumes it works and asks whether the deal is real. Structure the conceit generates: the circular masthead, the line (9 PM to midnight), the doorbusters with fine print, the fine-print checklist, the receipt where the sticker is the smallest line, the return policy, and a Cyber Monday aside. Design: light mode is the Sunday ad insert on the kitchen table Thursday night (newsprint, price-tag red, sale-sticker yellow); dark mode is the parking lot at 11:58 PM (asphalt, sodium orange, the glowing storefront). Bricolage Grotesque for circular headlines, Bowlby One for prices and starbursts, Newsreader for reading, Courier Prime for receipts and fine print. No real retailer or AI vendor names, logos, colors, or prices. Animation off; the only motion is one price getting slashed on the hero tag, once, on load.",
  tagline: "The sticker is the smallest number in the deal.",

  colors: {
    // Measured. Dark: cream on asphalt 16.2:1, muted 8.7:1 (8.0:1 on the
    // surface), sodium orange 10.6:1 with near-black type on buttons 10.5:1.
    // Light: ink on newsprint 15.7:1, muted 6.9:1, price-tag red 5.5:1 with
    // white type on it 6.2:1.
    primary: "#7A1220",            // inked price-tag red
    secondary: "#FFD23F",          // sale-sticker yellow
    accent: "#FFB238",             // sodium parking-lot light
    accentHover: "#FFC766",
    accentLight: "#C1121F",        // price-tag red
    accentHoverLight: "#960E18",
    onAccent: "#15110B",
    onAccentLight: "#FFFFFF",
    background: "#0E1013",         // the parking lot at 11:58 PM
    backgroundLight: "#F6F0E1",    // the Thursday-night ad insert
    surface: "#171A1F",
    surfaceLight: "#FFFCF3",
    text: "#F1ECDF",
    textMuted: "#B6AFA2",
    textDark: "#1B1713",
    textDarkMuted: "#5A5045",
    border: "#2C3038",
    borderLight: "#D9CDB3",
    gradient: "linear-gradient(90deg, #C1121F 0%, #FFB238 100%)",
  },

  fonts: {
    // Bricolage Grotesque: loud, slightly squashed circular headlines.
    // Newsreader: a newsprint serif for the reading.
    // Courier Prime: thermal receipts and fine print.
    // Bowlby One (page-level only): fat price numerals and starbursts.
    heading: "'Bricolage Grotesque', 'Arial Black', Impact, sans-serif",
    body: "'Newsreader', 'Iowan Old Style', Georgia, serif",
    mono: "'Courier Prime', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bowlby+One&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Courier+Prime:wght@400;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap",
  },

  layout: {
    heroStyle: "editorial",
    navStyle: "sticky",
    cardStyle: "solid",
    sectionStyle: "magazine",
    footerStyle: "detailed",
  },

  animations: {
    entrance: "fade-in",
    hover: "lift",
    background: "none",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "I've been in line since 9 PM on Thanksgiving for an AI deal, and I brought a thermos (and a magnifying glass, for reasons that'll become clear further down).",
    description: "Black Friday on roske.ai: Edward camped out overnight in a store parking lot for an AI doorbuster, and the page is a sale circular about why the sticker is the smallest number in the deal.",
    heroImage: "hero-2026-11-27.jpg",
    imageAlt: "At night in an empty store parking lot, Edward in his blue fedora and a puffy navy winter jacket sits in a folding camping chair with a plaid blanket over his knees, holding a steel thermos. Behind him a big-box store glows behind locked glass doors under a giant red and yellow banner that reads AI DOORBUSTER, and the rope line behind him is empty except for orange traffic cones.",
    ctaText: "See the doorbusters",
    ctaLink: "#doorbusters",
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
