# DESIGN.md — TelUtizen Starter Book Web

> Dokumen ini punya dua fungsi: sumber prompt untuk **Google Stitch AI**, dan acuan token desain
> saat implementasi React + Vite + Tailwind. Semua konten masih placeholder `{{...}}` — ganti dulu
> sebelum dipakai.

## 1. Cara pakai di Stitch

1. Buka Stitch, pilih mode **Web** (bukan Mobile).
2. Paste **Prompt 0** (§5) apa adanya sebagai prompt pertama. Jangan ditambah apa pun.
3. Lanjut **satu section per prompt**, urut Prompt 1 → 7. Jangan pernah gabung dua section.
4. Begitu satu hasil sudah bagus, **screenshot dulu** — Stitch kadang meregenerasi layout yang
   sudah benar saat kamu minta edit lain.
5. Untuk perbaikan, pakai kalimat siap pakai di §6, satu perubahan per prompt.
6. Kalau halaman makin panjang dan Stitch mulai menghilangkan komponen, bikin section sisanya
   sebagai **screen baru**: paste **Style Block** (§4) + prompt section-nya.
7. Terakhir export dari Stitch, tapi perlakukan hasilnya sebagai referensi visual saja — kode final
   tetap ditulis ulang di React memakai token di §3.

Dasar bentuk dokumen ini, dari panduan resmi Stitch: bahasa natural bukan JSON, satu
screen/komponen per prompt, maksimal 1–2 perubahan per iterasi, dan prompt panjang (5.000+
karakter) bikin komponen berjatuhan. Karena itu tiap prompt di bawah pendek dan fokus.

Prompt-nya bahasa Inggris karena Stitch lebih akurat begitu, tapi semua teks yang tampil di layar
saya tulis eksplisit dalam bahasa Indonesia di dalam tanda kutip.

## 2. Placeholder yang harus diganti

| Placeholder | Isi |
|---|---|
| `{{NAMA_LENGKAP}}` | Nama lengkap |
| `{{NIM}}` | NIM / No. Registrasi |
| `{{GUGUS}}` | Nama kelompok / gugus |
| `{{PRODI}}` | Program studi |
| `{{FAKULTAS}}` | Fakultas |
| `{{ASAL_DAERAH}}` | Asal daerah |
| `{{KATA_1}}` `{{KATA_2}}` `{{KATA_3}}` | Tiga kata yang menggambarkan diri |
| `{{WARNA_PRODI}}` | Aksen warna prodi (lihat §3.6) |

Jangan masukkan NIM asli dan foto asli ke Stitch. Cukup placeholder; data asli dipasang nanti
langsung di kode.

## 3. Design tokens

### 3.1 Warna

| Peran | Nilai |
|---|---|
| Background utama | `#0B0F1A` |
| Background paling dalam (footer) | `#06080F` |
| Permukaan kaca | `rgba(255,255,255,0.06)` |
| Permukaan kaca (hover/aktif) | `rgba(255,255,255,0.10)` |
| Border kaca | `rgba(255,255,255,0.12)` |
| Teks utama | `#F2F5FA` |
| Teks sekunder | `#A8B2C7` |
| Teks samar | `#6B7690` |
| Aksen 1 (merah Telkom) | `#E5223C` |
| Aksen 2 (violet) | `#7C5CFF` |
| Aksen 3 (cyan) | `#22D3EE` |
| Gradien utama | `linear-gradient(135deg, #E5223C 0%, #7C5CFF 55%, #22D3EE 100%)` |

Warna khusus kuadran SWOT: Strength `#34D399`, Weakness `#FBBF24`, Opportunity `#22D3EE`,
Threat `#FB7185`.

### 3.2 Tipografi

| Peran | Font | Ukuran |
|---|---|---|
| Display / nama di hero | Sora 700 | `clamp(40px, 7vw, 76px)`, letter-spacing `-0.03em` |
| Judul section | Sora 600 | `clamp(28px, 4vw, 44px)` |
| Judul kartu | Sora 600 | 20–24px |
| Body | Inter 400 | 16–18px, line-height 1.7 |
| Label kecil / eyebrow | Inter 600 | 12px, uppercase, letter-spacing `0.14em` |
| Angka & NIM | JetBrains Mono 500 | 15px |

