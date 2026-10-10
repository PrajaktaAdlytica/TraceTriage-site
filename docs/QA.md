# Website QA

Completed 10 October 2026 against the production build served locally on port 4173.

## Verified

| Check | Result |
| --- | --- |
| Production build | Pass; 47 prerendered routes |
| All direct routes, desktop 1440 × 900 | Pass; one H1 per route; no page overflow |
| Missing assets / browser runtime errors | None detected |
| All 47 routes, mobile 390 × 844 | No page overflow |
| Six representative routes, mobile 320 × 740 | No page overflow |
| Six representative routes, tablet 768 × 1024 | No page overflow |
| Short-screen story fallback | No pin at 1440 × 600 |
| OS reduced motion | Native document, complete narrative, no pin |
| Footer motion control | Removes pins and smooth scrolling |
| JavaScript disabled | Prerendered product content remains readable |
| Unknown route | Branded 404 renders |
| Desktop/mobile navigation | Open/close, Escape focus return, route selection |
| Story controls | Chapter navigation and skip link |
| Evidence filters | Twelve total; awaiting filter leaves one unverified record |
| Record inspection | A-012 retains unavailable source and unresolved owner |
| Timeline | Event source expansion works |
| Review dialog | Opens, cancels, restores focus and commits deliberate local decision |
| Report download | Twelve accounts, evidence coverage, rationale and no-execution field preserved |
| Review lifetime | Clears on reload as documented |
| Inquiry form | Validation, local preparation, download and draft editing |
| Pricing estimator | Three groups displays $6,600 hypothesis |
| Source mapping | Selected source changes the actual field list |
| Resource download | Tabletop guide exports its own content |
| Queue search | Empty state and clear/reset work |
| Evaluation tabs | Arrow navigation changes selected panel |

## Accessibility scan

Automated axe-core checks with WCAG 2 A/AA and WCAG 2.1 AA rules found **zero violations in the eight checked views**: homepage, Incident Review, pricing, request form, tabletop guide, incident impact, incident approval and company page. Low contrast on apricot surfaces was corrected before this result.

This is a scoped automated scan plus keyboard and reduced-motion testing, not a claim of complete accessibility certification.

## Visual review

Reviewed desktop hero, pinned impact chapter, product-suite section, Incident Review hero and inquiry form, plus mobile hero, product, pricing, resources, company and incident views. Corrected mobile overflow, a narrow-screen resource heading, story-control naming, the menu focus target, and direct-route hydration.

The site uses the faithful Option 4 vector identity. No Lovable mark, default favicon, filler article, invented customer logo or design-review badge is present in the public interface.

## Technical size

Production JavaScript is approximately 502 kB uncompressed / 162 kB gzip across three chunks. CSS is approximately 65 kB / 14 kB gzip. The 1600px hero WebP is approximately 121 kB. Fonts and assets are local. The installed dependency audit reported zero vulnerabilities when built.

## Remaining external work

Hosting/domain, real inquiry delivery, identity service, approved company-profile URLs and production operator/legal information are not connected. Those services have not been tested or represented as working. The deployment handoff lists the specific next steps.

## Homepage refinement — 10 October 2026

- Removed the hero's unexplained TR-27 / WB-3 / 12-account line. The identifiers remain in the incident walkthrough where they have context.
- Added three drifting mist layers masked to the photographic window, preserving the mullion and architecture. The overlay follows the same crop and parallax as the image. Motion pauses offscreen, responds to the existing motion toggle, and is static for reduced-motion users.
- Added a fine drafting grid and paper grain to story sections, cotton ledger texture to homepage evidence, and a warm mineral-paper surface to the engagement section.
- Added 26px between the trust eyebrow and heading, 34px below the heading, and more comfortable heading line height.
- Production build passed and regenerated all 47 routes. Visually inspected the hero, story, evidence, trust and engagement sections at the user's 775px viewport. No document overflow. Verified fog layers animate, pause offscreen and pause with Motion off.

## Product-suite refinement — 10 October 2026

- Added a warm paper surface and faint concentric drafting lines to the product-suite hero.
- Replaced the static orbit with five measured SVG connections and a GSAP sequence that draws each connection, moves a signal toward its view and highlights the card. The central caption explains the current view's role.
- Hover and keyboard focus pause the sequence and select the relevant connection. Animations pause offscreen. Motion off gives a static diagram and hides traveling signals.
- Build passed for all 47 routes. Visually inspected at the user's 775px width with no overflow or runtime errors. Verified automatic progression, Incident Review and Incident Proof focus selection, and the motion-off fallback.

