# P4 — Launch Readiness Audit | Rakit Nalar Studio

**Status:** PRE-LAUNCH / HOLD. Disusun 7 November 2026. Tidak menyatakan bahwa website telah dipublikasikan.

## Evidence and verification limits

Basis audit: source Astro dan CI history yang diperiksa sepanjang P1–P3, termasuk CI P3 run `42331348086` pada HEAD `55dc9b5` sebelum PR #2 merged; screenshot full-page P3 mobile 375 px dan desktop 1280 px dari artifact run tersebut. PR #2 kemudian merged ke main sebagai `7c36bca`. Audit P4 terbaru belum dilaksanakan di GitHub karena akses konektor sedang terganggu pada saat dokumen ini dibuat. Jangan menafsirkan hasil P3 sebagai bukti CI P4.

## Release gate — decision matrix

| Area | Current evidence | Gate before publication | Owner decision |
| --- | --- | --- | --- |
| Hybrid identity | Independent studio branding, creator identity pending (`creator: null`) | Approve whether personal name, role, bio, photo, or anonymous studio identity should be public | REQUIRED |
| Contact channel | `site.contact.enabled=false`, email empty; fallback to case study | Verify owned business email, anti-spam handling, and consent for publishing contact | REQUIRED |
| Brand and domain | Rakit Nalar is a proposed name; no trademark/domain clearance demonstrated | Check name, brand conflicts, domain/social handles, and legal implications | REQUIRED |
| Ruang Reka assets | Fictional interior demo; licensing/asset ownership unresolved | Document provenance and permissions for every visible third-party asset before commercial use | REQUIRED |
| Case-study accuracy | PR #1–7 source merged; PR #8 status date-stamped; Lighthouse scores sourced to synthetic demo CI | Recheck source claims and external links immediately prior to publication | REQUIRED |
| SEO | Intentional `noindex,nofollow` and `robots.txt Disallow: /` | Keep both blocked until explicit publication approval, canonical domain selected, and unique titles/descriptions reviewed | REQUIRED |
| Security/privacy | Static Astro; no database/client form; GitHub external links `noopener noreferrer` | Privacy/cookie review if any analytics, embeds, forms, or scripts are later added | CONDITIONAL |
| Accessibility | Axe WCAG checks at 320/375/768/1024/1280 P3; keyboard skip link and touch targets tested | Manual screen-reader, zoom 200–400%, forced-colors, reduced-motion, touch targets on physical device | REQUIRED |
| Browser behavior | Chromium CI passed; 375/1280 screenshot inspected | Safari, Firefox, and real mobile/desktop QA | REQUIRED |
| Performance | Astro static build succeeded; no P4 live Lighthouse or Core Web Vitals evidence | Run Lighthouse on actual release candidate, network-throttled mobile, and inspect JS/fonts/image transfer | REQUIRED |
| Deploy | No Cloudflare connected | Separate owner approval for provider/project, domain, credentials, environment, public URLs | REQUIRED |

## Risk register

1. **P1 — Premature public launch:** robots/index flags incorrectly removed, contacts invented, unverified assets marketed as commercial. Mitigation: explicit release authorization and staged deployment gates.
2. **P1 — Legal/brand assets:** lack of rights evidence for Ruang Reka visual content or name. Mitigation: provenance ledger, attribution, and replacement before monetization.
3. **P2 — Identity trust:** Hybrid approach without approved creator bio/contact may weaken credibility. Mitigation: choose a truthfully presented studio-led identity with creator status pending; do not fabricate agency team.
4. **P2 — Synthetic score interpretation:** Lighthouse 100/100/100/63 pertains to the *Ruang Reka demo homepage in a specific CI*, not Rakit Nalar, all browsers, or real traffic. Mitigation: evidence labels close to displayed scores.
5. **P2 — Incomplete accessibility coverage:** automated axe cannot replace human screen reader and zoom tests.
6. **P2 — Third-party dependency risk:** Astro and GitHub Actions are versioned; review deprecation warnings and dependency advisories before public launch.

## Recommended release decision

**NO-GO for public launch** until owner identity and contact choices, name/domain clearance, asset rights, cross-browser QA, and live release-candidate performance evidence are satisfied. **GO only for continuing private-source development and audit.**

Reviewer: Pending
Approved launch date: Not set
Domain: Not selected
Deployment consent: Not given