# TraceTriage — brand and website design kit

Version 1.0 · 9 October 2026 · Foundation: selected visual option 3, Horizon Ledger.

This is an implementation kit for a research-stage company concept and isolated synthetic demonstration. It is not a deployed website. The original user request and TraceTriage brief are authoritative; the master guide supplies coverage and quality defaults. The latest screenshots explicitly add the trace-to-approval diagram, 8/3/1 coverage chart, CRM evidence table, pending-approval strip and five product motifs. The selected architectural direction remains the foundation. Earlier planning that renamed offers or collapsed product pages is superseded.

## Start here

- `REFERENCE-GALLERY.html`: interactive component and asset reference, including buttons, cards, chart filters and the 12-account table. Open locally in a browser or the Codex preview.
- `logo/`: original vector marks, outlined wordmark lockups and positive/reverse/monochrome exports.
- `favicon/`: mark-derived PNGs, SVG, ICO, Apple touch icon and manifest.
- `tokens.css` and `tokens.json`: semantic colors, layout, typography, surfaces, motion and component values.
- `fonts/`: locally packaged variable fonts and SIL OFL notices; WOFF2 for the website.
- `icons/`: editable consistent UI and five-offer icons; social asset provenance is recorded separately.
- `visuals/`: editable SVG diagrams, charts, tables, product interfaces and page-specific figures.
- `imagery/`: generated conceptual photography and texture assets, with provenance.
- `PAGE-VISUAL-MAP.md` and `asset-manifest.json`: each planned page/chapter, visual, background, interaction and responsive fallback.
- `RESEARCH.md`: real identity sources, design inferences, asset/license provenance and exclusions.
- `QA.md`: checks actually performed, evidence and remaining website validation.

## 1. Identity and positioning

**Company:** TraceTriage. **Category:** agent incident response. **Buyer:** enterprise SRE/on-call manager; platform engineer and incident owner co-evaluate; SRE director sponsors.

**Job:** reconstruct what a production agent wrote into a customer system, connect the downstream change to evidence and ownership, prepare a containment proposal for a human decision, preserve the timeline and turn the postmortem into evaluation cases.

**Working positioning:** “Follow an agent write from trace to impact, owner and human-approved response.” Incremental value over the buyer’s existing stack remains a pilot hypothesis. Do not claim unique remediation, replacement of observability, measured speed, certified security or live connectors.

**Character:** precise, accountable, composed, investigative, tangible. Express precision through aligned evidence; accountability through visible owners and decisions; composure through quiet motion; investigation through source relationships; tangibility through tactile architectural materials.

**Voice:** name the thing and the state. Say “12 synthetic accounts”, “owner unresolved”, “proposal awaiting mock approval”, “source unavailable”. Avoid “AI brain”, “revolutionary”, “instant certainty” and unsupported “secure by design”.

**Hero:** “Know what changed.” **Primary action:** “Run an agent incident tabletop” (compact nav: “Request a tabletop”). **Secondary:** “Explore synthetic demo”. Product links use “Explore Incident Review”, etc. No checkout or production trial CTA.

**Five working offers, unchanged:**

| Offer | Job | Distinct visual motif | Detail route |
|---|---|---|---|
| TraceTriage Incident Desk | Correlate trigger, trace and tool write | Joined evidence layers | `/products/incident-desk` |
| Incident Review | Map downstream scope and owners | Annotated branching impact graph | `/products/incident-review` |
| Incident Proof | Draft scoped pause/rollback proposal for human approval | Deliberate checkpoint/gap | `/products/incident-proof` |
| Incident Signal | Preserve evidence and decision chronology | Event rail with observed/inferred distinction | `/products/incident-signal` |
| Incident Report | Export postmortem into evaluation cases | Document-to-case transformation | `/products/incident-report` |

All five appear on Home, product menu, portfolio, dedicated pages, intake choices and relevant commercial context. Shared platform remains separate. Motifs are navigation aids, never substitutes for product names.

## 2. Approved logo: original Ledger Signature (Option 4)