### 3.3 Bentuk & jarak

- Lebar konten maksimal `1200px`, padding samping `24px`.
- Padding vertikal section: `120px` desktop, `72px` mobile.
- Radius: kartu `20px`, foto `16px`, pill/badge `999px`.
- Grid 12 kolom, gap `24px`.

### 3.4 Resep efek kaca

```css
background: rgba(255, 255, 255, 0.06);
border: 1px solid rgba(255, 255, 255, 0.12);
backdrop-filter: blur(20px) saturate(140%);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08);
```

Glow latar: 2–3 blob radial (aksen 1 & 2 & 3), `filter: blur(120px)`, opacity `0.22`, posisi di
belakang kartu, tidak pernah di belakang teks panjang.

### 3.5 Motion

- Masuk viewport: `fade + translateY(24px)` → 0, durasi `500ms`, easing
  `cubic-bezier(0.22, 1, 0.36, 1)`, stagger antar item `80ms`.
- Hover kartu: `translateY(-4px)` + border naik ke `rgba(255,255,255,0.22)`, `200ms`.
- Tidak ada animasi yang bikin teks bergerak terus-menerus (mengganggu keterbacaan saat dinilai).

### 3.6 Aksen warna per prodi (opsional)

Kalau mau aksen mengikuti warna prodi seperti ketentuan nametag, ganti Aksen 1:

| Prodi | Warna |
|---|---|
| Sistem Informasi | hijau tua `#16A34A` |
| Teknik Telekomunikasi | biru `#2563EB` |
| Desain Komunikasi Visual | jingga `#F97316` |
| Teknologi Informasi & Informatika | kuning `#FACC15` |

## 4. Style Block

Paste blok ini **di awal prompt** setiap kali kamu bikin screen baru di Stitch, supaya gayanya
konsisten:

```
Style: dark glassmorphism personal portfolio, near-black navy background #0B0F1A, frosted
translucent cards with 1px light borders and heavy background blur, soft blurred red-violet-cyan
gradient glows behind the cards, crisp near-white text with muted grey-blue secondary text.
Headings in Sora, body in Inter. 20px card radius, generous whitespace, 1200px max content width,
left-aligned section headings with a small uppercase label above each one.
```

## 5. Prompt per section

### Prompt 0 — Halaman dasar: nav + hero

```
Design a one-page personal portfolio website for an Indonesian university freshman. Dark
glassmorphism style: near-black navy background #0B0F1A, frosted translucent cards with 1px light
borders, soft blurred red-to-violet-to-cyan gradient glows behind content, crisp white text.
Headings in Sora, body in Inter. Generous whitespace, 1200px max content width.

Create only two things for now:

1. A sticky floating pill-shaped glass navigation bar centered at the top, with the label
"Starter Book" on the left and these text links: "Identitas", "Tentang", "SWOT", "Mind of Us",
"Resume", "Galeri".

2. A full-height hero section in two columns. Left column: a small uppercase label
"TELUTIZEN 2026", a very large name headline "{{NAMA_LENGKAP}}", one line of secondary text
"{{PRODI}} · {{FAKULTAS}}", three rounded glass pill badges reading "{{KATA_1}}", "{{KATA_2}}",
"{{KATA_3}}", and a primary gradient button "Lihat Portofolio". Right column: a portrait photo of
a student in a rounded glass frame with a gradient glow behind it, plus a small floating glass
card overlapping the bottom-left corner of the photo showing "Gugus {{GUGUS}}".
```

### Prompt 1 — Identitas

