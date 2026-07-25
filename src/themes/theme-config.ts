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
  name: "The Daily Roske: Brand New Day",
  week: "2026-07-25",
  inspiration: "Spider-Man: Brand New Day opens Friday July 31 (Destin Daniel Cretton, Tom Holland's fourth solo outing). Its premise is that the world no longer remembers Peter Parker, so he works a city that has no idea who he is. Edward has a smaller, duller version of the same problem: he spent 25 years building interRel into a name that opened doors in the Oracle EPM world, sold it, and now walks into AI rooms where that name buys him nothing. The site is built as a tabloid newspaper, THE DAILY ROSKE, running a sustained smear campaign against its own subject: a blackletter nameplate, a screamer front-page headline, column rules, drop caps, Ben-Day halftone dots, jump lines, wire-photo credits, and a J. Jonah Jameson-style op-ed calling him a menace. The running gag is Peter's oldest hustle, selling photographs of himself to the paper that hates him, which conveniently explains why every image on the page is Edward. Palette is newsprint: cream paper and ink black in light mode, a warm press-black night edition in dark, with tabloid spot red and press blue. Type is an actual newspaper stack: Newsreader for headlines, Libre Franklin for decks and body (Franklin Gothic is the American newspaper sans), Courier Prime for captions and credits, UnifrakturMaguntia for the nameplate only. Animation stays OFF; the atmosphere is print texture, not motion.",
  tagline: "The world forgot who I was, which has been better for business than I expected.",

  colors: {
    // Newsprint. Cream paper and ink black in light mode; a warm press-black
    // 'night edition' in dark. Tabloid spot red is the CTA, press blue the
    // supporting registration color. Contrast verified for WCAG AA both modes.
    primary: "#1c3f94",            // press blue (registration blue)
    secondary: "#8a6a2f",          // aged-newsprint sepia
    accent: "#b3121b",             // tabloid spot red, the CTA (AA 6.98 on white)
    accentHover: "#8e0d14",
    background: "#14110d",         // night edition, warm press black (dark mode)
    backgroundLight: "#f3efe3",    // newsprint cream (light mode)
    surface: "#1d1913",            // ink panel (dark)
    surfaceLight: "#fbf8ef",       // fresh sheet (light)
    text: "#f2ece0",               // paper white on ink
    textMuted: "#b8ae9b",          // aged newsprint grey (7.97:1 on surface)
    textDark: "#17140f",           // ink black on cream
    textDarkMuted: "#544c3e",      // soft ink (7.98:1 on the light surface)
    border: "#3a3228",             // rule (dark)
    borderLight: "#d9d1bd",        // rule (light)
    gradient: "linear-gradient(135deg, #14110d 0%, #1c3f94 58%, #b3121b 100%)",
  },

  fonts: {
    // Newsreader: a genuine news serif (variable optical size + weight, with a
    //   proper italic). Headlines and decks, the way a broadsheet sets them.
    // Libre Franklin: the Franklin Gothic lineage, the American newspaper sans.
    //   Kickers, standfirsts, and readable body copy.
    // Courier Prime: the wire-copy typewriter, for photo credits, datelines,
    //   folio lines, and classified ads.
    // UnifrakturMaguntia (loaded, index-only): the blackletter nameplate.
    heading: "'Newsreader', 'Times New Roman', Georgia, serif",
    body: "'Libre Franklin', system-ui, -apple-system, sans-serif",
    mono: "'Courier Prime', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Libre+Franklin:ital,wght@0,300..800;1,300..800&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=UnifrakturMaguntia&display=swap",
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
    subtitle: "Nobody in the room remembers the old company, which is working out.",
    description: "Spider-Man: Brand New Day opens Friday, and the whole premise is that the world forgot Peter Parker. I got a quieter version of that deal. For 25 years I ran interRel, and in the Oracle finance world the name did the introducing for me. Then I sold it, walked into AI rooms, and became a guy in a hat with opinions. That's turned out to be the useful part: nobody expects last decade's answer from you, so you get to build the new thing while nobody's watching. Right now the new thing is MCP servers for enterprise finance and a work week run by ten-plus AI agents. (I do still sell photographs of myself to the paper. Some traditions survive a rebrand.)",
    heroImage: "hero-2026-07-25.jpg",
    imageAlt: "Edward Roske in his signature blue fedora with a red web-patterned superhero mask pushed down around his neck, sitting on the old city wall above Old San Juan at dusk and photographing himself with a battered DSLR held at arm's length, beside a hand-lettered cardboard sign reading PHOTOS FOR SALE.",
    ctaText: "Hire the menace",
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
