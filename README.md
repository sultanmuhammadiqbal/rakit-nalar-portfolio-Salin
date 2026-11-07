# Rakit Nalar Studio — Portfolio Foundation (P1)

A separate Astro static portfolio for an independent Hybrid Personal × Studio identity. **Not the Ruang Reka demo repository.** This repository contains no modifications to the existing `sultanmuhammadiqbal/template-website-jasa` repo.

## Status and ethical attribution

- This is an independent experimental portfolio, **not a claimed client agency track record**. Ruang Reka is a fictional interior design site used as a documented engineering case study.
- `Rakit Nalar Studio` is a proposed studio name, **not trademark/domain cleared**. Verify name, domain, and handle availability before launching publicly.
- Owner identity is intentionally pending in the Hybrid Personal × Studio concept (`creator: null`); no personal name is asserted. Business contacts are also pending. The email CTA is disabled; do not insert fabricated phone numbers or customer testimonials.
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

Repository: https://github.com/sultanmuhammadiqbal/rakit-nalar-portfolio-Salin

Untuk bekerja dari komputer lokal:

```bash
git clone https://github.com/sultanmuhammadiqbal/rakit-nalar-portfolio-Salin.git
cd rakit-nalar-portfolio-Salin
npm install
npm test
npm run check
npm run build
```

Untuk mengembangkan fitur baru: buat branch dari `main`, commit perubahan, push branch, lalu ajukan pull request. Pemeriksaan `Portfolio checks` harus lulus sebelum merge. **Jangan menjalankan `git init` atau bootstrap ulang pada repository ini.**

## Cloudflare later (not executed)

When explicitly approved, create a **new** Cloudflare Pages project for this repo, with `npm run build` and output directory `dist`. Never reuse or alter the Ruang Reka Cloudflare Pages project. Node must meet Astro requirements.

## P2 — Editorial Homepage Experience

P2 sudah di-merge melalui PR #1 ke `main`. Homepage kini memuat hero editorial, visual identitas studio berbasis CSS tanpa aset pihak ketiga, proyek independen Ruang Reka, tiga kemampuan yang **sedang dikembangkan** studio, metode kerja, dan penjelasan status proyek.

Navigasi in-page, noindex, dan kontak nonaktif tetap dipertahankan. CTA beralih ke studi kasus saat kontak belum disetujui; tidak ada ajakan konsultasi yang mengarah ke kontak nonaktif. Tidak ada testimoni, proyek klien berbayar, angka bisnis, atau klaim legal tanpa bukti. CI menjalankan `npm test`, `astro check`, `astro build`, Chromium/axe di viewport 320/375/768/1280 serta menyimpan screenshot 375/1280 di GitHub Actions. Audit otomatis bukan pengganti review manual keyboard, screen reader, dan visual.

Cloudflare belum terhubung; seluruh perubahan homepage diajukan lewat PR agar `main` tetap stabil sebelum persetujuan merge.

### P2 — Perbaikan audit sebelum merge

- CTA hero, header, dan section kontak menggunakan fallback menuju studi kasus jika `site.contact.enabled` masih `false`, bukan mengundang konsultasi yang belum tersedia.
- Status kreator Hybrid Personal × Studio dicatat sebagai pending (`creator: null`), tanpa nama pribadi yang dibuat-buat; tinjauan identitas publik dilakukan sebelum peluncuran.
- Navigasi mobile dibagi dua kolom pada lebar <=650 px dengan target sentuh minimum 44 px; label-label kecil dinaikkan ukurannya.
- Chromium/axe mencakup jalur keyboard skip-link, fokus terlihat, ukuran target navigasi mobile, jalur CTA ke studi kasus, viewport 320/375/768/1280 dan noindex.
- QA manual dan keterbatasan pengujian tercatat di `docs/QA-P2.md`. Tidak ada perubahan pada repo Ruang Reka atau deployment Cloudflare.

## P3 — Premium Ruang Reka Engineering Case Study

Branch `feat/p3-ruang-reka-case-study` memperkaya `/work/ruang-reka/` dengan narasi problem, empat lapisan sistem, tujuh milestone PR #1–7 yang **sudah merged**, visual konseptual CSS, dan hasil Lighthouse dari CI homepage demo Ruang Reka PR #7. PR Ruang Reka #8 tidak masuk milestone merged karena masih Open pada verifikasi awal P3.

Hasil Lighthouse 100 Performance, 100 Accessibility, 100 Best Practices, dan 63 SEO berasal dari **run GitHub Actions #42302718353 untuk homepage demo**, bukan untuk halaman Rakit Nalar. Pengujian paket ZIP dan visual configurator bersifat eksperimen teknis, bukan izin distribusi komersial. Hak aset dan lisensi belum diverifikasi.

Tes P3: `tests/case-study-content.test.mjs` serta `tests/case-study-browser.mjs` (Chromium/axe pada 320/375/768/1280 px), screenshot 375 dan 1280 px pada artifact GitHub Actions. Daftar pemeriksaan manual terdapat pada `docs/QA-P3.md`. Tidak ada Cloudflare atau perubahan pada repo Ruang Reka.