Use the exact selected Option4 lettering and intricate copper emblem. The Newsreader-derived redraw was rejected and must not be used. Canonical SVGs now trace the original approved upper primary logo: broad curved T terminals, original letter proportions and spacing, second-T incision, copper g ear, and intertwined emblem. No substitute font is involved. Newsreader is still the website display typeface, not the logo font.

Primary slate/copper on chalk; reverse chalk/apricot; one-colour black or white. All variants share identical traced geometry. Clear space: at least25% of emblem width. Typical full navigation logo240–280px wide. Prefer full lettering for recognition. Favicons retain the original emblem; do not redraw/simplify it without a separate request. Source resolution limits traced vector precision. See LOGO-REFINEMENT.md for provenance and limitations. No trademark clearance is claimed.

## 3. Color system

| Primitive | Hex | Role |
|---|---|---|
| Chalk | `#F7F4EF` | Default editorial background |
| White | `#FFFFFF` | Dense table/input surface |
| Parchment | `#EDE7DF` | Ruled records, quiet alternate chapters |
| Apricot | `#F3D3BF` | Human decision/engagement chapters |
| Copper | `#934B32` | Brand CTA and selected evidence accent |
| Copper deep | `#733A28` | Hover/pressed primary action |
| Slate | `#334A59` | Technical architecture and observed evidence |
| Ink | `#202B32` | Primary text |
| Cacao | `#2C211D` | Footer and decisive dark chapter |
| Petrol | `#113F42` | Five-offer diagram chapter from supplied screenshot |
| Muted | `#59646B` | Secondary light-surface text |
| Line | `#C9C1B8` | Decorative dividers, never sole input boundary |
| Control line | `#7B7771` | Interactive boundaries on chalk |
| Success | `#24664C` | Validated/simulated completion with explicit text |
| Warning | `#875D17` | Pending/unknown; amber tint `#F2E3C3` |
| Error | `#A13D36` | Error/rejected; tint `#F8E5E2` |
| Information | `#334A59` | Informational status; tint `#E5EBEF` |

Do not use apricot, muted divider gray or pale inferred bars for small text. Primary buttons use chalk text on copper; light secondary buttons use ink with a control-line boundary. Dark secondary buttons use chalk and a chalk boundary. Focus is a two-ring treatment: a contrasting surface separator plus a copper/light-apricot outer ring appropriate to theme. Status always includes a label and shape/icon. Observed = solid; inferred = dashed; unavailable = hollow. Semantic colors never silently change meaning between sections.

## 4. Typography

Two families only: **Newsreader** (normal and italic variable, editorial display/long reading) and **Manrope** (variable, UI/body/data). Local WOFF2 fonts, `font-display: swap`, fallback Georgia and system sans. Retain both OFL files. Manrope data uses tabular numerals; do not add a third monospaced font merely for IDs.

| Style | Desktop / mobile | Weight, line-height, tracking | Use |
|---|---|---|---|
| Hero H1 | `clamp(48px,7vw,104px)` | Newsreader 400, 0.98, −0.025em | 2–3 intentional lines; italic one key word |
| Page H1 | 72 / 44 px | Newsreader 400, 1.03, −0.02em | Supporting route hero |
| H2 | 56 / 36 px | Newsreader 400, 1.08, −0.02em | Main chapter |
| H3 | 28 / 24 px | Manrope 600, 1.25, −0.02em | Products/components |
| H4 | 22 / 20 px | Manrope 600, 1.3, −0.01em | Detail subsection |
| H5 / H6 | 18 / 16 px | Manrope 650, 1.4, normal | Form groups/metadata hierarchy |
| Lead | 22 / 19 px | Manrope 400, 1.5 | Hero explanation, max 42ch |
| Body | 16 px | Manrope 400, 1.65 | Max 65ch; long reading 68ch Newsreader 22px optional |
| Small | 14 px | Manrope 400, 1.5 | Help text, table cells, chart labels |
| Caption / folio | 12 px | Manrope 600, 1.4, 0.08em | Short uppercase labels only |
| Button / nav | 14–15 px | Manrope 600, 1.2, normal | No all-caps paragraph labels |
| Numeric display | 40 / 32 px | Manrope 550, 1.1, tabular | Fixture totals, never invented outcomes |

