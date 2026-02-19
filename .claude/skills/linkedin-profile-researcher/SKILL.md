---
name: linkedin-profile-researcher
description: Research LinkedIn profiles and generate comprehensive briefs for meetings, hiring, and investor outreach
---

# LinkedIn Profile Researcher

Research and analyze LinkedIn profiles to generate comprehensive briefing documents for meetings, hiring decisions, investor outreach, and business development.

## Purpose

Transform LinkedIn profile data into actionable intelligence for:
- Pre-meeting research and preparation
- Investor targeting and outreach
- Team candidate evaluation
- Business development prospect research
- Partnership opportunity assessment

## Automatic Profile Fetching

This skill **automatically fetches LinkedIn profile data** using the linkedin-profile-mcp server (must be configured). No manual input required.

### What Gets Fetched

By default, the skill fetches:
- Full name and headline
- Current position and company
- Work history (positions, companies, dates)
- Education (schools, degrees, years)
- Skills and endorsements
- Mutual connections
- Profile activity and posts
- Recommendations (if available)

### Input Options

**Option 1: LinkedIn URL**
Provide direct LinkedIn profile URL:
- Example: https://linkedin.com/in/username

**Option 2: Name + Context**
Provide name and context for search:
- Name: "Quin Eddy"
- Context: "CEO of Nexadata, previously at XYZ"

**Option 3: Batch Research**
Provide list of people to research:
- For upcoming meetings (from calendar)
- For investor outreach (from target list)
- For team hiring (from candidate pipeline)

## Output Formats

### 1. Pre-Meeting Brief (Standard)

```
# Meeting Brief: [Name]

**Meeting Date**: [Date and Time]
**Meeting Purpose**: [Context from calendar or user input]
**Profile URL**: [LinkedIn URL]

---

## Quick Summary

[Name] is [Current Title] at [Company]. [1-2 sentence summary of their background and relevance to your meeting.]

**Key Points for Discussion**:
- [Talking point 1 - based on their background]
- [Talking point 2 - mutual interest or connection]
- [Talking point 3 - relevant to meeting agenda]

---

## Professional Background

### Current Role
**Title**: [Current Position]
**Company**: [Company Name]
**Duration**: [Start Date - Present]
**Focus**: [What they do in this role - extracted from headline/description]

### Previous Experience (Relevant Highlights)
1. **[Position Title]** at **[Company]** ([Dates])
   - [Key responsibilities or achievements if available]
   - [Relevance to your meeting or business]

2. **[Position Title]** at **[Company]** ([Dates])
   - [Key responsibilities or achievements if available]

[Include 3-5 most relevant previous roles]

### Career Trajectory
[Analysis: How they got where they are, notable transitions, patterns in their career]

---

## Education

- **[Degree]** in **[Field]** from **[University]** ([Year])
- [Additional degrees or certifications if relevant]

---

## Expertise & Focus Areas

**Based on headline, skills, and activity:**
- [Expertise area 1]
- [Expertise area 2]
- [Expertise area 3]

**Skills** (if relevant to meeting):
- [Skill 1] ([# endorsements] endorsements)
- [Skill 2] ([# endorsements] endorsements)
- [Skill 3] ([# endorsements] endorsements)

---

## Connections & Network

**Mutual Connections**: [Number]
[List 3-5 most relevant mutual connections if available]

**Network Insights**:
- [Analysis of their network - industry focus, seniority, geographic concentration]
- [Potential warm intro paths if relevant]

---

## Recent Activity & Interests

**Recent Posts/Articles** (last 30 days):
- [Topic/theme of recent activity]
- [Indicates interest in X, Y, Z]

**Commentary Focus**:
- [What they talk about publicly]
- [Indicates priorities, values, or current projects]

---

## Conversation Starters

**Based on profile analysis:**

1. **[Topic/Area]**: "[Specific conversation starter based on their background]"
   - Why this works: [Explanation]

2. **[Topic/Area]**: "[Specific conversation starter based on shared interest]"
   - Why this works: [Explanation]

3. **[Topic/Area]**: "[Specific conversation starter based on recent activity]"
   - Why this works: [Explanation]

---

## Strategic Notes

**Why This Meeting Matters**:
- [Strategic value of connection]
- [Potential opportunities or partnerships]
- [How they can help your goals]

**What They Might Want**:
- [Based on their role/company, what might they be seeking]
- [How you can provide value to them]

**Red Flags or Cautions**:
- [Any concerns or things to be mindful of]
- [Competitive overlaps or potential conflicts]

---

## Action Items

**Before Meeting**:
- [ ] [Specific prep item based on their background]
- [ ] [Research needed on their company/project]
- [ ] [Connection to make or information to gather]

**Follow-Up Reminders**:
- [Things to do/send after meeting based on likely discussion]

```

### 2. Investor Profile (For Fundraising)

