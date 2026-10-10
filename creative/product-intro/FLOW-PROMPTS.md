# Google Flow production prompts

## Recommended route: precise product graphics + generated material motion

Use `frames/` as full composition references. Use `flow-plates/` as the generated backplates, then put the matching **transparent `overlays/` PNG** above the clip in your editor. The overlay contains the exact logo, labels, charts and cards. The backgrounds share identical framing and a restrained paper/grid texture; the final background changes to petrol.

This route gives Flow a clean high-resolution image to animate without asking it to recreate product text or change evidence counts. Animate the editable SVG layers separately for field changes, connector draws, account reveals and timeline progression. `REVIEW.html` demonstrates the intended timing. The raster overlay can move as a whole; the named SVG groups support separate movement.

You can experiment with uploading full reference frames as start/end images, but inspect every result: generated motion may deform words, marks, cards and chart geometry. Do not use those clips uncorrected as an accurate product explanation. Exact text and changing UI states should stay under your control.

Flow supports first-frame and first/last-frame workflows and clip settings that vary by model. Use the options available in your account. Official instructions: [Generate videos in Flow](https://support.google.com/flow/answer/16353334?hl=en) and [Flow models and features](https://support.google.com/flow/answer/16352836?hl=en).

## Global direction

16:9. Use a static frontal camera. Quiet light/material motion, no depth spin. Preserve the grid, paper proportions and all negative space. No new objects, text, logos, people, particles, interface controls or decorations. Do not depict a real customer environment.

Generate short clips and trim them to the edit durations below. Add exact product graphics afterward; the final cut is 16 seconds, rather than assuming every generated clip can have a 3-second duration.

## Clip 1 — change / 0–3 s

Start image: `flow-plates/01-agent-request-plate.png`.
End image: `flow-plates/02-observed-change-plate.png` if using first/last frames.

```text
A perfectly frontal premium editorial paper surface, faint precision grid and extremely fine paper grain. A soft warm studio light shifts almost imperceptibly from upper right toward center. The surface remains flat, stable and clean; all existing line positions remain fixed. No camera rotation, no zoom, no paper folds, no objects, no words or logos. Preserve the source image composition and restrained chalk, parchment and copper palette. The movement should support an exact interface graphic that will be composited afterward.
```

Composite/motion: show overlay 01 at 0 seconds, then transition into 02 at approximately 1.5 seconds. In the editable SVG, reveal `changed-field`; keep “Standard” visible as original state. Add the observed source only with the new field. Hold long enough to read Enterprise.

## Clip 2 — reconstruction / 3–6 s

Image: `flow-plates/03-linked-evidence-plate.png`.

```text
Continue the same frontal chalk paper surface and restrained warm studio light. A subtle illumination travels gently left to right across the blank surface, almost like a reading pass. The fine grid and paper texture stay stable. No added lines, objects, typography, logos or visual effects. No camera movement or geometry changes. End with evenly lit negative space for three exact evidence cards.
```

Composite/motion: use overlay 03. Animate `trace-node`, `batch-node`, `record-node` into place in order, drawing `evidence-links` between them. The source-to-record relationship must read TR-27 → WB-3 → A-001 / evt-0001.

## Clip 3 — account scope / 6–9 s

Image: `flow-plates/04-account-impact-plate.png`.

```text
Hold the same high-resolution chalk paper and subtle grid in a static frontal composition. A barely noticeable warm reflection settles across the surface, without covering the grain or changing contrast. No extra shapes, charts, data, text, logo, particles or camera travel. Keep the background quiet and legible for precise matrix and chart overlays.
```

Composite/motion: reveal `account-A-001` through `account-A-012` in reading order. Keep eight solid, three dashed and one outlined. Grow the three coverage bars to 8/12, 3/12 and 1/12 of the common track width. Never animate an inferred record into observed or unverified into confirmed.

## Clip 4 — owner and timeline / 9–12 s

Image: `flow-plates/05-owner-timeline-plate.png`.

```text
A stable frontal premium editorial paper surface. The light becomes slightly more even and grounded while fine grain remains visible. No camera rotation, no zoom, no new objects, cards, text, symbols or logos. Keep the composition and all original grid lines fixed. Subtle material motion only, allowing exact ownership and evidence graphics to be placed above it.
```

Composite/motion: use `ownership-card` and `evidence-timeline`. Reveal `event-01` through `event-04` in order. Keep the A-012 verification/ownership note visible throughout this shot.

## Clip 5 — human review / 12–16 s

Start: `flow-plates/05-owner-timeline-plate.png`.
End: `flow-plates/06-human-review-plate.png`.

```text
The same perfectly frontal flat editorial surface gently transitions from warm chalk to rich deep petrol. Preserve framing and negative space. A subdued warm light at the upper right becomes quiet and still. No objects, words, logos, interface, particles, camera motion or depth distortion. The transition feels calm and deliberate, ending on a stable dark petrol material surface for an exact evidence-and-human-review overlay.
```

Composite/motion: place `review-evidence` first, then slide `human-review-gate` beside it. Keep “Awaiting human approval” as the final state. Hold the last frame for approximately 1.5 seconds. Do not add a cursor click, an approval checkmark, a rollback animation or a success toast.

## Edit and export

- Place the exact foreground at the same 3840 × 2160 coordinates as its backplate. Use straight alpha PNGs; do not stretch either layer.
- Animate layers from `svg/` or use font-independent `svg-outlined/`. Individual frame group IDs are listed in `STORYBOARD.md` and the prompts above.
- Use match cuts or short 250–350 ms dissolves between chapters. Do not obscure evidence in long crossfades.
- Keep all product text composited. Use the optional voiceover in `STORYBOARD.md`; a silent version must still explain the process.
- Export a master at 3840 × 2160, plus an optimized 1920 × 1080 web version and poster image. Film length: 16 seconds.
- Review clarity at the real website display size. On small screens use a purpose-built portrait edit or a static explainer; a desktop dashboard should not become unreadable background decoration.
- The supplied images are actual 4K vector renders. No Flow clips have been generated or installed on the website yet.

## Direct Flow experiments using the full product frames

If you want to explore product movement inside Flow itself, use these full-frame pairs and prompts. These are experimentation prompts, not a guarantee of accurate generated typography. Retain the exact reference frames and correct the labels and data geometry afterward. Do not approve a clip if it invents account IDs, changes counts or appears to execute the proposal.

### Mutation: 01 → 02

Start `frames/01-agent-request.png`; end `frames/02-observed-change.png`.

```text
Create a precise premium software product animation between the supplied first and last frames. Keep the camera perfectly frontal, logo and editorial heading stable. The left agent tool-call card stays anchored. A copper connector draws toward the CRM record. The current Standard field reorganizes into the final before-and-after layout, with Enterprise arriving inside the apricot observed-write field. The source record line appears beneath. Minimal, purposeful interface movement; no extra accounts, controls, decorative objects or invented actions. Ease smoothly into the exact supplied final composition and hold it.
```

### Reconstruction: 02 → 03

Start `frames/02-observed-change.png`; end `frames/03-linked-evidence.png`.

```text
A controlled editorial match cut from the supplied CRM change to its evidence chain. The existing product cards settle into three anchored cards in the supplied final layout. Reveal the initiating trace first, tool write batch second and observed record third. Thin copper connectors draw left to right only between these three cards. Fixed frontal camera, subtle material light, no spinning or orbiting interface. Preserve the supplied brand palette and clean grid. End on the supplied final evidence composition without adding a successful remediation state.
```

### Scope: 03 → 04

Start `frames/03-linked-evidence.png`; end `frames/04-account-impact.png`.

```text
Make a clean frontal product-animation transition into the supplied account-scope layout. Twelve small account cards reveal in reading order: exactly eight solid slate, three dashed pale cards and one hollow amber-outlined card. The three horizontal evidence bars grow to the proportions shown in the final reference. Keep their ordering and proportions intact. Calm precision, light paper material, no decorative particles or invented additional accounts. Settle into the exact final frame. The unresolved account must remain unresolved.
```

### Responsibility: 04 → 05

Start `frames/04-account-impact.png`; end `frames/05-owner-timeline.png`.

```text
A precise software explainer match cut from account scope into the supplied owner-and-evidence-timeline composition. The owner card settles on the left. On the right, the thin timeline draws left to right and its four event markers appear in sequence. Keep all four markers anchored; preserve the separate amber unresolved-account note. A fixed frontal camera with no zoom, no new person portraits, no invented timestamps and no extra interface. End on the supplied final layout, calm and legible.
```

### Decision boundary: 05 → 06

Start `frames/05-owner-timeline.png`; end `frames/06-human-review.png`.

```text
Transition deliberately from the supplied ownership layout to the supplied evidence-and-review layout. The background becomes deep petrol. The exact evidence panel settles at left, and a draft proposal panel slides gently into place at right. Keep the proposal pending and the unresolved account visible. No cursor clicks, approval checkmarks, execution progress, rollback effects, success toasts or green completion states. Use refined restrained interface motion and a fixed frontal camera. Hold the supplied final composition still for the conclusion.
```
