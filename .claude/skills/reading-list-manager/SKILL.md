---
name: reading-list-manager
description: Curate, summarize, and prioritize reading materials with executive summaries and actionable insights
---

# Reading List Manager

Curate and summarize reading materials. Prioritize based on relevance and time available.

## Purpose

Transform content overload into focused learning. Evaluate relevance, provide executive summaries, prioritize reading.

## Input Requirements

1. **Content**: Article URL/text, book title, podcast link, or batch of items
2. **Context**: Current priorities, available time this week
3. **Goal** (optional): Stay current, deep-dive topic, prep for event

## Output Options

### Option 1: Single Article Summary
Quick analysis of one article (10-15 minutes to create)

### Option 2: Weekly Reading Brief
Batch triage of multiple articles (20-30 minutes to create)

---

## Option 1: Article Summary Template

**Title**: [Article Title]
**Source**: [Publication] | **Date**: [Date] | **Reading Time**: [X min]
**Relevance**: High / Medium / Low

### Executive Summary (3 sentences)
Core thesis and main argument

### Key Takeaways
- Takeaway 1
- Takeaway 2
- Takeaway 3

### Actionable Insights
How this applies to your work:
- What to do differently
- Questions to explore
- Connections to current projects

### Notable Quotes/Data
- Key stat or quote worth remembering

### Recommendation
☐ Must Read (critical, read in full)
☐ Read Summary (summary sufficient)
☐ File for Later (interesting but not urgent)
☐ Skip (not relevant)

---

## Option 2: Weekly Reading Brief Template

**Week of [Date]**

### Must Read This Week (1-3 items)
High-impact, timely content
- **[Title]** - [Publication] - [X min] - Why: [reason]

### Should Read Soon (3-5 items)
Important but not urgent
- **[Title]** - [Publication] - [X min] - Why: [reason]

### Background/Reference (5+ items)
File for later
- **[Title]** - [Publication] - [X min]

### Themes This Week
Pattern across multiple pieces:
- **Theme 1**: [Description + implication]
- **Theme 2**: [Description + implication]

### Reading Plan
- **Monday morning** (20 min): Read [article 1]
- **Wednesday** (30 min): Read [article 2]
- **Friday** (45 min): Read [article 3]

**Total Time**: [X hours Y minutes]

---

## Example: Article Summary

**Title**: "Why CFO Organizations Are Failing at AI"
**Source**: CFO Magazine | **Date**: Oct 15, 2025 | **Reading Time**: 12 min
**Relevance**: High

### Executive Summary
CFO organizations struggle with AI implementation due to organizational inertia and fear of job displacement, not technology limitations. Success requires framing AI as team enablement, starting with painful processes, and measuring ROI in capability gained not just cost saved.

### Key Takeaways
- 70% of AI finance pilots fail within 12 months (organizational issues, not tech)
- "Job threat" narrative kills adoption—reframe as "upgrading roles"
- Start with painful manual processes, not cool use cases
- Measure ROI in new capabilities enabled, not just time saved
- Change management is 60% of work, allocate budget accordingly

### Actionable Insights
- **For consulting**: Validates your positioning (implementation + change management)
- **For clients**: Use 70% failure stat in discovery calls
- **Tactical**: Create "job threat playbook" for CFOs to address team fears
- **ROI tool**: Add "capability gained" metrics to calculator

### Notable Quotes
"The question isn't 'will AI take finance jobs?' It's 'will finance professionals upgrade their skills or become obsolete?'"

### Recommendation
☑ Must Read - Validates core positioning, provides stats for client conversations

---

## Usage Notes

**Time Estimates**:
- Article summary: 10-15 minutes
- Weekly brief: 20-30 minutes

**Prioritization Logic**:
- **Must Read**: Directly applicable to current work, timely, high-impact
- **Should Read Soon**: Important for expertise but not urgent
- **Background**: General knowledge building
- **Skip**: Not relevant or low quality

**Weekly Rhythm**: Do reading triage Monday morning (20-30 min), identifies week's priorities

## Output Location

Save reading lists and summaries to: `outputs/Learning Resources/reading-list-[topic]-[date].md`

Example: `reading-list-ai-strategy-10.27.2025.md`

## Integration

- **weekly-executive-brief**: Include reading insights in Monday briefing
- **daily-priorities-generator**: Schedule reading time in daily plan
- **speaking-prep-kit**: Extract stats and insights for presentations
