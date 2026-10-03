# CLAUDE.md - LegalOS Uzbekistan Project Memory & Instructions

## Project Overview
LegalOS Uzbekistan is an end-to-end Legal Operating System tailored for Uzbekistan's legal framework.
- **Workflow:** Question ➔ Document ➔ Case ➔ Compliance ➔ Real Lawyer Handoff.
- **Design System:** Strictly uses **Blue** (Royal Blue & Navy), **White** (Pure White cards & slate canvas), and **Green** (Emerald Green for verified Lex.uz compliance).
- **Core Stack:**
  - Frontend: Semantic HTML5, Vanilla CSS (Variables, Flexbox, Grid), Modular JS, SVG graphics.
  - Local Dev Server: `python serve.py 3000`
  - Backend (Partner #1): Java 21, Spring Boot (Spring Cloud Gateway, Spring Security + JWT, PostgreSQL, Redis).
  - AI Engine (Partner #2): Python FastAPI, LangChain/RAG, Lex.uz vector databases.

---

## File Architecture & Portals

### 1. Dedicated Portals
- `templates/login.html`: Modern authorization portal designed after Pinterest floating card style (silk blue wave gradient, role switcher pills, OneID button, Google login).
- `templates/citizen.html`: Citizen portal (`CITIZEN`) — Legal AI Chat, pre-filled legal claim templates, find a real lawyer.
- `templates/lawyer.html`: Lawyer portal (`LAWYER`) — Case workbench (#UZ-2048), AI Court Strategy Simulator (3-Agent), court precedents research, billing CRM.
- `templates/business.html`: Corporate portal (`ORG_MEMBER`) — Contract Intelligence & Redline diff, Proactive Compliance alerts, Internal Policy RAG.
- `templates/admin.html`: Admin portal (`ORG_ADMIN`) — User management & RBAC, Audit trail logs, subscription billing, API integration keys.
- `templates/index.html`: Public landing page (hero, portals, features, security).
- `templates/register.html`: Registration page (shares `css/auth.css` with login).
- `templates/studio.html`: AI Studio — unified SPA combining all 7 interactive modules.

**Convention:** all HTML lives in `templates/`; static files stay in `css/`, `js/`, `assets/` and are referenced as `../css/...`, `../js/...`. Pages link to each other by bare filename (`login.html`). `serve.py` serves `templates/*.html` at the root URL (`/` → `index.html`, `/login.html`), so keep new pages in `templates/`.

### 2. Styling System (`css/`)
- `css/variables.css`: Design tokens, colors (Primary Blue: `#2563eb`, `#1d4ed8`; Green: `#10b981`, `#059669`; White: `#ffffff`, `#f8fafc`).
- `css/base.css`: Global typography (Inter font), buttons, badges, cards, resets.
- `css/auth.css`: Styling for `login.html`/`register.html` floating card and mesh wave layout.
- `css/layout.css`: Header, sidebar, proactive compliance alert banner.
- `css/components.css`: Citations, Verifier Seal stamps, Redline `<del>` and `<ins>` diffs, slide-out drawer, toast alerts.
- `css/views.css`: Specific layouts for Chat, Simulator, Time Machine, Compliance.

### 3. Data & State (`js/`)
- `js/data.js`: Mock Lex.uz laws (`FK-333`, `MK-161`, `SK-227`), sample contracts, case files, lawyers list, team members.
- `js/state.js`: Reactive state manager (Role switching, active tabs, redline acceptance).
- `js/components.js`: Dynamic component builders (Knowledge graph SVG, citation badges, toasts).
- `js/app.js`: Main controller logic.

---

## Development Guidelines for Claude Code
1. **Design Integrity:** Maintain the Blue, White, and Green palette. Never introduce random uncoordinated colors.
2. **Interactive Citations:** Always ground legal answers in verifiable citations (`[FK 333-modda]`, etc.) with the green Verifier Seal badge.
3. **No Heavy External Frameworks Required:** This frontend is intentionally designed with lightning-fast native web technologies (HTML5, Vanilla CSS, JS). Do not add unnecessary heavy dependencies unless requested.
4. **Backend Readiness:** All forms and buttons are pre-configured to easily attach to Spring Boot REST endpoints (`/api/v1/...`).
