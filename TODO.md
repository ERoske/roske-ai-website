# TODO.md — Roske.AI Website

All pending phases for building and maintaining roske.ai.

---

## Phase 1: Project Scaffolding & GitHub Setup

**Goal**: Get Astro project initialized, GitHub repo created, and deployment pipeline working so we can see a live site at roske.ai (even if it's just a placeholder).

### Tasks
- [ ] Initialize Astro project with TypeScript
- [ ] Install dependencies: `@astrojs/tailwind`, `@astrojs/mdx`, `@astrojs/sitemap`
- [ ] Configure `astro.config.mjs` with `site: 'https://roske.ai'`
- [ ] Add `public/CNAME` file containing `roske.ai`
- [ ] Create `.github/workflows/deploy.yml` for GitHub Pages deployment
- [ ] Create `.gitignore` for Astro/Node project
- [ ] Create a simple placeholder `index.astro` page ("Roske.AI — Coming Soon")
- [ ] Initialize git repo, commit, push to GitHub (repo: `roske-ai-website` on `eroske` account)
- [ ] Enable GitHub Pages in repo settings (source: GitHub Actions, custom domain: roske.ai)
- [ ] **REQUIRES EDWARD**: Walk Edward through DNS configuration at name.com (step-by-step instructions below)
- [ ] Verify site is live at https://roske.ai with HTTPS

### DNS Instructions for Edward (name.com)
1. Log into name.com
2. Go to My Domains → roske.ai → Manage DNS Records
3. Delete any existing A or AAAA records for the bare domain (host = blank or @)
4. Add these 4 A records (type: A, host: leave blank, TTL: 300):
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
5. Add these 4 AAAA records (type: AAAA, host: leave blank, TTL: 300):
   - 2606:50c0:8000::153
   - 2606:50c0:8001::153
   - 2606:50c0:8002::153
   - 2606:50c0:8003::153
6. Add 1 CNAME record (type: CNAME, host: www, value: eroske.github.io, TTL: 300)
7. Wait ~15 minutes, then check if https://roske.ai loads

---

## Phase 2: Theme System & Base Layout

**Goal**: Build the theme architecture that enables complete weekly redesigns. Create the first stunning theme.

### Tasks
- [ ] Design the theme configuration system (`src/themes/theme-config.ts`)
  - Color palette (primary, secondary, accent, background, surface, text colors)
  - Typography (heading font, body font, font sizes, weights)
  - Layout variant (hero style, section layouts, card styles, navigation style)
  - Animation preferences (entrance animations, hover effects, transitions)
  - Dark mode overrides
- [ ] Create `BaseLayout.astro` that reads theme config and applies it
- [ ] Implement dark/light mode toggle with `localStorage` persistence + system preference detection
- [ ] Create `ThemeToggle.astro` component (no flash of wrong theme on load)
- [ ] Create responsive navigation component (desktop: full nav bar; mobile: slide-out menu)
- [ ] Create footer component with social links
- [ ] Create first theme: "Launch Week" — bold, futuristic, dark earth tones
- [ ] Write tests for theme config validation
- [ ] Verify dark/light mode works correctly

---

## Phase 3: Core Pages — Home, About, Resume

**Goal**: Build the three most important pages with real content.

### Tasks
- [ ] **Home page** (`src/pages/index.astro`)
  - Themed hero section with Edward's photo/AI-generated image
  - Tagline: "CEO. Speaker. Data Scientist. Dungeon Master." (or themed variant)
  - Quick links to key sections
  - "What I'm Working On" highlight cards (MCP servers, Caribbean AI Summit, Everest, etc.)
  - "Latest from the Podcast" — pull 3 most recent episodes
  - "Upcoming" section (Caribbean AI Summit, Nepal, MCP server launches)
  - Newsletter signup (embedded form or link)
- [ ] **About page** (`src/pages/about.astro`)
  - Edward's story — career journey told in his voice (spartan + colloquial, dry humor)
  - Key stats: 80+ countries, 7 continents, 13 books, 25 years CEO, 47 countries speaking
  - Personality elements from the personality questionnaire (woven into narrative)
  - "Beyond the Resume" section — D&D, travel, escape rooms, Dallas Cowboys, IMDB credits
  - Companies section: Dawnward, Caprus, Argano (with logos where available)
  - Puerto Rico AI Community
- [ ] **Resume/CV page** (`src/pages/resume.astro`)
  - Interactive timeline layout (not a boring PDF)
  - Career milestones from 1995 to present
  - Education: SMU MS Data Science (4.0), Shimer BA
  - Awards & certifications
  - Publications section linking to Books page
  - Skills & expertise areas
  - Downloadable PDF version (generate from content)

---

## Phase 4: Content Pages — Podcast, Books, Speaking

**Goal**: Build the content showcase pages.

### Tasks
- [ ] **Podcast page** (`src/pages/podcast.astro`)
  - Pull episodes from RSS feed (https://rss.buzzsprout.com/2430929.rss)
  - Display episode cards: title, guest, date, description, play link
  - Season navigation (Season 1, Season 2)
  - Links to all platforms: Buzzsprout, Apple Podcasts, Spotify, Amazon Music
  - Podcast logo/artwork
- [ ] **Books page** (`src/pages/books.astro`)
  - Grid/list of all 13 "Look Smarter Than You Are" titles
  - Book cover images from Amazon
  - Amazon purchase links
  - Brief descriptions
  - Note about writing 13 books before the age of generative AI
- [ ] **Speaking & Education page** (`src/pages/speaking.astro`)
  - Keynote topics & descriptions
  - Conference history: Kscope (2011-2025), Oracle OpenWorld, COLLABORATE, international tours
  - Awards: Speaker of the Year, Lifetime Achievement, Oracle ACE Director
  - Webinar/interview appearances with links
  - YouTube AI News brief embed or link
  - Speaking inquiry form (email to Edward@Roske.AI)
  - "47 countries. 6 continents. 300+ presentations."

---

## Phase 5: Blog & Contact

**Goal**: Set up the blog content system and contact form.

### Tasks
- [ ] **Blog system**
  - Configure Astro Content Collections for blog posts (`src/content/blog/`)
  - Create blog index page with post cards (`src/pages/blog/index.astro`)
  - Create blog post layout (`src/layouts/BlogPost.astro`)
  - Support MDX (for rich content with components)
  - Tags/categories
  - RSS feed generation for the blog
  - Write 2-3 seed blog posts:
    - "Why I'm Building MCP Servers for Finance"
    - "What the Caribbean AI Summit Means for AI's Future"
    - "Hiking to Everest Base Camp: What I'm Learning About Preparation"
- [ ] **Contact page** (`src/pages/contact.astro`)
  - Web3Forms integration (sends email to Edward@Roske.AI)
  - Sign up for free Web3Forms account, get access key
  - Form fields: Name, Email, Subject (dropdown: General, Speaking Inquiry, Partnership, Media), Message
  - "Answering a Good Question" section — 13-minute meeting booking link
  - Calendar embed or prominent link: https://calendar.app.google/udtTerQwcX9Z7QQt7
  - Social media links
  - Newsletter signup form

---

## Phase 6: Logo Generation & Image Assets

**Goal**: Create brand assets for Roske.AI and Dawnward.

### Tasks
- [ ] Generate Roske.AI logo using image-generator skill (multiple options)
- [ ] Generate Dawnward logo using image-generator skill (multiple options)
- [ ] Download/save company logos locally (Argano, Caprus, Asking Good Questions, Look Smarter)
- [ ] Download Edward's headshot for local hosting
- [ ] Generate favicon and apple-touch-icon from Roske.AI logo
- [ ] Create Open Graph / social sharing images
- [ ] Generate first themed hero image of Edward for launch week

---

## Phase 7: SEO, Performance & Polish

**Goal**: Make the site fast, discoverable, and professional.

### Tasks
- [ ] Add meta tags to all pages (title, description, og:image, twitter:card)
- [ ] Configure sitemap generation (`@astrojs/sitemap`)
- [ ] Add robots.txt
- [ ] Add structured data (JSON-LD) for Person, Organization, Podcast
- [ ] Optimize images (use Astro's built-in image optimization)
- [ ] Lighthouse audit — target 95+ on all metrics
- [ ] Test responsive design on mobile, tablet, desktop
- [ ] Test dark/light mode on all pages
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Add 404 page
- [ ] Add analytics (privacy-friendly: Plausible or similar, or skip if Edward prefers)

---

## Phase 8: Weekly Rebuild Automation

**Goal**: Set up the autonomous Saturday 5 AM rebuild system.

### Tasks
- [ ] Create `scripts/weekly-rebuild.ps1` PowerShell script that:
  1. Activates the Claude Code environment
  2. Runs Claude Code with a prompt to execute the weekly rebuild
  3. Logs output to `logs/weekly-rebuild-YYYY-MM-DD.log`
- [ ] Create `scripts/weekly-rebuild-prompt.md` — the master prompt for weekly redesigns:
  1. Research what's topical this week (movies, TV, sports, cultural events)
  2. Pick a theme and design concept
  3. Generate a new theme config
  4. Generate a themed hero image of Edward (via image-generator skill)
  5. Fetch latest podcast episodes from RSS
  6. Check Edward's weekly questionnaire (`content-input/weekly-update.md`)
  7. Rebuild all visual components with the new theme
  8. Update "What I'm Working On" and "Upcoming" sections
  9. Run tests
  10. Commit with descriptive message and push to main
- [ ] Create `content-input/weekly-update.md` template (Edward's questionnaire)
- [ ] Create `.claude/skills/weekly-site-redesign/SKILL.md` for the weekly rebuild skill
- [ ] **REQUIRES EDWARD**: Set up Windows Task Scheduler job:
  - Trigger: Weekly, Saturday, 5:00 AM AST
  - Action: Run `scripts/weekly-rebuild.ps1`
  - (Detailed step-by-step instructions will be provided)
- [ ] Test the full rebuild pipeline end-to-end
- [ ] Create `scripts/manual-rebuild.ps1` for on-demand rebuilds

---

## Phase 9: Content Pipeline & Auto-Sourcing

**Goal**: Build scripts that automatically pull fresh content from Edward's public presence.

### Tasks
- [ ] Create `scripts/fetch-podcast-episodes.ts` — fetch from RSS, parse, save to content collection
- [ ] Create `scripts/fetch-youtube-videos.ts` — fetch latest videos from YouTube channel
- [ ] Create `scripts/fetch-social-media.ts` — pull recent X/Twitter posts (public API or scraping)
- [ ] Create `scripts/news-mentions.ts` — search web for recent "Edward Roske" mentions
- [ ] Create `scripts/fetch-all-content.ts` — orchestrator that runs all fetchers
- [ ] Integrate content fetching into the weekly rebuild pipeline
- [ ] Create a "What's New" component that displays auto-sourced content

---

## Phase 10: Newsletter Integration

**Goal**: Set up a newsletter signup system.

### Tasks
- [ ] Evaluate options: Buttondown (free tier), Substack, ConvertKit, Mailchimp
- [ ] Set up chosen newsletter platform
- [ ] Create signup form component
- [ ] Embed on Home and Contact pages
- [ ] Create welcome email template in Edward's voice
- [ ] **REQUIRES EDWARD**: Connect newsletter to Edward@Roske.AI or preferred sending address

---

## Phase 11: Advanced Features & Ongoing Maintenance

**Goal**: Nice-to-haves and ongoing improvements.

### Tasks
- [ ] Create a "theme archive" page showing previous weekly themes with screenshots
- [ ] Add page transition animations
- [ ] Add a "surprise me" Easter egg (something D&D themed?)
- [ ] Create a speaking inquiry form with calendar availability integration
- [ ] Add testimonials section (pull from LinkedIn recommendations)
- [ ] Set up weekly theme preview system (generate next week's theme earlier for review if needed)
- [ ] Monitor and maintain — fix any issues that arise from weekly rebuilds
