# P3 — QA manual dan catatan klaim Ruang Reka

Dokumen ini merupakan **checklist**, bukan laporan audit manual yang sudah selesai. Reviewer wajib memeriksa screenshot dan merekam hasil sebelum merge atau publikasi.

## Keakuratan bukti
- [ ] Pastikan PR #1–7 repository Ruang Reka tetap merged; PR #8 masih Open jika masih disebut demikian.
- [ ] Verifikasi tautan external GitHub dan status izin aksesnya.
- [ ] Cocokkan nilai Lighthouse 100 Performance / 100 Accessibility / 100 Best Practices / 63 SEO dengan run #42302718353 untuk **homepage demo** PR #7.
- [ ] Jangan menyebut skor tersebut sebagai skor halaman Rakit Nalar atau pengalaman pengguna riil.
- [ ] Packaging ZIP deterministik, SHA-256, dan pengujian Studio Arunika harus berstatus kandidat; tidak disetujui untuk dijual tanpa pemeriksaan hak aset.

## Visual & responsivitas
- [ ] Tinjau screenshot full-page CI pada 375 dan 1280 px.
- [ ] Uji 320, 375, 768, 1024 dan 1280 px; zoom 200% dan 400%; landscape mobile.
- [ ] Pastikan panel browser dan configurator di hero dipahami sebagai ilustrasi, bukan screenshot produk.
- [ ] Baca timeline dan evidence cards tanpa CSS; diagram bukan dokumentasi arsitektur teknis menyeluruh.
- [ ] Uji tampilan Safari dan Firefox; automation CI saat ini hanya Chromium.

## Aksesibilitas dan interaksi
- [ ] Tab dari skip-link melalui header, tombol di hero, bukti PR, dan footer; fokus terlihat.
- [ ] Uji VoiceOver atau NVDA bila tersedia: gambar hero dibacakan sebagai satu ilustrasi konseptual, bukan teks dekoratif terpisah.
- [ ] Pastikan seluruh target sentuh dan link PR nyaman pada mobile serta high contrast / forced-colors.
- [ ] Uji anchor `#challenge`, `#architecture`, `#process`, `#evidence`, `#reflection` dan tombol kembali.
- [ ] Cek kontras teks di ilustrasi/warna hijau serta reduced-motion. Axe otomatis tidak mencakup seluruh WCAG.

## Etika dan rilis
- [ ] Ruang Reka tetap disebut demo bisnis interior fiktif dan bukan pekerjaan klien.
- [ ] Tidak ada klaim pelanggan, penjualan, efektivitas AI atau hak komersial yang belum diverifikasi.
- [ ] Kontak bisnis masih nonaktif; SEO masih `noindex,nofollow`; Cloudflare belum dihubungkan.
- [ ] Halaman P3 hanya dibuat pada repo portofolio; repo Ruang Reka tidak diubah.

Reviewer: __________

Tanggal / device / browser: __________

Temuan: __________

Persetujuan merge: __________
