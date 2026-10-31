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
  name: "What's Under the Mask?",
  week: "2026-10-31",
  inspiration: "Halloween falls on a Saturday in 2026, so the weekly rebuild lands on the night itself, and it is Edward's favorite holiday by a wide margin. The argument: Halloween is the one night everyone agrees to be something they aren't and announces it at the door. A lot of enterprise AI does the first part all year and skips the announcing (software wearing an 'AI-powered' label that is a lookup table, agents that are a chatbot on a cron job, demos in costume). So every costume Edward wears is a vendor claim, captioned with what it says it is and what was actually under it, and the page's spine is how a buyer checks: 10 questions to ask at the door before signing. Costumes: a cardboard-box robot (fully autonomous agent), fortune teller (predictive AI), mummy (AI-native platform), patchwork monster (one unified platform), stage magician (the live demo), vampire (pricing that grows with you), zombie (self-learning model), ventriloquist (our proprietary model), sorcerer at a cauldron (the secret sauce), scarecrow (human in the loop), plus one unmasking. Design: deep blacks, candlelight orange, bruised purple, one sickly green; fog, cobweb, candle wax, aged costume-shop tags. Dark mode is the haunted house; light mode is the trick-or-treat porch at dusk. Grenze Gotisch for display, Spectral for reading, Special Elite for the typed costume-shop tags. Animation on (Halloween is a carve-out): low fog drifting along the bottom of the screen, plus a candle flicker behind the hero window. No vendors are named.",
  tagline: "Everyone's in costume tonight. Some AI is in costume all year.",

  colors: {
    // Measured, not eyeballed. Bone on haunted black is 16.8:1; muted
    // clears 8.6:1 on the dark surface. Candle orange is 8.5:1 on black
    // and carries near-black type on buttons (8.3:1). Light mode swaps to
    // a burnt pumpkin (#B04500, 5.2:1 on the cream, white type 5.7:1).
    primary: "#1C1018",            // ink (nav wordmark in light mode)
    secondary: "#B8D63A",          // the one sickly green
    accent: "#FF8A1F",             // candlelight orange
    accentHover: "#FFA54F",
    accentLight: "#B04500",        // burnt pumpkin
    accentHoverLight: "#8A3500",
    onAccent: "#140A06",
    onAccentLight: "#FFFFFF",
    background: "#0B0709",         // haunted-house black, warm
    backgroundLight: "#FFF3E2",    // candy-corn cream
    surface: "#16101A",            // a little bruised purple in the black
    surfaceLight: "#FFFFFF",
    text: "#F4EADB",               // bone
    textMuted: "#BBAE9F",
    textDark: "#1C1018",
    textDarkMuted: "#5D4652",
    border: "#34263A",
    borderLight: "#E7D2BC",
    gradient: "linear-gradient(90deg, #FF8A1F 0%, #B04500 100%)",
  },

  fonts: {
    // Grenze Gotisch: blackletter you can actually read, with a 900 weight heavy enough for a haunted-house sign.
    // Spectral: a screen serif for the long paragraphs, so the spooky stops at the headlines.
    // Special Elite: a worn typewriter, for costume-shop tags, claims, and everything typed on a label.
    heading: "'Grenze Gotisch', 'Times New Roman', serif",
    body: "'Spectral', Georgia, 'Times New Roman', serif",
    mono: "'Special Elite', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@400..900&family=Special+Elite&family=Spectral:ital,wght@0,400;0,600;0,700;1,400&display=swap",
  },

  layout: {
    heroStyle: "asymmetric",
    navStyle: "sticky",
    cardStyle: "outlined",
    sectionStyle: "magazine",
    footerStyle: "detailed",
  },

  animations: {
    entrance: "fade-in",
    hover: "tilt",
    background: "noise",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "Tonight everybody's in costume and tells you so at the door. A lot of AI skips that last part, all year long.",
    description: "Halloween is on a Saturday, so I dressed up as 10 AI vendor claims, wrote down what each one says it is, and lifted the mask on every one. Then I wrote down the 10 questions that do the lifting for you.",
    heroImage: "hero-2026-10-31.jpg",
    imageAlt: "Edward on a front porch at night in a homemade robot costume built from silver-painted cardboard boxes, with dryer-duct arms, silver oven-mitt hands, and a chest panel of blinking Christmas lights and bottle-cap dials. His face shows through a cutout in the box head, glasses on, deadpan, and his blue fedora sits on top of the robot head. Carved jack-o'-lanterns and candles line the porch steps, cobwebs hang from the porch light, and a bowl of candy sits at his feet.",
    ctaText: "See all 10 costumes",
    ctaLink: "#costumes",
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
