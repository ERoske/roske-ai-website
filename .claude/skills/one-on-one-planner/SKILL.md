---
name: one-on-one-planner
description: Generate structured 1-on-1 agenda with coaching questions, feedback points, and development focus
---

# 1-on-1 Meeting Planner

Generate structured 1-on-1 agendas for direct reports. Time to create: 10-15 minutes.

## Purpose

Transform 1-on-1s from status updates into powerful coaching conversations. Provides structured agenda, thoughtful questions, feedback points, and growth opportunities.

## Input Requirements

1. **Employee**: Name and role
2. **Recent Context**: Current projects, recent wins/challenges, team dynamics
3. **History** (optional): Notes from previous 1-on-1s
4. **Your Priorities**: Topics you need to discuss

## Core Structure

### Check-In (5-10 min)
- Personal/professional wellbeing
- Energy and workload
- What's on their mind

### Follow-Up from Last Meeting (5 min)
- Action items from last time
- Progress on ongoing initiatives

### Project Updates (10-15 min)
- Current work, blockers, wins
- Resources or support needed

### Coaching & Development (10-15 min)
- Skills they're building
- Growth opportunities
- Career trajectory

### Feedback (5-10 min)
- What's working (specific behaviors)
- Areas for growth (actionable)
- Their feedback to you

### Questions from Them (5-10 min)
- Reserved time for their agenda

### Wrap-Up (5 min)
- Action items and next steps

---

## Example Output

# 1-on-1 Agenda
**Alex Chen - Engineering Lead**
**Date**: Friday, November 1, 2025

## Meeting Overview

**Role**: Engineering Lead (manages 8 engineers)
**Time in Role**: 18 months
**Since Last Meeting**: 1 week

**Goals Today**:
1. Discuss capacity concerns (team at 90%)
2. Recognize DataFlow win
3. Explore Director role interest
4. Get input on Q1 hiring

---

## Check-In (5-10 min)

**Opening**:
"How are you doing? Actually—not just 'fine'."

**Workload Check**:
"Last week you mentioned feeling stretched. How's that now?"
"Working evenings/weekends or manageable?"

**Listen for**: Burnout signs, work-life balance concerns, excitement or frustration

---

## Follow-Up (5 min)

**From Last Meeting** (Oct 25):
- Linear migration evaluation → Status?
- Q1 hiring needs thinking → Ready to discuss today
- Capacity analysis → Completed?

---

## Projects & Work (10-15 min)

**DataFlow Win**:
"DataFlow shipped early and client is thrilled. What went right that we should replicate?"

**MegaCorp Q1 (At Risk)**:
"New CFO starts Dec 1. Worried about scope changes?"

**Q4 OKRs**:
"Where are you on Q4 goals? What's at risk?"

**Recognize**:
- Early delivery + high quality
- Brilliant client technical demos
- Proactive Linear evaluation

---

## Coaching & Development (10-15 min)

**Leadership Growth**:
"18 months leading the team—what's easier now? What's still hard?"

**Strategic Thinking**:
"You execute well. Let's work on strategic anticipation—what's the next big technical risk I should know about?"

**Director Role Potential**:
"Team is growing. Considering Director of Engineering role. Interested in that path?"

If interested: "What would you need to feel ready?"

---

## Feedback (5-10 min)

**What's Working**:
1. **Proactive communication** - You flag issues early (capacity concern). Keep doing that.
2. **Quality focus** - DataFlow could've shipped on-time with mediocre quality. You held the bar.
3. **Team development** - Investing time coaching juniors. That's leadership.

**Areas for Growth**:
1. **Strategic communication** - Bring problem + options + recommendation, not just problem
2. **Saying no** - You say yes to everything. That's how you hit 90% capacity. Practice strategic no's.
3. **Delegating** - Still doing work seniors could handle. You're the bottleneck on code reviews.

**Their Feedback to You**:
"What's one thing I could do better as your manager?"

---

## Questions from Them (5-10 min)

Reserved time for their agenda:
- "What's on your mind that we haven't covered?"
- "Any company/team questions?"

---

## Wrap-Up (5 min)

**Action Items**:

**You**:
- [ ] Review capacity analysis
- [ ] Provide input on Q1 hiring priorities
- [ ] Think about Director role timing/scope
- [ ] Connect Alex with COO for strategic thinking mentorship

**Alex**:
- [ ] Finalize Linear migration plan (by Nov 8)
- [ ] Practice delegation: delegate one task this week
- [ ] Think about Director interest and preparation needed
- [ ] Bring problem + options approach to next meeting

**Decisions Made**:
- Engineering capacity is real risk—evaluate contractor options
- Senior data scientist = hiring priority #1

**Next 1-on-1**: Friday, November 8 @ 9am

---

## Usage Notes

**Time to Create**: 10-15 minutes before meeting

**Key Questions to Ask Yourself First**:
- What needs addressing (performance, growth, blockers)?
- What should I recognize (recent wins)?
- What feedback to deliver (positive and developmental)?
- What's their agenda (what do they need)?

**During Meeting**:
- Take notes on their responses
- Capture new action items
- Notice what's unsaid (energy, concerns)

**After Meeting**:
- Send action items summary
- Follow through on commitments
- File notes for next time

## Output Location

Save 1-on-1 agendas to: `outputs/Business Documents/one-on-one-[team-member-name]-[date].md`

Example: `one-on-one-sarah-johnson-10.30.2025.md`

## Integration

- **weekly-executive-brief**: Team pulse informs 1-on-1 topics
- **daily-priorities-generator**: Block prep time before 1-on-1s
