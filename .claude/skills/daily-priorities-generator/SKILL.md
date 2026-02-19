---
name: daily-priorities-generator
description: Generate focused daily priority list balancing calendar commitments, urgent tasks, and strategic goals
---

# Daily Priorities Generator

Generate a focused daily priority list each morning. Should take 5-10 minutes to create.

## Purpose

Transform overwhelming task lists into focused priorities. Balances today's meetings, urgent commitments, and strategic goals into a realistic daily plan.

**Be extremely concise. Sacrifice grammar for the sake of concision.**

## Input Requirements

1. **Date**: Which day to plan
2. **Calendar**:
   - **Automatic** (default): Uses Calendar MCP server (`mcp__calendar__list_events`) to fetch today's events
   - **Manual**: User provides meeting schedule if MCP not available
3. **Pending Tasks**: Outstanding to-dos and deadlines
4. **Context** (optional): Current priorities, urgent items, energy level

## Using Calendar MCP Server

When the Calendar MCP server is available:
- Use `mcp__calendar__list_events` with today's date range
- Parse event data to understand meeting load, prep needs, and available work time
- Automatically calculate deep work windows between meetings

## Core Structure (Always Include)

### Day Overview
- Meeting load (hours)
- Available work time
- Energy forecast

### Top 3 Must-Do Priorities
Non-negotiable items with:
- What, why, time required, when

### Meetings
For each meeting:
- Time, priority level, prep status

### Not Today
What you're deferring, delegating, or declining

## Optional Sections (Add If Needed)

### Quick Wins
5-minute tasks to knock out between meetings

### Energy Management
High-energy vs. low-energy task allocation

---

## Example Output (Realistic Length)

# Daily Priorities
**Wednesday, October 30, 2025**

## Day Overview
**Meetings**: 3 hours | **Available Work**: 5 hours | **Energy**: Good (spread throughout day)

## Top 3 Must-Do

### 1. Finish Proposal ⏰ 5pm
Complete DataFlow phase 2 proposal for tomorrow's meeting
**Time**: 2 hours | **When**: 10am-12pm

### 2. Client Call Prep ⏰ 1:30pm
Research TechCorp and prep questions
**Time**: 30 min | **When**: 1:30-2pm

### 3. Presentation Prep ⏰ End of day
Review slides for tomorrow's talk
**Time**: 1 hour | **When**: 5-6pm

## Meetings

**9am - Team Standup** (30min) - Medium priority
- ✅ Prep done

**2pm - TechCorp Discovery** (60min) - High priority
- ⏳ Prep 1:30-2pm

**4pm - 1-on-1 Sales Lead** (60min) - High priority
- ⚠️ Need 15min prep at 3:45pm

## Quick Wins
- Approve social media post (2min)
- Review expense report (5min)
- Send thank you email (3min)

## Not Today
- Legal contract → Friday
- Newsletter draft → Next week
- Team offsite planning → Delegate to COO

## Energy
**Morning (9-12)**: High - Use for proposal
**Afternoon (2-5)**: Moderate - Meetings
**Evening (5-6)**: Lower - Familiar prep work

---

## Usage Notes

**Time to Create**: 5-10 minutes each morning

**Keep It Simple**: Not every section needed every day. Focus on Top 3 + Meetings minimum.

**Be Realistic**: If you can't fit it, put it in "Not Today" - better to defer explicitly than fail implicitly.

**Review at Day End**: What got done? What moves to tomorrow? Learn patterns.

## Output Location

Save daily briefs to: `outputs/Daily Briefs/daily-brief-[date].md`

Example: `daily-brief-10.27.2025.md`

## Integration

- **weekly-executive-brief**: Pull weekly priorities to inform daily focus
- **calendar-week-brief**: Pull meeting details and prep needs
- **email-triage-assistant**: Urgent emails become must-do priorities
