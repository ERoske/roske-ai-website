# CLAUDE.md

This file provides guidance to Claude Code when working with files in this repository. This is running on a **Windows machine** (not Mac or Linux) so make sure you format paths correctly (backslashes for Windows commands, forward slashes for web/config files).

## Repository Purpose

This is the source code and automation layer for **roske.ai** — the personal website of Edward Roske. The site is built with **Astro** (static site generator), hosted on **GitHub Pages**, and **completely redesigned every Saturday at 5 AM** by a scheduled local task running Claude Code.

## Architecture Overview

```
roske-ai-website/
├── src/                        # Astro source code
│   ├── layouts/                # Base layouts (rebuilt weekly)
│   ├── pages/                  # Page routes (index, about, blog, contact, etc.)
│   ├── components/             # Reusable UI components
│   ├── content/                # Content collections (blog posts, books, talks, etc.)
│   ├── styles/                 # Global styles & theme system
│   └── themes/                 # Weekly theme configurations
├── public/                     # Static assets (images, CNAME, fonts, favicons)
├── scripts/                    # Automation scripts (weekly rebuild, content fetching)
├── content-input/              # Edward's weekly questionnaire responses
├── personal-details/           # Edward's CVs, personality docs, reference material
├── .github/workflows/          # GitHub Actions for auto-deploy on push
├── .claude/skills/             # Claude Code skills for content generation
├── tests/                      # Test suite
├── TODO.md                     # Pending phases
├── COMPLETE.md                 # Completed phases
└── astro.config.mjs            # Astro configuration
```

## Tech Stack

- **Framework**: Astro (static site generator with component islands)
- **Styling**: Tailwind CSS v4 + CSS custom properties for theming
- **Content**: Astro Content Collections (Markdown/MDX for blog)
- **Hosting**: GitHub Pages (free, via GitHub Actions deploy)
- **Domain**: roske.ai (DNS via name.com)
- **Contact Form**: Web3Forms (sends to Edward@Roske.AI, no backend needed)
- **Image Generation**: Google Gemini Nano Banana Pro (via `scripts/gemini_image_gen.py`, requires `GEMINI_API_KEY`)
- **Weekly Rebuild**: Windows Task Scheduler → PowerShell script → Claude Code

## The Weekly Redesign System

Every Saturday at 5 AM AST, a scheduled Windows task runs Claude Code which:

1. **Researches what's topical** — upcoming movies, TV shows, sporting events, cultural moments
2. **Picks a theme** — transforms the entire site to match (layout, colors, typography, animations, imagery)
3. **Generates a themed hero image** of Edward using Gemini Nano Banana Pro
4. **Pulls fresh content** from Edward's podcast RSS, YouTube, social media, and news mentions
5. **Reads Edward's questionnaire** (if filled out) from `content-input/weekly-update.md`
6. **Rebuilds the entire site** — new Astro components, new CSS theme, new layout variant
7. **Runs tests** to verify the build
8. **Commits and pushes** to GitHub → GitHub Actions deploys to roske.ai

### Weekly Questionnaire

Edward can optionally fill out `content-input/weekly-update.md` before Saturday:

```markdown
## What new things am I working on?
(Edward's notes here)

## What new things do I have planned?
(Edward's notes here)

## Any other changes for next week's website?
(Edward's notes here)
```

If the file is empty or unchanged, the rebuild proceeds with auto-sourced content only.

### Theme Philosophy

- **Option A: Full redesign** — completely different visual theme every week
- **Topical** — tied to what's happening in the world (movie releases, TV premieres, sporting events, cultural moments)
- **Edward is the butt of the joke** — AI-generated images of Edward in themed scenarios (e.g., Edward as a superhero for a Marvel release)
- **Award-winning quality** — cutting edge, the site people want to copy
- **Amusing without telling jokes** — dry humor, parenthetical asides, non sequiturs
- **Never stock photos** — only AI-generated images featuring Edward, or real photos of Edward

## Website Pages & Sections

1. **Home** — Hero section with themed imagery, tagline, quick links. Highlights current projects.
2. **About** — Edward's story, career journey, personality. "CEO. Speaker. Data Scientist. Dungeon Master."
3. **Companies** — Dawnward, Caprus, Argano (with logos). Brief descriptions.
4. **Speaking & Education** — Conference talks, webinars, interviews. Speaking inquiry form.
5. **Podcast** — "Asking Good Questions" episodes pulled from RSS. Links to Apple, Spotify, Amazon Music.
6. **Books** — "Look Smarter Than You Are" series (13 titles). Amazon links.
7. **Blog** — Articles, AI news, thought leadership. MDX content collection.
8. **Contact** — Web3Forms contact form + "Answering a Good Question" 13-minute booking link.
9. **Resume/CV** — Modern, interactive resume page (not a PDF download). Career timeline.

## Available Skills

