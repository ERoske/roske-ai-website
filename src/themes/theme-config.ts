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
  name: "Blue Ribbon",
  week: "2026-09-26",
  inspiration: "The State Fair of Texas opens September 25 and runs through October 18, and Edward lived in The Great State of Texas for more than 25 years, so this is opening weekend and he has standing. The conceit is the judging, and the rubric is the point: a county fair publishes its categories, its criteria, and its points, and a stern judge writes exactly why you lost on a card taped next to your entry. Most enterprise AI pilots have none of that, and nobody can tell you why the pilot 'worked.' So the home page is a published scorecard. Edward's real output is entered in fair divisions (the books as preserves, the podcast for Best in Show, the MCP servers under mechanical exhibits, the website as a craft demonstration, and a life-size butter self-portrait), each scored against a rubric and placed, mostly badly, with the judge's comments. Then the Grand Champion board turns his real record into fair placings, the midway carries a Big Tex cosplay (Edward's request; a giant blue fedora where the cowboy hat goes) and a vegetarian's reviews of fried food he can't eat, and a working judging card lets a visitor score their own AI pilot. Design: hand-painted fairground signage, fat display type, sign-painter script, rosettes, ticket stubs, pegboard, bunting. Blue-ribbon blue, prize red, corn gold, canvas white. Dark mode is the midway after sunset: neon tubes and string lights on deep navy. Animation off.",
  tagline: "A county fair will tell you exactly why you placed fourth, in writing, on a card taped next to your jam. I'd settle for that from an AI pilot.",

  colors: {
    // The fairground. Blue-ribbon blue and prize red on canvas by day; the
    // midway after sunset by night, with corn gold doing the neon's job.
    // Every pair measured, not eyeballed: body text 16:1 dark and 14.5:1
    // light, muted text 8.7:1 and 8.2:1 on their surfaces, the gold accent
    // 10.9:1 on navy, and the light-mode accent swaps to ribbon blue (7.2:1
    // on canvas) because gold on canvas is a crime. Navy ink sits on the
    // gold button, white on the blue one.
    primary: "#1c4a96",            // blue-ribbon blue
    secondary: "#b52a24",          // prize red
    accent: "#f2c14e",             // corn gold, lit
    accentHover: "#ffd46e",
    accentLight: "#1c4a96",        // ribbon blue, daylight
    accentHoverLight: "#143a7a",
    onAccent: "#10163a",
    onAccentLight: "#ffffff",
    background: "#0b1230",         // the midway after sunset
    backgroundLight: "#f4ecd9",    // canvas tent, noon
    surface: "#141d45",
    surfaceLight: "#fbf6ea",
    text: "#f6efdf",
    textMuted: "#b7bdd4",
    textDark: "#1b1a2e",
    textDarkMuted: "#4d4858",
    border: "#2a3566",
    borderLight: "#d8ccb0",
    gradient: "linear-gradient(135deg, #0b1230 0%, #1c4a96 55%, #f2c14e 100%)",
  },

  fonts: {
    // Ultra: a fat Clarendon, which is what every hand-painted fair sign
    //   in America is trying to be. Headings and placings.
    // Libre Franklin: plain, sturdy, American gothic. Body copy.
    // DM Mono: ticket stubs, entry numbers, scores.
    // Also loaded for page use: Yellowtail (the sign painter's script) and
    //   Caveat (the judge's handwriting on the cards).
    heading: "'Ultra', 'Rockwell', Georgia, serif",
    body: "'Libre Franklin', 'Helvetica Neue', Arial, sans-serif",
    mono: "'DM Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Ultra&family=Libre+Franklin:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=DM+Mono:wght@400;500&family=Yellowtail&family=Caveat:wght@500;700&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "sticky",
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
    subtitle: "I entered my life's work in the fair. The judge left notes.",
    description: "The State Fair of Texas opened Friday, and I lived in The Great State of Texas for more than 25 years (interRel was headquartered there the entire run, and somewhere in there I also owned a ranch in North Texas that raised drum horses, which is a sentence I'll explain some other week). So this week I entered my work in the judging. The books went in as preserves, the podcast for Best in Show, the MCP servers under mechanical exhibits (out in the barn, with the tractors), the website as a craft demonstration, and then I carved myself out of butter, which in hindsight was a lot of butter for one man. Every entry came back with a card: a category, 4 criteria, points out of 10, and a comment from a judge who has plainly seen better. I placed fourth in butter. I've read the card, so I know exactly why, which is more than most companies can say about their AI pilot (and yes, I'm aware I wrote the rubric myself and still lost, which says something about either my integrity or my butter, and I'd rather not find out which).",
    heroImage: "hero-2026-09-26.jpg",
    imageAlt: "Edward Roske in his signature blue fedora standing beside a life-size butter sculpture of himself, butter fedora and all, inside a refrigerated glass case in a fair exhibition hall, holding up a white fourth-place ribbon with complete dignity.",
    ctaText: "Book the workshop that ranks your pilots",
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
