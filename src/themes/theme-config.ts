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
  name: "An A.I. Carol",
  week: "2026-11-14",
  inspiration: "Ebenezer: A Christmas Carol (Ti West directing, Johnny Depp as Scrooge, Ian McKellen as Marley's Ghost) opened in U.S. theaters on Friday, November 13, 2026. The source is Dickens's 1843 book, which is public domain, so the page quotes it directly. The argument: Scrooge is not short on information. In Stave One his nephew gives him a speech, 2 gentlemen give him statistics, and his dead partner gives him an eyewitness warning, and none of it lands (he says Humbug 6 times, all in Stave One). Nobody argues him out of anything; the Spirits take him places and make him look. That's the AI skeptic at most companies, and a lot of their humbugs are fair, so the page keeps an honest ledger of 5 of them (only 1 turns out to be humbug). Edward is Marley and only Marley: the dead business partner who worked the same ledgers for 25 years and shows up dragging a chain he forged himself (Essbase, 15 software books, interRel) to say 3 more visitors are coming. The conceit generates the structure: the page is the book's 5 staves. Design: light mode is the 1843 first edition (cream paper, title-page red and blue ink); dark mode is the bedchamber at 1 AM (soot, candle amber, spectral green). The title page and the ledger are pinned paper in both modes, the three Spirits are pinned night, and Stave Five is pinned bright morning. Bodoni Moda for display (a Didone, the kind of Modern face Victorian title pages were set in), Libre Caslon Text for reading, Cutive Mono for labels, and Pinyon Script for the clerk's hand in the ledger. Animation off.",
  tagline: "I wear the chain I forged in life. 3 more visitors are coming.",

  colors: {
    // Measured, not eyeballed. Dark: candle-lit paper on soot is 15.5:1,
    // muted 8.6:1 (7.9:1 on the surface), candle amber 9.4:1 with near-black
    // type on buttons (9.1:1). Light: ink on first-edition paper 14.7:1,
    // muted 6.9:1, title-page red #9B1C1C 6.8:1 with white type on it 8.2:1.
    primary: "#1F3864",            // title-page blue ink (9.6:1 on the paper)
    secondary: "#86E0CB",          // Marley's spectral green
    accent: "#F0A63A",             // candle amber
    accentHover: "#FFC062",
    accentLight: "#9B1C1C",        // title-page red
    accentHoverLight: "#7A1414",
    onAccent: "#1A1005",
    onAccentLight: "#FFFFFF",
    background: "#100E0C",         // the bedchamber at 1 AM
    backgroundLight: "#F2E9D5",    // first-edition paper
    surface: "#1B1713",
    surfaceLight: "#FBF6EA",
    text: "#EFE6D2",
    textMuted: "#B8AC93",
    textDark: "#1D1711",
    textDarkMuted: "#584C3B",
    border: "#3A3128",
    borderLight: "#D3C4A3",
    gradient: "linear-gradient(90deg, #9B1C1C 0%, #1F3864 100%)",
  },

  fonts: {
    // Bodoni Moda: a high-contrast Didone, the family of "Modern" faces that 1840s title pages were set in.
    // Libre Caslon Text: a sturdy book face for the long paragraphs (Caslon was being revived in London in the 1840s).
    // Cutive Mono: a typewriter-era mono for labels, dates, and ledger columns.
    // Pinyon Script (page-level only): the clerk's roundhand for verdicts in the Humbug Ledger.
    heading: "'Bodoni Moda', 'Bodoni 72', Didot, Georgia, serif",
    body: "'Libre Caslon Text', 'Iowan Old Style', Georgia, serif",
    mono: "'Cutive Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Cutive+Mono&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Pinyon+Script&display=swap",
  },

  layout: {
    heroStyle: "editorial",
    navStyle: "sticky",
    cardStyle: "outlined",
    sectionStyle: "magazine",
    footerStyle: "detailed",
  },

  animations: {
    entrance: "fade-in",
    hover: "underline",
    background: "none",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "Scrooge had everything he needed to change his mind before the first Spirit ever showed up, and he said Humbug to it 6 times (a machine counted).",
    description: "Ebenezer: A Christmas Carol opened Friday, so this week I'm Marley's Ghost, dragging a chain I forged myself over 25 years of enterprise software (15 books are on it, and they're heavier than they look), here to tell you 3 more visitors are coming and to go through 5 of the usual humbugs about AI with an honest ledger.",
    heroImage: "hero-2026-11-14.jpg",
    imageAlt: "Edward as Marley's Ghost in a dark Victorian bedchamber: translucent and glowing pale green, in a frock coat, white cravat, and his blue fedora, wrapped in a heavy iron chain hung with old books, padlocks, floppy disks, and a beige computer keyboard. He holds up a length of the chain, deadpan, while someone in a white nightcap hides under the blankets of a four-poster bed with only their fingers showing.",
    ctaText: "Begin at Stave One",
    ctaLink: "#stave-one",
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
