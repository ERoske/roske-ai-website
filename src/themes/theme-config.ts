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
  name: "Toy Story 5: The Toy Who Wouldn't Update",
  week: "2026-06-20",
  inspiration: "Toy Story 5 opens in theaters June 19, 2026, and for the first time the threat to the toys isn't a rival kid or a yard sale. It's a screen: a glowing AI device that makes the old pull-string toys feel obsolete. That was too good to pass up. Edward spends his days telling Fortune 500 executives that AI changes everything, so the site casts him as the analog cowboy toy that AI is coming to replace. He is Edward: The Talking EPM Cowboy. Pull the string and he explains agentic AI to a dinosaur who did not ask. The whole homepage is built like a vintage toy package and a Pixar film still: Andy's-room cloud wallpaper, a clearance shelf, a 25-cent donation box, and a 'NOW WITH A.I.' refresh that fooled no one. The fedora, as always, is the constant. It's blue, it's felt, and it survives every recall.",
  tagline: "Edward Roske, recast as the toy AI is coming for. (He asked to play the hero. Casting passed.)",

  colors: {
    // Toy Story / Andy's-room palette: cloud-wallpaper sky blue, Woody red,
    // toy-star gold, warm label cream. Light mode is Andy's room in the
    // afternoon sun. Dark mode is the toy box after lights-out.
    primary: "#3b82e6",           // Andy's-room sky blue
    secondary: "#f2b840",          // toy-star gold / sheriff badge
    accent: "#e8462f",             // Woody-red, the CTA pop
    accentHover: "#ff6a4d",
    background: "#0f1b3d",         // toy box at night (dark mode)
    backgroundLight: "#e7f1fc",    // Andy's-room sky (light mode)
    surface: "#1a2a55",            // shelf-shadow navy card (dark)
    surfaceLight: "#ffffff",       // toy-package white (light)
    text: "#f5f0e1",               // warm toy-label cream on dark
    textMuted: "#a9b8db",          // muted sky-gray
    textDark: "#16335f",           // deep blue ink on light
    textDarkMuted: "#5a6f90",      // muted blue ink
    border: "#2b407a",             // box-edge navy (dark)
    borderLight: "#c2d8f0",        // package rule (light)
    gradient: "linear-gradient(150deg, #0f1b3d 0%, #1a2a55 45%, #3b82e6 100%)",
  },

  fonts: {
    // Fredoka: rounded, friendly, toy-block display font. Nunito: rounded
    // sans for body, pairs cleanly with Fredoka. Space Mono: the cold,
    // digital "screen threat" voice (model numbers, warnings, AI labels).
    // Rye: a western slab used only for the pull-string cowboy flourishes.
    heading: "'Fredoka', 'Baloo 2', system-ui, -apple-system, sans-serif",
    body: "'Nunito', system-ui, -apple-system, 'Segoe UI', sans-serif",
    mono: "'Space Mono', 'JetBrains Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Rye&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap",
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
    subtitle: "Edward Roske, recast as the toy AI is coming for.",
    description: "Toy Story 5 is in theaters this week, and the bad guy is a screen. A glowing device that elbows the old pull-string toys out of the way. I've spent three years telling executives that AI changes everything, so it felt fair to cast myself as the toy it's coming to replace. (I lobbied to play the hero. The casting director, who is also me, passed.)",
    heroImage: "hero-2026-06-20.png",
    imageAlt: "Edward Roske reimagined as a Pixar-style pull-string cowboy toy in a royal-blue felt fedora and round glasses, standing in a warm sunbeam on a child's bedroom floor with cloud wallpaper, eyeing a glowing AI tablet and smart speaker that threaten to replace him as the favorite toy.",
    ctaText: "Pull the string",
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
