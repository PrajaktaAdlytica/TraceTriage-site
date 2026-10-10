# Corridor → window → mountain / Google Flow

Use four images in order. Create three linked clips using adjacent images as their start/end frames. This gives you intermediate camera positions rather than asking one generation to invent the whole journey.

Google supports supplied start/end images with a prompt describing the transition. Depending on the interface, select **Video → Frames** or **Frames to Video**, add the two images, then generate. [Official Google Flow instructions](https://support.google.com/flow/answer/16353334?hl=en).

## Sequence

| Clip | Start | End | Suggested final edit |
|---|---|---|---|
| 1 | `01-wide-corridor.png` | `02-forward-through-corridor.png` | 0–3 s: move down the aisle |
| 2 | `02-forward-through-corridor.png` | `03-window-approach.png` | 3–6 s: approach the window |
| 3 | `03-window-approach.png` | `04-forest-mountain-focus.png` | 6–10 s: settle on the view; let fog move |

Generate with the duration available for your selected Flow model, then trim to this approximately ten-second cut. Share the exact intermediate image between neighboring clips. Match the camera speed at each join. Make the last two seconds a near-still camera hold with continuing fog motion.

## Main prompt

Copy this as the overall direction. The three clip prompts below are more specific to their start/end images.

```text
A premium photoreal architectural film, one continuous journey through the corridor shown in the supplied reference images. The camera glides smoothly forward at human eye height toward the tall end window, with natural perspective and parallax. Bronze vertical wall ribs and warm stone columns pass along the left; black server cabinets with restrained steady amber status lights pass along the right. The polished stone floor retains natural golden reflections. Architecture is solid and stable, with straight edges and no morphing.

As the camera approaches, the window grows to fill the composition. Ease the movement down and settle into an unobstructed view through the glass, focusing on the evergreen forest, the same snow-dusted mountain ridge and the warm low sun. The final outdoor view is sharp and detailed. Keep the original sunset lighting and mountain silhouette consistent.

Make the outdoor fog visibly move: distinct thin gray-blue mist layers drift slowly left to right between the middle-distance evergreen trees, curl gently around the tree silhouettes and separate again, revealing patches of the forest. Fog movement must remain clearly perceptible during the final camera hold. A slight breeze moves only the finest branch tips. Mountain, sun and large tree trunks remain fixed; the sky does not become a time-lapse.

Refined cinematic motion, realistic materials, gentle acceleration and deceleration, clean optics, no jitter or abrupt cuts. No added people, logos, text, UI, particles, new doors or windows, floating lights or exaggerated lens flare. No fog inside the corridor. The camera does not smash through or dissolve the window glass. End on a calm near-still landscape view with mist continuing to drift.
```

## Clip 1 / glide through the corridor

Start 01; end 02.

```text
Smooth forward dolly from the supplied wide corridor frame to the supplied closer corridor frame. Human eye-height stabilized camera, moving toward the same end window. Bronze wall ribs and pale stone columns pass naturally on the left, dark server cabinets pass on the right. Show clear near-wall parallax and stable straight architectural lines. The existing square floor recess and single amber floor strip move toward and below the lower picture edge because the camera advances; they do not slide independently across the floor. Preserve the same sunset exposure and mountain scene through the window. Outdoor mist drifts gently left to right between trees. No camera rotation, whip pan, shake, sudden zoom, object morphing, added fixtures, text, logo or people. Match the provided ending camera position precisely, while maintaining a gentle forward speed for the next clip.
```

## Clip 2 / approach the glass

Start 02; end 03.

```text
Continue the same calm forward camera move, from the supplied closer corridor image to the supplied near-window image. The tall end window increasingly fills the composition while the nearby stone columns and server cabinets pass out toward the picture edges. The floor becomes a narrow strip at the bottom. Preserve solid window mullions; they remain part of the glass facade and never bend or dissolve. Begin easing the forward movement as the camera nears the glass. Shift visual attention from the corridor materials to the evergreen trees and mountain ridge beyond. Thin layered gray-blue fog visibly drifts left to right behind the glass and around the middle-distance trees. Keep mountain, sun, lighting and evergreen identity consistent with the references. No room change, new objects, fog indoors, timelapse sunset, abrupt cut or camera shake.
```

## Clip 3 / focus on the forest and hold

Start 03; end 04.

```text
Finish the supplied forward-window approach with a small smooth lateral reframe into the clear glass pane, landing exactly on the supplied unobstructed forest-and-mountain ending composition. The camera stays inside and stops before the glass; it does not fly through the window. Existing mullions move toward the edge through camera parallax rather than disappearing. Gentle focus settles beyond the glass onto evergreen branches and the distant snowy ridge, preserving the warm sunset and cool forest tones. Decelerate to a near-still camera hold for the final two seconds.

During this final hold, make fog motion clearly visible: two or three thin gray-blue mist bands drift left to right between tree layers, softly curl past trunks and reveal gaps in the canopy. Motion should be slow and natural but easy to notice; not a static haze image or a global opacity pulse. Slight branch-tip movement only, with no swaying mountain, moving sun, melting trees or advancing time of day. No lens flare, text, logo, people, new objects or fog indoors. End with the same final framing, while fog continues moving naturally.
```

## If fog is still too subtle

Append this sentence to the third clip prompt:

```text
Prioritize visible local mist movement over camera movement: clearly track individual fog wisps sliding past stationary tree trunks throughout the final hold, retaining open gaps between the wisps. Do not substitute a static atmospheric overlay.
```

## Handoff into the website

This corridor sequence supplies the atmospheric opening requested here. For continuity with TraceTriage, transition from the final landscape hold into the homepage headline and the existing CRM incident explanation. Place exact logo/copy as website or editing layers afterward so the film stays clean. No generated branding or extra diagram labels are needed inside these images.

The files are still keyframes. Google Flow will generate the camera and fog motion; no finished video is included in this kit.