```
Add an "Identitas" section below the hero. Section heading "Identitas" with a short muted
subheading "Data diri TelUtizen". Below it, a grid of five equal glass cards, three per row. Each
card has a small thin-line outline icon at the top left, a small uppercase muted label, and a
larger value text below it. The five cards are: "NIM / NO. REGISTRASI" with value "{{NIM}}",
"KELOMPOK / GUGUS" with "{{GUGUS}}", "PROGRAM STUDI" with "{{PRODI}}", "FAKULTAS" with
"{{FAKULTAS}}", and "ASAL DAERAH" with "{{ASAL_DAERAH}}". Give each card a 20px radius and a faint
gradient hairline along its top edge.
```

### Prompt 2 — Tentang Saya

```
Add a "Tentang Saya" section with an asymmetric two-column layout. Left column (wider): one large
glass card with the heading "Tentang Saya" and a paragraph of about five sentences of Indonesian
placeholder text. Right column (narrower): two smaller glass cards stacked vertically, the first
titled "Fun Fact" with one short sentence, the second titled "Harapan" with two sentences. Below
both columns, a full-width row with the label "Hobi" followed by five rounded pill tags containing
hobby names. Put a soft cyan glow behind the right column.
```

### Prompt 3 — Analisis Diri (SWOT)

```
Add an "Analisis Diri" section with the muted subheading "SWOT". Use a 2x2 grid of four large
glass cards of equal height. Each card has a square icon badge, a bold title, and three short
bullet points. Titles and their accent colours: "Strength" emerald green, "Weakness" amber,
"Opportunity" cyan, "Threat" rose red. The accent colour appears only in the icon badge, the left
border, and a faint coloured glow inside the card — the card background stays translucent dark.
```

### Prompt 4 — Mind of Us

```
Add a "Mind of Us" section containing a radial mind map. At the centre, a large circular glass
node with a portrait photo, the name "{{NAMA_LENGKAP}}", and small text
"{{ASAL_DAERAH}} · {{PRODI}}". Around it, five smaller circular glass nodes spaced evenly in a
ring, each with a member photo and a first name. Connect the centre node to every outer node with
thin curved gradient lines. To the right of the diagram, a tall glass detail panel for the
selected member: photo, name, then five labelled rows "Asal Daerah", "Program Studi", "Fakultas",
"Hobi", "Fun Fact". Add a faint dotted circle behind the ring.
```

### Prompt 5 — Resume Materi PKKMB

```
Add a "Resume Materi PKKMB" section. A vertical list of six collapsible glass rows. Each collapsed
row shows a two-digit number on the left, a material title in the middle, and a chevron icon on
the right. Show the first row expanded, revealing three stacked blocks with small uppercase
headings: "Poin Utama Materi", "Hal yang Dipelajari", and "Kesimpulan", each followed by two lines
of text. The expanded row has a brighter border and a gradient left edge.
```

### Prompt 6 — Galeri Dokumentasi

```
Add a "Galeri Dokumentasi" section. Put the section heading on the left and a muted counter
"9 momen" on the right, then a masonry photo grid of nine photos of Indonesian campus student
activities, mixed portrait and landscape, 16px rounded corners, thin translucent borders, and a
small dark glass caption chip in the bottom-left of each photo. On hover a photo brightens
slightly and lifts.
```

### Prompt 7 — Penutup & footer

```
Add a closing section and a footer. The closing is a centred glass panel with a large gradient
headline "Growing Today, Thriving Tomorrow", one line of quote text below it, and small muted text
"PKKMB Telkom University Jakarta 2026". Below that, a thin divider and a simple footer row with
"{{NAMA_LENGKAP}} · {{GUGUS}}" on the left and "TelUtizen Starter Book 2026" on the right. Put a
large soft red-violet gradient glow behind the closing panel, fading to pure black at the very
bottom of the page.
```

### Prompt 8 — Versi mobile

```
Create a mobile version of this page at 390px width. Single column throughout. The top navigation
becomes a floating glass bottom bar with five icons. The hero stacks the photo above the text. The
identity grid becomes one card per row. The SWOT 2x2 grid becomes one vertical column. The
Mind of Us radial diagram becomes a vertical list of member cards with the centre identity card
pinned at the top.
```

## 6. Prompt perbaikan

Satu baris = satu prompt. Jangan digabung.

