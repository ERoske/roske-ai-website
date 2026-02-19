---
name: calendar-week-brief
description: Generate comprehensive weekly calendar briefing with meeting prep notes and strategic planning
---

# Calendar Week Brief

Generate weekly calendar overview with meeting context and prep priorities. Time to create: 20-30 minutes.

## Purpose

Transform calendar into strategic weekly plan. Provides context for each meeting, identifies prep needed, flags conflicts, and finds deep work opportunities.

**Be extremely concise. Sacrifice grammar for the sake of concision.**

## Input Requirements

1. **Week Start Date**: Which week to analyze
2. **Calendar Data**:
   - **Automatic** (default): Uses Calendar MCP server (`mcp__calendar__list_events`) to fetch week's events
   - **Manual**: User provides calendar data if MCP not available
3. **Context** (optional): Current priorities, projects affecting meeting importance

## Using Calendar MCP Server

When the Calendar MCP server is available, automatically fetch events:
- Use `mcp__calendar__list_events` with date range for the target week
- Parse event data (time, title, attendees, location, description) for analysis
- Identify conflicts, prep requirements, and deep work opportunities

## Core Structure

### Week at a Glance
- Total meeting hours vs. available work hours
- Busiest/lightest days
- Key themes for the week
- Scheduling issues or conflicts

### Day-by-Day Breakdown
For each day with meetings:
- Meeting summary (X hours scheduled)
- Each meeting with time, title, priority
- Deep work gaps (2+ hours)

### Preparation Priorities
Ranked list of meetings requiring prep:
- What to prep, time required, deadline
- Ordered by urgency

## Optional Sections

### Scheduling Insights
- Conflicts or double-bookings
- Overload warnings (>6 hours meetings/day)
- Buffer time recommendations

### Action Items
- Immediate actions before week starts
- Conflicts to resolve

---

## Example Output

# Weekly Calendar Brief
**Week of October 28 - November 1, 2025**

## Week at a Glance

**Total Meeting Time**: 24 hours (48% of work week)
**Busiest Day**: Wednesday (7 hours)
**Lightest Day**: Friday (2 hours)
**Key Themes**: Client conversations (4), team management (3)

**⚠️ Issues**:
- Wednesday 10am double-booked (resolve immediately)
- Tuesday 6 consecutive hours (block lunch)

---

## Monday, October 28
**Summary**: Moderate (4 hours meetings, 4 hours available)

### 9am - Team Standup (60min) - Medium Priority
**Context**: Weekly alignment
**Prep**: Review team updates (15min)

### 4pm - TechCorp Client Call (60min) - High Priority
**Context**: New business opportunity, decision by month-end
**Prep**: Research company, prep discovery questions (30min)

**Deep Work**: 1pm-4pm (3 hours) - Protect for proposal work

---

## Tuesday, October 29
**Summary**: ⚠️ Heavy (6 hours meetings, 2 hours available)

### 9am - Portfolio Board Prep (60min) - Medium
**Prep**: Review Q4 deck (45min)

### 10am - DataFlow Strategy (90min) - High
**Prep**: Review phase 1 report (30min)

### 1pm - Partnership Discussion (90min) - Medium
**Prep**: Research vendor platform (30min)

### 4pm - 1-on-1 Engineering Lead (60min) - High
**Prep**: Review project status (15min)

⚠️ **No lunch break** - Block 12-1pm or move Marketing Sync

---

## Wednesday, October 30
**Summary**: ⚠️⚠️ Busiest (7 hours meetings + CONFLICT)

⚠️ **10am DOUBLE-BOOKED**: Team Standup + Client Call
**Action**: Delegate standup to COO

[Additional meetings listed similarly...]

---

## Preparation Priorities

### Complete by Monday Evening (Total: 1hr 45min)
1. TechCorp prep (30min) - Client call Monday 4pm
2. Investor metrics (45min) - Wednesday call
3. DataFlow report review (30min) - Tuesday strategy

### Complete by Tuesday Evening (Total: 1hr 45min)
4. Board deck feedback (45min) - Tuesday 9am
5. Partnership research (30min) - Tuesday 1pm

---

## Scheduling Insights

**Conflicts**:
- Wednesday 10am double-booking (URGENT)

**Overload**:
- Tuesday: 6 hours meetings
- Wednesday: 7 hours meetings

**Recommendations**:
- Protect Monday 1-4pm deep work
- Block Tuesday lunch
- Move Wednesday D&D planning to weekend

---

## Action Items Before Week Starts

- [ ] Resolve Wednesday 10am conflict
- [ ] Block 2 hours Sunday evening for high-priority prep
- [ ] Decline any new meeting requests for Tuesday/Wednesday

---

## Usage Notes

**Time to Create**: 20-30 minutes each Sunday evening or Monday morning

**Update During Week**: Mark prep as done, note conflicts resolved

**Review Friday**: What worked? What to change for next week?

## Output Location

Save weekly briefs to: `outputs/Daily Briefs/calendar-week-brief-[date].md`

Example: `calendar-week-brief-10.27.2025.md`

## Integration

- **weekly-executive-brief**: Feeds into Monday morning strategic brief
- **daily-priorities-generator**: Pull meeting details for daily planning
- **pre-meeting-research-brief**: Identifies which meetings need deep research
