# RONDA Global, Digital and About Design QA

## Reference and implementation comparison

- Global supporting visual: the supplied Hangzhou pattern-room photo and the implemented Global-page crop were placed in one side-by-side comparison at the same desktop state. The central Brother machine, ceiling grid and depth of the room remain visible; the source was not stretched or degraded.
- About introduction: the supplied pattern-cutting-room photo and the implemented introduction panel were placed in one side-by-side comparison. The image remains recognizable behind the steel-blue readability layer, with the RONDA mark and text retaining sufficient contrast.
- Capability reference: the supplied winter-garment technical-drawing sheet guided the restrained garment-evidence treatment. The final cards use existing RONDA winterwear category photography plus the tracked pattern-making background, avoiding a synthetic placeholder when built-in image generation was unavailable.
- Responsive coverage: default 1280 px desktop plus 390 x 844 checks on Chinese, English and Korean Global, Digital Platform and About routes.

## Checks

- Global hero position: passed. The world-route map uses a lower vertical focal point (`center 34%`), keeping the Hangzhou/Seoul hubs and route network visible without interfering with the page title.
- Global location imagery: passed. Seoul remains unchanged; the Hangzhou supporting image is the supplied real pattern-room photograph with a deliberate horizontal crop and localized semantic alt text.
- Digital factory-network presentation: passed. The section now presents one project ID, accountable owners, versions and six real production gates instead of implying automatic machine telemetry. The fixed Sample App module and its route remain unchanged.
- About introduction: passed. The supplied pattern-room image is integrated as the introduction panel background with a steel-blue overlay, RONDA identity and readable localized copy.
- About capabilities: passed. Four cards form a balanced 2 x 2 desktop grid and one-column mobile stack, with subtle winterwear imagery, clear numbering, compact titles and sufficient contrast.
- Layout and overflow: passed. Desktop and 390 px mobile checks report no horizontal overflow. The Digital factory-control panel explicitly switches to one column on mobile; all six gates remain readable.
- Localization: passed. New Global, Digital and About content includes Chinese, English and Korean variants; the Korean factory-routing terminology is consistent.
- Accessibility: passed. New visual content has localized alt text, supporting locations remain semantic figures with captions, and all edited text is visible HTML rather than baked into generated imagery.
- Runtime: passed. `git diff --check`, TypeScript, Vite client build and server esbuild all complete successfully. The only build notice is the pre-existing-sized main JavaScript chunk exceeding Vite's advisory 500 kB threshold; it does not block publication.

final result: passed
