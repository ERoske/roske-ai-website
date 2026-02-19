---
name: email-triage-assistant
description: Prioritize inbox emails using Eisenhower matrix with actionable recommendations
---

# Email Triage Assistant

This skill reviews inbox content and categorizes emails by priority with suggested actions, helping Edward focus on what matters most.

## Purpose

Transform inbox overwhelm into a clear, prioritized action plan. Uses the Eisenhower Matrix (urgent/important) to categorize emails and provides specific recommendations for each message.

**Be extremely concise. Sacrifice grammar for the sake of concision.**

## Automatic Email Fetching

This skill **automatically reads emails from your Gmail inbox** using the Gmail MCP server. No manual input required.

### What Gets Fetched

By default, the skill fetches:
- **Inbox emails** (most recent messages in your inbox, read or unread)
- **Maximum**: 30-50 emails per triage session

### Email Data Retrieved

For each email:
- From: Sender name and email address
- Subject: Email subject line
- Date: When the email was received
- Snippet: Preview of email content (~100 characters)

### Optional Context

You may optionally provide:
- Current priorities or projects (helps assess importance)
- Upcoming deadlines (helps assess urgency)
- Special circumstances (travel, vacation, major events)

## Triage Categories

### Category 1: Urgent & Important ⚠️
**Requires immediate personal attention**
- Client escalations or critical issues
- Time-sensitive opportunities with deadlines
- Executive decisions needed for ongoing projects
- Speaking/partnership opportunities closing soon

**Action**: Respond personally within 24 hours

---

### Category 2: Important, Not Urgent 📅
**Schedule focused time to handle**
- Strategic conversations that move business forward
- Relationship-building with key contacts
- Thoughtful responses to complex questions
- Planning and coordination for future initiatives

**Action**: Block time this week, respond within 3-5 days

---

### Category 3: Urgent, Not Important ⚡
**Delegate or quick response**
- Routine questions that team can handle
- Meeting scheduling (can delegate to assistant)
- FYI updates that need acknowledgment
- Minor requests with near-term deadlines

**Action**: Delegate to team or send 2-sentence response

---

### Category 4: Neither Urgent Nor Important 🗑️
**Archive, unsubscribe, or ignore**
- Newsletters you don't read
- Automated reports you don't need
- Cold outreach/spam
- CC'd emails where you're not essential
- Promotional content

**Action**: Archive, unsubscribe, or ignore

---

## Output Format

For each triaged email batch, provide:

### Executive Summary
- Total emails reviewed
- Breakdown by category
- Key patterns identified
- Estimated total time required for high-priority items

### Category 1: Urgent & Important ⚠️
For each email:
- **From**: Sender name and context
- **Subject**: Email subject line
- **Why It Matters**: Brief explanation of urgency + importance
- **Suggested Response Approach**: How to handle (meeting, detailed email, phone call, etc.)
- **Time Required**: Estimated time to properly address (15 min, 30 min, 1 hour)
- **Deadline**: When response is needed by

### Category 2: Important, Not Urgent 📅
For each email:
- **From**: Sender name and context
- **Subject**: Email subject line
- **Why It Matters**: Brief explanation of importance
- **Suggested Approach**: How to handle
- **When**: Suggested timeframe (this week, next week, this month)
- **Can Delegate?**: Yes/No (if yes, suggest who)

### Category 3: Urgent, Not Important ⚡
For each email:
- **From**: Sender name
- **Subject**: Email subject line
- **Quick Action**: Specific recommendation (template response, delegate to [person], 2-sentence reply)
- **Time Required**: <5 minutes each

### Category 4: Neither ⏭️
For each email:
- **From**: Sender name
- **Subject**: Email subject line
- **Action**: Archive / Unsubscribe / Ignore
- **Pattern Note**: If recurring (e.g., "3rd newsletter from this sender—recommend unsubscribe")

### Patterns & Insights
- Recurring senders or topics
- Emails that could be prevented with better systems
- Distribution lists to leave
- Automation opportunities
- Team training needs

---

## Example Output

### Executive Summary
- **Total Emails**: 47
- **Urgent & Important**: 4 emails (~2.5 hours)
- **Important, Not Urgent**: 8 emails (~4 hours total, spread over week)
- **Urgent, Not Important**: 12 emails (~45 minutes, mostly delegatable)
- **Neither**: 23 emails (archive/unsubscribe)

**Pattern Note**: 8 newsletters you haven't opened in 3 months—recommend unsubscribe sweep.

---

### Category 1: Urgent & Important ⚠️

