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
  name: "You Can See Everything",
  week: "2026-10-24",
  inspiration: "You Can See Everything, the A24 documentary about Elizabeth Holmes directed by Nathan Fielder and Lance Oppenheim, has been in theaters since October 16, 2026 (it opened second, behind Street Fighter, so last week's theme beat this week's theme at the box office). Theranos was a box nobody was allowed to open, and when a court finally did, almost nothing in it worked. The AI problem is the inverse: the box is wide open, you can read every line, it works, and nobody can say why it made the choices it made, because a person didn't write it. So this week the site is a documentary about itself. Every Saturday at 5 AM an AI agent rewrites roske.ai, generates the images, runs the tests, and pushes it live before Edward is awake, and the source is public on GitHub, so anyone can literally see everything. Structure: a cold open with the first real number, then five chapters (the subject, the box, the witness, the discrepancies, the question), with real figures computed from the public git history and real failures quoted from the commit log. Edward is the subject of an exposé about his own website, and the most damning finding is that he hands it to a machine every week and it mostly works. Design language is documentary and exposé: title cards on black, lower-third captions, chapter numbers, redaction bars, evidence tags, and code set in a monospace as B-roll. Palette: documentary black, newsprint white, one evidence-tag red, and a cold terminal green for anything the machine says. Light mode is the newsroom with the lights on; dark mode is the edit bay at 3 AM. Bricolage Grotesque for title cards, Newsreader for body (it reads like newsprint), Courier Prime for transcripts, timecodes, and the machine's statement. Animation is off except for one git log line typing out in the cold open. Not affiliated with A24 or the filmmakers. No images of any real person other than Edward.",
  tagline: "You can see everything. Explaining it is the hard part.",

  colors: {
    // Measured, not eyeballed. Newsprint white on documentary black is
    // 18:1; muted text clears 7:1 on both surfaces. Evidence-tag red is
    // text-safe on black (5.2:1) only in the brighter #F0433E, which then
    // needs near-black type on buttons (5.0:1). Light mode swaps to a
    // darker red (#B8211C, 5.8:1 on newsprint, white type 6.4:1).
    primary: "#141414",            // ink (nav wordmark in light mode)
    secondary: "#4BE3A6",          // cold terminal green: the machine's color
    accent: "#F0433E",             // evidence-tag red
    accentHover: "#FF6A66",
    accentLight: "#B8211C",
    accentHoverLight: "#8F1813",
    onAccent: "#141414",
    onAccentLight: "#FFFFFF",
    background: "#0B0B0C",         // documentary black (neutral, no blue in it)
    backgroundLight: "#F4F2EC",    // newsprint
    surface: "#151516",
    surfaceLight: "#FFFFFF",
    text: "#F2EFE8",               // newsprint white
    textMuted: "#A8A49B",
    textDark: "#141414",
    textDarkMuted: "#5A5852",
    border: "#2B2B2E",
    borderLight: "#D9D5CB",
    gradient: "linear-gradient(90deg, #F0433E 0%, #B8211C 100%)",
  },

  fonts: {
    // Bricolage Grotesque: a title card with opinions (optical sizes, tight at display weight).
    // Newsreader: designed for reading news on a screen, so it reads like newsprint without pretending to be a broadsheet.
    // Courier Prime: the screenplay and transcript face. Everything the machine says, every timecode, every git line.
    heading: "'Bricolage Grotesque', 'Helvetica Neue', Arial, sans-serif",
    body: "'Newsreader', Georgia, 'Times New Roman', serif",
    mono: "'Courier Prime', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,200..800&family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap",
  },

  layout: {
    heroStyle: "editorial",
    navStyle: "sticky",
    cardStyle: "outlined",
    sectionStyle: "magazine",
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
    subtitle: "A documentary about this website, in 5 chapters, by the person it's about.",
    description: "Every Saturday at 5 AM an AI agent rewrites this site, draws the pictures, runs the tests, and pushes it live before I'm awake. The code is public. You can read every line. This week's site is about why that helps less than you'd think.",
    heroImage: "hero-2026-10-24.jpg",
    imageAlt: "Edward in a navy blazer, glasses, and his blue fedora, sitting in a documentary interview chair in a sunlit beach-house living room between two cinema cameras and a boom microphone, looking off camera with a stunned expression while a fan-fold printout of source code spills off the coffee table, across the floor, and out the patio door.",
    ctaText: "Ask me in person",
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
