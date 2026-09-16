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
  name: "The Escape Room",
  week: "2026-09-12",
  inspiration: "Edward and Dawn have each done more than 300 escape rooms and they're both TERPECA nominators and voters, so this is the most genuinely him of anything in the queue. The site becomes a room. You're locked in a boardroom, the door has three locks, and the only other thing in the room with you is a system called VERBATIM that answers exactly what you asked, with total confidence, and nothing more. Ask it something lazy and you get an answer that is technically correct and completely useless. Ask it something with a boundary in it and you get a number. Three good questions open the door, and behind the door is the sheet of questions Edward actually uses on AI vendors. That's the 'Asking Good Questions' thesis made playable instead of claimed: a visitor feels the difference between a bad question and a good one in about ninety seconds, which no amount of homepage copy can do. Design is set design rather than page design: lantern amber, aged brass, deep teal shadow, a warning-red countdown, riveted panels, chalkboard, wood grain. Dark mode is the room with the lights off, which is the default mood. Light mode is 'lights on, game over' and should feel like the reveal. Animation is narrowly justified this week: a working countdown and a slow light flicker, nothing drifting or falling.",
  tagline: "You're locked in a room with an AI that answers exactly what you asked. I have sat in that meeting more times than I'd like to count.",

  colors: {
    // The room. Lantern amber and aged brass against teal shadow, with the
    // timer's warning red kept for the clock and nothing else. Every pair
    // below clears WCAG AA in both modes (measured, not eyeballed): muted
    // text runs 6.8:1 dark and 6.4:1 light, the amber accent 7.8:1 dark, and
    // the light mode swaps to a dark brass so the accent doesn't wash out on
    // plaster. Black sits on the amber button, white on the brass one.
    primary: "#1d3230",            // deep teal shadow, the corners of the room
    secondary: "#a8833f",          // aged brass, fittings and hardware
    accent: "#e2a648",             // lantern amber, lights off
    accentHover: "#f2bb63",
    accentLight: "#8a5410",        // dark brass, lights on
    accentHoverLight: "#6d4009",
    onAccent: "#10191a",
    onAccentLight: "#ffffff",
    background: "#0d1416",         // the room, unlit
    backgroundLight: "#ece5d6",    // the room, fluorescents on
    surface: "#152021",            // panelling in the lamp's throw
    surfaceLight: "#f7f2e6",
    text: "#f2e8d5",
    textMuted: "#b0a58d",
    textDark: "#13201f",
    textDarkMuted: "#4f5a57",
    border: "#2b3a39",
    borderLight: "#cfc5ae",
    gradient: "linear-gradient(135deg, #0d1416 0%, #1d3230 58%, #e2a648 100%)",
  },

  fonts: {
    // Cinzel: cut from Roman inscriptional capitals, which is the exact
    //   register of an engraved brass lock plate. Headings and lock faces.
    // Spline Sans: a plain, slightly technical grotesque. Body copy, so the
    //   room's furniture never competes with what the room is arguing.
    // Share Tech Mono: VERBATIM speaks in this and nothing else does.
    heading: "'Cinzel', 'Times New Roman', Georgia, serif",
    body: "'Spline Sans', 'Helvetica Neue', Arial, sans-serif",
    mono: "'Share Tech Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Share+Tech+Mono&family=Spline+Sans:wght@300;400;500;600;700&display=swap",
  },

  layout: {
    heroStyle: "asymmetric",
    navStyle: "sticky",
    cardStyle: "outlined",
    sectionStyle: "alternating",
    footerStyle: "detailed",
  },

  animations: {
    entrance: "fade-up",
    hover: "glow",
    background: "none",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "Three locks, a machine that answers exactly what you asked, and a hint button I'd use if I were you.",
    description: "Dawn and I have each done over 300 escape rooms, we vote on the best ones in the world every year, and I've learned exactly one thing that transfers, which is that the good rooms hand you everything you need in the first minute and then sit there while you fail to ask for it. So this week the home page is a room. The door has three locks. The only thing in here with you is a system that answers precisely what you said and not one syllable of what you meant, which is also a fair description of most enterprise AI I've been sold (and, on a bad afternoon, of me, though in my defense nobody has ever paid me a license fee to be pedantic at them, which is a sentence I should probably not have put on my own home page). Ask it something lazy and it'll be right and useless and you'll still be in here. Put an edge on the question and the lock opens. There's a hint button and an answer key, because nobody should be trapped on my home page.",
    heroImage: "hero-2026-09-12.jpg",
    imageAlt: "Edward Roske in his signature blue fedora standing calmly in a dim escape room, glancing at his wristwatch with plenty of time left, in front of a floor-to-ceiling wall of roughly three hundred padlocks, every one of them hanging open.",
    ctaText: "Book the talk this is a demo of",
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
