# QA manual P2 — Rakit Nalar Studio

Dokumen ini adalah **checklist review**, bukan klaim semua pengujian manual sudah selesai. Isi reviewer, tanggal, perangkat, dan hasil sebelum publikasi.

## Visual & usability
- [ ] Bandingkan screenshot Chromium CI terbaru (375 px dan 1280 px) dengan tampilan aktual Chrome, Safari, dan Firefox.
- [ ] Uji ukuran 320, 375, 768, 1024, 1280 px dan zoom 200–400%; pastikan teks tidak terpotong dan urutan konten tetap logis.
- [ ] Pastikan nav mobile tidak terlalu padat; semua link dapat disentuh tanpa salah tekan.
- [ ] Periksa visual hero, kartu Ruang Reka, tag keahlian, daftar proses, dan section About dalam reduced motion dan forced colors.

## Aksesibilitas
- [ ] Gunakan keyboard saja: skip link → header → hero → proyek → layanan → proses → About → footer.
- [ ] Fokus terlihat di setiap tautan, termasuk pada zoom dan kontras tinggi.
- [ ] Uji VoiceOver/NVDA bila tersedia; ilustrasi CSS dekoratif tidak perlu dibaca sebagai konten bermakna.
- [ ] Periksa heading, label navigasi, ukuran teks, dan target sentuh nyata. Axe otomatis tidak menjamin seluruh WCAG.

## Ketepatan klaim & perjalanan pengguna
- [ ] CTA awal ketika kontak nonaktif mengarah ke studi kasus yang benar-benar ada.
- [ ] Jangan menjanjikan konsultasi atau kanal komunikasi jika email bisnis belum disetujui.
- [ ] Ruang Reka harus selalu disebut sebagai demo independen fiktif, bukan proyek berbayar.
- [ ] Tidak ada persentase produktivitas AI, testimoni, daftar klien, maupun legalitas merek yang belum terbukti.
- [ ] Nama kreator dan data kontak hanya dipublikasikan setelah diverifikasi dan disetujui.
- [ ] Validasi tautan GitHub eksternal, izin akses, dan status deployment secara terpisah.

## Release
- [ ] CI berhasil pada HEAD PR yang sama, screenshot diperiksa, dan reviewer menyetujui perubahan.
- [ ] `noindex,nofollow` tetap aktif selama proyek tahap demo.
- [ ] Tidak ada integrasi Cloudflare dan tidak ada perubahan pada repository `template-website-jasa`.

Reviewer: ________

Tanggal / browser / perangkat: ________

Temuan: ________

Keputusan review: ________
