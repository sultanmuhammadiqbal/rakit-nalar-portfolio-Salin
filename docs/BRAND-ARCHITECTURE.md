# Arsitektur brand P5 — Iqbal dan Rakit Nalar Studio

Status: keputusan identitas untuk review source, 12 November 2026. Dokumen ini tidak menyatakan merek, domain, aset, atau layanan telah lolos pemeriksaan komersial.

| Identitas | Posisi dan fungsi website | Audiens utama | Batas |
| --- | --- | --- | --- |
| **Iqbal** | Personal brand; portofolio profil profesional, pengalaman yang dapat dibuktikan, keahlian, dan proyek personal. Tetap berada di repository `sultanmuhammadiqbal/sultanmuhammadiqbal.github.io` dan GitHub Pages. | Orang yang ingin memahami profil dan rekam kerja Iqbal. | Tidak dilebur dengan repository studio, tidak dipindah ke Cloudflare, dan tidak mewarisi klaim layanan atau studi kasus sebagai pekerjaan klien. |
| **Rakit Nalar Studio** | Studio digital independen yang dikembangkan oleh Iqbal. Website studio menjelaskan bidang layanan yang sedang dikembangkan, metode kerja, dan studi kasus eksplorasi. Repository `sultanmuhammadiqbal/rakit-nalar-portfolio-Salin` disiapkan untuk Cloudflare Pages. | Calon pembaca yang ingin menilai pendekatan kerja, kemampuan sistem, dan batas layanan studio. | Tidak mengklaim tim, jabatan formal Iqbal, sertifikasi, daftar klien, bisnis aktif yang belum diverifikasi, atau kontak bisnis yang belum aktif. |

Kedua identitas terhubung oleh Iqbal, tetapi memiliki pekerjaan dan website berbeda. Nama `Rakit Nalar Studio` menunjukkan praktik profesional independen, bukan bukti agensi dengan staf atau klien. Konten layanan saat ini adalah bidang yang dieksplorasi; cakupan layanan nyata perlu ditetapkan untuk tiap penugasan. Pernyataan brand atau nama dagang untuk penggunaan komersial masih memerlukan pemeriksaan tersendiri.

## Aturan studi kasus

- **Ruang Reka**: eksplorasi website interior fiktif dan sistem konfigurasi. Hak aset dan lisensi komersial belum diverifikasi. Ini bukan pekerjaan klien berbayar.
- **Bengkel Rapi**: *fictional business demo* dan *AI-assisted website workflow experiment*. Alur Brief → Proposal → AI Design Director → Codex → QA memakai data contoh dan salinan integrasi lokal. Review proposal demo tidak membuktikan persetujuan bisnis atau hak publikasi.
- Keduanya boleh menggambarkan implementasi dan hasil QA yang didukung artefak. Jangan menyebut konversi, pendapatan, testimoni, atau hasil pelanggan tanpa bukti terpisah.
- Screenshot Bengkel Rapi di website studio berasal dari build demo lokal. Ilustrasi kendaraan di dalam screenshot adalah placeholder konseptual, bukan foto fasilitas. Jangan memasukkan aset luar yang lisensinya belum jelas.

## Hubungan dan cross-link setelah alamat studio tersedia

1. Setelah URL studio yang benar tersedia dan telah diverifikasi, tambahkan tautan **"Rakit Nalar Studio"** dari personal portfolio menuju website studio sebagai praktik profesional Iqbal.
2. Tambahkan tautan **"Tentang Iqbal"** dari halaman Tentang atau footer studio menuju personal portfolio yang URL-nya diverifikasi saat implementasi.
3. Uji kedua arah tautan, tujuan HTTPS, teks tautan, dan tidak adanya redirect tak terduga. Jangan membuat alamat studio placeholder atau menebak domain saat ini.
4. Perubahan repository personal memerlukan pekerjaan terpisah; P5 ini hanya mengubah repository studio.

## Gerbang yang masih tertutup

- Kontak studio tetap `enabled: false` dan email kosong sampai alamat email bisnis diverifikasi dan pengguna menyetujui aktivasi.
- `noindex,nofollow` dan `robots.txt` `Disallow: /` tetap berlaku pada seluruh halaman.
- Publikasi produksi, domain, DNS, Cloudflare Access, Google/GitHub App integration, analytics, form, dan hak aset memerlukan keputusan terpisah. Persetujuan PR source tidak otomatis membuka gerbang tersebut.
