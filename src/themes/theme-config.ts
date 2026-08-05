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
  name: "AFC Roske: Believe",
  week: "2026-08-01",
  inspiration: "Ted Lasso season 4 premieres Wednesday, August 5 on Apple TV: Ted comes back to Richmond to coach the second-division women's team, starting over yet again in a job he is not qualified for, armed with nothing but questions and biscuits. Which is the only management situation Edward has ever been in. The site becomes AFC ROSKE, a small football club run by one relentlessly optimistic American in a fedora: a matchday-programme layout with a scoreboard strip, a knitted club scarf, a training-ground photo wall, the squad list, a taped-up BELIEVE sign, and biscuits with the boss. The genuine hook: Ted's whole method (be curious, not judgmental) is Edward's actual brand, asking good questions. Palette is club kit: royal kit blue, pitch green, spot red, and Believe-sign gold on programme cream, with a floodlit navy night mode. Type is athletic: Archivo for headings, Anton for scarf letters and kit numbers, Nunito Sans for warm body copy, Space Mono for fixture data. Animation stays OFF; the atmosphere is club identity, not motion.",
  tagline: "I've been coaching a sport I don't understand for three years now. It's called AI.",

  colors: {
    // Club kit. Programme cream + kit blue in light mode; floodlit navy night
    // mode. Spot red is the CTA, pitch green the supporting color, and the
    // BELIEVE gold lives as a local var on the homepage. AA checked both modes.
    primary: "#2a3ba0",            // kit blue
    secondary: "#0e7a3d",          // pitch green
    accent: "#c11425",             // spot red, the CTA (AA on cream and white)
    accentHover: "#960e1c",
    background: "#0e1330",         // floodlit navy night (dark mode)
    backgroundLight: "#f7f5ec",    // matchday programme cream (light mode)
    surface: "#171e42",            // club room panel (dark)
    surfaceLight: "#fffdf6",       // fresh programme page (light)
    text: "#f0f2fa",               // floodlight white on navy
    textMuted: "#aeb6d8",          // terrace grey (7.5:1 on surface)
    textDark: "#151a2b",           // ink on cream
    textDarkMuted: "#4b5268",      // programme grey (7.4:1 on the light surface)
    border: "#2c3563",             // pitch line (dark)
    borderLight: "#ded9c6",        // pitch line (light)
    gradient: "linear-gradient(135deg, #0e1330 0%, #2a3ba0 55%, #c11425 100%)",
  },

  fonts: {
    // Archivo: an athletic grotesque with real heft at 800-900, the club's
    //   wordmark and headline face.
    // Anton (loaded, index accents): condensed poster caps for scarf letters
    //   and kit numbers.
    // Nunito Sans: warm, rounded, the Lasso-optimism body face.
    // Space Mono: fixture lists, league tables, and stat lines.
    heading: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
    body: "'Nunito Sans', system-ui, -apple-system, sans-serif",
    mono: "'Space Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400..900;1,400..900&family=Anton&family=Nunito+Sans:ital,opsz,wght@0,6..12,300..900;1,6..12,300..900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "sticky",
    cardStyle: "solid",
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
    subtitle: "New head coach arrives with no relevant experience, remains weirdly confident.",
    description: "Ted Lasso is back, coaching a team in a sport he doesn't understand, on the theory that curiosity outruns expertise. I've been running the same play since 2023, when I sold the company I actually understood and walked into AI with nothing but questions, which got better the longer I asked them. These days I coach finance teams through the same transfer window and build MCP servers so AI agents can work inside enterprise systems, and ten of those agents rebuild this website every Saturday. The sign over the door says Believe, and I taped it up there myself.",
    heroImage: "hero-2026-08-01.jpg",
    imageAlt: "Edward Roske in his signature blue fedora and a tan coach's jacket with a red whistle lanyard, standing on the touchline of an English football stadium at golden hour, pointing forward with an enormous grin and holding a clipboard covered in incomprehensible diagrams.",
    ctaText: "Hire the gaffer",
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
