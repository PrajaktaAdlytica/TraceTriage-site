# TraceTriage — the incident, explained

A 16-second, product-led opening. It answers: **an agent changed a record; how do we understand the change and decide what to do?** The visual subject is the CRM incident, rather than a building or a logo reveal.

This replaces the earlier architecture-led intro directions. Keep the approved Ledger Signature logo, Newsreader display type, Manrope interface type, chalk/parchment surfaces, copper emphasis and petrol conclusion.

## Shot plan

| Time | Visible action | What a visitor learns | Keyframe |
|---|---|---|---|
| 0–3 s | A tool call requests Enterprise for A-001. Its persisted field changes from Standard to Enterprise; the observed source appears. | An agent changed a CRM record. | 01 → 02 |
| 3–6 s | The view reorganizes into three connected evidence cards: initiating trace TR-27 → batch WB-3 → observed record A-001 / evt-0001. | TraceTriage reconstructs the cause and links it to the consequence. | 03 |
| 6–9 s | A scope matrix reveals twelve accounts. Eight are solid observed states, three are dashed inferred states and one is outlined/unverified. Coverage bars resolve to 8 / 3 / 1. | Scope and evidence certainty are different. | 04 |
| 9–12 s | The record expands into an ownership card and preserved event sequence. Maya Chen is associated with A-001–A-011; A-012 remains open. | People and chronology belong alongside the evidence. | 05 |
| 12–16 s | Evidence sits beside a draft containment proposal. The state stays **Awaiting human approval**. Hold the final frame for the closing message. | TraceTriage prepares a defensible response while people control the decision. | 06 |

Closing message: **Know what changed. Understand the impact. Keep people in control.**

Suggested optional voiceover, five short beats:

1. “An agent changes a record.”
2. “TraceTriage links the write to its source.”
3. “See the impact—and what remains uncertain.”
4. “Bring the evidence to the right person.”
5. “Prepare a response. Keep people in control.”

## Motion direction

Use precise object motion and match cuts. The changed field is the opening focal point; the evidence connector draws only after the observed record appears. In the scope shot, reveal the twelve cards in reading order, then grow the three bars to their actual values. Reveal timeline events in order. Slide the proposal beside its evidence, then settle into a still pending state.

Use 400–650 ms movements, slight 12–20 px arrivals, 2–3% maximum camera drift and quiet material light. No random flying numbers, orbiting nodes, decorative particles or looping approval ticks. The final petrol shift marks the human decision boundary. Keep the camera frontal so labels remain legible.

The HTML review includes these schematic motion cues and a 16-second play/scrub control. It is a motion storyboard, not a finished video or a Flow render.

## Truth preserved

Source: the website's local `src/fixture.json`, copied into this kit as `scenario.json`.

- Oakridge Services, agent support-agent-01, incident INC-027, trace TR-27 and batch WB-3 are synthetic.
- A-001 has an observed tier change Standard → Enterprise, supported by evt-0001.
- A-001–A-008 are observed. A-009–A-011 are inferred. A-012 awaits verification.
- Maya Chen is a fictional owner for A-001–A-011. A-012 has no resolved owner.
- Twelve accounts in scope does **not** mean twelve verified changed records.
- Event ordering is schematic. The sequence does not invent event timestamps or speed/performance claims.
- The proposal is pending; no pause, rollback or remediation success is shown.
- Product illustration is derived from the website's synthetic demo, not evidence of a deployed/live backend.

The persistent “Synthetic incident” notice is meaningful disclosure. No “just preview” labels or fabricated customer claims appear inside the visuals.

## Delivery and composition

The PNG frames are native **3840 × 2160**, rendered directly from vectors. The outlined SVGs preserve the exact approved fonts without requiring font installation. The text SVGs retain editable labels and named scene groups for precise animation. WOFF2 font files and licenses are supplied.

Use the reference frames to approve the visual sequence. For reliable production, animate the SVG elements in the website or an editor, and use Google Flow for subtle material/backplate motion. Generated video should not be the authority for labels, counts, ownership or approval states. The supplied transparent foreground graphics can be composited over Flow backplates. See `FLOW-PROMPTS.md`.

On mobile, recompose the graphics rather than cropping the 16:9 film: change field first, then linked cards, scope matrix, owner, review. Do not hide the unresolved state. In the website, make any intro skippable; support reduced motion with a still frame, avoid blocking access to the homepage, and load the film only when visible. These are implementation notes; the website has not been changed by this kit.
