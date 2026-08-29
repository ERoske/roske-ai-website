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
  name: "Roske v. Acme",
  week: "2026-08-29",
  inspiration: "Coyote vs. Acme opened August 28: a customer sues the vendor whose premium products failed him catastrophically and on a schedule. Edward has been on both sides of that transaction for 25 years, so the site becomes a legal filing, ROSKE v. ACME, in which he sues every enterprise software vendor that ever sold him a single source of truth. He is the coyote in this and he knows it: elaborate plan, premium gear, spectacular failure, back at it next Saturday, and the weekly redesign is the rocket sled he straps himself to at 5AM. The conceit generates the structure: the career refiled as Exhibits A through F, the FAQ as a line-numbered deposition, the buzzwords he paid for as a mail-order catalog from an invented vendor (Apex Enterprise Supply Co.), and a findings section that rules against the plaintiff, because he bought all of it voluntarily. Design is legal exhibit crossed with mail-order catalog: manila and kraft stock, angled EXHIBIT stamps, court-reporter transcript formatting, redaction bars, blueprint plates, circus-poster wood type for display. Palette is kraft brown, desert sunset orange, courtroom oxblood, blueprint blue. Dark mode is the late-night deposition: one desk lamp, deep shadow, an amber pool of light. Animation OFF.",
  tagline: "Plaintiff bought every product in this catalog and would like the record to show he read the instructions afterward.",

  colors: {
    // Courtroom and catalog. Oxblood does the structural work, blueprint blue
    // is the schematic ink, sunset orange is the stamp, the lever, and every CTA.
    // Contrast checked both modes: orange on the paper stock clears 4.9:1, muted
    // text clears 6.5:1 on manila and 7.3:1 on the dark table.
    primary: "#4a1c1c",            // courtroom oxblood
    secondary: "#2b4a7a",          // blueprint blue
    accent: "#ad3f16",             // desert sunset orange, dark enough to set type in
    accentHover: "#8c3110",
    background: "#1a1410",         // the deposition room with the overheads off
    backgroundLight: "#ede1c6",    // manila folder
    surface: "#241c16",            // the table under the lamp (dark)
    surfaceLight: "#f8f1e1",       // the typed page (light)
    text: "#f1e8d8",
    textMuted: "#b9a98f",          // 7.3:1 on the dark table
    textDark: "#241a12",
    textDarkMuted: "#5b4a3a",      // 7.5:1 on the page, 6.5:1 on manila
    border: "#3a2e24",
    borderLight: "#cbb995",
    gradient: "linear-gradient(135deg, #1a1410 0%, #4a1c1c 55%, #ad3f16 100%)",
  },

  fonts: {
    // Alfa Slab One: a wood-type Clarendon, the face on every circus poster and
    //   every WANTED bill. Display and headings.
    // Libre Baskerville: the legal-document face. Reads like a brief because it
    //   is what briefs are set in.
    // Courier Prime: court-reporter transcript, line numbers, order numbers.
    // Rye: the ornamented wood type, used sparingly, for the caption of the case.
    heading: "'Alfa Slab One', 'Rockwell', Georgia, serif",
    body: "'Libre Baskerville', Georgia, 'Times New Roman', serif",
    mono: "'Courier Prime', 'Courier New', Courier, monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400;1,700&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Rye&display=swap",
  },

  layout: {
    heroStyle: "editorial",
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
    subtitle: "Complaint for damages, filed on behalf of everyone who ever bought a single source of truth.",
    description: "I've spent 25 years buying premium enterprise software that failed on a schedule, and roughly the same 25 years selling it, installing it, teaching classes on it, and writing 15 manuals about it, so I'm the plaintiff and I'm also the defense's most useful witness, all under one hat. This week the site is the case file, so you're reading a lawsuit. Exhibits A through F are just my career with stamps on it, the catalog is every buzzword I ever paid for and a couple I paid for twice, your questions are the deposition, and the Court finds against me on every count (I read the findings twice).",
    heroImage: "hero-2026-08-29.jpg",
    imageAlt: "Edward Roske in a charcoal suit and his signature blue fedora, sitting bolt upright on a rocket-powered sled flying over a red-rock desert canyon, a leather briefcase on his lap, expression entirely calm.",
    ctaText: "Retain the expert witness",
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
