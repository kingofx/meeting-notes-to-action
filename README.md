# Meeting to Action

A Notion-style prototype that converts raw meeting notes into structured output using AI.

Type or paste your meeting notes, click generate, and get back a structured summary, assigned action items, and a follow-up draft — ready to send as email or Slack.

## What it does

Most meetings produce good discussion. Few produce clear follow-through. This prototype addresses the gap: one click turns unstructured notes into decisions, tasks with owners, and a follow-up message.

**Three outputs from one click:**
- **Meeting summary** — key decisions, blockers, and context extracted automatically
- **Action items** — tasks with owner names matched from your notes and due dates inferred from context
- **Follow-up draft** — a plain-language recap formatted for email or Slack, ready to copy

## Built for

This is a product prototype. It demonstrates an AI-powered feature concept for Notion, designed for small teams at startups and agencies who already use Notion to capture meeting notes.

## Deliverables

| Deliverable | Description | Link |
|---|---|---|
| **Prototype** | Live clickable demo | (https://notionaction.vercel.app/) |
| **PRD** | Full product requirements document | [View PRD](docs/PRD_Notion_Meeting_to_Action.pdf) |
| **Slide Deck** | 10-slide product story | [View Deck](docs/Slides_Notion_Meeting_to_Action.pptx) |

## Tech stack

- **Frontend** — Single-page HTML/CSS/JS, no framework
- **AI** — Anthropic Claude (claude-sonnet-4) via the Messages API
- **Backend** — Vercel serverless function (`api/generate.js`) as an API proxy
- **Hosting** — Vercel

## Getting Started (Local with Vercel)
### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/meeting-to-action.git
cd meeting-to-action
2. Install Vercel CLI (if you don’t have it)
npm install -g vercel
3. Configure environment variables
Create a .env.local file in the project root:

ANTHROPIC_API_KEY=sk-ant-...your-real-key...
.env.local is git‑ignored so your key is not committed.

4. Run locally
vercel dev
Then open:

http://localhost:3000
You should see the Meeting to Action UI and be able to generate structured output from your meeting notes.

Deploying to Vercel
Create a new project on Vercel and link it to this GitHub repo.

In the Vercel dashboard for this project, go to Settings → Environment Variables and add:

Name: ANTHROPIC_API_KEY
Value: your Claude API key
Environment: Production (and Preview if you want)
Deploy (from the repo root):

vercel --prod
Open the production URL Vercel gives you (e.g. https://notionaction.vercel.app/) and test the app.

## Project structure
```
meeting-to-action/
├── index.html           # Full prototype UI
├── api/
│   └── generate.js      # Serverless API proxy
├── docs/
│   ├── Notion_Meeting_to_Action_PRD.docx
│   └── Notion_Meeting_to_Action_Deck.pptx
├── vercel.json           # Vercel routing config
├── .gitignore
└── README.md
```

## Security Notes
The Claude API key is never exposed to the browser:
Frontend calls /api/generate.
The serverless function (api/generate.js) reads process.env.ANTHROPIC_API_KEY and calls Anthropic.
.env.local and .env*.local are git‑ignored by default.
For production, the key only lives in Vercel’s encrypted environment variables.

## Author

Samuel Adehoun — Product Manager