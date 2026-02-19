---
name: meeting-today
description: Prepare for all meetings in next 24 hours with research, agendas, and reminder emails
---

# Meeting Today

Automatically prepare for all meetings in the next 24 hours by researching attendees, generating question-based agendas, and drafting reminder emails. Time to create: 15-25 minutes.

## Purpose

Stay ahead of your meetings while ensuring they're productive. This skill serves dual purposes:
1. **Subtle reminder**: Sends casual "thinking about our meeting" emails to attendees
2. **Meeting effectiveness**: Creates question-based agendas to drive valuable conversations

**Be extremely concise. Sacrifice grammar for the sake of concision.**

## Input Requirements

All data is **automatically fetched via MCP servers**. No manual input required.

### Using Calendar MCP Server

- Use `mcp__calendar__list_events` with `days_ahead: 1` to fetch meetings in next 24 hours
- Parse event data for: summary (title), start time, description/notes, attendee emails

### Using Gmail MCP Server

- Use `mcp__gmail__search_emails` with query like `from:attendee@email.com OR to:attendee@email.com`
- Fetch 5 most recent emails per attendee for context
- Use snippets and subjects to understand relationship/projects

### Using LinkedIn/Web (Fallback)

- If no email history exists for an attendee, use `mcp__linkedin__fetch_linkedin_profile` or `WebSearch`
- Research their role, company, recent activity
- Use this context to infer meeting purpose

## Workflow Steps

### Step 1: Fetch Calendar Events
- Get all events in next 24 hours
- Filter out:
  - All-day events
  - Events with "Personal" in title
  - Events with "Flight" in title
  - Events where you're the only attendee

### Step 2: Extract & Filter Attendees
For each meeting, extract attendee emails and filter out:
- Emails starting with "edward" or "eroske" (yourself)
- Bot/automated emails:
  - Contains "noreply", "no-reply", "donotreply"
  - Contains "calendar", "notifications", "mailer-daemon"
  - Domain `@calendar.google.com`, `@notifications.*`

### Step 3: Research Each Attendee
For each valid attendee:
1. Search Gmail: `from:attendee@email.com OR to:attendee@email.com` (max 5 results)
2. If no results, fallback to LinkedIn profile lookup or web search
3. Extract context: current projects, pending issues, their role/expertise