```
# Investor Profile: [Name]

**Fund/Firm**: [Firm Name]
**LinkedIn**: [URL]
**Priority**: [High/Medium/Low based on fit]

---

## Investment Focus

**Thesis**: [Based on profile description and firm info]

**Stage Preference**: [Seed / Series A / Series B / Growth]

**Industries**: [Industries they focus on based on portfolio and background]

**Geographic Focus**: [Based on firm location and portfolio]

---

## Background

### Professional History
- [Current role at fund]
- [Previous investing experience]
- [Operating experience if relevant]

### Why They Might Care About CyberX
- [Alignment with investment thesis]
- [Portfolio companies in similar space]
- [Background that makes them knowledgeable about OLAP/EPM]

---

## Portfolio Analysis

**Notable Investments** (if available):
- [Company 1] - [Stage, Industry]
- [Company 2] - [Stage, Industry]
- [Pattern: What types of companies do they back?]

**Comparable Investments**:
- [Companies similar to CyberX if any]
- [Indicates comfort with B2B SaaS / enterprise software / finance tech]

---

## Warm Intro Paths

**Mutual Connections**: [Number]

**Best Path**:
1. [Name of mutual connection] - [Their relationship to investor]
   - Why this works: [Explanation]

**Alternative Paths**:
2. [Name] - [Relationship]
3. [Name] - [Relationship]

---

## Outreach Strategy

**Recommended Approach**: [Cold email / Warm intro / Conference / Other]

**Message Angle**: [What to emphasize based on their background and interests]

**Timing**: [Best time to reach out if known]

---

## Meeting Prep (If Outreach Successful)

**Questions They'll Likely Ask**:
- [Based on their investment focus and stage]
- [Typical due diligence questions for this investor]

**Points to Emphasize**:
- [What about CyberX aligns with their thesis]
- [Team background they'll care about]
- [Traction or validation relevant to their criteria]

**Preparation Needed**:
- [Specific materials or data to have ready]

```

### 3. Candidate Evaluation (For Hiring)

```
# Candidate Evaluation: [Name]

**Role**: [Position being considered for]
**LinkedIn**: [URL]
**Evaluation Date**: [Date]

---

## Fit Assessment

**Role Requirements**:
- [Requirement 1] → ✅ / ⚠️ / ❌
- [Requirement 2] → ✅ / ⚠️ / ❌
- [Requirement 3] → ✅ / ⚠️ / ❌

**Overall Fit**: [Strong / Moderate / Weak]

---

## Experience Analysis

### Relevant Experience
**Years in field**: [Number]
**Companies**: [List companies - note if startups, scale-ups, enterprise]
**Roles**: [Progression from junior to current]

### Key Strengths (Based on Profile)
1. [Strength 1] - [Evidence from work history]
2. [Strength 2] - [Evidence from skills/endorsements]
3. [Strength 3] - [Evidence from accomplishments]

### Potential Gaps
1. [Gap 1] - [What's missing from their background]
2. [Gap 2] - [Experience they might lack]

---

## Career Trajectory

**Progression**: [How they've advanced in their career]

**Red Flags**:
- [Short stints if concerning]
- [Unexplained gaps]
- [Lateral moves without growth]

**Green Flags**:
- [Consistent promotion/growth]
- [Relevant industry pivots]
- [Leadership progression]

---

## Cultural Fit Indicators

**Based on profile activity and background:**
- [Company culture they've thrived in]
- [Values they express publicly]
- [Work style indicators]

**Potential Fit for [Your Company]**:
- ✅ [Why they'd be a good fit]
- ⚠️ [Potential cultural misalignments to explore]

---

## Interview Focus Areas

**Deep Dive Questions**:
1. [Question about specific experience]
2. [Question about gap or transition]
3. [Question about technical capability]

**Sell Points** (to attract them):
- [What about your company would appeal to them based on their background]

---

## References to Check

**Based on work history:**
- [Former manager at Company X]
- [Colleague at Company Y]
- [Mutual connection who worked with them]

**Questions for References**:
- [Specific question about skill/experience]
- [Specific question about work style]

---

## Recommendation

**Proceed to Interview?**: [Yes / No / Maybe]

**Reasoning**: [Analysis of fit based on profile]

**Next Steps**:
- [If yes: interview focus]
- [If maybe: additional research needed]
- [If no: why not a fit]

```

### 4. Batch Research Report

For multiple profiles (e.g., investor list, team candidates, meeting attendees):

```
# Batch Research Report: [Purpose]

**Date**: [Date]
**Profiles Analyzed**: [Number]
**Category**: [Investors / Candidates / Meeting Attendees / Other]

---

## Executive Summary

[High-level overview of the group researched]

**Key Findings**:
- [Pattern 1 across profiles]
- [Pattern 2 across profiles]
- [Priority recommendations]

---

## Individual Profiles

### [Name 1] - [Priority: High/Med/Low]

**Quick Summary**: [1-2 sentences]

**Key Points**:
- [Point 1]
- [Point 2]
- [Point 3]

**Recommended Action**: [What to do with this person]

---

### [Name 2] - [Priority: High/Med/Low]

[Same structure...]

---

## Priority Matrix

**High Priority** (Act immediately):
1. [Name] - [Reason]
2. [Name] - [Reason]

**Medium Priority** (Follow up soon):
1. [Name] - [Reason]

**Low Priority** (Long-term nurture):
1. [Name] - [Reason]

---

## Strategic Recommendations

[Overall guidance on how to approach this group]

**Quick Wins**:
- [Immediate actions to take]

**Long-term Strategy**:
- [How to build relationships over time]

```