One H1 per route. Serif headlines need no forced center alignment. Keep essential chart labels at 14px in the implemented visual; when an SVG scales below that, switch to a stacked layout or accessible HTML version. Do not shrink an entire dashboard until its text is unreadable.

## 5. Layout, grids, spacing and elevation

Desktop content max 1280px; wide art max 1600px; reading max 720px. Gutters `clamp(20px,4vw,64px)`. Desktop 12 columns/24px gap; tablet 8/20; mobile 4/16 with all evidence sequences stacked. Breakpoints 480, 768, 1024 and 1440px. Test 390px and short 1366×768 desktop; no pinned content on viewport height below 760px or width below 1024px.

Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160px. Section padding 96–128 desktop / 56–72 mobile. H2→lead 24px; lead→visual 40–48; table header→rows 16; related controls 8–12. Document purposeful exceptions; do not produce arbitrary 17/29/43px drift.

Hero composition may exceed the content grid through fullbleed art; its headline and CTAs return to the grid. Ruled tables and product previews use the same column start as headings. Alternating sections may change scale or alignment without changing every token. No more than three similarly sized card sections in a row.

Radii: 4px diagram/UI, 8px inputs/cards, 12px media, 999px compact nav/status chip. Avoid rounding every section. Borders: 1px quiet line, 1.5px interactive boundary, 2px focus. Shadows: none for open tables; resting media `0 8px 24px rgba(32,43,50,.08)`; raised hover `0 16px 40px rgba(32,43,50,.12)`; modal `0 24px 72px rgba(20,20,20,.22)`. No text shadows.

Layer order: page 0, texture 1, visual 2, local annotation 3, sticky nav 30, menu 40, scrim 50, dialog 60, tooltip 70. Decorative textures are `pointer-events:none`, never block controls and never become accessibility landmarks.

## 6. Background and imagery library

| Environment | Meaning | Use and overlay |
|---|---|---|
| Architectural horizon | Trace becoming visible | Home hero; original generated corridor; dark 35–60% left scrim |
| Chalk paper | Explanation, evidence | Solution/reading chapters; fine grain at 2–3%, no grain inside data text |
| Ruled parchment | Record reconciliation | Desk/Signal tables; 48px rules, no decorative grid crossing labels |
| Slate drafting field | Shared systems | Platform topology; fine 40px grid at 5%, non-geographic |
| Petrol weave | Five connected offers | Screenshot-inspired five motifs; chalk labels, restrained copper/apricot nodes |
| Apricot decision field | Human review | Incident Proof, qualification, scope decisions |
| Copper macro | Provenance/material precision | Company/resources editorial media; no fictional office ownership claim |
| Cacao close | Next action/recovery | Final conversion, footer, 404 |

Photography is **conceptual generated architecture**, not a real office/team/customer. Use captions where its status could be mistaken. No stock team photos, manufactured customer portraits or irrelevant robots. Product illustrations show a specific gap, owner, authority boundary or export—not random floating shapes. Each route has a distinctive hero: topology, trace layers, branching scope, approval boundary, event rail, report transformation or editorial architecture. Do not repeat the corridor on every product page.

Generated photos use original masters; derived WebP variants resize/encode only. Desktop focal point center-right, text left; mobile use a cropped top art band and solid text area when contrast is uncertain. Reserve image dimensions, defer below-fold loading, no photographic background inside a dense evidence table. Texture assets remain small vector CSS sources.

## 7. Icon and diagram grammar

SVG viewBox 24×24, 1.75px strokes, round line caps/joins for UI. Sizes 16/20/24, optical default20; touch target44×44. Logo uses its own squared six-unit construction. Product motifs are larger diagram assets, not overloaded UI icons. Icons are `currentColor`; meaningful standalone icons receive accessible names; duplicate text icons are hidden from assistive technology.

