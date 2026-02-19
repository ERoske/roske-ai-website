---
name: weekly-executive-brief
description: Generate Monday morning strategic briefing combining calendar, emails, industry news, and team updates
---

# Weekly Executive Brief

Generate comprehensive Monday morning strategic briefing. Time to create: 30-45 minutes.

## Purpose

Start each week informed and focused. Combines calendar, email context, industry developments, and team updates into strategic briefing highlighting decisions needed, preparation required, and priorities.

**Be extremely concise. Sacrifice grammar for the sake of concision.**

## Input Requirements

1. **Week Start Date**: Which week to brief
2. **Calendar Data**:
   - **Automatic** (default): Uses Calendar MCP server (`mcp__calendar__list_events`) to fetch week's events
   - **Manual**: User provides calendar data if MCP not available
3. **Email Context**:
   - **Automatic** (default): Uses Gmail MCP server (`mcp__gmail__list_emails` or `mcp__gmail__search_emails`) to fetch recent important emails
   - **Manual**: User provides email context if MCP not available
4. **Industry Focus**: Topics to monitor (AI, finance tech, EPM) - use WebSearch
5. **Team Updates** (optional): Project status, team pulse

## Using MCP Servers

When MCP servers are available:
- **Calendar**: Use `mcp__calendar__list_events` with date range for the target week
- **Gmail**: Use `mcp__gmail__search_emails` with queries like "is:important" or "is:starred" or "newer_than:7d" to identify key threads
- **Industry News**: Use WebSearch to find relevant AI, finance tech, and EPM news
- Combine all sources into comprehensive strategic brief

## Core Structure

### Executive Summary
- Week theme and strategic focus
- Top 3-5 priorities
- Critical decisions required
- Key risks or opportunities

### Week at a Glance
- Meeting highlights
- Key deadlines
- Travel or commitments

### Decisions Required This Week
For each decision:
- What, why, who, when, info needed

### Preparation Needed
Prioritized prep work:
- High-priority meeting prep
- Materials to review
- Estimated time for each

## Optional Sections

### What You Missed (Last Week)
- Team wins
- Client updates
- Industry developments

### Industry Intel
- AI & Automation news
- Finance Tech trends
- Competitive moves

### Team Pulse
- Project status
- Team health
- Wins to recognize
- Issues needing attention

### Recommended Weekly Focus
Based on inputs, suggested priorities:
1. Primary focus
2. Secondary priority
3. What to defer or delegate

---

## Example Output

# Weekly Executive Brief
**Week of October 28 - November 1, 2025**

## Executive Summary

**Week Theme**: Client expansion and strategic partnerships

Balance new business (3 high-value calls) with strategic relationships (partnership, investor update, CFO roundtable). Wednesday is overloaded (7 hours + conflict)—recommend moving lower-priority items.

**Top 5 Priorities**:
1. Convert TechCorp prospect to client (Monday 4pm call is critical)
2. Lock DataFlow phase 2 expansion (Tuesday strategy session)
3. Nail investor update messaging (Wednesday 9am—evaluating follow-on)
4. Resolve Wednesday 10am conflict immediately
5. Complete enterprise proposal by Wednesday 3:30pm

**Critical Decisions**:
- Partnership structure with AI vendor (Tuesday)
- Q1 team offsite location/budget (Wednesday)
- European expansion: pursue or defer? (Wednesday call informs)

**Key Risk**: Wednesday overload could hurt investor call quality

---

## Week at a Glance

**Meetings**: 24 hours (48% of week)
**Busiest**: Tuesday (6h), Wednesday (7h)
**Lightest**: Thursday (3h), Friday (2h)

**Key Meetings**:
- 3 new business opportunities
- 1 client expansion
- 1 investor relations
- 2 people management 1-on-1s
- 1 thought leadership (CFO roundtable)

**Deadlines**:
- Wednesday 3:30pm: Enterprise proposal
- Friday: Confirm speaking engagement

**Deep Work Available**: Monday afternoon, Thursday/Friday mornings

---

## Decisions Required

### 1. AI Platform Partnership Structure
- **What**: Partnership terms with vendor
- **Why**: Could improve margins 20-30%, expand offerings
- **Who**: Their VP Partnerships, your team
- **When**: Tuesday 1pm meeting (no pressure to decide immediately)
- **Info Needed**: Economics, integration requirements, exclusivity terms
- **Recommendation**: Exploratory—gather info, evaluate with team Thursday

### 2. Q1 Team Offsite Location
- **What**: Where to hold offsite, budget
- **Why**: Team is 22 people, offsite important for culture
- **Options**: Puerto Rico (home, lower cost) / Miami (central, see sons) / Destination retreat
- **When**: Wednesday planning meeting finalizes
- **Recommendation**: Lean Puerto Rico but poll team first

