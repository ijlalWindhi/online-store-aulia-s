# Product Requirements Document

## Auliaâ€™s åº— Online Store

**Status:** Draft untuk peninjauan pemilik  
**Tanggal:** 13 September 2026  
**Pemilik usaha dan pelaksana:** Aulia Putri Ramadhani  
**Domain:** [aulia-putri.store](https://aulia-putri.store)  
**Jenis produk:** Website statis bilingual untuk jasa kreatif digital

## 1. Ringkasan

Auliaâ€™s åº— adalah usaha jasa kreatif digital yang dikerjakan langsung oleh Aulia Putri Ramadhani. Website berfungsi sebagai online store milik sendiri, bukan toko di marketplace. Pengunjung dapat memahami layanan, harga awal, estimasi pengerjaan, ketentuan revisi, dan contoh kemampuan Aulia sebelum menghubungi Aulia melalui WhatsApp.

Website dibuat dengan Astro sebagai static site generator. Bahasa Indonesia menjadi bahasa utama dan bahasa Inggris tersedia melalui rute `/en/`. Pemesanan tidak menggunakan akun, keranjang, database, atau pembayaran online. Setiap layanan memiliki tombol WhatsApp dengan pesan yang telah berisi nama layanan, paket, dan harga awal.

PRD ini sekaligus memastikan website memenuhi tugas kuliah yang meminta About Us, Product atau Service, Contact Us, Customer Experience, Brand Experience, tautan website, uraian pembuatan dengan 5W1H, dan rincian biaya.

## 2. Latar Belakang dan Masalah

Mahasiswa, individu, dan UMKM sering membutuhkan materi visual atau website dengan anggaran terbatas. Mereka perlu mengetahui sejak awal apa yang diperoleh, berapa harga awalnya, berapa lama pengerjaannya, dan bagaimana cara berkonsultasi.

Auliaâ€™s åº— membutuhkan website mandiri yang:

- Menjelaskan identitas usaha dan orang yang mengerjakan layanan.
- Menampilkan layanan serta harga secara transparan.
- Menunjukkan kemampuan melalui proyek konsep tanpa mengaku sebagai pekerjaan pelanggan.
- Memudahkan calon pelanggan memulai percakapan melalui WhatsApp.
- Dapat digunakan untuk tugas kuliah dan dikembangkan menjadi kanal bisnis nyata.

## 3. Tujuan Produk

1. Memenuhi seluruh komponen tugas dosen dalam website yang dapat diakses melalui top-level domain `.store`.
2. Menjadi katalog jasa kreatif digital yang mudah dipahami oleh mahasiswa, individu, dan UMKM.
3. Membantu pengunjung memilih layanan berdasarkan ruang lingkup, harga awal, estimasi, dan revisi.
4. Mengarahkan calon pelanggan ke percakapan WhatsApp dengan konteks layanan yang jelas.
5. Membangun identitas Auliaâ€™s åº— sebagai studio kreatif digital yang personal, terjangkau, dan transparan.

## 4. Sasaran Pengguna

### 4.1 Prioritas utama

- Mahasiswa dan pelajar yang membutuhkan poster, konten media sosial, logo, UI/UX, atau landing page.
- Individu yang membutuhkan identitas visual atau media digital untuk proyek pribadi dan profesional.
- UMKM yang membutuhkan materi promosi, identitas visual, company profile, atau katalog online sederhana.

Pengguna utama adalah pelanggan yang mempertimbangkan harga dengan cermat dan membutuhkan proses yang mudah dipahami.

### 4.2 Sasaran berikutnya

- Startup dan perusahaan yang membutuhkan pekerjaan dengan ruang lingkup lebih besar.

Segmen ini bukan fokus MVP. Auliaâ€™s åº— akan membangun portofolio dan reputasi dari proyek yang lebih kecil terlebih dahulu.

## 5. Identitas Merek

### 5.1 Nama dan cerita merek

Nama **Auliaâ€™s** berasal dari nama pemilik, Aulia Putri Ramadhani. Karakter Mandarin **åº—**, dibaca *diÃ n*, berarti toko. Karakter ini digunakan karena Aulia ingin melanjutkan studi S2 di Tiongkok setelah menyelesaikan S1 dan saat ini sedang mempelajari bahasa Mandarin.

Karakter åº— harus tetap ditulis dalam bentuk aslinya pada kedua bahasa karena merupakan bagian dari identitas merek, bukan elemen terjemahan.

### 5.2 Positioning

Auliaâ€™s åº— adalah studio kreatif digital personal yang menawarkan desain dan website dengan harga masuk akal, informasi yang jelas, dan komunikasi langsung untuk mahasiswa, individu, dan UMKM.

### 5.3 Tagline

- Indonesia: **Desain yang Pas untuk Langkahmu**
- Inggris: **Design That Fits Your Next Step**

### 5.4 Visi

Menjadi studio kreatif digital yang dikenal sebagai pilihan terjangkau dan dapat diandalkan bagi mahasiswa, individu, dan UMKM.

*To build a digital creative studio known as an accessible and dependable choice for students, individuals, and MSMEs.*

### 5.5 Misi

1. Mengerjakan desain dan website berdasarkan kebutuhan serta ruang lingkup yang disepakati bersama pelanggan.
2. Menyampaikan harga, estimasi pengerjaan, dan ketentuan revisi secara jelas sebelum pekerjaan dimulai.
3. Memudahkan konsultasi dan pemesanan melalui komunikasi langsung.
4. Terus meningkatkan kemampuan dan kualitas karya agar dapat melayani kebutuhan pelanggan yang lebih luas.

### 5.6 Suara merek

- Menggunakan kata **saya** atau menyebut **Auliaâ€™s åº—**, bukan **kami**.
- Personal, ramah, ringkas, dan profesional.
- Tidak menggunakan klaim seperti terbaik, nomor satu, atau dipercaya banyak pelanggan tanpa bukti.
- Menjelaskan manfaat melalui detail layanan, bukan slogan yang berlebihan.

## 6. Logo

Logo menggunakan konsep **Wordmark Modern Mandarin**:

- Kata **Auliaâ€™s** menggunakan serif editorial.
- Karakter **åº—** ditempatkan dalam modul geometris berwarna vermilion.
- Modul åº— dapat digunakan sendiri sebagai favicon dan ikon media sosial.
- Logo harus tetap terbaca dalam ukuran kecil dan memiliki versi satu warna.
- Logo tidak menggunakan ornamen tradisional Tiongkok yang tidak berhubungan dengan cerita merek.

Logo final merupakan aset yang akan dirancang pada tahap implementasi. PRD hanya menetapkan konsep dan persyaratannya.

## 7. Ruang Lingkup MVP

### 7.1 Halaman dan URL

| Halaman | URL Indonesia | URL Inggris |
|---|---|---|
| Home | `/` | `/en/` |
| About Us | `/tentang` | `/en/about` |
| Services | `/layanan` | `/en/services` |
| Portfolio | `/portofolio` | `/en/portfolio` |
| Customer Experience | `/customer-experience` | `/en/customer-experience` |
| Brand Experience | `/brand-experience` | `/en/brand-experience` |
| Contact Us | `/kontak` | `/en/contact` |

Navigasi desktop menggunakan Home, About Us, Services, Portfolio, Experience, dan Contact Us. Menu Experience membuka Customer Experience dan Brand Experience. Pada perangkat seluler, semua tujuan tersedia melalui tombol berlabel **Menu**. Setiap item navigasi harus menuju halaman yang benar dan dapat digunakan dengan keyboard.

### 7.2 Isi halaman

| Halaman | Isi |
|---|---|
| Home | Hero dan tagline, layanan unggulan, alasan memilih Auliaâ€™s åº—, tiga Concept Project, proses kerja, dan CTA WhatsApp. |
| About Us | Profil Aulia, asal nama, arti åº—, cerita rencana studi ke Tiongkok, makna logo, tujuan usaha, visi, dan misi. |
| Services | Enam layanan, harga awal, cakupan, estimasi, revisi, hasil pekerjaan, aturan harga, dan tombol WhatsApp. |
| Portfolio | Tiga Concept Project beserta tujuan, proses singkat, hasil visual, dan label yang menjelaskan bahwa proyek bukan pekerjaan pelanggan. |
| Customer Experience | Identitas responden, metode singkat, kebutuhan, faktor kepercayaan, fitur penting, keunggulan, penilaian harga, dan kesimpulan. |
| Brand Experience | Penerapan dimensi sensorik, afektif, intelektual, dan perilaku. |
| Contact Us | WhatsApp, email, Instagram, wilayah operasional, penjelasan layanan online, dan CTA konsultasi. |

## 8. Layanan dan Harga

Semua harga ditampilkan sebagai **harga mulai dari**. Harga akhir ditentukan setelah konsultasi dan kesepakatan ruang lingkup.

| Layanan | Harga mulai | Estimasi | Revisi | Cakupan awal |
|---|---:|---|---:|---|
| Desain media sosial | Rp40.000 per desain | 1 sampai 2 hari | 2 kali | Satu desain dan satu ukuran, JPG atau PNG |
| Desain poster | Rp75.000 | 2 sampai 3 hari | 2 kali | Satu konsep dan satu ukuran, JPG, PNG, atau PDF |
| Logo dan identitas visual dasar | Rp250.000 | 4 sampai 7 hari | 2 kali | Satu konsep, logo, warna, tipografi, PNG, JPG, dan SVG |
| UI/UX web atau mobile | Rp375.000 | 5 sampai 7 hari | 2 kali | Maksimal lima layar, high-fidelity, dan prototipe dasar |
| Landing page | Rp750.000 | 5 sampai 8 hari | 2 kali | Maksimal tujuh bagian, responsif, WhatsApp, dan SEO dasar |
| Company profile website | Rp1.500.000 | 10 sampai 14 hari | 2 kali | Maksimal lima halaman, responsif, kontak, dan SEO dasar |
| Website katalog atau online store sederhana | Rp2.000.000 | 14 sampai 21 hari | 2 kali | Maksimal 20 produk atau layanan dan pemesanan WhatsApp |

Paket desain media sosial:

- Lima desain: Rp175.000.
- Sepuluh desain: Rp325.000.

### 8.1 Ketentuan layanan

- Harga akhir diberikan setelah kebutuhan dan ruang lingkup disepakati.
- DP 50 persen dibayar sebelum pengerjaan dimulai.
- Pelunasan dilakukan sebelum berkas akhir diberikan.
- Dua kali revisi berarti dua putaran pengumpulan masukan.
- Revisi tambahan mulai dari Rp25.000.
- Pengerjaan prioritas dikenai tambahan 30 persen jika kapasitas tersedia.
- Domain, hosting, penulisan konten, dan aset berbayar tidak termasuk kecuali disepakati.
- Pelanggan menyediakan materi dan informasi yang dibutuhkan.
- Perubahan ruang lingkup dapat mengubah harga dan estimasi.

Harga peluncuran dapat digunakan untuk lima sampai sepuluh proyek awal. Setelah portofolio dan permintaan berkembang, harga dapat dievaluasi naik sekitar 20 sampai 30 persen. Angka ini merupakan strategi internal dan tidak perlu ditampilkan sebagai klaim promosi.

## 9. Portofolio Konsep

Website menampilkan tiga karya yang dibuat khusus sebagai demonstrasi kemampuan. Setiap karya wajib diberi label **Concept Project** dan keterangan bahwa karya bukan proyek pelanggan.

### 9.1 Identitas visual UMKM kuliner

- Jenis pekerjaan: logo dan identitas visual dasar.
- Visual yang ditampilkan: logo, palet warna, tipografi, dan satu penerapan kemasan atau media promosi.
- Tujuan: menunjukkan kemampuan membangun identitas usaha kecil yang konsisten.

### 9.2 Konten media sosial kegiatan mahasiswa

- Jenis pekerjaan: poster dan konten media sosial.
- Visual yang ditampilkan: satu poster utama dan beberapa adaptasi konten.
- Tujuan: menunjukkan hierarki informasi dan konsistensi visual pada beberapa ukuran.

### 9.3 Landing page usaha lokal

- Jenis pekerjaan: UI/UX dan pengembangan landing page.
- Visual yang ditampilkan: tampilan desktop dan seluler.
- Tujuan: menunjukkan kemampuan mengubah informasi usaha menjadi halaman yang mudah digunakan.

Nama fiktif untuk ketiga proyek hanya boleh digunakan jika label Concept Project tetap terlihat pada halaman daftar dan detail.

## 10. Customer Experience

### 10.1 Responden

- Nama: Ijlal.
- Status: Mahasiswa dan menjalankan bisnis di bidang teknologi.
- Hubungan dengan produk: calon pengguna yang termasuk target mahasiswa dan individu atau UMKM.

Konten ini adalah ringkasan wawancara, bukan testimoni pelanggan.

### 10.2 Temuan wawancara

- Layanan yang paling relevan: desain konten media sosial, poster, serta logo dan identitas visual dasar.
- Kepercayaan terbentuk setelah responden memeriksa email, Instagram, dan WhatsApp yang menggunakan identitas pemilik secara konsisten.
- Informasi paket dan harga, estimasi pengerjaan, alur yang jelas, dan pesan WhatsApp otomatis membantu pengambilan keputusan.
- Harga yang kompetitif, estimasi yang cepat, dan jumlah revisi menjadi keunggulan yang dirasakan.
- Kisaran harga dinilai masuk akal bagi mahasiswa dan UMKM, tidak terlalu murah dan tidak terlalu mahal.

Foto profil Aulia tidak ditampilkan di website. Temuan mengenai konsistensi identitas merupakan hasil pemeriksaan responden pada kanal kontak eksternal.

## 11. Brand Experience

### 11.1 Sensorik

Ivory, vermilion, dan charcoal membentuk pengalaman visual seperti media cetak modern. Tipografi editorial dipadukan dengan elemen geometris dari åº—. Karya ditampilkan jelas tanpa dekorasi yang tidak mendukung isi.

### 11.2 Afektif

Website diarahkan untuk membuat pengunjung merasa tenang, dekat dengan pemilik usaha, dan yakin karena harga serta proses dijelaskan sejak awal.

### 11.3 Intelektual

Pengunjung dapat memahami perbedaan layanan melalui cakupan, harga awal, estimasi, revisi, dan hasil yang akan diterima.

### 11.4 Perilaku

Pengunjung melihat layanan, membandingkan pilihan, memeriksa proyek konsep, dan memulai percakapan WhatsApp dengan konteks layanan yang sudah tersedia.

## 12. Alur Pemesanan

1. Pengunjung membuka halaman Services.
2. Pengunjung memilih layanan setelah membaca harga, cakupan, estimasi, revisi, dan hasil.
3. Pengunjung menekan tombol **Pesan lewat WhatsApp**.
4. Browser membuka `https://wa.me/6281334666364` dengan pesan sesuai layanan.
5. Pengunjung mengirim pesan dan melanjutkan konsultasi dengan Aulia.

Template pesan Bahasa Indonesia:

> Halo Aulia, saya tertarik memesan [nama layanan] dari Auliaâ€™s åº—.  
> Paket: [nama paket]  
> Harga mulai: [harga]  
> Mohon informasi mengenai proses konsultasi selanjutnya. Terima kasih.

Template pesan Bahasa Inggris:

> Hello Aulia, I am interested in ordering [service name] from Auliaâ€™s åº—.  
> Package: [package name]  
> Starting price: [price]  
> Please let me know the next consultation step. Thank you.

Setiap layanan memiliki URL WhatsApp statis yang sudah di-encode. Nomor tetap ditampilkan sebagai teks pada Contact Us agar pengunjung masih dapat menghubungi Aulia jika tautan gagal dibuka.

## 13. Proses Pelayanan

1. Pelanggan memilih layanan.
2. Pelanggan berkonsultasi melalui WhatsApp.
3. Aulia dan pelanggan menyepakati ruang lingkup, harga akhir, serta DP 50 persen.
4. Aulia mengerjakan dan mengirimkan hasil untuk ditinjau.
5. Pelanggan memberikan masukan sesuai jumlah revisi.
6. Pelanggan melunasi pembayaran dan menerima berkas akhir.

## 14. Sistem Visual

### 14.1 Design Read

Website ini dibaca sebagai toko jasa kreatif bilingual untuk mahasiswa, individu, dan UMKM dalam bahasa visual editorial Modern Mandarin dengan **ENERGY 2, RHYTHM 2, MOTION 1**.

### 14.2 Palet

| Peran | Warna | Alasan |
|---|---|---|
| Latar | Ivory `#F6F0E7` | Memberi kesan hangat seperti kertas dan mendukung identitas editorial. |
| Teks utama | Charcoal `#211C18` | Lebih lembut dari hitam murni dan tetap sangat terbaca. |
| Teks sekunder | `#625950` | Menjaga hierarki dengan kontras yang cukup. |
| Aksen | Vermilion `#B23A2B` | Menghubungkan identitas dengan åº— dan menandai tindakan utama. |

Hasil pemeriksaan kontras:

- Charcoal pada ivory: 14,90:1.
- Teks sekunder pada ivory: 6,05:1.
- Putih pada vermilion: 5,94:1.
- Vermilion pada ivory: 5,25:1.

Pasangan tersebut memenuhi WCAG AA untuk teks normal.

### 14.3 Tipografi

- Judul: Newsreader, untuk karakter editorial yang profesional dan personal.
- Isi dan UI: Source Sans 3, untuk keterbacaan Bahasa Indonesia dan Inggris.
- Karakter åº—: Noto Serif SC, untuk menjaga bentuk Mandarin tampil konsisten.
- Bobot font dibatasi pada yang digunakan agar ukuran unduhan tetap kecil.

### 14.4 Tata letak dan gerak

- Tema terang tetap digunakan karena ivory menyerupai media cetak dan menjadi bagian dari identitas merek.
- Setiap layar memiliki satu fokus utama.
- Vermilion dipakai pada logo, fokus, tautan penting, dan CTA utama dengan dosis terbatas.
- Susunan bagian bervariasi secukupnya agar tidak terasa seperti pengulangan kartu yang sama.
- Gerak hanya untuk hover, fokus, transisi menu, dan umpan balik interaksi.
- Tidak ada animasi berulang, parallax, atau scroll reveal.

### 14.5 Responsivitas dan aksesibilitas

- Layout berubah mengikuti kebutuhan konten, bukan daftar ukuran perangkat.
- Mobile menggunakan satu kolom. Tablet dapat memakai dua kolom jika isi tetap terbaca.
- Tidak ada scroll horizontal atau teks yang terpotong.
- Target sentuh minimum 44 kali 44 piksel.
- Menu dapat dibuka dengan sentuhan, Enter, atau Space dan ditutup dengan Escape.
- Semua elemen interaktif memiliki indikator fokus yang terlihat.
- Urutan fokus mengikuti urutan visual.
- Teks tetap dapat dibaca pada zoom 200 persen.
- Gambar memiliki `alt` yang menjelaskan isi atau `alt=""` jika dekoratif.
- Preferensi `prefers-reduced-motion` dihormati.

## 15. Arsitektur Teknis

### 15.1 Komponen

- **Astro:** menghasilkan halaman HTML statis.
- **Data konten lokal:** menyimpan layanan, harga, proyek konsep, kontak, dan terjemahan.
- **Komponen UI:** header, language switcher, service summary, service detail, project preview, process list, WhatsApp CTA, dan footer.
- **Git repository:** menyimpan versi sumber dan memicu deployment.
- **Vercel:** membangun serta mengirimkan static output.
- **Cloudflare:** mengelola DNS domain.
- **Hostinger:** registrar domain.

Tidak diperlukan adapter SSR, fungsi serverless, database, CMS, autentikasi, atau API internal.

### 15.2 Alur publikasi

1. Aulia memperbarui konten pada repository.
2. Perubahan digabungkan ke branch produksi.
3. Vercel menjalankan build Astro.
4. Build yang berhasil dipublikasikan.
5. Cloudflare DNS mengarahkan `aulia-putri.store` ke deployment Vercel.

### 15.3 Struktur data

Data layanan memiliki field minimum:

- `slug`
- `name`
- `shortDescription`
- `startingPrice`
- `turnaround`
- `revisions`
- `scope`
- `deliverables`
- `whatsappMessage`

Semua field yang dibaca pengguna mempunyai nilai Indonesia dan Inggris. Brand name dan karakter åº— tidak diterjemahkan.

### 15.4 SEO dasar

- Title dan meta description unik untuk setiap halaman dan bahasa.
- Canonical URL dan `hreflang` Indonesia serta Inggris.
- XML sitemap dan `robots.txt`.
- Open Graph menggunakan aset merek yang nyata setelah logo final tersedia.
- Semantic HTML, heading berurutan, dan metadata bisnis yang hanya memuat informasi terverifikasi.

## 16. Deployment dan Penggunaan Komersial

Arsitektur domain:

**Hostinger sebagai registrar â†’ Cloudflare sebagai pengelola DNS â†’ Vercel sebagai hosting dan deployment Astro.**

### 16.1 Tahap tugas

- Menggunakan Vercel Hobby.
- Biaya hosting Rp0.
- Digunakan untuk tugas, demonstrasi, dan prototipe nonkomersial.

### 16.2 Tahap usaha

Sebelum menerima pesanan komersial melalui website, pemilik harus:

1. Meng-upgrade Vercel ke paket yang mengizinkan penggunaan komersial, atau
2. Memindahkan deployment ke penyedia lain yang mengizinkan penggunaan komersial.

Dokumentasi resmi Vercel menyatakan Hobby dibatasi untuk penggunaan personal dan nonkomersial. Vercel Pro saat penyusunan PRD dimulai dari US$20 per developer per bulan, belum termasuk pajak. Harga harus diperiksa kembali ketika usaha masuk tahap operasional.

Referensi:

- [Vercel Hobby Plan](https://vercel.com/docs/plans/hobby)
- [Vercel Pricing](https://vercel.com/pricing)

## 17. Kontak Publik

- WhatsApp: [+62 813-3466-6364](https://wa.me/6281334666364)
- Email: [auliarmdnii1910@gmail.com](mailto:auliarmdnii1910@gmail.com)
- Instagram: [@auliarmdnii](https://www.instagram.com/auliarmdnii/)
- Wilayah operasional: Kabupaten Nganjuk, Jawa Timur, Indonesia
- Model layanan: online

Alamat rumah dan foto profil pribadi tidak ditampilkan.

## 18. 5W1H Pengembangan

| Unsur | Penjelasan |
|---|---|
| What | Online store bilingual yang menawarkan desain visual, UI/UX, landing page, company profile, dan website katalog sederhana. |
| Why | Memenuhi tugas kuliah dan membangun kanal penjualan mandiri dengan informasi harga serta proses yang jelas. |
| Who | Aulia sebagai pemilik dan pelaksana; mahasiswa, individu, dan UMKM sebagai target utama; Ijlal sebagai responden Customer Experience. |
| Where | Website berada di `aulia-putri.store`; usaha beroperasi secara online dari Kabupaten Nganjuk; domain terdaftar di Hostinger, DNS dikelola Cloudflare, dan prototipe di-hosting Vercel. |
| When | Tahap pertama digunakan untuk tugas dan prototipe. Tahap komersial dimulai setelah hosting menggunakan paket yang mengizinkan kegiatan usaha. |
| How | Domain dibeli di Hostinger melalui QRIS, Astro digunakan untuk membuat halaman statis, sumber disimpan di Git, Vercel menjalankan deployment, Cloudflare mengelola DNS, dan pesanan diarahkan ke WhatsApp. |

## 19. Rincian Biaya

| Komponen | Biaya awal | Biaya berikutnya | Keterangan |
|---|---:|---:|---|
| Domain `aulia-putri.store` | Rp23.546 | Rp956.900 per tahun, belum termasuk pajak | Dibeli di Hostinger melalui QRIS. Biaya awal sudah termasuk pajak. |
| Hosting tahap tugas | Rp0 | Rp0 selama memenuhi batas dan ketentuan Hobby | Vercel Hobby hanya untuk prototipe nonkomersial. |
| Cloudflare DNS | Tidak ada biaya tambahan yang dicatat | Mengikuti paket akun yang digunakan | Cloudflare digunakan untuk DNS management. |
| Framework Astro | Rp0 | Rp0 | Open source. |
| Desain, logo, konten, dan pengembangan | Rp0 biaya tunai | Rp0 biaya tunai | Seluruh pekerjaan dibuat sendiri oleh Aulia. Waktu kerja tidak dinilai sebagai pengeluaran tunai. |
| Email dan media sosial | Rp0 | Rp0 | Menggunakan Gmail dan Instagram yang sudah tersedia. |

Total pengeluaran tunai awal yang tercatat: **Rp23.546**.

Biaya operasional komersial belum dimasukkan ke total awal karena pilihan hosting komersial akan ditentukan sebelum bisnis menerima pesanan nyata.

## 20. Penanganan Kesalahan

- Jika WhatsApp tidak dapat dibuka, nomor, email, dan Instagram tetap terlihat pada Contact Us.
- Jika sebuah terjemahan belum tersedia, build harus gagal agar teks Indonesia tidak diam-diam muncul pada halaman Inggris.
- Jika gambar proyek gagal dimuat, ukuran area gambar tetap stabil dan `alt` menjelaskan isi.
- Halaman yang tidak ditemukan menggunakan halaman 404 dengan pilihan kembali ke Home Indonesia atau Inggris.
- Deployment yang gagal tidak menggantikan versi produksi terakhir yang berhasil.
- Tidak ada data pelanggan yang dikumpulkan atau disimpan oleh website.

## 21. Keamanan dan Privasi

- Tidak ada formulir pengumpulan data pada website.
- Tidak ada kredensial atau token yang ditanamkan pada source frontend.
- Semua koneksi menggunakan HTTPS.
- Tautan eksternal yang membuka tab baru menggunakan perlindungan `noopener noreferrer`.
- Tidak ada alamat rumah, foto pribadi, atau data pelanggan pada halaman publik.
- Analytics, cookie pemasaran, dan pelacak pihak ketiga tidak termasuk MVP.

## 22. Kriteria Penerimaan

### 22.1 Fungsi

- Semua tujuh halaman tersedia dalam Bahasa Indonesia dan Inggris.
- Bahasa Indonesia terbuka secara default.
- Language switcher menuju pasangan halaman yang sesuai.
- Semua menu menuju halaman yang benar.
- Setiap layanan menampilkan harga awal, estimasi, revisi, cakupan, dan hasil.
- Setiap tombol pemesanan membuka WhatsApp ke nomor yang benar dengan layanan, paket, dan harga yang sesuai.
- Kontak WhatsApp, email, Instagram, dan wilayah operasional benar.
- Customer Experience memuat ringkasan wawancara nyata dan tidak ditulis sebagai testimoni pelanggan.
- Semua karya simulasi memiliki label Concept Project.

### 22.2 Kualitas

- Build Astro selesai tanpa error.
- Tidak ada error pada console browser.
- Tidak ada kontrol atau tautan tanpa perilaku.
- Layout tidak mengalami overflow dari layar sempit sampai desktop.
- Tampilan tetap dapat digunakan pada zoom 200 persen.
- Navigasi, dropdown, dan CTA dapat digunakan dengan keyboard.
- Seluruh pasangan warna teks memenuhi WCAG AA.
- Semua gambar menggunakan format dan ukuran yang sesuai serta tidak menggeser layout saat dimuat.
- Metadata, canonical, `hreflang`, sitemap, dan 404 tersedia.

### 22.3 Pemeriksaan sebelum rilis

Pengujian wajib mencatat hasil klik untuk:

- Semua item navigasi desktop dan seluler.
- Pembuka serta penutup menu Experience.
- Language switcher pada setiap halaman.
- Tombol WhatsApp pada setiap layanan dan paket.
- Email serta Instagram pada Contact Us.
- Skip link dan urutan fokus keyboard.
- Tampilan mobile, tablet, desktop, dan zoom 200 persen.

## 23. Di Luar Ruang Lingkup MVP

- WordPress atau CMS lain.
- Keranjang belanja dan checkout.
- Payment gateway.
- Akun serta dashboard pelanggan.
- Database pelanggan atau produk.
- Formulir kontak internal.
- Backend dan API internal.
- Blog.
- Testimoni atau logo pelanggan.
- Statistik pengguna atau klaim performa tanpa hasil pengukuran.
- Dark mode.
- Analytics dan iklan.

## 24. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Vercel Hobby tidak mengizinkan penggunaan komersial | Batasi sebagai prototipe tugas dan gunakan hosting komersial sebelum menerima pesanan. |
| Harga perpanjangan domain jauh lebih tinggi daripada tahun pertama | Tampilkan biaya promo dan perpanjangan secara terpisah serta evaluasi anggaran sebelum jatuh tempo. |
| Concept Project dianggap sebagai pekerjaan pelanggan | Gunakan label Concept Project pada daftar, detail, dan caption visual. |
| Kapasitas usaha terbatas karena seluruh pekerjaan ditangani Aulia | Konfirmasi ketersediaan dan estimasi melalui WhatsApp sebelum menerima DP. |
| Informasi bilingual tidak konsisten | Simpan pasangan konten dalam struktur data yang sama dan gagalkan build jika terjemahan wajib kosong. |

## 25. Keputusan yang Telah Disetujui

- Astro untuk website statis.
- Domain `aulia-putri.store`.
- Bahasa Indonesia sebagai default dan bahasa Inggris melalui `/en/`.
- Arah visual Modern Mandarin.
- Logo Wordmark Modern Mandarin.
- Tagline Desain yang Pas untuk Langkahmu.
- Gaya bahasa personal menggunakan saya.
- Struktur multi-page.
- Tiga Concept Project.
- Pemesanan melalui pesan WhatsApp otomatis.
- Customer Experience menggunakan wawancara Ijlal.
- Brand Experience memakai empat dimensi yang diwajibkan tugas.
- Vercel Hobby hanya untuk tahap tugas dan prototipe.

## 26. Langkah Setelah PRD Disetujui

1. Membuat implementation plan berdasarkan PRD ini.
2. Merancang logo final dan aset tiga Concept Project sesuai brief.
3. Menulis copy final Bahasa Indonesia dan terjemahan Inggris.
4. Membangun serta menguji website Astro.
5. Menghubungkan repository ke Vercel dan memeriksa domain produksi.
6. Menyusun lampiran tugas berisi tautan, 5W1H, biaya, Customer Experience, dan Brand Experience.