Kit includes arrows, chevrons, external link, close/menu, search, check, plus/minus, info/warning, mail, download, lock, eye/eye-off, play/pause, reset, document, database, users, owner, checkpoint, layers, timeline, report and filter. No icon-only primary conversion.

**LinkedIn and Crunchbase:** include recognizable official assets where available, preserve original artwork, and record source/usage terms in `RESEARCH.md`. No company URLs supplied: preview as inactive, no `href="#"`, no unrelated company link, no hover implying click. Profile creation is outside this request. Official social marks do not become TraceTriage brand assets.

Diagram convention: edges meet explicit node ports; labels outside edges; arrows stop at border; observed connections solid, inferred dashed, missing dotted/hollow. An ownership map is a dependency topology, not a decorative world map. A geographic map is not justified by this product brief and is not invented. Use topology/scope maps instead. Diagrams include titles, legends, synthetic status, text summaries and enough space around labels. HTML text/control layer is preferred for interactive implementation.

## 8. Components and complete states

| Family | Default | Hover / focus | Pressed / selected | Loading / unavailable | Error / success |
|---|---|---|---|---|---|
| Primary CTA | Copper, chalk label, 48px high, 20px horizontal | Copper deep directional wipe; arrow travels 4px; focus double ring | Deep surface, 1px inset, label stable | Stable width, spinner and verb; disabled muted with reason | Confirmation text replaces action only on actual accepted operation |
| Secondary CTA | Transparent, control-line boundary | Parchment fill; underline motion | Ink-tinted fill | Disabled text + reason | Error nearby, never red button alone |
| Text CTA | Ink, visible underline | Underline extends, arrow slot | Current route `aria-current` | No fake `#` | Live region for result when appropriate |
| Destructive demo CTA | Error boundary, explicit simulated label | Error tint, no entertaining animation | Confirmation dialog required | Blocked if prerequisites missing | Rejected reason persists; simulated success never says real rollback |
| Product card/panel | Motif, title, job, one link | Path highlights relevant step; edge rail copper; max −2px lift | Selected product accent + label | Media fallback retains copy | Unavailable connector state explicit |
| Evidence row | Rule, source/status/owner | Row tint + source arrow; `focus-within` equivalent | Detail panel ties to record ID | Skeleton keeps columns, textual empty state | Missing source hollow; owner unresolved labeled |
| Chart bar / node | Unit/count and legend | Tooltip + related record highlight | Select filters table; explicit selected state | “Not measured” distinct from zero | No invented metric to fill empty chart |
| Tabs | Labels, 44px targets, underline | Surface tint + focus ring | `aria-selected`, keyboard arrows | Disabled tab names reason | Errors associated with tab content |
| Accordion | Question + chevron, full row button | Underline question, focus row | Expanded chevron rotates90° | No artificial loading | All text available without animation |
| Input | Label, hint, 48px height, 1.5px boundary | Boundary ink; focus ring | Filled label remains | Disabled reason, read-only distinct | Error icon + precise text + `aria-describedby`; valid only if meaningfully checked |
| Form | Quiet grouped fields, consent unchecked | Normal keyboard traversal | No submission on scrolling | Busy summary + stable button | Unconnected: “Sample submission — nothing sent”; connected: confirm genuine receipt |
| Modal | Title, scope, cancel, deliberate action | Trapped focus, Escape, clear close | Approve/reject simulated only | Prevent duplicate local transitions | Return focus to origin; preserve canceled state |
| Navigation | All suite routes with descriptions | Diagram preview accompanies link; keyboard equals pointer | Current-route indicator | No unimplemented menu destination in published nav | Branded404 with recovery routes |

Component dimensions: button48px (compact40; touch hitbox44), input48, checkbox20 within44 target, card padding24/32, table row56, dialog max640, tooltip max280, icon-label gap8. Whole-card links use one semantic anchor and avoid nested interactive children. Chart tooltips do not carry indispensable information alone.

