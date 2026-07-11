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
  name: "The Roske Odyssey",
  week: "2026-07-11",
  inspiration: "Christopher Nolan's The Odyssey opens July 17, 2026 (Matt Damon as Odysseus, shot entirely on IMAX film, the summer's most anticipated release). The 2026 World Cup is at the quarterfinals this same weekend, but the USA is OUT (eliminated by Belgium in the Round of 16), so no USA lean-in. The Odyssey is the theme. The hook: Edward as Odysseus, the brilliant man who took ten years to get home from a two-week sail because he kept refusing to ask good questions. Homer's epic recast as the greatest cautionary tale ever told about NOT asking good questions: Odysseus taunted the Cyclops and shouted his real name and address (so Poseidon knew exactly whom to curse), his crew opened the bag of winds within sight of home, he lingered a year with Circe and seven with Calypso. Information was never his bottleneck (Tiresias literally told him what would happen); judgment was. Edward, the AI practitioner who tells finance leaders to ask good questions, retells it as the story of a clever man who kept not asking them, and is of course the butt of the joke throughout: he pitches the Cyclops a business card, takes eager conference notes at the Sirens, overstays a full year at Circe's banquet, and finally gets home by using his head. Design is a fine-press illustrated edition of the epic crossed with Nolan's IMAX 65mm film grain: wine-dark sea navy, oxidized bronze gold, amphora terracotta, on aged papyrus (light). Cormorant Garamond display, Spectral body, JetBrains Mono ship's-log labels. Greek meander friezes, canto drop-caps, film-plate galleries. The homepage is framed as THE ROSKE ODYSSEY, an epic in six books. Animation stays OFF (no holiday carve-out; atmosphere is carried by static meander/grain/dawn-gradient detail, not drifting particles). The blue fedora replaces the bronze helmet in every image.",
  tagline: "A two-week sail. Ten years late. Edward retells the Odyssey as the greatest story ever told about not asking good questions.",

  colors: {
    // Wine-dark sea / bronze-age Aegean: sea teal, oxidized bronze gold,
    // amphora terracotta, on wine-dark sea night (dark) or aged papyrus (light).
    // Contrast verified for WCAG AA in both modes.
    primary: "#1f5568",           // Aegean sea teal
    secondary: "#b3873f",          // oxidized bronze gold
    accent: "#b23e24",             // amphora terracotta / wine red, the CTA pop
    accentHover: "#97331c",
    background: "#0b1a24",         // wine-dark sea night (dark mode)
    backgroundLight: "#efe4cd",    // aged papyrus (light mode)
    surface: "#122b38",            // deep sea panel (dark)
    surfaceLight: "#f7eeda",       // lighter papyrus (light)
    text: "#f1e7d2",               // warm bone on dark
    textMuted: "#a6bcc1",          // muted sea-foam gray (7.5:1 on surface)
    textDark: "#17303b",           // deep ink teal on papyrus
    textDarkMuted: "#5a4d34",      // aged ink brown (7:1 on papyrus)
    border: "#284c5a",             // rule (dark)
    borderLight: "#d7c7a2",        // rule (light)
    gradient: "linear-gradient(135deg, #0b1a24 0%, #1f5568 55%, #b23e24 100%)",
  },

  fonts: {
    // Cormorant Garamond: high-contrast literary display serif, the illustrated
    //   fine-press-edition voice for giant headlines.
    // Spectral: a serif built for screens, warm and readable, the printed-epic body.
    // JetBrains Mono: the cold data-scientist / ship's-log voice for labels + stats.
    heading: "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
    body: "'Spectral', Georgia, 'Times New Roman', serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=JetBrains+Mono:wght@400;700&family=Spectral:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap",
  },

  layout: {
    heroStyle: "editorial",
    navStyle: "fixed",
    cardStyle: "outlined",
    sectionStyle: "magazine",
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
    subtitle: "A two-week sail home. It took him ten years.",
    description: "This week the whole world gets a new Odyssey. So here's mine. Odysseus was the cleverest man in any room, which is exactly why the story lands: a sail from Troy to Ithaca should have taken two weeks, and it took him ten years. He taunted the Cyclops and shouted his own name and address on the way out. His crew opened the bag of winds within sight of home. He lingered a year with Circe. Information was never his problem (a prophet told him precisely what would happen). Asking good questions, and listening to the answers, was. I've been playing him all week, which was closer to typecasting than I'd like.",
    heroImage: "hero-2026-07-11.jpg",
    imageAlt: "Edward Roske illustrated as Odysseus, a weathered bronze-age Greek hero, bracing at the wooden steering-oar at the stern of a battered galley on the wine-dark Aegean at golden dawn, torn crimson cloak whipping in the wind, wearing his signature deep blue felt fedora with a bronze band instead of a war helmet, sea spray and rolling swells around him, in the style of an IMAX 65mm film still.",
    ctaText: "Follow the crossing",
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
