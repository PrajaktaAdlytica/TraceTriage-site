# Motion and interaction system

Motion carries the story from a trace to a human decision. It never changes evidence certainty or authorizes a response.

## Scroll sequence

At widths of at least 1000px and heights of at least 650px, a story scene stays pinned while three to five chapters advance. Each chapter has roughly 510px of scroll travel. Numbered controls navigate to the corresponding scroll position. The adjacent skip link moves to the next section.

On smaller or short viewports, the same section becomes an ordinary document: chapter controls inspect the visual and a static list carries the full narrative. OS reduced-motion preference and the footer motion toggle disable smooth scrolling, pins and entrance animation. Text and links remain readable before JavaScript runs.

| Interaction | Behaviour |
| --- | --- |
| Hero image | Subtle vertical parallax, within an oversized cropped frame |
| Section entrance | 32px travel, 850ms, `power3.out`, once per route |
| Chapter scene | 14px travel and a short fade, 550ms |
| Evidence connectors | SVG stroke draw, preserving nodes and labels |
| CTA hover | Copper deepens; arrow shifts 2px; pressed state moves 1px |
| Product panels | 5px lift; illustration accent shifts to apricot |
| Coverage chart | Buttons filter the actual record table; counts remain 8/3/1 |
| Account map | Selected state exposes the original source and record link |
| Review dialog | Native modal focus, Escape/cancel, required rationale and explicit commit |
| Pricing range | Computes the stated group-price hypothesis; does not generate a quote |
| Inquiry form | Validates, prepares a local draft and permits editing/download |

GSAP contexts and matchMedia instances revert on route or motion changes. Lenis uses the GSAP ticker and is destroyed with its listeners when disabled. Touch scrolling remains native. Navigation and modal scroll regions opt out of Lenis interception.

Keyboard navigation works independently of hover. Menu Escape returns focus to its trigger, the mobile menu traps focus while open, dialogs return focus to the opener, and evaluation tabs support arrows/Home/End. No action is driven by scroll progress alone.

Implementation references: [GSAP React integration](https://gsap.com/resources/React/), [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/), [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [Lenis documentation](https://github.com/darkroomengineering/lenis/blob/main/README.md), [Vite prerendering](https://vite.dev/guide/ssr#pre-rendering-ssg).
