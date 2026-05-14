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
  name: "Yosemite: Roske Ranch",
  week: "2026-05-16",
  inspiration: "The Dutton Ranch — the Beth-and-Rip Yellowstone spinoff — premiered on Paramount+ on Friday, May 15. So roske.ai becomes a working ranch: 'Yosemite: Roske Ranch', a parody of the whole franchise where the cattle are AI companies and the only ranch hand is an AI agent. The conceit is barely a stretch. Edward grew up riding horses and going to rodeos in the Pacific Northwest, later owned a North Texas ranch that raised drum horses, rode a quarterhorse named Thomas Jefferson, founded interRel out of Arlington, Texas, and earned his Master of Data Science at SMU in Dallas. The Texas is real. The longhorns are not.",
  tagline: "Running the spread since 1997. The cattle are AI companies.",

  colors: {
    // Western ranch at golden hour. Earth tones: oxblood brand-iron red,
    // weathered denim blue, dusty sage, bone parchment, amber dusk.
    primary: "#231a10",          // dark walnut
    secondary: "#4a6678",        // weathered denim blue (the fedora's cousin)
    accent: "#9a3324",           // oxblood / branding-iron red
    accentHover: "#b8412f",
    background: "#17120d",       // ranch night
    backgroundLight: "#ebe1cd",  // sun-bleached bone / canvas
    surface: "#211a12",          // lifted dark brown (cards, dark)
    surfaceLight: "#f5eedd",     // light parchment (cards, light)
    text: "#ece3d1",             // warm bone
    textMuted: "#a08e76",        // dusty taupe
    textDark: "#2a2014",         // dark walnut text
    textDarkMuted: "#6a5942",    // muted saddle brown
    border: "#3a2d20",           // dark fence-wood
    borderLight: "#cebf9e",      // weathered light wood
    gradient: "linear-gradient(180deg, #17120d 0%, #3a2412 55%, #6b3a18 100%)",
  },

  fonts: {
    // Alfa Slab One: fat wood-type slab, the branding-iron / ranch-signage display.
    // Zilla Slab: characterful slab serif with italics, for decked headlines.
    // Spectral: warm editorial serif with real italics, for body and asides.
    // Special Elite: typewriter mono, for ledger lines, lot numbers, brand tags.
    heading: "'Alfa Slab One', 'Rockwell', Georgia, serif",
    body: "'Spectral', Georgia, 'Times New Roman', serif",
    mono: "'Special Elite', 'Courier Prime', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Zilla+Slab:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Spectral:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Special+Elite&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "fixed",
    cardStyle: "outlined",
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
    subtitle: "A working ranch where the livestock are AI companies and the only hand on the payroll is an AI agent. The boss still closes the books by sundown.",
    description: "The newest show in the Yellowstone universe premiered last night, so roske.ai is a working ranch this week. This is not a stretch I reached for: I grew up riding horses and going to rodeos in the Pacific Northwest, and I later owned a North Texas ranch that raised drum horses. The cattle, these days, are AI companies. (The fedora stays. It was never a cowboy hat, and it is not starting now.)",
    heroImage: "hero-2026-05-16.png",
    imageAlt: "Edward Roske as a Texas rancher at golden hour, leaning on a weathered cedar fence rail in his signature blue fedora, a working ranch and longhorn cattle behind him under a wide Texas sky.",
    ctaText: "Tour the Spread",
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
