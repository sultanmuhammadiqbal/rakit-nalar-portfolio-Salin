# Persiapan Cloudflare Pages — belum dieksekusi

Dokumen P5 ini adalah rencana konfigurasi untuk repository **studio** `sultanmuhammadiqbal/rakit-nalar-portfolio-Salin`. Personal portfolio `sultanmuhammadiqbal/sultanmuhammadiqbal.github.io` tetap di GitHub Pages. Tidak ada project Pages, GitHub App, DNS, domain, atau deployment yang dibuat oleh P5.

## Konfigurasi yang direncanakan

| Pengaturan | Nilai |
| --- | --- |
| Framework preset | Astro |
| Root directory | Repository root (`/`) |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js | `22.23.4` |
| Node version file | `.nvmrc` berisi `22.23.4` |
| Instalasi deterministik untuk CI GitHub | `npm ci` dari `package-lock.json` |

Source menggunakan output Astro statis. Nilai build dan versi Node mengikuti [panduan build Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/build-configuration/) serta [build image](https://developers.cloudflare.com/pages/configuration/build-image/). Sebelum kelak menghubungkan GitHub, ulangi build bersih dan audit semua rute yang akan terbit.

## GitHub integration dan branch controls

Jika disetujui pada fase terpisah, integrasi GitHub Pages milik Cloudflare perlu diberi akses ke repository studio yang tepat. [Integrasi GitHub Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/) dapat membangun otomatis dari push dan pull request. Karena itu **menghubungkan repository bukan tindakan persiapan pasif**: ia dapat segera menghasilkan deployment. P5 berhenti sebelum langkah tersebut.

Atur `main` sebagai production branch hanya setelah keputusan peluncuran. Tinjau [branch build controls](https://developers.cloudflare.com/pages/configuration/branch-build-controls/) sebelum koneksi: batasi preview ke branch yang disetujui atau nonaktifkan sementara; jangan mengandalkan default tanpa pemeriksaan. Pertahankan approval manual untuk perubahan production. Jangan menggunakan project/domain Ruang Reka atau repository personal.

## Preview, production, dan Access

[Preview deployments](https://developers.cloudflare.com/pages/configuration/preview-deployments/) biasanya memakai URL unik per commit/branch dan **secara default dapat diakses publik**, walau Cloudflare menambahkan `X-Robots-Tag: noindex` pada preview. `noindex` hanya sinyal untuk perayap, bukan pembatas akses. Sebelum membuat preview yang memuat konten belum disetujui, aktifkan dan uji **Cloudflare Access** dengan kebijakan allowlist: akun yang diizinkan dapat masuk, akun di luar daftar ditolak. Atur identitas dan kebijakan dengan data privat di Cloudflare; jangan menyimpan email pribadi atau secret di repo. Periksa cakupan Access, karena opsi Access Pages untuk preview **tidak otomatis melindungi** domain produksi `*.pages.dev` atau custom domain.

Production adalah build dari `main` yang melayani alamat utama project. Production akan tetap harus ditahan sampai izin konten, hak aset, identitas kontak, pengujian keamanan, dan keputusan publikasi lengkap. Metatag `noindex,nofollow` serta `robots.txt Disallow: /` tetap dipertahankan bahkan pada build persiapan; penghapusannya memerlukan approval khusus setelah kesiapan publikasi.

## Verifikasi sebelum fase deployment nanti

1. Konfirmasi repository dan branch produksi, serta tinjau izin GitHub App yang diminta.
2. Konfirmasi nama project dan alamat `pages.dev` yang benar; jangan menebak URL atau mengubah endpoint lain.
3. Tentukan branch preview yang boleh dibangun; uji Access dengan akun allowlist dan akun non-allowlist sebelum membagikan URL.
4. Verifikasi output `dist/`, seluruh aset, robots/noindex, kontak nonaktif, dan tidak adanya data rahasia.
5. Minta persetujuan eksplisit untuk koneksi/deployment produksi. PR P5 tidak memberi persetujuan itu.

## Rekomendasi nama repository

Akhiran `-Salin` tampak seperti penanda salinan kerja dan kurang jelas sebagai nama repository studio. Pertimbangkan rename menjadi `rakit-nalar-portfolio` **setelah** mengecek ketersediaan nama, CI, tautan dokumentasi, dan integrasi yang bergantung pada URL repo. Jangan rename otomatis pada P5. Menurut [dokumentasi GitHub tentang rename repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/renaming-a-repository), sebagian URL repository lama diarahkan ulang, tetapi remote lokal, dokumentasi, webhook/integrasi, dan URL hosting perlu ditinjau dan diperbarui secara eksplisit. Repository personal tidak terdampak secara konseptual karena terpisah; itu harus diverifikasi saat perubahan nanti.
