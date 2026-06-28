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
// CURRENT THEME (overwritten weekly)
// ============================================

export const currentTheme: ThemeConfig = {
  name: "Supergirl: Crime Doesn't Pay",
  week: "2026-06-27",
  inspiration: "Supergirl hits US theaters June 26, 2026 (international June 24). Edward watched it and took exactly the wrong lesson: the villains looked like they were doing well for themselves, so he spent the week finding out whether supervillainy actually pays. He tried becoming Lobo, then Lex Luthor, Brainiac, Bizarro, and General Zod. Supergirl foiled him at every pass, usually before lunch. By Friday he'd run the numbers and confirmed that crime does not pay, so he's going back to telling people about AI. The site is built like a comic book. The one cool shot is the hero image, where Edward rides his intergalactic chopper as Lobo (long hair, leathers, cigar, the works) with Supergirl flying alongside, faintly unimpressed. The blue fedora survives every costume, which is the joke and the brand. Halftone dots, bold panel borders, and comic-book color (Supergirl red, Krypton blue, sidekick gold) carry the whole thing.",
  tagline: "Edward spent the week trying to become a supervillain. Supergirl foiled every attempt. Crime, it turns out, doesn't pay.",

  colors: {
    // Comic-book superhero palette: Supergirl red, Krypton blue, sidekick
    // gold, on bright newsprint sky (light) or deep cosmic night (dark).
    primary: "#2f6bf0",           // Krypton / hero blue
    secondary: "#f5c518",          // S-shield gold
    accent: "#ec1c2b",             // Supergirl red, the CTA pop
    accentHover: "#ff3b46",
    background: "#0a1230",         // deep cosmic night (dark mode)
    backgroundLight: "#e9f1ff",    // bright comic sky (light mode)
    surface: "#131d44",            // panel navy (dark)
    surfaceLight: "#ffffff",       // comic-page white (light)
    text: "#f3f6ff",               // page white on dark
    textMuted: "#9fb0d8",          // muted hero-blue gray
    textDark: "#0e1a3d",           // ink navy on light
    textDarkMuted: "#4a5b80",      // muted ink
    border: "#2a3a72",             // panel rule (dark)
    borderLight: "#b9ccec",        // panel rule (light)
    gradient: "linear-gradient(135deg, #0b3bb0 0%, #2f6bf0 45%, #ec1c2b 100%)",
  },

  fonts: {
    // Anton: tall condensed poster/impact display, all the comic-cover shout.
    // Barlow: clean slightly-condensed body, comic-adjacent and readable.
    // Space Mono: the cold "tech / Brainiac" voice (labels, ERROR, codes).
    // Bangers: comic SFX flourish, used only in index scoped CSS.
    heading: "'Anton', 'Arial Narrow', system-ui, sans-serif",
    body: "'Barlow', system-ui, -apple-system, 'Segoe UI', sans-serif",
    mono: "'Space Mono', 'JetBrains Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Anton&family=Bangers&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Mono:wght@400;700&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "fixed",
    cardStyle: "elevated",
    sectionStyle: "alternating",
    footerStyle: "creative",
  },

  animations: {
    entrance: "fade-up",
    hover: "lift",
    background: "none",
    pageTransition: "fade",
  },

  hero: {
    title: "ROSKE.AI",
    subtitle: "Edward spent the week trying to become a supervillain. Supergirl foiled every attempt.",
    description: "Supergirl is in theaters this week, so I drew the obvious wrong conclusion and spent five days testing whether being a supervillain pays. I started with Lobo, on the theory that a bounty hunter at least bills for the work, then worked through Lex Luthor, Brainiac, Bizarro, and General Zod. Supergirl foiled all five attempts, usually before lunch. The blue fedora survived every costume (my dignity did not). Crime doesn't pay, so I'm back to telling people about AI.",
    heroImage: "hero-2026-06-27.png",
    imageAlt: "Edward Roske reimagined as the intergalactic biker anti-hero Lobo (pale skin, long black hair and beard, leather jacket, cigar) in his royal-blue felt fedora, riding a chrome space motorcycle through a starfield while Supergirl flies alongside him in her red, blue and gold suit, looking faintly unimpressed.",
    ctaText: "See the damage",
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
