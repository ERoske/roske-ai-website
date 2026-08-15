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
  name: "A Field Guide to the Ten Agents",
  week: "2026-08-15",
  inspiration: "Edward's most-booked keynote is 'Your Day, Run by Ten Agents,' so this week the site stops describing it and becomes it: a naturalist's field guide to the ten AI agents that actually run his life, played completely straight and never winking. Ten numbered specimen plates with Latin binomials, habitat, range, call, feeding behavior, distinguishing markings and conservation status, every one naming the real software rather than a generic 'AI assistant.' A guide dates its edition, so this one is observed as of August 2026. The centerpiece is not the list, it's the food web: agents are a stack with dependencies, and the interesting failure is always upstream. A 'commonly confused with' section separates a real agent from a chatbot on a cron job, a macro, and a vendor demo. The field notes say which specimens bite, and the range map shows the wilderness where no agent goes. Design is plate-book: aged paper stock, hairline rules, plate numbers in small caps, italic binomials, ruled specimen boxes, pencil marginalia. Bodoni Moda for engraved plate titles, Newsreader for bookish body, Barlow Condensed for field labels, Courier Prime for field data, Caveat for the margins. Palette is paper cream, botanical green, sepia ink, and one vermilion reserved for conservation-status tags; dark mode is the same guide read by headlamp. Animation OFF, because a field guide is a printed object.",
  tagline: "10 agents run my day. I've been watching them for 3 years, and 2 of them bite.",

  colors: {
    // Plate-book palette. Aged paper and sepia ink in light mode; the same
    // guide read by headlamp in dark mode (ink navy board, deep forest panels,
    // lamp-lit paper text). Vermilion is the conservation-status tag and the
    // only saturated color in the guide. Contrast checked in both modes.
    primary: "#2f5d3a",            // botanical green
    secondary: "#7d5c2c",          // sepia umber
    accent: "#c8532e",             // field-marker vermilion (status tags, CTAs)
    accentHover: "#a03d1f",
    background: "#0d1319",         // ink navy, the guide read by headlamp
    backgroundLight: "#e8dfc9",    // aged paper stock (the board)
    surface: "#16211d",            // deep forest panel (dark)
    surfaceLight: "#f7f1e3",       // fresh plate page (light)
    text: "#f1e9d6",               // lamp-lit paper
    textMuted: "#a9b3a5",          // lichen grey (7.5:1 on the dark surface)
    textDark: "#241d14",           // sepia ink
    textDarkMuted: "#574c3c",      // faded ink (7.4:1 on the light plate page)
    border: "#2c3a33",             // hairline rule (dark)
    borderLight: "#cdbf9f",        // hairline rule (light)
    gradient: "linear-gradient(135deg, #0d1319 0%, #2f5d3a 55%, #c8532e 100%)",
  },

  fonts: {
    // Bodoni Moda: a Didone, the engraved-plate face of 19th century natural
    //   history books. Plate titles and display.
    // Newsreader: warm bookish serif with a real italic, for the guide's prose.
    // Barlow Condensed (loaded, index labels): condensed field labels on the
    //   specimen boxes.
    // Courier Prime (mono): typewritten field data, ledgers, coordinates.
    // Caveat (loaded, index marginalia): the naturalist's pencil annotations.
    heading: "'Bodoni Moda', 'Didot', Georgia, serif",
    body: "'Newsreader', Georgia, 'Times New Roman', serif",
    mono: "'Courier Prime', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Newsreader:ital,opsz,wght@0,6..72,300..700;1,6..72,300..700&family=Barlow+Condensed:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Caveat:wght@400..700&display=swap",
  },

  layout: {
    heroStyle: "editorial",
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
    subtitle: "Ten species of working software, observed in the wild, with notes on which ones bite.",
    description: "Everybody selling you AI has 10 slides about agents. I have 10 agents. They draft my calendar brief, triage my inbox, cut the podcast, research the things I claim on stage, and rebuild this entire website every Saturday at 5 AM while I'm asleep. So I did what a naturalist does with anything he's watched for 3 years and I wrote the guide: Latin names, habitat, range, feeding behavior, and honest field notes, including the specimen that ate 3 days of work and the parts of my day where nothing lives at all.",
    heroImage: "hero-2026-08-15.jpg",
    imageAlt: "Edward Roske in his signature blue fedora and a khaki field shirt, crouched in dense undergrowth with binoculars and an open field notebook, watching an open laptop that is sitting in a large twig bird's nest.",
    ctaText: "Book the ten-agents keynote",
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