For cards, previews change evidence emphasis, not authorization status. Diagram hover is a visual explanation; touch tap on an explicit “Inspect” control opens equivalent detail. The kit’s reference gallery demonstrates representative states; it does not send leads, authenticate users or authorize actions.

## 9. Motion and interaction contracts

Base easing `cubic-bezier(.22,1,.36,1)`. Micro120–180ms; controls220ms; section entry480ms; story transitions640ms. Hover never delays clicking. Essential content starts readable; JS is enhancement, not a condition to see copy. Pointer effects are small, no universal tilt or magnetic buttons.

| Pattern | Trigger → visible meaning | Reverse / limits | Mobile and reduced motion |
|---|---|---|---|
| Horizon hero | Entry reveals trace annotation; optional 2% image translation | Entrance once; no auto-replay; no WebGL requirement | Complete still image; solid text zone; zero parallax |
| Trace-to-approval | Scroll highlights current stage with edge draw | Highlight scrubs backward predictably; no operation runs | Stacked numbered steps + manual Next/Back |
| Five-offer motifs | Focus/hover highlights product’s own path | Returns rest on blur; no simultaneous looping | Explicit inspect button; selected outline |
| Impact map | Select account → highlight evidence and owner | Selection persists until changed/reset | List + summary replaces pan/zoom map |
| Evidence table/chart | Select observed/inferred/awaiting → filter records | Clear filter returns12; never randomizes counts | Scroll table in named region; alternate record cards |
| Approval | Deliberate local dialog → mock decision result | Cancel unchanged; rejected proposal retained | Same explicit control, no animation-dependent approval |
| Timeline | Manual source selector highlights event/ingestion relationship | Stable order; upscroll never rewrites history | Full chronological list |
| Export | Explicit preview/download → synthetic JSON case | Download never calls model/pipeline | Same text preview and file |
| Form | Input/submit → local validation and truthful result | Errors recoverable; retained values | Same labels and feedback |

At most one pinned story per route, optional1024px+ and760px+ height; suggested pin range1–1.5 viewport heights, visible skip/manual controls, natural exit. GSAP ScrollTrigger can coordinate later; native scroll remains. Lenis is optional, not required by this kit. Clean up timelines on route changes; pause offscreen/hidden-page media. Reduced motion sets transition transforms to none, content to final visible states and no forced smooth scroll. Document per-section trigger and fallback in the visual map.

## 10. Product UI and fixture contract

Every product visual, demo screen, capture, tooltip context and export includes **DEMO — SYNTHETIC DATA · CONCEPT PREVIEW**. Fixture date9 Oct2026, UTC. Fictional Oakridge Services, incidentINC-027, agent`support-agent-01`, traceTR-27, write batchWB-3, exactly12 sample accounts. Account keys canonicalACC-001…ACC-012; compact display A-001…A-012, never different entities. Before Standard; observed proposed scenario write Enterprise. Fictional reviewer Maya Chen; ACC-012 owner unresolved. Ten incident queue records are a separate entity count.

Coverage8 observed /3 inferred /1 awaiting verification totals12. This classifies **evidence certainty**, not whether the underlying scenario contains12 affected accounts. Awaiting rows must display “Enterprise — scenario fixture; source unverified”, rather than falsely asserting an observed fact. The dataset is deterministic; don't animate fake incoming changes.

Local state machine: detected→evidence_review→owner_review→proposal_ready→awaiting_mock_approval→mock_authorized→simulated_pause_recorded→report_ready. Block/reject branches preserve reasons. Approval is never caused by scrolling. Unresolved owner blocks any proposal requiring that owner's authority. A broad rejected proposal and narrower later proposal have distinct version IDs. No real paging, mutations, rollback, payment, model call or production authentication.

Dashboard hierarchy: incident identity/boundary first; scope/owner/action status second; evidence tabs third; actual sources fourth. Avoid a generic “analytics dashboard” of arbitrary KPIs. Counters show fixture units; results show “Not measured” until evidence exists. Export includes synthetic flags, IDs, original/written tier, expectation, uncertainty and limitations.

