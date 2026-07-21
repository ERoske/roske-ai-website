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
  name: "I'm Just Here for the Ball",
  week: "2026-07-21",
  inspiration: "The 2026 World Cup ended July 19 (Spain beat Argentina 1-0 in extra time, Ferran Torres in the 106th minute). Instead of picking a side, Edward declares himself the number-one fan of the actual ball. This year's ball is the Adidas Trionda, the official match ball and a genuine connected 'smart ball': a 500Hz motion sensor buried in the panels feeds the AI-assisted offside system in real time. The joke is mostly true. The ball is the only object on the pitch running real AI, and it really does need charging (ESPN's headline was literally 'the World Cup smart ball is a game changer, just remember to charge it', and a person watches each ball's battery on a screen). So the AI practitioner spent the entire tournament rooting for the one player made of silicon. Design is a sports-broadcast telemetry package crossed with a fan-zine: floodlit pitch-green and charging-cyan with trophy gold, a live lower-third masthead, battery and sensor HUD readouts, jersey-number display type. Bricolage Grotesque display, Hanken Grotesk body, Space Mono for the telemetry labels. Edward is the butt of the joke throughout: dressed as the ball in the stands, balancing it on his fedora, and monitoring its battery on a clipboard as a self-appointed volunteer nobody asked for. The blue fedora stays on in every frame. A permanent fan page lives at /ai-ball. Animation stays OFF (a floodlit static broadcast package carries it; drifting particles would only cheapen it).",
  tagline: "One player on that pitch ran on a neural net and a battery. That's the one I watched.",

  colors: {
    // Floodlit pitch-green base, charging-cyan CTA, trophy gold. The cyan is
    // the ball's 'this thing runs on electricity' tell; gold is the trophy no
    // team of mine won. Contrast verified for WCAG AA in both modes.
    primary: "#0e7a53",            // pitch / emerald green
    secondary: "#e6b23c",          // trophy gold
    accent: "#0e7490",             // charging cyan-teal, the CTA (AA 5.36 on white)
    accentHover: "#0c6178",
    background: "#0a1712",         // floodlit night-pitch (dark mode)
    backgroundLight: "#eef4ee",    // clean broadcast turf-white (light mode)
    surface: "#11231b",            // dark pitch panel (dark)
    surfaceLight: "#ffffff",       // card white (light)
    text: "#eaf3ec",               // warm white on dark
    textMuted: "#a2c1af",          // muted sage (8.4:1 on surface)
    textDark: "#0f241a",           // deep pitch-ink on turf-white
    textDarkMuted: "#45604e",      // muted green-ink (6.9:1 on white)
    border: "#244a38",             // rule (dark)
    borderLight: "#d0e2d5",        // rule (light)
    gradient: "linear-gradient(135deg, #06100c 0%, #0e7a53 52%, #0e7490 100%)",
  },

  fonts: {
    // Bricolage Grotesque: a modern display grotesque with real character, the
    //   fan-poster voice for giant headlines.
    // Hanken Grotesk: a clean, warm humanist sans for readable body copy.
    // Space Mono: the data-terminal voice for telemetry labels, battery
    //   readouts, and jersey numbers.
    heading: "'Bricolage Grotesque', 'Arial Black', sans-serif",
    body: "'Hanken Grotesk', system-ui, -apple-system, sans-serif",
    mono: "'Space Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Hanken+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap",
  },

  layout: {
    heroStyle: "split",
    navStyle: "fixed",
    cardStyle: "outlined",
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
    subtitle: "I didn't have a team, I had a ball.",
    description: "Everyone kept asking which team I was rooting for, Spain or Argentina. The honest answer was neither. I was rooting for the ball. This year's ball is the Adidas Trionda, and it's the only thing on the pitch running actual AI: a 500Hz sensor buried in the panels, feeding the offside system in real time. It also has to be charged, like a phone, by a person whose entire job is watching a battery icon. Twenty-two of the best athletes alive, and I spent a month watching the one player made of silicon, and I regret none of it. (I did buy a lot of jerseys first, just to be safe.)",
    heroImage: "hero-2026-07-21.jpg",
    imageAlt: "Edward Roske in his signature blue fedora, kneeling pitch-side and gazing lovingly at a high-tech smart soccer ball charging in a lit docking cradle that reads 95 percent, while a World Cup final celebration blurs behind him, entirely ignored.",
    ctaText: "Meet the ball",
    ctaLink: "/ai-ball/",
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
