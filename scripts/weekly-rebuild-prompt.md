# Weekly Site Redesign — Roske.AI

You are performing the weekly autonomous redesign of roske.ai. Follow these steps in order.

## 1. Research What's Topical

Search for what's happening this week and the week ahead:
- Major movie releases or premieres
- TV show premieres or finales
- Sporting events (NFL, NBA, MLB, Olympics, World Cup, etc.)
- Cultural moments, holidays, viral trends
- Major tech/AI announcements

Pick ONE theme that's fun, visual, and lends itself to a complete site redesign. The theme should be something Edward can be humorously placed into (via AI-generated imagery). Edward is always the butt of the joke.

## 2. Generate Theme Configuration

Create a new theme config in `src/themes/theme-config.ts`. The theme should include:
- **Colors**: A complete palette (primary, secondary, accent, backgrounds, text, borders) for both dark and light modes
- **Fonts**: Choose Google Fonts that match the theme mood (heading, body, mono)
- **Layout variant**: Pick from "editorial", "brutalist", "glass", "magazine", or create a new one
- **Hero content**: Themed tagline, subtitle, and CTA text
- **Animation style**: Match the theme energy (subtle for serious themes, playful for fun ones)

Make sure both dark mode and light mode look excellent.

## 3. Generate Hero Image

Use the image-generator skill to create a themed hero image of Edward Roske. The image should:
- Feature Edward in a scenario related to this week's theme
- Be amusing without being disrespectful
- Work well as a large hero image (16:9 aspect ratio, pro model)
- Save to `public/images/hero-current.png`

Edward is: mid-40s, male, brown hair, glasses, typically wears business casual. He's happy to look ridiculous.

## 4. Fetch Fresh Content

### Podcast Episodes
Fetch the latest episodes from the RSS feed: https://rss.buzzsprout.com/2430929.rss
Update the podcast page with the latest 5 episodes (title, date, description, link).

### Weekly Questionnaire
Read `content-input/weekly-update.md`. If Edward has filled it out with new information:
- Update the "What I'm Working On" section on the home page
- Add any new blog posts he's outlined
- Update any other sections he's mentioned

If the file is empty or unchanged, skip this step.

## 5. Rebuild Visual Components

Apply the new theme across the entire site:
- Update the theme config (colors, fonts, layout)
- Restyle the hero section with the new image and themed content
- Ensure all pages look cohesive with the new theme
- Test that dark/light mode both work

Do NOT change the content/copy on pages (About, Resume, Books, etc.) unless the weekly questionnaire says to. Only change visual design and the home page hero area.

## 6. Build & Test

Run `npm run build` and verify:
- All pages compile without errors
- No broken links or missing assets
- Both dark and light modes render correctly

If the build fails, fix the issue and rebuild.

## 7. Commit & Deploy

Stage all changed files and commit with a descriptive message like:
```
Weekly redesign: [Theme Name] — [brief description]

- New theme: [what inspired it]
- Updated podcast episodes
- [any other changes]

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

Push to main. GitHub Actions will auto-deploy.

## Important Notes

- NEVER commit API keys or secrets
- NEVER modify CLAUDE.md, TODO.md, COMPLETE.md, or README.md
- Keep the site professional — Edward is the joke, the site is not
- If something goes wrong, log the error and skip that step rather than breaking the site
- The previous theme should be fully replaced — don't leave remnants
