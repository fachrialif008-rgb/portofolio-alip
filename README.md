# TelUtizen Starter Book — Web

Portofolio satu halaman (landing page) untuk Penugasan D PKKMB Telkom University Jakarta 2026.
HTML + CSS + JavaScript murni, tanpa build tool. Cukup buka `index.html` di browser.

## Struktur file

```
index.html                 struktur halaman (jarang perlu diubah)
assets/css/style.css       seluruh tampilan
assets/js/data.js          << SEMUA ISI ADA DI SINI. Ini file yang kamu edit.
assets/js/main.js          mesin render + interaksi (jangan diubah kecuali perlu)
assets/img/                tempat menaruh foto
DESIGN.md                  token desain + prompt Stitch AI (referensi)
```

## Cara mengganti isi

Buka `assets/js/data.js`, cari komentar `// GANTI`, ganti teksnya, simpan, refresh browser.
Tidak perlu menyentuh HTML — semua teks di halaman diambil dari file ini.

| Bagian di web | Kunci di `data.js` |
|---|---|
| Hero + Identitas | `profil.nama`, `nim`, `gugus`, `prodi`, `fakultas`, `asalDaerah`, `foto`, `tigaKata` |
| Tentang Saya | `profil.deskripsi` (maks 5 kalimat), `funFact`, `harapan`, `hobi` |
| Analisis Diri | `swot.strength` / `weakness` / `opportunity` / `threat` |
| Mind of Us | `kelompok` (maks 5 anggota) |
| Resume Materi | `resume` (tambah/kurangi objek sesuai jumlah materi) |
| Galeri | `galeri` |
| Penutup | `penutup.tagline`, `kutipan`, `acara` |

Jumlah item bebas: array `hobi`, `resume`, dan `galeri` boleh ditambah atau dikurangi, tampilan
menyesuaikan sendiri. `kelompok` dibatasi 5 anggota (sesuai ketentuan tugas); anggota ke-6 dan
seterusnya diabaikan.

## Cara memasukkan foto

1. Copy file foto ke folder `assets/img/`.
2. Tulis nama filenya di `data.js`. Contoh:

```js
foto: "assets/img/foto-saya.jpg",
```

Panduan ukuran supaya tidak berat dan tidak pecah:

- Foto profil: potret, sisi pendek ± 800px.
- Foto anggota kelompok: persegi, ± 400×400px.
- Foto galeri: sisi panjang ± 1600px, usahakan di bawah 500 KB per file.

Untuk galeri, `ratio: "wide"` dipakai untuk foto mendatar dan `"tall"` untuk foto tegak — ini yang
membuat susunan grid-nya tidak monoton. Isi juga `alt` (deskripsi singkat foto) supaya tetap ramah
pembaca layar.

Foto yang gagal dimuat otomatis diganti placeholder, jadi halaman tidak pernah menampilkan ikon
gambar rusak.

## Cara membuat PDF untuk dikumpulkan

Deliverable ke LMS adalah **1 file PDF**, bukan website-nya.

1. Buka `index.html` di Chrome atau Edge.
2. Tekan `Ctrl+P`.
3. Destination: **Save as PDF**, paper **A4**, Margins **Default**.
4. **Matikan** "Background graphics" — versi print sudah otomatis jadi tema terang, teks hitam di
   kertas putih, tanpa blur dan glow, dan semua akordeon Resume terbuka.
5. Simpan dengan nama: `TelUtizen StarterBook_Nama_Gugus.pdf`.

Batas pengumpulan: **11 September 2026, 23.59 WIB**, dikumpulkan setelah seluruh rangkaian PKKMB
Universitas dan UKM Fair selesai. Sebelum kirim, cek di PDF: nama, NIM, gugus, prodi, fakultas,
asal daerah, foto, deskripsi, tiga kata, hobi, fun fact, harapan, SWOT, lima anggota Mind of Us
lengkap dengan asal/prodi/fakultas/hobi/fun fact, dan resume tiap materi (poin utama, hal yang
dipelajari, kesimpulan).

## Catatan teknis

- Bekerja tanpa internet, kecuali font Google (Poppins, Sora, Inter, JetBrains Mono) yang jatuh ke
  font sistem kalau offline.
- Ikon memakai sprite SVG inline di `index.html`, bukan icon font — tidak ada risiko ikon muncul
  sebagai tulisan.
- Gaya visualnya **monokrom minimalis**: latar hitam pekat `#000`, kartu solid dengan garis hairline
  putih transparan, tipografi display besar, dan foto galeri grayscale yang berwarna saat disentuh.
  Ini menggantikan gaya dark glassmorphism ungu/coral/cyan pada `DESIGN.md` — file itu disimpan
  sebagai catatan sejarah, bukan acuan yang berlaku sekarang.
- Kalau mau memberi satu warna aksen (misal jingga DKV `#F97316`), ubah `--accent` dan `--grad` di
  bagian 1 `style.css`. Empat warna kuadran SWOT ada di `--emerald`, `--amber`, `--sky`, `--rose`.
- Responsif dari lebar 320px: navigasi pil di atas untuk ≥900px, tab bar bawah untuk layar kecil,
  peta radial Mind of Us berubah jadi grid node terpusat di bawah 1000px, dan semua target sentuh
  minimal 44px.
- Menghormati `prefers-reduced-motion`: animasi mati kalau OS user meminta begitu.