---

## Usage Instructions

### Step 1: Ensure MCP Server is Configured

**Check MCP Configuration**:
```bash
claude mcp list
```

Should show: `linkedin-profile-mcp` in the list

**If not configured**, follow MCP setup instructions in `mcp-linkedin/README.md`

---

### Step 2: Invoke Skill with Context

**Single Profile Research**:
```
Skill: linkedin-profile-researcher

Input: Research Quin Eddy (CEO of Nexadata) for our CyberX discussion meeting tomorrow.
```

**Investor Batch Research**:
```
Skill: linkedin-profile-researcher

Input: Research these 5 investors for CyberX fundraising:
1. [Name 1] at [Firm]
2. [Name 2] at [Firm]
...

Focus on: Investment thesis fit, warm intro paths, outreach strategy
```

**Pre-Meeting Brief from Calendar**:
```
Skill: linkedin-profile-researcher

Input: Generate pre-meeting briefs for all my meetings this week (pull from calendar MCP).
```

---

### Step 3: Skill Executes Automatically

The skill will:
1. **Fetch profile data** from LinkedIn via MCP
2. **Analyze** background, experience, connections
3. **Generate** comprehensive brief in appropriate format
4. **Save** output to `outputs/LinkedIn Research/linkedin-briefs/[name]-[date].md`

---

### Step 4: Review and Use Brief

Open generated file and review before meeting/outreach.

**Optional**: Ask skill to refine or focus on specific aspects:
- "Add more about their OLAP experience"
- "Find additional warm intro paths"
- "Suggest questions for interview"

---

## Integration with Other Skills

### pre-meeting-research-brief (existing)
LinkedIn Skill feeds into pre-meeting briefs for comprehensive prep.

### investor-research-assistant (NEW - see business plan analysis)
LinkedIn Skill provides profile data for investor targeting.

### one-on-one-planner (existing)
Use LinkedIn background for 1-on-1 agenda with team members.

---

## Quality Checklist

Before finalizing brief:
- ✅ Profile data is current (check last updated date)
- ✅ Analysis is relevant to meeting/decision purpose
- ✅ Conversation starters are specific and actionable
- ✅ Warm intro paths are identified if available
- ✅ Strategic value of connection is clear
- ✅ Action items are concrete and time-bound

---

## Output Location

Save all LinkedIn briefs to: `outputs/LinkedIn Research/linkedin-briefs/[name]-[date].md`

Format filename: `quin-eddy-10.27.2025.md`

---

## Privacy & Ethics

**Important Considerations**:
- Only research public LinkedIn profiles
- Use information ethically (not for manipulation)
- Don't share profile data beyond intended purpose
- Respect privacy settings and information boundaries
- Follow LinkedIn terms of service

---

## Troubleshooting

**If MCP fails to fetch profile**:
- Check MCP configuration: `claude mcp list`
- Verify LinkedIn profile URL is correct and public
- Check MCP logs for authentication errors
- Try manual search if URL lookup fails

**If profile data is incomplete**:
- Some profiles have privacy settings limiting visibility
- Note what's missing in brief
- Supplement with web search if needed

**If mutual connections don't show**:
- May require authenticated LinkedIn session
- Fall back to manual checking
- Note in brief: "Mutual connections: Check manually"

---

## Examples

### Example 1: Pre-Meeting Brief

**Input**: "Research Glenn Schwartzberg for our meeting tomorrow at 12:30 PM"

**Output**: See format above - generates comprehensive meeting brief with background, conversation starters, and strategic notes.

---

### Example 2: Investor Research

**Input**: "Research these 3 investors for CyberX Series A:
1. Jane Smith at Accel Partners
2. Bob Johnson at Sequoia Capital
3. Sarah Lee at Andreessen Horowitz

Focus on OLAP/EPM experience and warm intro paths."

**Output**: Generates 3 investor profiles with investment thesis, portfolio analysis, and outreach strategy for each.

---

## Success Metrics

- **Time Saved**: 30-45 min per profile researched
- **Meeting Quality**: Better prepared, more relevant discussions
- **Conversion Rate**: Higher success rate on investor/BD outreach
- **Hiring Quality**: Better candidate evaluation and fit assessment

---

Ready to research LinkedIn profiles and generate actionable intelligence! Ensure the linkedin-profile-mcp is configured, then invoke this skill with the person/people you need to research.
