# P4 — Technical Audit: SEO, Accessibility, Performance and Assets

**Evidence type:** source-level audit and previously verified P3 CI artifact; no live deployment or live traffic.

## SEO

- Existing Astro layout declares `lang="id"`, viewport, title and description, and `noindex,nofollow`. `public/robots.txt` disallows all crawlers. This is intentional and **must remain active** until launch is approved.
- No public canonical URL has been selected. Do not invent a domain or create a canonical link pointing to a guessed hostname.
- Pre-launch tasks: review unique page titles/descriptions, page heading structure, open-graph image provenance, favicon/license, canonical and sitemap strategy, 404 behavior, link text and external reference freshness.
- `robots.txt` and noindex are search-discovery controls, **not privacy controls**; GitHub and any public preview remain accessible independently.

## Accessibility

- Previous P3 CI passed Chromium/axe WCAG-tagged checks on 320/375/768/1024/1280 px. Tested skip-link, hero anchor, evidence links, and mobile touch targets; P2 legacy homepage checks remained passing.
- Limitations: not a complete WCAG conformity statement; no verified VoiceOver, NVDA, real device, forced-colors, 400% zoom, or Safari/Firefox test as of this audit.
- Accessibility manual checks should include contrast (including artwork labels), focus order/visibility, heading landmarks, descriptive text for conceptual illustration, reduced motion, and form affordances after contact is activated.

## Performance

- Static Astro build completed in prior CI; no P4 score measured. Lighthouse 100 Performance in the case study refers to **Ruang Reka source demo run 42302718353**, not Rakit Nalar.
- Test candidate's LCP/INP/CLS on throttled mobile and desktop, image size/encoding, font loading, cumulative assets, JavaScript transfer. Use one source and capture date/run URL.
- P3 artwork is CSS-based (no third-party photograph embedded on the page). A future real screenshot needs asset-rights validation and optimization before inclusion.

## Asset/legal provenance

- `Ruang Reka` is fictional; links to source repo are portfolio evidence, not permission to resell assets or represent a client.
- Asset ledger before publication: path/URL, author/rights owner, source, license/consent, modification rights, distribution rights, date verified, reviewer, commercial permitted Y/N, expiry (if any).
- Keep unverified real product screenshot assets out of the repo; use labelled CSS conceptual illustrations as interim artwork.
- Project and studio brand name legal clearance must be performed by an authorized owner; this document does not provide legal advice or claim registration.

## Security and delivery

- Current static architecture avoids server-side forms and persistent user data. Verify future form spam protection, privacy disclosures, and provider terms before enabling contact.
- Existing GitHub links are expected to use `target="_blank" rel="noopener noreferrer"`; CI should test these contracts.
- GitHub Actions Node 20 deprecation notices were observed for actions/checkout@v4, setup-node@v4 and upload-artifact@v4 on prior run; plan a controlled action-version update with regression testing rather than changing dependencies blindly.

**Release assessment: HOLD — technical source can be reviewed; no approval to expose live site.**