### 3. European Market Expansion
- **What**: Pursue European clients or stay US-focused
- **Why**: European prospect call Wednesday surfaces demand
- **When**: No immediate pressure, but call informs strategy
- **Recommendation**: Stay open-minded Wednesday, schedule strategy session next week if strong

---

## Preparation Needed

### High Priority (Complete by Monday Evening - 1hr 45min)
1. **TechCorp call prep** (30min) - Research company, prep questions
2. **Investor update** (45min) - Compile Q4 metrics, prepare messaging
3. **DataFlow report** (30min) - Review phase 1, understand phase 2 options

### Medium Priority (Complete by Tuesday Evening - 1hr 45min)
4. **Board deck feedback** (45min) - Portfolio company Q4 deck
5. **Partnership research** (30min) - Vendor platform review
6. **European prospect research** (30min) - Company, GDPR considerations

**Total Prep**: ~5 hours
**Recommendation**: 2 hours Sunday evening + 3 hours Monday

---

## What You Missed (Last Week)

**Team Wins**:
- DataFlow delivered 2 days early, client thrilled
- CFO Summit presentation generated 3 qualified leads
- LinkedIn post got 15K+ views

**Client Updates**:
- DataFlow phase 1 complete, ready for expansion
- MegaCorp CFO change (new CFO Dec 1—may affect Q1 project)

**Industry**:
- OpenAI launched o1 reasoning model
- Microsoft Copilot for Finance GA
- FinanceAI Corp raised $15M Series A

---

## Industry Intel

**AI & Automation**:
- OpenAI o1: 2x improvement on math/logic (relevant for financial modeling)
- Anthropic Claude: 200K context window (better for large datasets)

**Finance Tech**:
- Gartner: "70% of CFOs prioritizing AI by 2026" (validates market)
- Oracle launched AI planning assistant (competitive but validates demand)

**Competitive**:
- FinanceAI Corp $15M raise—targeting mid-market (your core)
- Big 4 launching AI finance practices (different buyer but validates market)

---

## Team Pulse

**On Track** ✅:
- DataFlow Phase 1 complete
- Q4 OKRs 65% done with 5 weeks left

**At Risk** ⚠️:
- MegaCorp Q1: New CFO may want scope changes
- Engineering at 90% capacity

**Wins to Recognize**:
- Engineering lead: Early delivery + brilliant client demos
- Sales lead: Strong pipeline from CFO Summit
- Marketing: Viral LinkedIn post drove 2 inbound leads

**Issues**:
- Engineering capacity: Need to hire faster or be selective on projects

---

## Recommended Weekly Focus

### 1. PRIMARY: Convert New Business (3-4 hours)
Nail TechCorp Monday, European call Wednesday, move TechLogic if conflict
**Impact**: $300-500K potential revenue

### 2. SECONDARY: Expand DataFlow (2 hours)
Review report Monday, strong session Tuesday, proposal by week-end
**Impact**: $150K+ expansion

### 3. TERTIARY: Investor Relationship (2 hours)
Refine messaging, strong delivery Wednesday, proactive follow-up
**Impact**: Future funding confidence

### 4. DEFER: Personal Projects
Move D&D planning to weekend (Wednesday overloaded)

### 5. DELEGATE: Routine Decisions
Social media approvals, scheduling, team questions

---

## Action Items for Monday Morning

- [ ] Review this brief ✓
- [ ] Resolve Wednesday 10am conflict
- [ ] Block Monday 1-4pm deep work
- [ ] Complete TechCorp prep by 3pm
- [ ] Review DataFlow report
- [ ] Start investor metrics review
- [ ] Decline Tuesday/Wednesday meeting requests
- [ ] Send team recognition messages

---

## Usage Notes

**Time to Create**: 30-45 minutes each Monday morning (or Sunday evening)

**Combines Multiple Sources**:
- Calendar (from calendar-week-brief)
- Email context (from email-triage)
- Industry news (web search)
- Team updates (Slack, reports)

**Update Mid-Week**: Mark decisions made, prep completed

## Output Location

Save weekly executive briefs to: `outputs/Daily Briefs/weekly-executive-brief-[date].md`

Example: `weekly-executive-brief-10.27.2025.md`

## Integration

- **calendar-week-brief**: Provides meeting schedule and prep priorities
- **email-triage-assistant**: Flags important threads and conversations
- **daily-priorities-generator**: Weekly priorities feed daily planning
- **pre-meeting-research-brief**: Identifies meetings needing research
