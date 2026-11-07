# P4 — Deployment Roadmap (NOT EXECUTED)

This is a gated checklist. **Do not run deployment, merge, modify DNS, or connect Cloudflare without separate explicit approval.** A source branch/PR is not a public website.

## Stage 0: Source and evidence (safe now)

1. Keep P4 work in `feat/p4-launch-readiness` and open a PR to `main` without merging.
2. Verify latest HEAD SHA and rerun `npm test`, `npm run check`, `npm run build` plus Chromium/axe.
3. Review archived 375/1280 px screenshots and check copy/links against GitHub evidence.
4. Resolve the release blockers in `P4-LAUNCH-READINESS.md`.

## Stage 1: Product and brand approvals (owner action)

1. Confirm official studio presentation and whether the creator's real name is shown.
2. Confirm verified business email and policy for inbound leads. Keep CTA disabled until approved.
3. Check trademark/name conflicts and chosen domain (avoid claiming clearance before due diligence).
4. Check every illustration and Ruang Reka-related asset and licensing terms.
5. Decide whether analytics, cookie consent, and privacy disclosures are necessary; add only after approval.

## Stage 2: Release candidate checks (no public deployment needed)

1. Build with supported Node >=22.23.4 and locked dependencies (`npm ci` once a valid lockfile is committed); verify output in `dist/`.
2. Test responsive layouts at 320/375/768/1024/1280 and keyboard flow; Safari/Firefox/VoiceOver/NVDA/zoom 400% manual.
3. Run Lighthouse on the **Rakit Nalar release candidate**, including mobile simulation; document date, run URL, page URL and test environment; do not reuse Ruang Reka scores as portfolio metrics.
4. Validate expected HTTP security headers from the eventual hosting provider and no secrets in browser bundle.
5. Confirm indexing decision. Until approved, retain `<meta name="robots" content="noindex,nofollow">` and `robots.txt Disallow: /`.

## Stage 3: Deployment authorization (explicit permission required)

1. Obtain separate owner approval to connect the **new Rakit Nalar repository**, which must never reuse the Ruang Reka Cloudflare project.
2. Agree hosting environment (e.g. Cloudflare Pages) and domain; do not assume one was chosen.
3. Proposed build command: `npm run build`; output: `dist`; configure compatible Node runtime. These are planning values, not executed settings.
4. If staging is public, keep `noindex` and consider authentication/password gating. Avoid treating `robots.txt` as access control.
5. Inspect the deployed preview URL, mobile Lighthouse, 404 and security headers before production.

## Stage 4: Public launch (requires distinct final approval)

1. Verify domain ownership, SSL and redirects, legal notice/privacy as applicable, accessible contact, browser testing, and asset rights.
2. Remove `noindex`/robots blocking **only after explicit sign-off**, along with canonical URL/sitemap setup.
3. Publish, monitor functional/availability issues, and document rollback to prior build.

## Rollback

Revert deployment to last approved build and restore indexing blocks/contact disablement if any legal, contact, or performance issue is discovered. Source repo rollback and host rollback are independent actions and require authorization.