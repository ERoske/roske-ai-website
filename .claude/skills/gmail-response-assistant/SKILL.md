---
name: gmail-response-assistant
description: Draft professional email responses in Edward's voice with multiple variations
---

# Gmail Response Assistant

Draft email responses in Edward's voice (50% spartan, 50% colloquial, dry wit via parentheticals).

## Purpose

Generate professional, on-brand email responses that need minimal editing. See CLAUDE.md for full voice/tone guidelines.

## Input Requirements

1. **Email Content**: The incoming email
2. **Response Type**: Client inquiry, partnership, team collaboration, speaking opportunity, follow-up
3. **Context** (optional): Background information

## Output Format

Provide **3 response variations**:

### Brief (2-4 sentences)
Quick, direct. Use when time is limited or message is straightforward.

### Moderate (1-2 paragraphs)
Balanced with context and next steps. Use for most professional situations.

### Detailed (2-3 paragraphs)
Comprehensive for complex topics or important relationships.

---

## Example: Client Inquiry

**Incoming**:
> Hi Edward, I'm CFO at MidMarket Software ($75M). Struggling with manual FP&A. Saw you at CFO Summit. Can we talk next week? - Jennifer

**Output**:

### Brief
```
Jennifer—

Happy to connect. Tuesday 2pm or Thursday 10am next week?

Edward
```

### Moderate
```
Jennifer—

Glad the summit resonated. Manual FP&A is exactly what we help with—variance analysis, forecasting, consolidation.

I have Tuesday 2pm or Thursday 10am ET. We can discuss your situation and see if there's a fit.

Edward
```

### Detailed
```
Jennifer—

Thanks for reaching out. Too many finance teams are drowning in spreadsheets when better options exist.

We typically work with mid-market companies ($50-200M) on FP&A automation. Most see 60-80% time savings, which frees teams for strategic work instead of data wrangling.

Helpful context before we talk:
- Current FP&A team size
- Biggest pain points
- Any AI tools you're exploring

I have Tuesday 2pm or Thursday 10am ET for 30-45 min. Calendar link below if neither works.

Edward
[calendar link]
```

---

## Response Structure

Each variation includes:
1. **Opening**: Acknowledge their message
2. **Core Message**: Answer the question
3. **Next Steps**: Clear call-to-action
4. **Closing**: Professional sign-off

## Voice Guidelines (Quick Reference)

- **Spartan**: Direct, concise, no fluff
- **Colloquial**: Approachable, conversational
- **Dry wit**: Parenthetical asides when natural
- **No emojis**
- **Em dashes**: Use "—" not hyphens
- **Sign-off**: Just "Edward" (no "Best," "Sincerely," etc.)

See CLAUDE.md for complete voice/tone guidelines.

## Common Scenarios

**Client Inquiry**: Use Moderate (context + availability)
**Quick Scheduling**: Use Brief (just availability)
**Partnership Exploration**: Use Detailed (thorough, show expertise)
**Internal Team**: Use Brief or Moderate (context-dependent)
**Speaking Opportunity**: Use Moderate (interested + request details)
**Follow-Up**: Use Brief or Moderate (match their formality level)

## Usage Notes

**Time to Create**: 2-5 minutes per email

**Pick One Variation**: Most situations = Moderate. Use Brief when rushed, Detailed when high-stakes.

**Edit Before Sending**: These are drafts. Adjust tone, add specifics, confirm accuracy.

## Integration

- **email-triage-assistant**: Generate responses for high-priority emails identified in triage
- **pre-meeting-research-brief**: Reference research when drafting responses to meeting requests
