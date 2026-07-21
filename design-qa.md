# RONDA Homepage Design QA

## Reference and implementation compared

- Reference: the supplied ATLY Seoul source running locally at `/zh`, captured in the in-app browser.
- Implementation: the rebuilt Samplewear homepage at `/`, reviewed beside the ATLY reference in a single side-by-side comparison image.
- Responsive coverage: desktop layout plus a 390 × 844 mobile check.

## Checks

- Visual direction: passed. The implementation keeps the ATLY hero/proof-strip rhythm, dark and light section cadence, production bridge, showroom, linear workflow, network panels and FAQ structure while remapping the visual system to RONDA warm white, stone, camel and deep slate.
- Copy and company identity: passed. Homepage copy follows the Seoul source's product, sampling, supply-chain and consultation logic and consistently identifies 杭州绒达科技, RONDA and Samplewear.
- Core MOQ: passed. The hero, proof strip, six product cards, FAQ, product page and searchable static HTML all foreground the standard 100-piece starting point with a project-condition qualifier.
- Product coverage: passed. 羽绒服, 冲锋衣, 滑雪服, 双面大衣, 皮草与皮毛一体 and 羽绒寝具 are present on both the homepage and the independently crawlable `/products/` route.
- Service timeline: passed. Eight linear stages show reference business days; first sample is highlighted at 7–15 days, revision at 3–7 days and standard production at 15–30 days. The homepage tabs work and the full flow is also available at `/services/`.
- Cases and supplier resources: passed. Eight selected brand case logos and sixteen material/trim resource logos render in two clearly labeled panels with a scope note.
- Titles and spacing: passed after reducing section-title sizes. Homepage H1/H2 titles remain on one line without desktop or mobile horizontal overflow, and the company section no longer collides with its supporting copy.
- City imagery: passed. Hangzhou keeps `VEnkGmmicAmbbpjx.jpg` and Seoul keeps `mtPiHFXgDZRAQlWl.jpg`; neither city image was replaced.
- Assets and performance: passed. Selected ATLY source assets were resized and converted to WebP; all new homepage assets total under 1 MB and load successfully from GitHub Pages-compatible paths.
- Accessibility and interaction: passed. The page has one H1, semantic section headings, descriptive alt text, labeled navigation, keyboard-focus treatment, reduced-motion handling, working process controls, native FAQ disclosure controls and a working mobile menu.
- Search and routing: passed. Nine physical route pages, canonical URLs, index/follow directives, JSON-LD, sitemap and robots files were generated; homepage, products, services and every checked asset returned HTTP 200 locally.
- Runtime: passed. TypeScript and production builds completed successfully, and browser console inspection returned no warnings or errors.

final result: passed
