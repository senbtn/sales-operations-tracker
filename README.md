# Sales Operations Tracker

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_Dashboard-2563eb?style=for-the-badge)](https://sales-operations-tracker.vercel.app/)

An interactive sales operations dashboard designed to improve pipeline visibility, meeting preparation, opportunity prioritization, and Won/Lost decision analysis.

> **Portfolio demo:** Every organization, person, note, and commercial value in this repository is fictional. The demo is intentionally separated from the production system and contains no employer or customer data.

## Why I built it

Sales teams often manage critical funnel information across spreadsheets, messages, and meeting notes. That makes ownership unclear, follow-ups easy to miss, and pipeline meetings unnecessarily manual.

I designed this application around the actual workflow of technology distribution and channel sales teams: one shared view for opportunity ownership, commercial value, expected quarter, competitive position, last contact, and the next conversation.

## What it demonstrates

- Executive KPI cards for active pipeline, open opportunities, closed outcomes, and neglected deals
- Dedicated Won/Lost analytics with win rate, won and lost value, partner performance, and loss-reason analysis
- Quarter-level pipeline summaries
- Search and multi-dimensional filtering
- Click-to-sort opportunity values
- Table and meeting-focused views
- Vendor and distributor ownership
- Competition tracking and funnel notes
- Add, edit, and delete interactions
- Responsive dashboard layout
- Safe demo mode using synthetic in-memory data

## Product decisions

| Challenge | Product response |
|---|---|
| Important deals become stale | Highlights opportunities with no recent contact |
| Funnel meetings require manual preparation | Dedicated meeting view and ownership filters |
| Commercial context is fragmented | Value, quarter, competition, ownership, and notes live together |
| Public demos can expose confidential data | Separate repository with synthetic data and no production connection |

## Tech stack

- **Next.js 14**
- **React 18**
- **JavaScript**
- **CSS**
- Production implementation: **Supabase**, authentication, row-level security, and **Vercel**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo behavior

The public build has no login and no database connection. Changes remain in browser memory and reset when the page is refreshed. This keeps the experience interactive without collecting or exposing data.

## My role

I identified the workflow problem, defined the requirements, designed the information architecture and access model, and iteratively built and tested the application with AI-assisted development.

This project reflects how I work as a technology sales professional: translating operational friction into a practical, deployed tool.

## Roadmap

- Activity history and structured next actions
- Configurable pipeline health rules
- Forecast accuracy tracking
- Import validation and data-quality reporting
- Pricing and follow-up workflow integration

## Author

**Botan Şen**  
Technology Sales · Channel Development · Sales Operations

---

If you are reviewing this project as part of a job application, the most relevant areas are the workflow design, prioritization logic, role-based production architecture, and separation of confidential production data from this public demonstration.
