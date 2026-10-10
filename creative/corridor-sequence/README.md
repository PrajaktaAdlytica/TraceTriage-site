# TraceTriage corridor video frames

Four new photorealistic still keyframes derived from your attached corridor image:

1. Wide establishing corridor.
2. Camera advances down the aisle.
3. Camera reaches the end window.
4. Camera settles on the forest, mountains and layered fog.

Use frames 01 → 02, 02 → 03 and 03 → 04 as start/end pairs for three Google Flow clips. The third prompt asks for clearly visible local fog drift during a final near-still camera hold.

- `frames/`: the four original generated PNGs.
- `FLOW-PROMPTS.md`: overall prompt, three clip prompts, frame pairing and edit plan.
- `IMAGE-DIRECTION.md`: image generation direction and continuity constraints.
- `GALLERY.html`: a local image review page.
- `REFERENCE.png`: your original supplied image, unchanged.
- `manifest.json`: verified image sizes and filenames.

Generated with the built-in image generation tool. Original widths are 1672 pixels; heights are 941 pixels except frame 02 at 940 pixels. Use a common 16:9 video canvas in Flow. Original files are preserved without upscaling. Images were visually inspected for progressive window approach, consistent material/light direction, mountain identity and detailed fog layers. They are cinematic references rather than a metrically calibrated 3D camera simulation.

These are still images; Flow will create the camera and fog motion. No final video has been generated or added to the website.
