# Ledger bukti Bengkel Rapi untuk studi kasus P5

Studi kasus di `src/pages/work/bengkel-rapi.astro` merangkum pekerjaan demo lokal, **bukan** hasil bisnis atau pekerjaan klien berbayar. Sumber artefak berada di workspace lokal `bengkel-rapi-local-demo 2` dan tidak dipindahkan seluruhnya ke repository studio. Reviewer PR dapat memeriksa screenshot yang disertakan; laporan mesin dan source integrasi perlu diminta melalui paket lokal bila audit rinci diperlukan.

| Klaim di halaman | Sumber lokal yang tersedia | Batas interpretasi |
| --- | --- | --- |
| Alur Brief → Proposal → AI Design Director → Codex → QA | `website-spec.json`; `portfolio/bengkel-rapi/index.html`; draf proposal contoh berstatus `human-reviewed` dan `exampleData: true`; `ruang-reka-bengkel-rapi/` | Review proposal demo tidak membuktikan persetujuan komersial; spec masih `awaiting-human-approval`. |
| Tampilan desktop dan mobile | `portfolio/bengkel-rapi/assets/desktop.png` (1440×900) dan `mobile.png` (390×844), disalin ke `public/images/bengkel-rapi/` | Screenshot build lokal; ilustrasi kendaraan konseptual dari aset SVG lokal, bukan foto bisnis. |
| Unit/build/browser, keyboard, configurator JSON | `ruang-reka-bengkel-rapi/docs/QA-REPORT.md`; `ruang-reka-bengkel-rapi/artifacts/final-browser-qa.json` | Hasil pada salinan integrasi lokal, bukan hosting produksi. |
| Axe 0 pelanggaran yang terdeteksi, Lighthouse 100/100/100/63 | `ruang-reka-bengkel-rapi/artifacts/axe-final.json`; `lighthouse-mobile-final.json`; `lighthouse-desktop-final.json` | Skor Lighthouse sintetis lokal; SEO 63 karena noindex. Axe tidak menyelesaikan semua pemeriksaan kontras. |
| Restore dan aset | `ruang-reka-bengkel-rapi/docs/QA-REPORT.md` serta artefak restore lokal | 18 aset HTTP 200 dalam pengujian restore; tidak membuktikan perangkat atau jaringan lain. |

## Provenance dan gerbang aset

Screenshot disalin dari hasil kerja demo lokal yang dibuat untuk proyek ini. SHA-256 hasil salinan: desktop `ff9121a54838105ac5eb8560c6f9cf518a95e280a57017459b4eafc8f744d9d6`, mobile `ce0e07772b2c0d4e4cd2c8f15d62edf38384aec85193edf4bf4ba829723a6995`. Tidak ada foto klien, testimoni, logo bisnis nyata, atau aset stok baru yang ditambahkan pada P5. Source ilustrasi konseptual ada di `ruang-reka-bengkel-rapi/assets/images/workshop-concept.svg` pada workspace demo, tanpa referensi aset eksternal. Hak nama brand fiktif dan penggunaan aset untuk publikasi atau komersialisasi tetap perlu keputusan terpisah. Karena itu situs studio tetap `noindex,nofollow` dan kontak nonaktif.

## QA khusus repository studio

Workflow studio menjalankan unit tests, Astro check/build, serta Chromium dan axe untuk homepage, Ruang Reka, dan Bengkel Rapi. Tes browser Bengkel Rapi memeriksa empat viewport (320, 375, 768, 1280 px), gambar termuat, overflow, skip link, navigasi keyboard, serta 0 pelanggaran WCAG otomatis yang terdeteksi. Screenshot hasil tes tersimpan sebagai GitHub Actions artifact saat CI berjalan; tidak menjadi aset produksi.
