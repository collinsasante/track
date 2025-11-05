# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Cloudflare Pages** static site application for design review and order tracking for Packaging Glamour. The application allows customers to track their orders using order IDs and review/provide feedback on design drafts.

## Architecture

### Deployment Platform
- **Cloudflare Pages** with Functions
- Static HTML/CSS/JavaScript (vanilla JS with jQuery)
- No build process - direct deployment

### Core Components

1. **[index.html](index.html)** - Order tracking page
   - Customers enter order IDs (format: `ORD-XXXXX`)
   - Searches Airtable for order details
   - Supports direct links: `/ORD-XXXXX` or `/XXXXX` (auto-redirects)
   - Displays order information and redirects to design review

2. **[design-review.html](design-review.html)** - Design feedback page
   - Interactive design viewer with click-to-comment functionality
   - Comments are positioned markers on the design image
   - Saves feedback to Airtable "Design Feedback" table
   - Query params: `?project=ORD-XXXXX&customer=NAME&design=URL`

3. **[functions/api/config.js](functions/api/config.js)** - Cloudflare Function
   - Serverless API endpoint at `/api/config`
   - Returns Airtable credentials from environment variables
   - Prevents exposing secrets in client-side code

### Data Sources

**Airtable Integration:**
- Base ID and API Key loaded from Cloudflare environment variables
- **Submissions Table** - Order records with customer info
- **Design Drafts Table** - Design file attachments (Design Draft 1 field)
- **Discovery Call Records Table** - Project file links (Google Drive URLs)
- **Design Feedback Table** - Customer feedback with marker positions

**Design URL Resolution (priority order):**
1. Discovery Call Records → Project File Link fields
2. Design Drafts → "Design Draft 1" attachment field (preferred)
3. Design Drafts → URL text fields
4. Fallback placeholder if not found

### URL Routing

**[_redirects](_redirects)** - Cloudflare Pages URL rewriting:
- `/ORD-:id` → `/index.html` (200 rewrite, preserves URL)
- Enables shareable direct links for orders

## Development

### Local Testing
Since this is a Cloudflare Pages project, test locally using:
```bash
npx wrangler pages dev .
```

This will:
- Serve static files from current directory
- Run Cloudflare Functions from `functions/` directory
- Simulate the production environment

### Environment Variables
Required in Cloudflare Pages dashboard (or `.dev.vars` for local):
- `AIRTABLE_BASE_ID` - Airtable base identifier
- `AIRTABLE_API_KEY` - Airtable API token

### Deployment
Deployment happens automatically via Cloudflare Pages:
- Connected to Git repository
- Auto-deploys on push to main branch
- No build command needed (static site)

## Code Patterns

### Airtable API Calls
- All API calls use jQuery AJAX with Bearer token authentication
- Order search uses `filterByFormula` with OR logic for flexibility
- Linked records are fetched separately using record IDs

### Google Drive Links
The application converts Google Drive sharing links to direct image URLs:
```javascript
// From: https://drive.google.com/file/d/FILE_ID/view
// To:   https://drive.google.com/uc?export=view&id=FILE_ID
```

### Direct Link Loading
When URL contains an order ID (path or query param):
1. Shows full-screen loading overlay
2. Auto-populates form
3. Auto-submits search
4. Redirects to design review page

## Important Notes

- **No build process** - Edit HTML files directly
- **XSS Prevention** - Use `escapeHtml()` function for user-generated content
- **Order ID Format** - Always use `ORD-` prefix (added automatically if missing)
- **Mobile Responsive** - Grid layout collapses to single column on mobile
- **Comment Markers** - Positioned using percentage-based coordinates (responsive)
