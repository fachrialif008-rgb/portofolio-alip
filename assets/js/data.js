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
    gugus: "Pemuda",
    prodi: "Desain Komunikasi Visual",
    fakultas: "Fakultas Industri Kreatif",
    asalDaerah: "Tangerang Selatan, Banten",

    // Foto formal / semi formal. Taruh file di assets/img/ lalu tulis nama filenya.
    foto: "assets/img/foto-profil.jpg",

    // Tiga kata yang paling menggambarkan diri
    tigaKata: ["Penasaran", "Teliti", "Adaptif"],

    // Maksimal 5 kalimat
    deskripsi:
      "Saya Muhammad Aliffachri Ramadhan, mahasiswa baru Desain Komunikasi Visual Telkom " +
      "University Jakarta yang berasal dari Tangerang Selatan. Saya tertarik pada dunia visual " +
      "sejak sekolah, mulai dari mencoret-coret ide sampai mengulik desain di layar. Bagi saya, " +
      "desain yang baik bukan hanya enak dilihat, tetapi juga menyampaikan pesan dengan jelas. " +
      "Saya suka mengerjakan sesuatu sampai detailnya rapi, meski itu berarti mengulang beberapa " +
      "kali. Di Telkom University saya ingin mengubah ketertarikan itu menjadi keterampilan yang " +
      "benar-benar terpakai.",

    funFact:
      "Saya lebih cenderung banyak diam daripada berbicara",

    harapan:
      "Saya berharap bisa berkembang menjadi desainer yang karyanya benar-benar dipakai orang, " +
      "bukan berhenti sebagai tugas kuliah. Saya juga ingin menemukan teman-teman satu frekuensi " +
      "untuk berkarya bersama, dan lulus dengan portofolio yang bisa saya banggakan.",

    hobi: ["Menonton film", "Fotografi", "Hiking", "Musik"]
  },

  /* ---------- Analisis diri (SWOT) ---------- */
  swot: {
    strength: [
      "Peka pada detail visual: komposisi, warna, dan tipografi",
      "Terbiasa belajar mandiri dari tutorial dan referensi karya",
      "Mau menerima kritik dan merevisi karya berulang kali"
    ],
    weakness: [
      "Perfeksionis, sehingga satu karya sering memakan waktu lama",
      "Masih kurang percaya diri saat mempresentasikan konsep di depan kelas",
      "Manajemen waktu belum rapi ketika tugas menumpuk"
    ],
    opportunity: [
      "Industri kreatif dan konten digital di Jabodetabek sedang tumbuh pesat",
      "Fasilitas kampus, UKM, dan komunitas desain yang bisa dimanfaatkan sejak semester awal",
      "Banyak lomba, freelance, dan kolaborasi lintas prodi yang terbuka untuk mahasiswa"
    ],
    threat: [
      "Persaingan desainer muda yang sangat ramai, terutama di media sosial",
      "AI generatif mengubah cara kerja industri desain dengan cepat",
      "Tren visual berganti lebih cepat daripada materi perkuliahan"
    ]
  },

  /* ---------- Mind of Us: maksimal 5 anggota kelompok ---------- */
  kelompok: [
    {
      nama: "Ridho Ahmad Sya'ban",
      asalDaerah: "Jakarta Barat",
      prodi: "Teknik Telekomunikasi",
      fakultas: "Fakultas Teknik Elektro",
      hobi: "Touring",
      funFact: "Susah tidur kalo dimatiin lampunya",
      foto: "assets/img/Ridho.jpg"
    },
    {
      nama: "Galang Arya Wirawan",
      asalDaerah: "Bogor",
      prodi: "Sistem Informasi",
      fakultas: "Fakultas Rekayasa Industri",
      hobi: "Memasak",
      funFact: "Gasuka hal ribet pengennya satset",
      foto: "assets/img/galang.jpg"
    },
    {
      nama: "Muhammad Dhiya Ramadhan",
      asalDaerah: "Tangerang Selatan",
      prodi: "Sistem Informasi",
      fakultas: "Fakultas Rekayasa Industri",
      hobi: "Bermain game",
      funFact: "Kalau sudah bermain game kadang suka lupa waktu",
      foto: "assets/img/dhiya.jpg"
    },
    {
      nama: "Makheis Zidan",
      asalDaerah: "Jakarta",
      prodi: "Sistem Informasi",
      fakultas: "Fakultas Rekayasa Industri",
      hobi: "Basket",
      funFact: "Tidak pernah ada terpikirkan untuk menjadi mahasiswa telkom",
      foto: "assets/img/zidan.jpg"
    },
    {
      nama: "Algi Firmansyah",
      asalDaerah: "Jakarta Barat",
      prodi: "Sistem Informasi",
      fakultas: "Fakultas Rekayasa Industri",
      hobi: "Biliard",
      funFact: "Kalau udah tidur bisa sampe 1 hari lebih",
      foto: "assets/img/placeholder-square.svg"
    }
  ],

  /* ---------- Resume materi PKKMB ----------
     Tambah atau kurangi objek sesuai jumlah materi yang kamu ikuti.
     Isi setelah rangkaian PKKMB Universitas selesai.           */
  resume: [
    {
      judul: "Layanan SSO & Pusat Teknologi Informasi (PUTI)",
      poinUtama:
        "SSO (Single Sign-On) mengintegrasikan seluruh akses layanan digital kampus, termasuk Microsoft 365, IgraSias, MyTelU, dan jaringan Wi-Fi. Keamanan akun diwajibkan melalui password minimal 12 karakter, pembaruan rutin setiap 6 bulan, dan autentikasi dua faktor (2FA) via Microsoft Authenticator.",
      dipelajari:
        "Cara melakukan aktivasi akun terpusat melalui domain web1.telkomuniversity.ac.id menggunakan NIK. Perbedaan fungsi portal akademik: aplikasi mobile MyTelU (jadwal, KTM) dan portal web IgraSias (akademik inti).",
      kesimpulan:
        "Penguasaan layanan SSO dan fasilitas PUTI sangat vital sebagai fondasi untuk mengakses dan mengelola seluruh administrasi akademik secara digital."
    },
    {
      judul: "Pengenalan Sistem Pendidikan Tinggi & Kurikulum",
      poinUtama:
        "Sistem perkuliahan di perguruan tinggi menuntut kemandirian belajar yang lebih tinggi dibandingkan masa sekolah menengah melalui sistem SKS (Satuan Kredit Semester). Kurikulum dirancang untuk mengintegrasikan kompetensi keilmuan program studi dengan kebutuhan dunia industri modern.",
      dipelajari:
        "Perhitungan Indeks Prestasi (IP) dan Indeks Prestasi Kumulatif (IPK) sebagai tolok ukur keberhasilan studi tiap semester. Strategi perencanaan studi agar dapat lulus tepat waktu dengan predikat yang memuaskan.",
      kesimpulan:
        "Pemahaman mendalam mengenai sistem SKS dan struktur kurikulum sangat penting bagi mahasiswa baru untuk merancang jalur akademik secara terarah."
    },
    {
      judul: "Pengenalan Kehidupan Kampus & Fasilitas Menunjang",
      poinUtama:
        "Lingkungan kampus menyediakan berbagai fasilitas fisik dan digital untuk mendukung produktivitas belajar serta pengembangan bakat mahasiswa. Keaktifan dalam ekosistem kampus akan memperluas relasi sosial sekaligus mengasah keterampilan lunak di luar ruang kelas.",
      dipelajari:
        "Pemanfaatan sarana prasarana penunjang kegiatan belajar, perpustakaan, serta ruang kolaborasi mahasiswa di lingkungan kampus. Tata cara berinteraksi dan berorganisasi secara sehat di dalam sivitas akademika Telkom University Jakarta.",
      kesimpulan:
        "Pemanfaatan fasilitas kampus secara optimal serta adaptasi lingkungan yang cepat akan memaksimalkan pengalaman positif selama masa perkuliahan."
    },
    {
      judul: "Sistem Perkuliahan & Aturan Akademik",
      poinUtama:
        "Perkuliahan berjalan sebanyak 16 kali pertemuan per semester (termasuk UTS dan UAS) dengan pemanfaatan Learning Management System (LMS) sebagai wadah utama tugas dan materi. Aturan absensi menetapkan kehadiran minimal 75% (maksimal 3 kali absen), di mana ketidakhadiran karena sakit mewajibkan adanya surat keterangan resmi dari dokter.",
      dipelajari:
        "Mekanisme pengambilan SKS yang dipengaruhi oleh Indeks Prestasi (IP): mahasiswa dengan IP < 3.01 hanya dapat mengambil maksimal 20 SKS, sedangkan IP di atas itu dapat mengambil hingga 24 SKS. Pengenalan sistem penilaian huruf (A hingga E) dengan standar kelulusan minimum bernilai C, serta perkenalan Dosen Wali (seperti Pak Ogi, Bu Evi, Pak Rhesa, dan Pak Ejes) untuk konsultasi akademik.",
      kesimpulan:
        "Kepatuhan terhadap batas kehadiran kelas dan pemahaman mengenai regulasi akademik sangat krusial bagi kelancaran perencanaan studi mahasiswa ke depannya."
    },
    {
      judul: "Etika Mahasiswa DKV & Tata Krama Komunikasi",
      poinUtama:
        "Kehidupan kampus menuntut sikap sopan santun serta etika, baik kepada sesama mahasiswa, kakak tingkat, maupun staf dan jajaran dosen. Menghargai waktu adalah prioritas; mahasiswa dilarang menerapkan \"Sistem Kebut Semalam\" dalam penugasan dan harus menghindari keterlambatan kelas atau membolos.",
      dipelajari:
        "Format beretika saat mengirim pesan kepada dosen, yang harus memuat salam, identitas yang jelas (nama dan asal program studi), serta dilakukan pada jam kerja operasional (08.00–17.00). Pentingnya membuka relasi sedini mungkin, baik melalui organisasi (Himpunan Mahasiswa) maupun kepanitiaan guna menambah pengalaman non-akademik dan melatih kepedulian antarsesama.",
      kesimpulan:
        "Membangun citra dan relasi yang baik di kampus dimulai dari sikap saling menghargai, komunikasi yang sopan, serta disiplin dalam menghargai waktu."
    },
    {
      judul: "Berbagi Pengalaman Mahasiswa Berprestasi",
      poinUtama:
        "Keberhasilan memenangkan berbagai kompetisi bergengsi tingkat nasional hingga internasional (seperti ajang bisnis di Seattle dan ITEX Malaysia) membutuhkan kemauan kuat dan konsistensi. Kegagalan dalam perlombaan bukanlah akhir, melainkan bahan evaluasi berharga untuk memperbaiki kekurangan seperti teknik presentasi dan pitching.",
      dipelajari:
        "Strategi membangun kolaborasi riset lintas program studi dan kampus untuk memperkuat kualitas karya dan memperluas sudut pandang. Keberanian mencari informasi lomba secara mandiri dan komitmen untuk tidak menyerah di tengah jalan.",
      kesimpulan:
        "Sikap pantang menyerah, kolaborasi tim yang adaptif, dan kemampuan mengevaluasi diri dari kegagalan adalah kunci utama dalam meraih prestasi tinggi."
    }
  ],

  /* ---------- Penutup ---------- */
  penutup: {
    tagline: "Growing Today, Thriving Tomorrow",
    kutipan: "“Setiap langkah kecil hari ini adalah bekal untuk versi diri di masa depan.”",
    acara: "PKKMB Telkom University Jakarta 2026"
  }
};