### Step 4: Synthesize Context
- Combine meeting title, description, and attendee research
- Identify meeting purpose and key topics
- Note who organized the meeting (prioritize their context unless you're the organizer)

### Step 5: Generate Question-Based Agenda
Create 3-5 open-ended questions covering:
1. **Goal**: "What does success look like for this meeting?"
2. **Context**: Question based on research findings (projects, issues, expertise)
3. **Decisions**: "What decisions need to be made?"
4. **Actions**: "What are the next steps we need to agree on?"
5. **Open**: "Is there anything else you'd like to discuss?"

Tailor questions to specific meeting context (don't use generic templates).

### Step 6: Draft Reminder Emails
Create 3 variations, all casual/friendly:
- **Variation 1**: Brief (2-3 sentences, agenda as bullets)
- **Variation 2**: Moderate (3-4 sentences, agenda as questions)
- **Variation 3**: Detailed (4-5 sentences, context + agenda)

Format:
```
Subject: Our meeting [today/tomorrow]

[Opening line acknowledging the meeting]

[1-2 sentences of context or small talk]

[Proposed agenda introduction]
[Agenda questions]

[Closing question inviting feedback]

Asking good questions,
Edward
```

### Step 7: Save Output
- Save all 3 email drafts to markdown file
- Mark the **recommended** draft (usually Variation 2)
- Include meeting metadata (time, attendees, research summary)
- Save to `outputs/Meeting Prep/[YYYY-MM-DD]-[meeting-title].md`

### Step 8: Manual Gmail Draft (Current Limitation)
**Note**: Gmail MCP doesn't currently support draft creation.
- Copy the recommended draft from the output file
- Manually paste into Gmail as draft
- Send when ready

## Core Structure

Each output file contains:

### Meeting Metadata
- **Meeting**: Title
- **Date/Time**: Start time
- **Attendees**: List of external attendees (filtered)
- **Organizer**: Who created the meeting

### Research Summary
- **Context**: What we learned from emails/LinkedIn/web
- **Key Topics**: Main discussion points identified
- **Relationship Notes**: Ongoing projects, past discussions

### Proposed Agenda
- 3-5 open-ended questions
- Tailored to specific meeting context
- Designed to drive productive conversation

### Email Drafts
- **Variation 1** (Brief)
- **Variation 2** (Moderate) ← **RECOMMENDED**
- **Variation 3** (Detailed)

---

## Email Filtering Logic

### Emails to Exclude (Non-Human)
- Starts with "edward" or "eroske"
- Contains: "noreply", "no-reply", "donotreply", "do-not-reply"
- Contains: "calendar", "notification", "mailer-daemon", "postmaster"
- Domains: `calendar.google.com`, `notifications.*`, `automated.*`

### Valid Human Attendees
- Personal/corporate email addresses
- No calendar bots or notification systems
- Active participants (not BCC'd/optional)

---

## Example Output

# Meeting Prep: Meeting with Ali to go over Caprus financials
**Generated**: 2025-12-12 at 8:30 PM

## Meeting Metadata

- **Meeting**: Meeting with Ali to go over Caprus financials
- **Date/Time**: December 13, 2025 at 10:00 AM
- **Duration**: 1 hour
- **Attendees**: ali@caprus.com
- **Organizer**: ali@caprus.com

## Research Summary

**Email Context** (5 recent emails):
- Nov 15: Ali sent Q3 financial review showing 23% revenue growth
- Nov 8: Discussion about projected burn rate for Q4
- Oct 22: Ali flagged concerns about cash flow timing in December
- Oct 10: Review of budget variance analysis for FY2025
- Sep 28: Ali shared updated P&L format for board reporting

**Key Topics Identified**:
- Q4 financial performance review
- Cash flow management concerns (December timing)
- FY2025 budget planning
- Board reporting requirements

**Relationship Notes**:
- Ali is CFO at Caprus
- Regular financial review cadence (monthly)
- Edward serves as financial advisor/consultant

## Proposed Agenda

1. What are the most critical financial metrics you want to focus on for Q4?
2. How has the December cash flow situation evolved since our last conversation in October?
3. What decisions do we need to make about the FY2025 budget before the board meeting?
4. Are there any financial reporting format changes you're considering for the board?
5. Is there anything else on your mind about Caprus's financial position?

---

## Email Drafts

### Variation 1: Brief

**Subject**: Our meeting tomorrow

Hey Ali!

Just thinking about our meeting tomorrow at 10am. How's this for an agenda:

- Q4 financial performance priorities
- December cash flow update
- FY2025 budget decisions needed before board meeting
- Board reporting format considerations
- Any other financial topics on your mind

Let me know if you want to add anything.

Asking good questions,
Edward

---

### Variation 2: Moderate ← **RECOMMENDED**

**Subject**: Our meeting tomorrow

Hey Ali!

Looking forward to our financial review tomorrow at 10am. I've been thinking about what would make this most valuable for you.

Here's what I'm thinking we should cover:

- What are the most critical financial metrics you want to focus on for Q4?
- How has the December cash flow situation evolved since we last talked in October?
- What decisions do we need to make about the FY2025 budget before the board meeting?
- Are there any financial reporting format changes you're considering for the board?
- Anything else on your mind about Caprus's financial position?

Does this hit the right topics, or should we adjust?

Asking good questions,
Edward

---

### Variation 3: Detailed

**Subject**: Our meeting tomorrow

Hey Ali!

Looking forward to catching up tomorrow at 10am. I know you've got a lot on your plate with Q4 closing out and the board meeting coming up, so I wanted to make sure we use our time well.

I went back through our last few conversations—particularly the cash flow timing concerns you flagged in October and the board reporting format discussions. Seems like a good time to take stock of where things stand.

Here's what I'm thinking for our agenda:

- What are the most critical financial metrics you want to focus on for Q4?
- How has the December cash flow situation evolved since our last conversation in October?
- What decisions do we need to make about the FY2025 budget before the board meeting?
- Are there any financial reporting format changes you're considering for the board?
- Is there anything else on your mind about Caprus's financial position?

Does this align with what you need to cover, or should we adjust the focus?

Asking good questions,
Edward

---

## Usage Notes

**Time to Create**: 15-25 minutes (depending on number of meetings and research depth)

**When to Use**:
- Every morning to prep for today's meetings
- Evening before a busy meeting day
- When you want to be proactive about meeting effectiveness

**Best Practices**:
- Run this skill in the morning or night before
- Review the research summary to refresh context
- Customize the recommended email draft if needed
- Send reminder emails 12-24 hours before meeting (not day-of unless meeting is afternoon)

**Integration with Meeting Flow**:
1. Morning: Run `meeting-today` skill
2. Send reminder emails from drafts
3. During meeting: Use agenda as discussion guide
4. After meeting: Use `one-on-one-planner` or note action items

## Output Location

Save outputs to: `outputs/Meeting Prep/[YYYY-MM-DD]-[meeting-title-kebab-case].md`

**Examples**:
- `outputs/Meeting Prep/2025-12-13-Meeting-with-Ali-Caprus-financials.md`
- `outputs/Meeting Prep/2025-12-13-Q4-Planning-Session.md`
- `outputs/Meeting Prep/2025-12-14-Board-Strategy-Review.md`

**File Naming Rules**:
- Use ISO date format (YYYY-MM-DD)
- Convert meeting title to kebab-case
- Remove special characters and spaces
- Keep filename concise (max 80 chars)

## Integration

- **pre-meeting-research-brief**: Use for high-stakes external meetings where deeper LinkedIn/company research is needed
- **one-on-one-planner**: Use after the meeting to plan follow-up 1-on-1s with team members
- **calendar-week-brief**: Provides weekly overview; use `meeting-today` for day-of tactical prep
- **gmail-response-assistant**: Can draft replies to meeting-related emails in your voice
- **daily-priorities-generator**: Incorporates today's meetings into daily priority planning

## Quality Checklist

Before finalizing output:
- ✅ All meetings in next 24 hours are included
- ✅ All-day events and Personal/Flight meetings are excluded
- ✅ Attendee list excludes edward/eroske and bot emails
- ✅ Research summary includes specific context (not generic)
- ✅ Agenda questions are open-ended and meeting-specific
- ✅ Email drafts use casual/friendly tone
- ✅ Recommended draft is clearly marked
- ✅ Output filename follows naming convention
