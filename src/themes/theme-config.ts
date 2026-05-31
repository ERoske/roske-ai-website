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
  name: "By the Power of Grayskull",
  week: "2026-05-31",
  inspiration: "Masters of the Universe (the live-action film) opens in theaters on Friday, June 5, 2026. So roske.ai becomes the Eternia Gazette this week, a Saturday-morning cartoon broadcast frozen mid-frame: Edward as a bald, glasses-wearing, fedora-keeping He-Man holding a sword that is, frankly, too big for him; Edward as a Skeletor in a blue fedora because Skeletor is bald and so is Edward and the math, here, basically works on its own; and a board meeting that has been redirected into a toy battle. The fedora stays on through all of it. The fedora was always more important than the helmet.",
  tagline: "Bald hero. Bald villain. The fedora is the constant. By the power of fedora, we have the power.",

  colors: {
    // Eternia at sunset: royal purple Skeletor sky, sword-pommel gold,
    // Castle Grayskull jade, He-Man hot magenta, and a parchment cream
    // for light mode that reads like the back of an old Mattel toy box.
    primary: "#5b2d8c",          // royal Eternian purple
    secondary: "#0d8b6e",        // Castle Grayskull jade
    accent: "#f5b300",            // power-sword gold
    accentHover: "#ffc933",
    background: "#160b27",        // deep cosmic purple (dark mode)
    backgroundLight: "#f5e9c8",   // Mattel-box cream parchment (light mode)
    surface: "#231447",            // raised purple panel
    surfaceLight: "#ffe9a8",       // sunlit cream
    text: "#fff3d0",               // warm sword-gold cream
    textMuted: "#bba0e0",          // misty Eternian lavender
    textDark: "#1c0a30",           // deep purple text on cream
    textDarkMuted: "#5a3b7c",      // muted royal
    border: "#3d2470",             // amethyst line
    borderLight: "#c8a64a",        // gold-foil line
    gradient: "linear-gradient(135deg, #2a0d4d 0%, #5b2d8c 35%, #c2185b 70%, #f5b300 100%)",
  },

  fonts: {
    // Audiowide: chunky 80s arcade display for the big "HE-MAN" headlines.
    // Bungee: blocky comic-book lettering for tags and badges.
    // DM Serif Display: a bit of drama for italic emphasis.
    // Space Grotesk: clean readable body in both modes.
    // Major Mono Display: technical mono with retro arcade pulse.
    heading: "'Audiowide', 'Impact', 'Arial Black', sans-serif",
    body: "'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif",
    mono: "'Major Mono Display', 'Courier Prime', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Audiowide&family=Bungee&family=DM+Serif+Display:ital@0;1&family=Major+Mono+Display&family=Space+Grotesk:wght@300;400;500;600;700&display=swap",
  },

  layout: {
    heroStyle: "split",
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
    subtitle: "A bald hero. A bald villain. A fedora that does not care which side you pick.",
    description: "Masters of the Universe opens in theaters on Friday, the latest piece of 1980s cardboard the studios have decided is now load-bearing. (I am not complaining. The 1980s shaped me into the kind of adult who keeps the original Castle Grayskull on the office shelf and refers to it, with no irony at all, as a reference architecture.) So this week the site becomes the Eternia Gazette: roughly forty percent He-Man, roughly forty percent Skeletor, and roughly twenty percent everyone in the throne room politely pretending they did not notice that the same actor is playing both parts. The fedora stays on through every cut.",
    heroImage: "hero-2026-05-31.png",
    imageAlt: "Edward Roske, bald and bespectacled, dressed as He-Man in a brown leather X-harness and gray loincloth, wearing his signature blue fedora, holding the Power Sword aloft with both hands as golden lightning crackles from the blade. Castle Grayskull looms behind him on a misty cliff at dusk, a pink and purple Eternian sky in the background.",
    ctaText: "Open the toybox",
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
