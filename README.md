# Rakit Nalar Studio — Portfolio Foundation (P1)

A separate Astro static portfolio for an independent Hybrid Personal × Studio identity. **Not the Ruang Reka demo repository.** This repository contains no modifications to the existing `sultanmuhammadiqbal/template-website-jasa` repo.

## Status and ethical attribution

- This is an independent experimental portfolio, **not a claimed client agency track record**. Ruang Reka is a fictional interior design site used as a documented engineering case study.
- `Rakit Nalar Studio` is a proposed studio name, **not trademark/domain cleared**. Verify name, domain, and handle availability before launching publicly.
- Owner name `[Nama Profesional]` and business contacts are placeholders. The email CTA is disabled; do not insert fabricated phone numbers or customer testimonials.
- Homepage and case study use `noindex,nofollow` and robots.txt blocks indexing during development. Remove only after review and consent.
- Rights to the Ruang Reka template assets and final commercial license remain unverified. This portfolio only links to its public GitHub evidence.
- No Cloudflare Pages project or third-party account is connected by this scaffold.

## Stack

- Astro 7.4.2, Node.js **22.23.4 or newer compatible supported version**
- Static output (`dist/`), no Cloudflare SSR adapter, no database, no framework hydration
- Scoped CSS design tokens in `src/styles/global.css`
- GitHub Actions source checks, Astro validation, static build and preview artifact

## Local development

```bash
npm install
npm test
npm run check
npm run dev
npm run build
npm run preview
```

Visit `http://localhost:4321/` and `/work/ruang-reka/`. npm installation requires access to the public npm registry. The scaffold package is not precompiled and does not contain `node_modules`.

## Planned project structure

```text
src/
  components/ Header.astro Footer.astro ProjectCard.astro ContactCTA.astro
  layouts/ BaseLayout.astro
  pages/ index.astro work/ruang-reka.astro
  data/ site.ts projects.ts
  styles/ global.css
public/ robots.txt favicon.svg
tests/ foundation.test.mjs
.github/workflows/checks.yml
```

## Delivery and scope

**P1 completed in source**: branded layout foundation, content data, static routes, design tokens, README, source tests, and GitHub Actions config.

**P1 source** sudah di-push ke repository baru `sultanmuhammadiqbal/rakit-nalar-portfolio-Salin`. Validasi CI terbaru harus dicek pada commit PR yang relevan. **Belum termasuk** domain/Cloudflare, verifikasi merek, identitas/kontak final, maupun peluncuran publik.

## GitHub repository (sudah dibuat)

Repository sudah tersedia di https://github.com/sultanmuhammadiqbal/rakit-nalar-portfolio-Salin. Jika perlu menjalankan proyek secara lokal, clone repository tersebut. Petunjuk bootstrap awal berikut hanya arsip referensi dan **jangan digunakan untuk menimpa sejarah Git**.
2. Extract the delivered ZIP and run from its project root:

```bash
git init
git branch -M main
git add .
git commit -m "chore: bootstrap Rakit Nalar Astro portfolio"
git remote add origin https://github.com/sultanmuhammadiqbal/rakit-nalar-portfolio-Salin.git
git push -u origin main
```

3. Open Actions and verify `Portfolio checks` runs. Use pull requests for future changes. **Do not connect a Cloudflare project yet.**

Repository telah diverifikasi dengan GitHub connector pada awal Fase P2. Gunakan branch fitur + pull request untuk perubahan berikutnya; jangan langsung push manual ulang menggunakan langkah bootstrap.

## Cloudflare later (not executed)

When explicitly approved, create a **new** Cloudflare Pages project for this repo, with `npm run build` and output directory `dist`. Never reuse or alter the Ruang Reka Cloudflare Pages project. Node must meet Astro requirements.

## P2 — Editorial Homepage Experience

Branch pekerjaan: `feat/p2-homepage-experience` (PR belum di-merge ke `main`). Homepage kini memuat hero editorial, visual identitas studio berbasis CSS tanpa aset pihak ketiga, proyek independen Ruang Reka, tiga kemampuan yang **sedang dikembangkan** studio, metode kerja, dan penjelasan status proyek.

Navigasi in-page, noindex, dan kontak nonaktif tetap dipertahankan. Tidak ada testimoni, proyek klien berbayar, angka bisnis, atau klaim legal tanpa bukti. CI menjalankan `npm test`, `astro check`, `astro build`, Chromium/axe di viewport 320/375/768/1280 serta menyimpan screenshot 375/1280 di GitHub Actions. Audit otomatis bukan pengganti review manual keyboard, screen reader, dan visual.

Cloudflare belum terhubung; seluruh perubahan homepage diajukan lewat PR agar `main` tetap stabil sebelum persetujuan merge.