## 11. Page and section variety

The separate `PAGE-VISUAL-MAP.md` is the authoritative composition inventory for this kit. Each section has a visual asset, purpose, environment and behavior; it does not mean every section receives a photo. Tables and prose can carry evidence more clearly than decorative illustration. Shared footer/navigation and conversion are intentionally reusable; narrative composition is page-specific.

Home covers hero, inspectable credibility, fragmented workflow, solution diagram/chart/table, approval, five named offers, platform, use cases, evaluation methodology, honest contributor-feedback pending area, trust/stack fit, hypothesis pricing, FAQ, conversion and complete footer. Supporting routes cover why-change, solutions/personas, products/five dedicated pages, platform, results, pricing, request-demo, sign-in, about, contact, trust, resources/articles, integrations, legal and404. Demo routes have their own purposeful visuals and states.

The two supplied screenshots are references to adopt as editable compositions, not screenshot images to embed in the site. Their UI chrome and grain behind evidence text are removed. Product motifs preserve layers/branch/checkpoint/rail/documents; the approved option3 typography and warm architectural palette determine the rest. Petrol is a deliberate secondary chapter, not a replacement for the selected direction.

## 12. Navigation, forms, footer and social

Desktop: Products / Platform / Solutions / Pricing / Resources / Company, Sign in, Request a tabletop. Product menu lists all five with small motifs and one-line responsibilities. Mobile mirrors destinations; drawer focus/close/Escape/outside-click/scroll restoration are defined. Sticky header72 desktop/64 mobile, anchor scroll-margin96/80.

Footer: full suite list, Platform, Solutions, Resources, Company/About, Contact, Trust, Pricing, Privacy/Terms and the two social entries. Dark cacao chapter, reverse logo, reading contrast preserved. Contact/operator/profile data must be supplied before publication; no invented addresses or links. Copyright uses actual publication year.

Qualification: work email, role, company, production-agent action type, current stack, named incident-owning function, redacted-case availability, product/full-suite choice. Optional interview opt-in separate. Privacy acknowledgement not bundled with marketing consent. No logs, secrets, contracts or customer records uploaded. Error/loading/success/retry states shown in gallery/spec. Real lead handling, retention, controller and vendors remain later integration decisions.

Sign-in: polished concept access page with demo entry, role selection, help/contact and request-access path. “Concept preview — no production authentication.” Do not solicit passwords into a dead form or present real SSO buttons without supported integration.

Pricing: **hypotheses**, $4,000 tabletop and $2,200/month per incident-managed agent group; no invented three tiers. The meaning/scope of the unit is a buyer scoping question. Form-submission/verification/booking analytics require genuine milestones; synthetic demo events stay segregated and local unless separately approved. Existing claims/privacy/consent contracts from the research report remain required.

## 13. Implementation handoff and acceptance

Use semantic HTML/React/TypeScript with local assets and CSS variables. SVGs are editable source illustrations; convert interactive labels/nodes/table cells into semantic controls with accessible text, not clickable raster screenshots. Chart/table fixture JSON is the source of truth. Keep assets in repository-relative paths; never ship personal absolute filesystem locations. Reserve media dimensions; lazily load below-fold imagery; fonts and scripts do not block first useful content.

Check all products, routes, names and synthetic labels against the original brief. Confirm logo masters, favicons, same UI font/spacing/state grammar, responsive diagram alternatives, keyboard order, touch, focus, reduced motion, chart units,12-account totals and human authorization boundary. Test real implementation at390/768/1440 and short desktop; compare screenshots to this kit. Check real forms, metadata, route links, media budgets and deployment only when built. This brand kit’s asset checks are not website QA.

Open inputs for later publication: operator/contact details, LinkedIn/Crunchbase profile URLs, domain/repository/deployment accounts, real form processors and retention, approved legal notices, paid pilot scope and thresholds, approved customer evidence. These do not block producing the kit; they must not be fabricated.
