/* =========================================================
   data.js — SATU-SATUNYA file yang perlu kamu edit untuk isi.
   Semua teks di website diambil dari sini.
   Cari komentar "GANTI" dan ganti isinya dengan data kamu.
   ========================================================= */

window.PORTFOLIO_DATA = {

  /* ---------- Profil diri ---------- */
  profil: {
    nama: "Muhammad Aliffachri Ramadhan",
    nim: "110042600038",                  // NIM / No. Registrasi
    gugus: "Perintis Kemerdekaan",        // GANTI — nama kelompok / gugus (belum diisi)
    prodi: "Desain Komunikasi Visual",
    fakultas: "Fakultas Industri Kreatif",
    asalDaerah: "Tangerang Selatan, Banten",

    // Foto formal / semi formal. Taruh file di assets/img/ lalu tulis nama filenya.
    foto: "assets/img/placeholder-portrait.svg",   // GANTI, mis. "assets/img/foto-saya.jpg"

    // Tiga kata yang paling menggambarkan diri
    tigaKata: ["Adaptif", "Teliti", "Penasaran"],  // GANTI

    // Maksimal 5 kalimat
    deskripsi:
      "Halo! Saya mahasiswa baru Telkom University Jakarta yang antusias pada teknologi dan " +
      "kreativitas digital. Saya senang membongkar cara kerja sesuatu, lalu mencari cara " +
      "membuatnya lebih sederhana. Di bangku kuliah, saya ingin memperkuat dasar logika " +
      "pemrograman sekaligus kepekaan desain. Saya percaya karya yang baik lahir dari " +
      "kolaborasi, bukan kerja sendirian. Saat ini saya sedang membiasakan diri belajar " +
      "konsisten setiap hari, sedikit-sedikit tapi rutin.",   // GANTI

    funFact:
      "Saya bisa menghabiskan waktu berjam-jam hanya untuk mencari palet warna yang pas.", // GANTI

    harapan:
      "Semoga selama di Telkom University saya bisa terlibat dalam proyek teknologi yang " +
      "benar-benar dipakai orang, bukan berhenti di tugas kuliah. Saya juga berharap " +
      "menemukan lingkaran teman yang saling mendorong untuk terus berkembang.", // GANTI

    hobi: ["Musik", "Fotografi", "Coding", "Membaca", "Olahraga"]   // GANTI
  },

  /* ---------- Analisis diri (SWOT) ---------- */
  swot: {
    strength: [                            // GANTI — potensi / keunggulan
      "Kemampuan problem solving yang kuat",
      "Cepat beradaptasi dengan teknologi baru",
      "Disiplin dan manajemen waktu yang baik"
    ],
    weakness: [                            // GANTI — hal yang perlu dikembangkan
      "Terlalu perfeksionis pada detail kecil",
      "Masih kurang percaya diri saat public speaking",
      "Cenderung mengerjakan sendiri sebelum minta bantuan"
    ],
    opportunity: [                         // GANTI — peluang
      "Jaringan alumni Telkom University yang luas",
      "Banyak sertifikasi industri yang bisa diakses mahasiswa",
      "Pertumbuhan industri teknologi di Indonesia"
    ],
    threat: [                              // GANTI — tantangan
      "Persaingan dunia kerja yang semakin ketat",
      "Tren teknologi berubah lebih cepat dari kurikulum",
      "Jarak antara teori kuliah dan praktik industri"
    ]
  },

  /* ---------- Mind of Us: maksimal 5 anggota kelompok ---------- */
  kelompok: [                              // GANTI seluruh isi array ini
    {
      nama: "Anggota Satu",
      asalDaerah: "Bandung",
      prodi: "Sistem Informasi",
      fakultas: "Fakultas Rekayasa Industri",
      hobi: "Basket",
      funFact: "Hafal hampir semua lagu era 2000-an.",
      foto: "assets/img/placeholder-square.svg"
    },
    {
      nama: "Anggota Dua",
      asalDaerah: "Surabaya",
      prodi: "Teknik Telekomunikasi",
      fakultas: "Fakultas Teknik Elektro",
      hobi: "Bersepeda",
      funFact: "Pernah bersepeda 60 km dalam sehari.",
      foto: "assets/img/placeholder-square.svg"
    },
    {
      nama: "Anggota Tiga",
      asalDaerah: "Medan",
      prodi: "Desain Komunikasi Visual",
      fakultas: "Fakultas Industri Kreatif",
      hobi: "Ilustrasi digital",
      funFact: "Menggambar setiap hari sejak SMP.",
      foto: "assets/img/placeholder-square.svg"
    },
    {
      nama: "Anggota Empat",
      asalDaerah: "Makassar",
      prodi: "Informatika",
      fakultas: "Fakultas Informatika",
      hobi: "Memasak",
      funFact: "Bisa masak coto tanpa resep.",
      foto: "assets/img/placeholder-square.svg"
    },
    {
      nama: "Anggota Lima",
      asalDaerah: "Semarang",
      prodi: "Teknologi Informasi",
      fakultas: "Fakultas Teknik Elektro",
      hobi: "Fotografi",
      funFact: "Koleksi kamera analog warisan ayahnya.",
      foto: "assets/img/placeholder-square.svg"
    }
  ],

  /* ---------- Resume materi PKKMB ----------
     Tambah atau kurangi objek sesuai jumlah materi yang kamu ikuti.
     Isi setelah rangkaian PKKMB Universitas selesai.           */
  resume: [                                // GANTI seluruh isi array ini
    {
      judul: "Pengenalan Budaya Akademik",
      poinUtama:
        "Pendidikan tinggi menuntut kemandirian belajar dan integritas akademik. Mahasiswa " +
        "dituntut aktif mencari sumber, bukan menunggu diberi materi.",
      dipelajari:
        "Struktur organisasi universitas, fasilitas pendukung riset, serta kode etik dan " +
        "tata tertib yang berlaku bagi mahasiswa.",
      kesimpulan:
        "Kuliah bukan sekadar mengejar nilai, tetapi membentuk pola pikir kritis dan karakter."
    },
    { judul: "Wawasan Kebangsaan", poinUtama: "—", dipelajari: "—", kesimpulan: "—" },
    { judul: "Etika dan Karakter TelUtizen", poinUtama: "—", dipelajari: "—", kesimpulan: "—" },
    { judul: "Layanan Kemahasiswaan", poinUtama: "—", dipelajari: "—", kesimpulan: "—" },
    { judul: "Pengenalan Organisasi Mahasiswa", poinUtama: "—", dipelajari: "—", kesimpulan: "—" },
    { judul: "Digital Transformation & Innovation", poinUtama: "—", dipelajari: "—", kesimpulan: "—" }
  ],

  /* ---------- Galeri dokumentasi ----------
     ratio: "wide" (4:3) atau "tall" (3:4). Ganti src dengan foto kamu.  */
  galeri: [                                // GANTI src & caption
    { src: "assets/img/placeholder-landscape.svg", caption: "Seminar",        alt: "Kegiatan seminar PKKMB", ratio: "wide" },
    { src: "assets/img/placeholder-portrait.svg",  caption: "Kerja Kelompok", alt: "Diskusi kerja kelompok", ratio: "tall" },
    { src: "assets/img/placeholder-landscape.svg", caption: "Diskusi",        alt: "Diskusi bersama gugus",  ratio: "wide" },
    { src: "assets/img/placeholder-landscape.svg", caption: "Area Kampus",    alt: "Area kampus",            ratio: "wide" },
    { src: "assets/img/placeholder-portrait.svg",  caption: "Rekan Tim",      alt: "Foto bersama rekan tim", ratio: "tall" },
    { src: "assets/img/placeholder-landscape.svg", caption: "Perpustakaan",   alt: "Perpustakaan kampus",    ratio: "wide" },
    { src: "assets/img/placeholder-landscape.svg", caption: "Acara Kampus",   alt: "Acara kampus",           ratio: "wide" },
    { src: "assets/img/placeholder-portrait.svg",  caption: "Ruang Kelas",    alt: "Suasana ruang kelas",    ratio: "tall" },
    { src: "assets/img/placeholder-landscape.svg", caption: "UKM Fair",       alt: "Kunjungan booth UKM",    ratio: "wide" }
  ],

  /* ---------- Penutup ---------- */
  penutup: {
    tagline: "Growing Today, Thriving Tomorrow",
    kutipan: "“Setiap langkah kecil hari ini adalah bekal untuk versi diri di masa depan.”", // GANTI
    acara: "PKKMB Telkom University Jakarta 2026"
  }
};


