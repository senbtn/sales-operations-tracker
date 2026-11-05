# Sales Operations Tracker

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_Dashboard-2563eb?style=for-the-badge)](https://sales-operations-tracker.vercel.app/)
[![Channel DealFlow](https://img.shields.io/badge/DealFlow-Open_Workspace-172033?style=for-the-badge)](https://sales-operations-tracker.vercel.app/dealflow)

An interactive sales operations workspace for pipeline visibility, meeting preparation, opportunity prioritization, competitive intelligence, and Won/Lost analysis.

> **Public portfolio demo:** Every organization, person, note, and commercial value is fictional. The demo is fully separated from the production system and contains no employer, partner, or customer data.

## What the product does

Sales Operations Tracker consolidates the operational context normally scattered across spreadsheets, messages, and meeting notes. It gives sales teams one place to understand ownership, commercial value, expected quarter, competition, last activity, next actions, and closed outcomes.

### AI Sales Assistant

The dashboard includes an English-language conversational assistant that analyzes the synthetic portfolio data directly in the browser. Reviewers can ask questions such as:

- Analyze Maya's open pipeline and recommend today's priorities.
- Which Q2 opportunities carry both brand and distributor competition?
- How concentrated is pipeline value across the top five partners?
- Break down the portfolio by technology, owner, or partner.
- List the highest-risk opportunities and explain the evidence.
- Show the details of those opportunities.

The assistant keeps follow-up context, combines structured fields with commercial notes, and evaluates recency, value, quarter, brand competition, distributor competition, partner breadth, and Won/Lost outcomes. Its distributor perspective treats broad partner contribution as market coverage and flags dependency only when value is excessively concentrated.

The public assistant is read-only, runs locally against fictional in-memory records, and does not connect to the private production database or an external AI service.

## Core capabilities

- Executive KPI cards for pipeline, open opportunities, closed outcomes, and neglected deals
- Natural-language analysis through the AI Sales Assistant demo
- Dedicated Won/Lost analytics with win rate, won/lost value, partner performance, and loss reasons
- Quarter-level pipeline summaries
- Search, multi-dimensional filtering, and sortable values
- Table and meeting-focused views
- Vendor and distributor ownership
- Brand and distributor competition tracking
- Funnel notes and last-contact prioritization
- Add, edit, close, reopen, and delete interactions
- CSV export and a responsive dashboard layout
- Safe synthetic-data mode with browser-local state

## Product decisions

| Challenge | Product response |
|---|---|
| Important deals become stale | Highlights opportunities with no recent contact |
| Funnel meetings require manual preparation | Meeting view, ownership filters, and priority scoring |
| Commercial context is fragmented | Value, quarter, competition, ownership, and notes live together |
| Managers need answers without rebuilding reports | Conversational analysis over the current portfolio |
| Public demos can expose confidential data | Separate repository with synthetic data and no production connection |

## Channel DealFlow

The public `/dealflow` workspace demonstrates partner workbook intake, request ownership, pricing handoffs, status transitions, account-owner workload, quick updates, and activity timelines.

Its Finance & Cost workspace includes synthetic payment terms, credit limits, finance notes, product-tax references, calculated tax values, and a simplified bundled power-supply exemption example.

## Production architecture

The private production implementation uses:

- Next.js and React
- Supabase authentication and row-level security
- Vercel deployment
- Role-aware read/write access
- A server-side OpenAI query planner
- Local calculation over RLS-authorized records
- No raw production rows, company names, or comments sent to the AI service

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Demo behavior

The public build has no login and no database connection. Changes remain in browser memory and reset on refresh. No production finance, tax, partner, customer, or opportunity data is included.

## My role

I identified the workflow problem, defined the requirements, designed the information architecture and access model, and iteratively built and tested the application with AI-assisted development.

This project reflects how I work as a technology sales professional: translating operational friction into a practical, deployed product.

## Author

**Botan Şen**  
Technology Sales · Channel Development · Sales Operations