#### Email 1
- **From**: Sarah Chen, VP Finance at TechCorp (potential client)
- **Subject**: "AI FP&A Implementation - Timeline Discussion"
- **Why It Matters**: Qualified lead from CFO Summit presentation. They have budget approved and need to decide between vendors by end of month. High revenue opportunity.
- **Suggested Response Approach**: 30-minute Zoom call this week to understand requirements and present approach. Use moderate response template from gmail-response-assistant.
- **Time Required**: 30 min call + 15 min prep + 15 min follow-up = 1 hour total
- **Deadline**: Schedule call within 48 hours (they're evaluating competitors)

#### Email 2
- **From**: Conference Organizer - Finance Innovation Summit Miami
- **Subject**: "Panel Confirmation Needed - March 15-16"
- **Why It Matters**: Speaking opportunity in Miami (can see sons). Deadline to confirm is this Friday. High-visibility event for target audience (CFOs, VPs Finance).
- **Suggested Response Approach**: Request panel details (other speakers, exact topic, audience) before confirming. Use moderate response from gmail-response-assistant.
- **Time Required**: 15 minutes to draft response
- **Deadline**: Respond by Friday 10/27

---

### Category 2: Important, Not Urgent 📅

#### Email 3
- **From**: Portfolio company CEO
- **Subject**: "Q4 Board Deck - Feedback Requested"
- **Why It Matters**: Board relationship maintenance. They value your strategic input on AI integration plans.
- **Suggested Approach**: Review deck (30 min) and provide structured feedback via email or quick call
- **When**: By end of this week (Monday 10/30)
- **Can Delegate?**: No—requires your strategic expertise

#### Email 4
- **From**: Former colleague from Microsoft
- **Subject**: "Catching Up + Intro Request"
- **Why It Matters**: Good relationship, could lead to speaking opportunities or partnerships. Not time-sensitive but valuable to maintain connection.
- **Suggested Approach**: Brief response suggesting coffee/call next time you're in Seattle, or virtual catch-up in next 2-3 weeks
- **When**: Within 5 days
- **Can Delegate?**: No—personal relationship

---

### Category 3: Urgent, Not Important ⚡

#### Email 5
- **From**: Team member - Marketing
- **Subject**: "Quick Approval: Social Media Post for Tomorrow"
- **Quick Action**: Delegate to Dawn or approve with 2-sentence response: "Approved. Tone looks good—go ahead and post."
- **Time Required**: 2 minutes

#### Email 6
- **From**: Calendar invite for recurring team meeting
- **Subject**: "Weekly Standup - Confirm Attendance"
- **Quick Action**: Accept invite or delegate attendance if topics don't require your input this week
- **Time Required**: 1 minute

---

### Category 4: Neither ⏭️

#### Email 7-29 (Summary)
- **8 newsletters** not opened in 60+ days → Recommend unsubscribe
- **7 LinkedIn connection requests** with generic messages → Archive or ignore
- **4 automated reports** you don't use → Unsubscribe
- **3 CC'd email threads** where you're not essential → Archive
- **1 cold sales outreach** → Ignore

**Action**: Batch unsubscribe from newsletters this week to prevent future clutter.

---

### Patterns & Insights

1. **Newsletter Overload**: You're subscribed to 15+ newsletters but only read 3 regularly. Recommend quarterly newsletter audit.

2. **Team Questions**: 5 emails this week with questions your team could answer for each other. Consider creating internal FAQ or knowledge base.

3. **Calendar Conflicts**: 3 meeting invites without context or agenda. Suggest policy: require agenda for all meetings or auto-decline.

4. **Delegation Opportunity**: 40% of "urgent" emails could be handled by team with clearer authority/guidelines.

---

## Usage Instructions

When this skill is invoked, it **automatically** performs the following steps:

### Step 1: Fetch Emails from Gmail (Automatic)

Create and run Python script to fetch emails:

```python
# File: fetch_emails_for_triage.py
import sys
import json
sys.path.append(r'C:\Users\edwar\Claude\personal_assistant\mcp-gmail')
from server import get_gmail_service

service = get_gmail_service()

# Fetch inbox emails (most recent)
results = service.users().messages().list(
    userId='me',
    maxResults=30,
    q='in:inbox'
).execute()

# Get details for each message
emails = []
for msg in results.get('messages', []):
    message = service.users().messages().get(
        userId='me',
        id=msg['id'],
        format='metadata',
        metadataHeaders=['From', 'Subject', 'Date']
    ).execute()

    headers = {h['name']: h['value'] for h in message.get('payload', {}).get('headers', [])}

    emails.append({
        'id': msg['id'],
        'from': headers.get('From', 'Unknown'),
        'subject': headers.get('Subject', 'No Subject'),
        'date': headers.get('Date', 'Unknown'),
        'snippet': message.get('snippet', '')
    })

# Save to JSON
with open('emails_data.json', 'w', encoding='utf-8') as f:
    json.dump(emails, f, indent=2, ensure_ascii=False)

print(f"Fetched {len(emails)} emails")
```

**Run the script**:
```bash
cd C:\Users\edwar\Claude\personal_assistant
python fetch_emails_for_triage.py
```

**Load the data**:
Read `emails_data.json` to get email list for triage.

---

### Step 2: Triage Emails (Analysis)

Categorize each email using Eisenhower Matrix:
- Urgent & Important ⚠️
- Important, Not Urgent 📅
- Urgent, Not Important ⚡
- Neither Urgent Nor Important 🗑️

---

### Step 3: Add Recommendations (Actionable Guidance)

For each category, provide:
- Specific response approach
- Time estimates
- Delegation suggestions
- Deadlines

---

### Step 4: Identify Patterns (Strategic Insights)

Look for:
- Recurring senders or topics
- Emails that could be prevented
- Automation opportunities
- Team training needs

---

### Step 5: Save Output (File Creation)

Create file: `outputs/Email Management/email-triage-[date].md`

Format: `email-triage-10.26.2025.md`

---

### Step 6: Present Summary (User Communication)

Provide executive summary with:
- Total emails reviewed
- Category breakdown
- Key actions
- Time estimates

## Quality Checklist

Before finalizing triage:
- ✅ Each email is in the correct category (be honest about what's truly urgent/important)
- ✅ Recommendations are specific and actionable
- ✅ Time estimates are realistic
- ✅ Delegation suggestions include who should handle it
- ✅ Patterns identified could prevent future email overload
- ✅ Urgent & Important category has <10 items (if more, re-evaluate what's truly urgent)

## Output Location

Save all triage reports to: `outputs/Email Management/email-triage-[date].md`

Format filename: `email-triage-10.25.2025.md`

## Integration Notes

This skill pairs well with:
- **gmail-response-assistant**: Use to draft responses for Category 1 & 2 emails
- **daily-priorities-generator**: Feed high-priority emails into daily planning
- **weekly-executive-brief**: Include email patterns in Monday briefing
