# TODO.md — Roske.AI Website

All pending phases for building and maintaining roske.ai.

---

## Pending Items (from completed phases)

- [ ] **REQUIRES EDWARD**: Get Web3Forms access key (sign up at web3forms.com) and replace placeholder in `contact.astro`
- [ ] Add blog RSS feed generation
- [ ] Add blog tag filtering

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