- `Make the glass cards more translucent and increase the background blur.`
- `Reduce the gradient glow intensity by half, it is overpowering the text.`
- `Increase the vertical padding of every section so the page breathes more.`
- `Make the hero name headline much larger with tighter letter spacing.`
- `Change the primary accent colour to {{WARNA_PRODI}}.`
- `Use Sora for all headings and Inter for all body text.`
- `Add a thin 1px gradient hairline along the top edge of every card.`
- `Set every card corner radius to 20px.`
- `Left-align all section headings and add a small uppercase label above each one.`
- `Increase text contrast: body text #A8B2C7, headings pure white.`
- `Remove text drop shadows, keep shadows on cards only.`
- `Replace all body copy with Indonesian placeholder text.`

## 7. Yang jangan dilakukan

- Jangan paste seluruh dokumen ini sebagai satu prompt — komponen akan hilang.
- Jangan minta dua section dalam satu prompt.
- Jangan campur "ubah layout" dengan "tambah komponen" dalam satu prompt; pisahkan.
- Jangan ulangi prompt yang sama kalau hasilnya salah — ganti kalimatnya atau persempit targetnya.
- Jangan masukkan NIM, nama teman kelompok, atau foto asli ke Stitch.
- Jangan pakai kode hasil export Stitch mentah-mentah sebagai kode final.

## 8. Checklist ketentuan tugas → section

Cek ulang sebelum dianggap selesai (ketentuan bagian D Buku Panduan Penugasan):

| Ketentuan | Ada di |
|---|---|
| Nama lengkap | Hero |
| NIM / No. Registrasi | Identitas |
| Kelompok / Gugus | Hero + Identitas |
| Program Studi | Hero + Identitas |
| Fakultas | Hero + Identitas |
| Asal daerah | Identitas |
| Foto formal / semi formal | Hero |
| Deskripsi diri (maks 5 kalimat) | Tentang Saya |
| Tiga kata yang menggambarkan diri | Hero (pill badge) |
| Hobi | Tentang Saya |
| Fun fact | Tentang Saya |
| Harapan sebagai mahasiswa Tel-U | Tentang Saya |
| SWOT | Analisis Diri |
| Mind of Us: pusat identitas diri | Mind of Us (node tengah) |
| Mind of Us: maks 5 anggota + asal/prodi/fakultas/hobi/fun fact | Mind of Us (panel detail) |
| Resume: poin utama, hal yang dipelajari, kesimpulan | Resume Materi PKKMB |
| Pengalaman organisasi (opsional) | — tidak dipakai |

## 9. Dari Stitch ke React

Hasil Stitch dipakai sebagai acuan visual, bukan kode final. Pemetaannya:

| Section di Stitch | Komponen React | File |
|---|---|---|
| Nav pill | `Nav` | `src/components/Nav.jsx` |
| Hero | `Hero` | `src/components/Hero.jsx` |
| Identitas | `Identitas` | `src/components/Identitas.jsx` |
| Tentang Saya | `Tentang` | `src/components/Tentang.jsx` |
| Analisis Diri | `Swot` | `src/components/Swot.jsx` |
| Mind of Us | `MindOfUs` | `src/components/MindOfUs.jsx` |
| Resume | `Resume` | `src/components/Resume.jsx` |
| Galeri | `Galeri` | `src/components/Galeri.jsx` |
| Penutup + footer | `Footer` | `src/components/Footer.jsx` |

Token §3 masuk ke `src/index.css` sebagai CSS custom property + `@theme` Tailwind, bukan
di-hardcode per komponen. Kartu kaca jadi satu komponen `ui/GlassCard.jsx`, animasi masuk viewport
jadi `ui/Reveal.jsx`. Semua teks tetap dari `src/data/portfolio.js`.

Catatan untuk nanti: karena deliverable akhir adalah 1 file PDF ke LMS (`TelUtizen
StarterBook_Nama_Gugus`, batas 11 September 2026 23.59 WIB), tiap section dijaga agar tidak
terpotong aneh saat dicetak — glow dan blur dimatikan di `@media print` kalau print CSS ditambahkan.