Skills are stored in `.claude/skills/` and invoked via the Skill tool.

### Website Skills
- `website-content-manager` — Structure content, write copy, SEO optimization
- `news-aggregator` — Research & summarize news for content updates
- `image-generator` — Generate images via Google Gemini API (requires `GEMINI_API_KEY`)
- `social-media-strategist` — Content calendars & social posts
- `frontend-design` — Create distinctive, production-grade frontend interfaces

### Personal Assistant Skills (not website-facing)
- `calendar-week-brief`, `daily-priorities-generator`, `meeting-today`, `meeting-planner`
- `email-triage-assistant`, `gmail-response-assistant`
- `pre-meeting-research-brief`, `strategic-brief-builder`, `competitive-intel-brief`
- `reading-list-manager`, `learning-path-curator`, `interview-assistant`
- `one-on-one-planner`, `travel-briefing-generator`, `business-plan-analyzer`
- `linkedin-profile-researcher`, `weekly-executive-brief`
- `presentation-builder`, `speaking-prep-kit`
- `dnd-adventure-writer`

### Skill Usage Guidelines
- Skills should be invoked when working on to-do items that match their capabilities
- Each skill has specific instructions in its `SKILL.md` file
- Skills produce output files in the `outputs/` directory
- Skills may use web search, research, and formatting to complete tasks

### Creating New Skills
1. Assess if existing skills cover the task
2. If not, create `.claude/skills/[skill-name]/SKILL.md` with YAML frontmatter
3. Test the skill with a realistic scenario
4. Document it in this file

## Key Information: Edward Roske

### Professional Identity
- CEO of multiple AI companies, renowned public speaker, world traveler, Data Scientist
- Expert in: AI, Data Science, EPM, finance, Office of the CFO, planning, financial consolidation, analytics
- Author/co-author of 13+ non-fiction books ("Look Smarter Than You Are" series)
- Host of "Asking Good Questions" podcast
- President of Puerto Rico AI Community (850+ attendees as of Feb 2026)
- Co-chair of Caribbean AI Summit (October 16-17, 2026 — "the largest AI conference the world's ever seen")
- Master of Data Science from SMU (perfect 4.0 GPA, "Outstanding Graduate")
- Bachelor of Arts from Shimer College
- Oracle ACE Director (15+ years), ODTUG Lifetime Achievement Award
- First person to score perfectly on Essbase Certification exam
- Spoken in 50+ countries across all 7 continents
- Founded interRel Consulting at age 22, built it over 25 years, merged into Argano in 2020

### Current Work (as of Feb 2026)
- **Dawnward** — Umbrella investment company (CEO)
- **Caprus** — AI Software & Services firm (President & investor)
- **Argano** — Still owns 1/30 (billion-dollar consulting firm he helped form)
- Coding **MCP servers** (currently launching Oracle EPM Consolidations MCP server)
- Building an **AI-driven DM's screen** for D&D campaigns
- Monthly **AI News brief** on YouTube
- Preparing to hike to **Mt. Everest base camp** in Nepal

### Personality & Voice
- IQ of 180 but self-deprecating and approachable
- Very dry sense of humor — no jokes, but parenthetical asides and non sequiturs welcome
- Tone: 50% spartan, 50% colloquial
- Competitive (his biggest Clifton StrengthsFinder result)
- Introvert who excels at public speaking and selling
- "There's nothing worse in life than being ordinary"
- Experiential learner — dives in and learns by doing
- Pet peeves: spreadsheets without Freeze Panes, being called "Ed", small talk, stock photos
- Communication style: brief, efficient, dry wit
- Happy to be the butt of the joke (loves AI-generated images of himself in absurd scenarios)

### Personal
- Lives in San Juan, Puerto Rico with wife Dawn (artist: oil painting, watercolors)
- Two adult sons: Mycroft and Eliot (Miami, FL)
- Email: Edward@Roske.AI
- Email signature: "Asking good questions,\nEdward"
- Vegetarian (Dawn eats everything)
- Loves: luxury travel (80+ countries, all 7 continents), D&D (DM for 5e Eberron), escape rooms, reading, sci-fi/action/comedy/fantasy/superhero movies & TV, Dallas Cowboys
- IMDB credit as Producer (BattleBots, How to Plan an Orgy in a Small Town)
- Two patents for custom postage stamps

### Social Links
- X/Twitter: https://x.com/eroske
- LinkedIn: https://www.linkedin.com/in/interrel/
- YouTube: https://www.youtube.com/channel/UCOygNSOFfyHIRFvC6hbRpkQ
- Podcast RSS: https://rss.buzzsprout.com/2430929.rss
- Podcast (Buzzsprout): https://askinggoodquestions.buzzsprout.com/
- Podcast (Apple): https://podcasts.apple.com/podcast/id1783616142
- Podcast (Spotify): https://open.spotify.com/show/2MJqqgiNbQGysS6i0MAihh
- Podcast (Amazon): https://music.amazon.com/podcasts/f5a5f18a-4c16-4f89-8735-079d49f49e49
- GitHub: https://github.com/eroske
- Amazon Author: https://www.amazon.com/stores/Edward-Roske/author/B00J237CUW
- Calendar Booking: https://calendar.app.google/udtTerQwcX9Z7QQt7

