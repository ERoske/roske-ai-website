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
  name: "Read the Arena",
  week: "2026-11-21",
  inspiration: "The Hunger Games: Sunrise on the Reaping (Lionsgate, from Suzanne Collins's 2025 book) opened in U.S. theaters on Friday, November 20, 2026, with Joseph Zada as a young Haymitch Abernathy and Ralph Fiennes as President Snow. It's the 50th Games, a Quarter Quell, so twice the usual number of tributes get reaped. The argument: every leader right now is being told AI is a race against everybody else in their industry, staged by people who profit from the spectacle, and the pitch is to sprint for the Cornucopia on day one. In practice the other tributes are rarely what gets you; the arena does (the perfect demo, the confident wrong answer, the free trial, the agent nobody watches). So the page is a map of the arena, not of the competition, and its centerpiece is the edge: every system has a line past which it stops knowing and starts guessing, and the people who do well find it on purpose. Edward is a tribute who scored a 7 in training because he spent his private session asking where the arena ends. Structure the conceit generates: the Reaping, the tribute profile, the Cornucopia, the arena map, the edge, sponsor parachutes, the interview, and a volunteer CTA. Design: light mode is the Capitol broadcast (marble ivory, crimson, gold), dark mode is the arena at night (coal, ember, force-field cyan). The Reaping is pinned to overcast district stone, the arena map is pinned to night, and the sponsor section is pinned to gaudy Capitol cream in both modes. Big Shoulders Display for broadcast headlines, Literata for reading, Martian Mono for chyrons and tags, Cinzel for ceremonial Capitol lettering. No mockingjays, no franchise logos, nobody from the film depicted. Animation off; the only motion is a slow shimmer on the arena edge, and it stops for reduced motion.",
  tagline: "Everybody's been reaped. Read the arena before you run.",

  colors: {
    // Measured. Dark: bone on coal 15.5:1, muted 8.6:1 (7.8:1 on the
    // surface), ember 7.7:1 with near-black type on buttons 7.7:1.
    // Light: ink on Capitol marble 15.4:1, muted 6.6:1, crimson 7.8:1 with
    // white type on it 9.0:1, gold-ink 5.5:1.
    primary: "#7A5B0E",            // Capitol gold, inked dark enough to read
    secondary: "#7FD3C4",          // the force field at the arena's edge
    accent: "#F08A3C",             // ember
    accentHover: "#FFA45E",
    accentLight: "#8E1B2C",        // Capitol crimson
    accentHoverLight: "#6E1220",
    onAccent: "#170C04",
    onAccentLight: "#FFFFFF",
    background: "#0D0F0C",         // the arena at night
    backgroundLight: "#F3EFE4",    // Capitol marble
    surface: "#171A15",
    surfaceLight: "#FCFAF4",
    text: "#ECE6D6",
    textMuted: "#B3AD9C",
    textDark: "#1A1814",
    textDarkMuted: "#5A5446",
    border: "#2E3429",
    borderLight: "#D5CCB5",
    gradient: "linear-gradient(90deg, #8E1B2C 0%, #F08A3C 100%)",
  },

  fonts: {
    // Big Shoulders Display: condensed and loud, a broadcast/propaganda headline face.
    // Literata: a warm reading serif for the long paragraphs.
    // Martian Mono: chyrons, tribute data, hazard tags.
    // Cinzel (page-level only): carved Roman capitals for the Capitol's ceremonial lettering.
    heading: "'Big Shoulders Display', 'Arial Narrow', Impact, sans-serif",
    body: "'Literata', 'Iowan Old Style', Georgia, serif",
    mono: "'Martian Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;800;900&family=Cinzel:wght@600;700&family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,600;1,7..72,400&family=Martian+Mono:wght@400;600&display=swap",
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
    hover: "underline",
    background: "none",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "Everybody in your industry has been reaped, and this year the bowl's twice as full (yes, mine too, and I didn't volunteer).",
    description: "The Hunger Games: Sunrise on the Reaping opened Friday, so this week I'm a tribute in the 50th Games, the one on the launch platform who isn't running, because I'm trying to work out where the arena ends.",
    heroImage: "hero-2026-11-21.jpg",
    imageAlt: "Edward in a plain grey competition jumpsuit and his blue fedora stands on a round metal launch platform in a sunlit wildflower meadow ringed by pine forest. Around him, other competitors on identical platforms crouch to sprint toward a giant golden horn spilling laptops, servers, and binders onto the grass. Edward stands upright and calm, holding a small spiral notebook and looking off toward the tree line.",
    ctaText: "Map the arena",
    ctaLink: "#arena",
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
