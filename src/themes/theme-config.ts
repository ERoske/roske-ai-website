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
  name: "The Hardest-Working Weekend of the Year",
  week: "2026-09-05",
  inspiration: "Labor Day is the most misnamed holiday on the calendar: a day named for work on which the entire country does none. Edward has held this position for years, so this weekend the site takes him at his word and treats Labor Day Weekend as 3 straight shifts culminating in the ultimate day of labor, Monday September 7, on which he personally operates an excavator, works the espresso bar, jackhammers a sidewalk nobody asked about, eats lunch alone on a steel beam 40 stories up, and goes down a manhole because it was open. The conceit is a jobsite: a punch clock, a shift board, a bulletin board of site photos with a DAYS SINCE LAST INCIDENT sign, carbon-copy work orders for the 6 real projects, and a weekend timesheet that gets audited. The argument underneath the hi-vis: the people who never take the holiday are his 10 AI agents, who triaged the inbox, shipped the daily video, ran the Monday pitch sweep, and rebuilt this very page at 5AM Saturday while he slept, which is the live demo of the talk he gets paid for. And the finance leader reading it has a close that never took Labor Day off either. Design is industrial and grimy on purpose (last week was courtroom manila, the State Fair is coming in 3 weeks, so no folksy Americana): asphalt black, steel plate, safety orange, hi-vis yellow, caution stripes, stencil wood type, rivets, concrete grain. Dark mode is the night shift under sodium lights. Light mode is poured concrete at 7AM. Animation OFF.",
  tagline: "Labor Day is horribly misnamed, and I intend to fix that personally, this Monday, on the excavator.",

  colors: {
    // Jobsite. One accent hue can't clear WCAG AA on both asphalt and concrete,
    // so this week uses the light-mode overrides: hi-vis orange with black text
    // on the night shift (6.7:1 on asphalt, 7.4:1 text-on-button), and a rust
    // safety orange with white text on the day shift (5.0:1 on concrete, 6.2:1
    // on the slab, 7.4:1 text-on-button). Muted text clears 8:1 dark, 5.7:1 light.
    primary: "#1f2933",            // steel plate, blued
    secondary: "#f5c400",          // hi-vis yellow (stripes, fills only, never text)
    accent: "#f0871f",             // hi-vis safety orange, night shift
    accentHover: "#ffa03a",
    accentLight: "#9a3404",        // rust safety orange, day shift
    accentHoverLight: "#7c2a03",
    onAccent: "#121212",           // black stencil on orange, like every real sign
    onAccentLight: "#ffffff",
    background: "#131416",         // asphalt at 5AM
    backgroundLight: "#d9d6ce",    // poured concrete, cured
    surface: "#1d1f23",            // steel plate under sodium light
    surfaceLight: "#ecebe6",       // the slab in daylight
    text: "#ecebe6",
    textMuted: "#b3b1a9",
    textDark: "#17181a",
    textDarkMuted: "#4c4d51",
    border: "#34373d",
    borderLight: "#b3b0a7",
    gradient: "linear-gradient(135deg, #131416 0%, #1f2933 55%, #f0871f 100%)",
  },

  fonts: {
    // Big Shoulders Display: literally drawn for Chicago, the City of Big
    //   Shoulders, hog butcher for the world. A labor font. Headings.
    // Big Shoulders Stencil Display: the same face cut as a stencil, for the
    //   crate-and-caution-sign display words on the home page.
    // Barlow: grew out of California road signs and license plates. Body.
    // Barlow Condensed: labels, form fields, the shift board.
    // Share Tech Mono: the punch clock.
    heading: "'Big Shoulders Display', 'Barlow Condensed', Impact, 'Arial Narrow', sans-serif",
    body: "'Barlow', 'Helvetica Neue', Arial, sans-serif",
    mono: "'Share Tech Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Big+Shoulders+Stencil+Display:wght@700;900&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Barlow+Condensed:wght@500;600;700;800&family=Share+Tech+Mono&display=swap",
  },

  layout: {
    heroStyle: "asymmetric",
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
    subtitle: "The hardest-working weekend of the year, and somebody has to win it.",
    description: "Labor Day is the most misnamed holiday on the calendar: a day named for work, on which the entire country does none, and I've decided to make up the difference personally. So this weekend I'm running 3 straight shifts, and on Monday I'm working the excavator, the espresso bar, a sidewalk nobody complained about, and the sewer under the street (the manhole was open, nobody was using it), while you're at a barbecue. (Edward, your 10 AI agents rebuilt this page at 5AM Saturday while you were asleep, and they triaged the inbox, shipped the video, and ran the pitch sweep before you'd found your gloves, so maybe dial back the hi-vis.) Which is, honestly, the whole point of the site, and of the talk that pays for it!",
    heroImage: "hero-2026-09-05.jpg",
    imageAlt: "Edward Roske in an orange hi-vis vest and his signature blue fedora with a headlamp strapped around it, sitting in the open cab of a mud-spattered yellow excavator at sunrise, one gloved hand on the joystick, a city skyline behind him and every other machine on the site parked and empty.",
    ctaText: "Put me on the schedule",
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