## Design Preferences

- **Colors**: Earth tones preferred (dark reds, dark blues, dark greens) but varies weekly
- **Mode**: Both dark and light mode with system preference detection + toggle
- **No**: Stock photos, hamburger menus (on desktop)
- **Yes**: AI-generated images of Edward, cutting-edge animations, bold typography, responsive design
- **Imagery**: Use `image-generator` skill to create themed images of Edward each week

## Development Workflow

### Phase Management
- **TODO.md** — pending phases with detailed task lists
- **COMPLETE.md** — completed phases with summary of what was built
- After completing a phase: move it from TODO.md → end of COMPLETE.md

### Running Tests
```
npm run test
```
- Do NOT report test counts. Just mention pass/fail and fix failures.

### Building Locally
```
npm run dev      # Dev server with hot reload
npm run build    # Production build to ./dist
npm run preview  # Preview production build locally
```

### Deploying
Push to `main` branch → GitHub Actions builds and deploys to GitHub Pages automatically.

### How to Execute a Phase
1. Read the phase description in TODO.md
2. Write tests first (or alongside) implementation
3. Implement until tests pass
4. Run full test suite to confirm nothing broke
5. Move completed phase from TODO.md to COMPLETE.md (include summary)
6. Tell Edward pass/fail only

## Content Sources (for weekly rebuilds)

| Source | URL | What to Pull |
|--------|-----|-------------|
| Podcast RSS | https://rss.buzzsprout.com/2430929.rss | Latest episodes, titles, descriptions |
| YouTube | https://www.youtube.com/channel/UCOygNSOFfyHIRFvC6hbRpkQ | Latest AI News briefs |
| X/Twitter | https://x.com/eroske | Recent posts, AI-generated images |
| LinkedIn | https://www.linkedin.com/in/interrel/ | Professional updates |
| Weekly questionnaire | content-input/weekly-update.md | Edward's manual updates |

## Reference Data

### Books (13 titles)
All "Look Smarter Than You Are" series, co-authored primarily with Tracy McMullen:
1. Look Smarter Than You Are with Hyperion Essbase
2. Look Smarter Than You Are with Essbase 11: An Administrator's Guide
3. Look Smarter Than You Are with Smart View and Essbase 11: An End User's Guide
4. Look Smarter Than You Are with Essbase 11.1.2: An Administrator's Guide (+ Robert Gideon)
5. Look Smarter Than You Are with Smart View 11.1.2
6. Look Smarter Than You Are with Oracle Hyperion Planning: An End User's Guide
7. Look Smarter Than You Are with Hyperion Planning: An Administrator's Guide
8. Look Smarter Than You Are with Hyperion Planning 11.1.2: An End User's Guide
9. Look Smarter Than You Are with Hyperion Planning 11.1.2: Creating Hyperion Planning Applications
10. Look Smarter Than You Are with Hyperion Planning 11.1.2: Advanced Hyperion Planning
11. Look Smarter Than You Are with Oracle Enterprise Planning Cloud
12. Look Smarter Than You Are with Oracle Planning and Budgeting Cloud
13. Look Smarter Than You Are with Oracle Analytics Cloud Standard Edition

### Career Timeline (Key Milestones)
- 1995-1997: Senior Analytics Consultant, Technium/Pinnacle
- 1997: Founded interRel Consulting at age 22
- 1997-2020: CEO of interRel (25 years, longest-standing Oracle Platinum EPM Partner)
- 2016: Completed BA from Shimer College
- 2018: Essbase Speaker of the Year (Kscope18)
- 2019-2021: MS Data Science from SMU (4.0 GPA, Outstanding Graduate)
- 2020: Merged interRel into Argano
- 2020-2023: CEO of ArganoInterRel / Chief Performance Officer at Argano
- 2023: Left Argano, launched AI ventures
- 2023-Present: CEO Roske.AI, President Caprus, CEO Dawnward
- 2025: ODTUG Lifetime Achievement Award (Kscope25)
- 2026: Co-chair Caribbean AI Summit, launching EPM Consolidations MCP server

### Awards & Certifications
- Oracle ACE Director (15+ years)
- ODTUG Lifetime Achievement Award (2025)
- Essbase Speaker of the Year (Kscope18)
- Five-time Oracle Partner of the Year (through interRel)
- First perfect score on Essbase Certification exam
- Kscope Conference Chair (2011-2012)
- ODTUG Board Member
- Two US Patents (#5836617, #5848810)
