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
  name: "Training Mode",
  week: "2026-10-17",
  inspiration: "Street Fighter opened in theaters on October 16, 2026 (Legendary and Paramount, directed by Kitao Sakurai, set in 1993), so the site becomes a 1993 arcade fighting game. The argument: every fighting game has a Training Mode, where the dummy stands still, never blocks, and never hits back, and almost every enterprise AI pilot is fought there. Curated data, friendly users, no close deadline, a green checkmark. Production is Arcade Mode, where the opponent has a health bar and a final boss called Month-End Close. The conceit generates the structure on its own: a title screen, a fighter select card with Edward's stats, a training-mode-versus-arcade-mode comparison that's real deployment advice, a versus ladder of the opponents every finance team actually faces (each with a special move, a weakness, and the counter), a move list that is his talk catalog with joystick inputs, stage select with the scene images, and a Continue? countdown as the CTA. Edward is the one fighter on the select screen and he loses a lot (flat on his back under a tower of binders), which is the competence: he knows every opponent's moves because he's been hit by all of them. Images are deliberately NOT arcade cabinets or street fighters (Gemini kept drawing the real Capcom game), so it's Edward in a navy suit doing martial arts in finance places: a trading floor, a simulator room, a dojo with a binder, a boardroom KO, and a victory on the walls of El Morro. Palette is a cabinet at night: CRT black-navy, health-bar yellow, KO red, player-one blue. Bungee for the marquee, Archivo for the body, Press Start 2P for the HUD only, Share Tech Mono for data. Light mode is the arcade at 10 AM with the lights on and the cabinet art showing. Animation stays in the page: a hero HUD whose round timer counts down and whose opponent health bar drains as you scroll. No particles. Not affiliated with Capcom, Legendary, or Paramount.",
  tagline: "Every AI pilot I've ever seen was fought in Training Mode, where the dummy doesn't hit back.",

  colors: {
    // A cabinet at night. Measured, not eyeballed:
    // text 16.8:1 on bg (dark) and 16.0:1 (light); muted 7.7:1 on dark
    // surface and 7.2:1 on light bg. Health-bar yellow is 13.3:1 on the
    // dark bg with near-black type on its buttons (13.2:1). Yellow on cream
    // fails, so light mode swaps the accent to KO red (5.9:1 on cream) with
    // white type (6.9:1).
    primary: "#5B9BFF",            // player-one blue
    secondary: "#FF4D55",          // KO red
    accent: "#FFD23F",             // health-bar yellow
    accentHover: "#FFE27A",
    accentLight: "#B4141E",        // KO red, lights on
    accentHoverLight: "#8E0F17",
    onAccent: "#12100A",
    onAccentLight: "#FFFFFF",
    background: "#0A0E1A",         // CRT black, with a little navy in it
    backgroundLight: "#F3EEE2",    // cabinet side art, 10 AM
    surface: "#121829",
    surfaceLight: "#FFFFFF",
    text: "#F2EFE6",
    textMuted: "#A3ABBE",
    textDark: "#12131C",
    textDarkMuted: "#4A4D5C",
    border: "#26304A",
    borderLight: "#D9D1BF",
    gradient: "linear-gradient(90deg, #FFD23F 0%, #FF8A3D 50%, #FF4D55 100%)",
  },

  fonts: {
    // Bungee: an arcade marquee, all caps, built for signage.
    // Archivo: the instruction-card grotesque, readable at length.
    // Share Tech Mono: frame data, scores, times.
    // Press Start 2P is loaded for the homepage HUD only (it's 8 pixels
    //   tall at heart and nobody should read a paragraph in it).
    heading: "'Bungee', 'Arial Black', Impact, sans-serif",
    body: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
    mono: "'Share Tech Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Bungee&family=Press+Start+2P&family=Share+Tech+Mono&display=swap",
  },

  layout: {
    heroStyle: "fullscreen",
    navStyle: "sticky",
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
    subtitle: "Player 1: Edward | Stage: Your Finance Department | Mode: Training",
    description: "Your AI pilot won. Of course it won: it was fought in Training Mode, where the dummy stands still, never blocks, and has infinite health. I've spent 25+ years watching finance teams win in Training Mode and then put a quarter in for the real thing (interRel, 1997 to 2022, which is a lot of quarters).",
    heroImage: "hero-2026-10-17.jpg",
    imageAlt: "Edward in a navy suit, tie, glasses, and his blue fedora, standing in a calm martial arts ready stance in the aisle of an empty trading floor at night, rows of monitors glowing red and blue on both sides.",
    ctaText: "Switch to Arcade Mode",
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
