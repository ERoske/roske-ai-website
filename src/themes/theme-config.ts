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
  name: "The Roske Stakes",
  week: "2026-06-06",
  inspiration: "The 158th Belmont Stakes runs at Saratoga Race Course tonight, the final running before Belmont Park reopens. So roske.ai becomes the Daily Racing Form for the week, set on Belmont day at Saratoga: Edward in royal blue silks with white diamonds, Edward in tweed at the rail with a folded racing form, Edward in the winner's circle under a blanket of white carnations, Edward as the race caller in a glass booth above the homestretch. The fedora stays on through every role. (Edward grew up around horses, owned a drum-horse ranch in North Texas, and rode a quarterhorse named Thomas Jefferson, so the silks fit better than they should.)",
  tagline: "Post time is now. Bring a pencil, a folded form, and a fedora that does not blow off in the stretch.",

  colors: {
    // Saratoga summer at golden hour: turf green, dirt umber, Belmont
    // carnation white, the brass of an old loving cup, and silks blue for
    // the jockey on the rail. Light mode is the cream paper of the
    // Daily Racing Form. Dark mode is the box-seat shadow of the grandstand.
    primary: "#1f4a37",          // Saratoga turf green
    secondary: "#8b2434",         // claiming-tag oxblood
    accent: "#c9962b",            // brass-trophy gold
    accentHover: "#e0ab3d",
    background: "#161616",        // grandstand shadow (dark mode)
    backgroundLight: "#f2e7cf",   // Daily Racing Form newsprint (light mode)
    surface: "#1f1f1f",            // box-seat panel
    surfaceLight: "#fbf3df",       // form-card cream
    text: "#f2e7cf",               // newsprint on dark
    textMuted: "#a7a08c",          // worn ink
    textDark: "#1a1a18",           // ink on cream
    textDarkMuted: "#5a4f3a",      // faded ink
    border: "#3a3a36",             // grandstand rail
    borderLight: "#c9962b",        // brass-rule
    gradient: "linear-gradient(135deg, #0e2a1f 0%, #1f4a37 40%, #8b2434 75%, #c9962b 100%)",
  },

  fonts: {
    // Playfair Display: elegant late-19th-century turf-club serif for the
    // mastheads (the Daily Racing Form has worn one of these for a century).
    // Bebas Neue: condensed display caps for race numbers, post positions,
    // and section headers (board-display energy).
    // Source Serif 4: readable broadsheet body type for long copy.
    // JetBrains Mono: clean technical mono for odds, codes, and race times.
    heading: "'Playfair Display', 'Times New Roman', Georgia, serif",
    body: "'Source Serif 4', 'Source Serif Pro', Georgia, serif",
    mono: "'JetBrains Mono', 'IBM Plex Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400&display=swap",
  },

  layout: {
    heroStyle: "editorial",
    navStyle: "fixed",
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
    subtitle: "Post time is 7:04 PM Eastern. The horse does most of the work. The fedora does the rest.",
    description: "The 158th Belmont Stakes runs tonight at Saratoga, the last running here before the new Belmont Park reopens in September. (I am calling the race in the broadcast booth, riding it in the silks, and reading the form at the rail. The schedule, like most of my schedules, has overlap.) The site is the Daily Racing Form for the week. The columns are short, the past performances are honest, and the morning line is doing its best.",
    heroImage: "hero-2026-06-06.png",
    imageAlt: "Edward Roske in royal blue and gold jockey silks with white diamonds, wearing his signature blue fedora over a helmet, aboard a powerful chestnut quarterhorse mid-gallop down the Saratoga homestretch on Belmont Stakes day. A grandstand packed with spectators in the background and a BELMONT STAKES AT SARATOGA sign just above the rail.",
    ctaText: "Read the form",
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