## Platform hero texture — 10 October 2026

Added woven-paper grain, a fine 96px drafting grid, warm directional shading and a translucent architecture panel to the Platform hero. Styles are scoped to this page. Production build passed for all 47 routes.

## Incident Owners hero texture — 10 October 2026

Added warm archival-paper grain, faint ledger ruling and soft directional shading to the Incident Owners hero. The review card uses a lighter paper surface and restrained shadow. Styles are scoped to this solution page. Production build passed for all 47 routes.

## Results workflow refinement — 10 October 2026

Added a full-width archival-paper texture and fine vertical ruling to the Results workflow section. Hovered rows receive a light wash, copper heading and a 45-degree arrow rotation from northeast to east. Existing reduced-motion CSS removes transition animation. Build passed for all 47 routes; inspected the workflow at 775px with no document overflow.

## Demo incident summary — 10 October 2026

Replaced four oversized statistics with a connected incident dossier: trace, write batch, affected scope and human review. Each stage links to its existing inspection page; evidence coverage uses the same 8/3/1 fixture. Review status reflects the current local decision. Build passed for all 47 routes. Verified no overflow at 775px, all four icons loaded, and all stage links target existing incident routes.

## About hero spacing — 10 October 2026

Changed the About opening to content-led height with balanced top/bottom padding and consistent left alignment. Removed forced paragraph line breaks, limited the lead to a readable column, increased line height and added more space below the headline. Build passed for all 47 routes.

Verified About alignment at 775px and 1440px. Heading and paragraph share the same left edge; paragraph has approximately 203px and 128px of space below it respectively. No horizontal overflow.


## Visible fog refinement — 10 October 2026

The window fog now uses smaller, more defined wisps, stronger contrast and separate 7, 10 and 14 second drifts. The atmospheric layer follows the photograph's 58% crop at narrow widths, keeping fog behind the glass rather than over the server wall. Resize and visibility observers clean up on unmount.

Verified changing transforms and visible wisps in the browser at 775px; all three layers pause with Motion off and resume with Motion on. Reduced-motion rules remain in place. Browser error log empty. Production build and prerender succeeded for all 47 routes.


## Site-wide shutter interaction — 10 October 2026

Added a shared bottom-to-top background reveal to buttons, CTA links, navigation and footer links, interactive cards, diagram nodes, tabs, FAQ summaries, workflow rows, incident stages, pricing and engagement cards. Native table cells and form fields use an equivalent background-size reveal. Existing arrow, border, elevation and selected states remain. The shutter layer sits behind content, uses brand-specific light/dark fills and cannot intercept pointer input. Disabled controls do not animate. Keyboard focus receives the same reveal; Motion off and reduced-motion preferences use immediate still states.

Verified a CTA keyboard-focus reveal mid-transition, preserved absolute positioning on product nodes, actual workflow-row hover with full reveal and arrow rotation, form-field fill styling, and zero-duration shutter transitions with Motion off. Browser error log empty. Production build and all 47 prerendered routes passed.


## Navigation shutter removal — 10 October 2026

Removed the shutter layer from all navbar controls and links, including desktop/mobile navigation, dropdowns, navbar CTA and Sign in. Kept restrained original background/opacity hover feedback and keyboard focus outlines. Other site buttons and cards retain the shutter. Verified no pseudo-element content across navbar links/buttons and on focused desktop Sign in at 1440px; non-navigation CTAs still have the shutter layer. Build and all 47 prerendered routes passed.


## Five Connected Views shutter removal — 10 October 2026

Removed the shutter from every suite panel in the shared Five Connected Views section. Original arrow/motif hover feedback and focus outlines remain. Verified all five panels have no shutter pseudo-element, including keyboard focus; checked desktop and narrow layouts. Production build and all 47 prerendered routes passed.


## Shutter restricted to cards and buttons — 10 October 2026

Simplified shutter selectors to buttons, CTA buttons and card surfaces only. Removed it from text links, navigation, footer links, FAQ summaries, workflow rows, incident stages, tables and form fields. Navbar/Sign in and Five Connected Views remain excluded. Existing restrained hover feedback remains. Verified card reveal mid-transition, CTA layer presence and absent layers/background reveals on excluded surfaces. Build and all 47 prerendered routes passed.
