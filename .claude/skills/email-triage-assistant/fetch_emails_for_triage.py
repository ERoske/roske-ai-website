"""Fetch emails from Gmail for triage."""
import sys
import json
from pathlib import Path

# Add Gmail MCP server to path
sys.path.append(r'C:\Users\edwar\Claude\personal_assistant\mcp-gmail')

from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = [
    'https://www.googleapis.com/auth/gmail.readonly',
]

def get_gmail_service():
    """Authenticate and return Gmail API service."""
    creds = None
    token_path = Path.home() / '.mcp-gmail' / 'token.json'
    credentials_path = Path.home() / '.mcp-gmail' / 'credentials.json'

    if token_path.exists():
        creds = Credentials.from_authorized_user_file(str(token_path), SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not credentials_path.exists():
                raise FileNotFoundError(
                    f"Please download OAuth2 credentials and save to: {credentials_path}"
                )
            flow = InstalledAppFlow.from_client_secrets_file(
                str(credentials_path), SCOPES
            )
            creds = flow.run_local_server(port=0)

        with open(token_path, 'w') as token:
            token.write(creds.to_json())

    return build('gmail', 'v1', credentials=creds)


def fetch_emails(max_results=30):
    """Fetch emails from inbox for triage.

    Args:
        max_results: Maximum number of emails to fetch (default: 30)

    Returns:
        List of email dictionaries
    """
    service = get_gmail_service()

    # Fetch unread emails (primary) or recent emails (backup)
    results = service.users().messages().list(
        userId='me',
        maxResults=max_results,
        q='is:unread OR newer_than:2d'
    ).execute()

    messages = results.get('messages', [])

    if not messages:
        print("No emails found to triage.")
        return []

    # Get details for each message
    emails = []
    for msg in messages:
        try:
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
        except Exception as e:
            print(f"Error fetching email {msg['id']}: {str(e)}")
            continue

    return emails


if __name__ == "__main__":
    # Fetch emails
    emails = fetch_emails(max_results=30)

    # Save to JSON in parent directory
    output_path = Path(__file__).parent.parent.parent.parent / 'emails_data.json'

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(emails, f, indent=2, ensure_ascii=False)

    print(f"[OK] Fetched {len(emails)} emails")
    print(f"[OK] Saved to: {output_path}")
    print(f"\nReady for triage!")
