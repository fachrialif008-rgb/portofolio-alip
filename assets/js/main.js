/* =========================================================
   main.js — merender isi dari data.js + seluruh interaksi.
   Tidak perlu diedit untuk mengganti konten (edit data.js saja).
   ========================================================= */
(function () {
  "use strict";

  var D = window.PORTFOLIO_DATA;
  if (!D) { console.error("data.js belum termuat sebelum main.js"); return; }

  var SVG_NS = "http://www.w3.org/2000/svg";
  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* Pembuat elemen ringkas. text -> selalu textContent (aman dari HTML injection). */
  function h(tag, opts) {
    opts = opts || {};
    var n = document.createElement(tag);
    if (opts.class) n.className = opts.class;
    if (opts.html != null) n.innerHTML = opts.html;
    if (opts.text != null) n.textContent = opts.text;
    if (opts.attrs) Object.keys(opts.attrs).forEach(function (k) { n.setAttribute(k, opts.attrs[k]); });
    (opts.children || []).forEach(function (c) { n.appendChild(c); });
    return n;
  }
  function icon(id) { return '<svg class="icon" aria-hidden="true"><use href="#' + id + '"/></svg>'; }

  /* Foto yang gagal dimuat tidak meninggalkan ikon rusak. */
  function guard(img) {
    img.addEventListener("error", function () {
      if (img.dataset.fallback) return;
      img.dataset.fallback = "1";
      img.src = "assets/img/placeholder-square.svg";
    });
    return img;
  }

  /* ---------- 1. Teks tunggal via [data-bind] ---------- */
  function pick(path) {
    return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, D);
  }
  function bindText() {
    $$("[data-bind]").forEach(function (n) {
      var v = pick(n.dataset.bind);
      if (v != null) n.textContent = v;
    });
    document.title = D.profil.nama + " — TelUtizen Starter Book";
    $("#tahun").textContent = new Date().getFullYear();
  }
  /* ---------- 2. Chip: tiga kata & hobi ---------- */
  function renderChips(sel, arr, cls) {
    var ul = $(sel);
    if (!ul || !arr) return;
    arr.forEach(function (t, i) {
      ul.appendChild(h("li", {
        class: cls || "chip",
        text: t,
        attrs: { style: "--i:" + i }
      }));
    });
  }

  /* ---------- 3. Foto profil (hero + node tengah mind map) ---------- */
  function renderFoto() {
    var alt = "Foto " + D.profil.nama;
    [["#foto-utama", D.profil.foto], ["#mm-foto", D.profil.foto]].forEach(function (p) {
      var img = $(p[0]);
      if (!img) return;
      img.src = p[1];
      img.alt = alt;
      guard(img);
    });
  }

  /* ---------- 4. Identitas: 5 kartu ---------- */
  var ID_FIELDS = [
    { ikon: "i-badge",  label: "NIM / No. Registrasi", key: "nim", mono: true },
    { ikon: "i-groups", label: "Kelompok / Gugus",     key: "gugus" },
    { ikon: "i-school", label: "Program Studi",        key: "prodi" },
    { ikon: "i-bank",   label: "Fakultas",             key: "fakultas" },
    { ikon: "i-pin",    label: "Asal Daerah",          key: "asalDaerah" }
  ];
  function renderIdentitas() {
    var grid = $("#identitas-grid");
    ID_FIELDS.forEach(function (f, i) {
      var card = h("article", {
        class: "card glass idcard reveal",
        html: icon(f.ikon),
        attrs: { style: "--i:" + i }
      });
      var dl = h("dl");
      dl.appendChild(h("dt", { class: "over", text: f.label }));
      dl.appendChild(h("dd", { class: f.mono ? "mono" : "", text: D.profil[f.key] }));
      card.appendChild(dl);
      grid.appendChild(card);
    });
  }
  /* ---------- 5. SWOT: 4 kuadran ---------- */
  var SWOT_META = [
    { key: "strength",    judul: "Strength",    ikon: "i-trend",   warna: "var(--emerald)" },
    { key: "weakness",    judul: "Weakness",    ikon: "i-alert",   warna: "var(--amber)" },
    { key: "opportunity", judul: "Opportunity", ikon: "i-rocket",  warna: "var(--sky)" },
    { key: "threat",      judul: "Threat",      ikon: "i-warning", warna: "var(--rose)" }
  ];
  function renderSwot() {
    var grid = $("#swot-grid");
    SWOT_META.forEach(function (m, i) {
      var card = h("article", {
        class: "card glass swot__card reveal",
        attrs: { style: "--c:" + m.warna + ";--i:" + i }
      });
      card.appendChild(h("span", { class: "swot__badge", html: icon(m.ikon) }));
      card.appendChild(h("h3", { text: m.judul }));
      var ul = h("ul", { class: "swot__list" });
      (D.swot[m.key] || []).forEach(function (t) { ul.appendChild(h("li", { text: t })); });
      card.appendChild(ul);
      grid.appendChild(card);
    });
  }

  /* ---------- 6. Mind of Us: konstelasi radial + 5 anggota sekaligus ---------- */
  var R_RING = 190;   // radius cincin dalam px, sama dengan .mm__orbit (380px)

  function renderKelompok() {
    var wrap = $("#mm-nodes"), lines = $("#mm-lines"), kanvas = $(".mm__canvas");
    var cardsList = $("#mm-cards-list");
    var modalCardsGrid = $("#mm-modal-cards-grid");
    var modal = $("#mm-modal");
    var anggota = (D.kelompok || []).slice(0, 5);
    var tombol = [], garisArr = [], kartuArr = [];

    guard($("#mm-foto"));

    // Fungsi membuat elemen kartu anggota
    function buatKartu(m, i, prefix) {
      var card = h("article", {
        class: "mm-card card glass",
        attrs: { id: prefix + "-card-" + i }
      });

      // Header kartu
      var head = h("header", { class: "mm-card__head" });
      var avatar = h("div", { class: "mm-card__avatar" });
      var img = guard(h("img", {
        attrs: { src: m.foto, alt: "Foto " + m.nama, width: 68, height: 68, loading: "lazy" }
      }));
      if (m.posisi) img.style.objectPosition = m.posisi;
      if (m.skala) img.style.transform = "scale(" + (m.skala * 1.04).toFixed(2) + ")";
      avatar.appendChild(img);

      var meta = h("div", { class: "mm-card__meta" });
      meta.appendChild(h("span", { class: "mm-card__num", text: "Anggota 0" + (i + 1) }));
      meta.appendChild(h("h3", { class: "mm-card__name", text: m.nama }));

      head.appendChild(avatar);
      head.appendChild(meta);
      card.appendChild(head);

      // Deflist rincian
      var dl = h("dl", { class: "deflist mm-card__deflist" });
      [["Asal Daerah", m.asalDaerah],
       ["Program Studi", m.prodi],
       ["Fakultas", m.fakultas],
       ["Hobi", m.hobi],
       ["Fun Fact", m.funFact]].forEach(function (p) {
        dl.appendChild(h("div", { children: [
          h("dt", { text: p[0] }),
          h("dd", { text: p[1] || "—" })
        ] }));
      });
      card.appendChild(dl);

      return card;
    }

    // Render 5 kartu di halaman & di dalam modal pop up
    anggota.forEach(function (m, i) {
      // 1. Kartu di halaman
      if (cardsList) {
        var cardOnPage = buatKartu(m, i, "page");
        cardsList.appendChild(cardOnPage);
        kartuArr.push(cardOnPage);
      }
      // 2. Kartu di modal pop up (semua 5 muncul sekaligus)
      if (modalCardsGrid) {
        var cardInModal = buatKartu(m, i, "modal");
        modalCardsGrid.appendChild(cardInModal);
      }

      // Tombol node melingkar pada konstelasi
      var btn = h("button", {
        class: "mm__node",
        attrs: { type: "button", "aria-pressed": "false", "aria-label": "Fokus profil " + m.nama }
      });
      var fig = h("figure", { class: "mm__node-avatar" });
      var nodeImg = guard(h("img", {
        attrs: { src: m.foto, alt: "Foto " + m.nama, width: 84, height: 84, loading: "eager", decoding: "sync" }
      }));
      if (m.posisi) nodeImg.style.objectPosition = m.posisi;
      if (m.skala) nodeImg.style.transform = "scale(" + m.skala + ")";
      fig.appendChild(nodeImg);
      btn.appendChild(fig);
      btn.appendChild(h("span", {
        class: "mm__node-name",
        text: m.nama.split(" ").slice(0, 2).join(" ")
      }));

      btn.addEventListener("click", function () {
        fokusAnggota(i);
      });
      wrap.appendChild(btn);
      tombol.push(btn);

      var garis = document.createElementNS(SVG_NS, "line");
      garis.setAttribute("x1", 50);
      garis.setAttribute("y1", 50);
      garis.setAttribute("vector-effect", "non-scaling-stroke");
      lines.appendChild(garis);
      garisArr.push(garis);
    });

    // Fungsi fokus anggota saat node diklik
    function fokusAnggota(i) {
      tombol.forEach(function (b, j) {
        b.setAttribute("aria-pressed", (j === i) ? "true" : "false");
      });
      garisArr.forEach(function (g, j) {
        var aktif = (j === i);
        g.setAttribute("stroke-width", aktif ? "2" : "1");
        g.setAttribute("opacity", aktif ? "0.9" : "0.35");
      });

      // Scroll halus ke kartu anggota di halaman dan berikan efek highlight
      var targetCard = kartuArr[i];
      if (targetCard) {
        kartuArr.forEach(function (c) { c.classList.remove("is-highlighted"); });
        targetCard.classList.add("is-highlighted");
        targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
        setTimeout(function () {
          targetCard.classList.remove("is-highlighted");
        }, 2200);
      }
    }

    // Avatar diri sendiri di tengah
    var meBtn = $("#mm-me-avatar") || $(".mm__avatar--me");
    if (meBtn) {
      meBtn.addEventListener("click", function () {
        tombol.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        garisArr.forEach(function (g) {
          g.setAttribute("stroke-width", "1");
          g.setAttribute("opacity", "0.4");
        });
        kanvas.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }

    // Tata cincin radial
    function tataCincin() {
      var w = kanvas.clientWidth, t = kanvas.clientHeight;
      if (!w || !t) return;
      anggota.forEach(function (m, i) {
        var sudut = (-90 + i * (360 / anggota.length)) * Math.PI / 180;
        var px = +(Math.cos(sudut) * R_RING / w * 100).toFixed(2);
        var py = +(Math.sin(sudut) * R_RING / t * 100).toFixed(2);
        tombol[i].style.setProperty("--x", px);
        tombol[i].style.setProperty("--y", py);
        garisArr[i].setAttribute("x2", 50 + px);
        garisArr[i].setAttribute("y2", 50 + py);
      });
    }
    tataCincin();
    var tunda;
    window.addEventListener("resize", function () {
      cancelAnimationFrame(tunda);
      tunda = requestAnimationFrame(tataCincin);
    });

    // Kontrol Modal Pop Up (menampilkan 5 anggota sekaligus)
    function bukaModalSemua() {
      if (!modal) return;
      modal.hidden = false;
      requestAnimationFrame(function () {
        modal.classList.add("is-open");
      });
      document.body.style.overflow = "hidden";
      var closeBtn = modal.querySelector(".mm-modal__close");
      if (closeBtn) closeBtn.focus();
    }

    function tutupModalSemua() {
      if (!modal) return;
      modal.classList.remove("is-open");
      document.body.style.overflow = "";
      setTimeout(function () {
        modal.hidden = true;
      }, 300);
    }

    var btnOpenPopup = $("#mm-btn-open-popup");
    if (btnOpenPopup) {
      btnOpenPopup.addEventListener("click", bukaModalSemua);
    }

    if (modal) {
      modal.querySelectorAll("[data-mm-close]").forEach(function (el) {
        el.addEventListener("click", tutupModalSemua);
      });

      var printBtn = $("#mm-modal-print-btn");
      if (printBtn) {
        printBtn.addEventListener("click", function () {
          tutupModalSemua();
          setTimeout(function () {
            window.print();
          }, 350);
        });
      }

      document.addEventListener("keydown", function (e) {
        if (modal.hidden || !modal.classList.contains("is-open")) return;
        if (e.key === "Escape") {
          tutupModalSemua();
        }
      });
    }
  }
  /* ---------- 7. Resume: akordeon (bisa terbuka bersamaan) ---------- */
  function blok(judul, isi) {
    return h("div", { children: [
      h("h4", { class: "over", text: judul }),
      h("p", { text: isi || "—" })
    ] });
  }
  function renderResume() {
    var wrap = $("#resume-list");
    var items = [];

    (D.resume || []).forEach(function (r, i) {
      var idB = "ac-btn-" + i, idP = "ac-panel-" + i;

      var btn = h("button", {
        class: "ac__btn",
        attrs: { type: "button", "aria-expanded": "false", "aria-controls": idP, id: idB }
      });
      btn.appendChild(h("span", { class: "ac__num", text: ("0" + (i + 1)).slice(-2) }));
      btn.appendChild(h("span", { class: "ac__title", text: r.judul }));
      btn.insertAdjacentHTML("beforeend", icon("i-chevron"));

      var body = h("div", { class: "ac__body", children: [
        blok("Poin Utama Materi", r.poinUtama),
        blok("Hal yang Dipelajari", r.dipelajari),
        blok("Kesimpulan", r.kesimpulan)
      ] });
      var panel = h("div", {
        class: "ac__panel",
        attrs: { id: idP, role: "region", "aria-labelledby": idB },
        children: [h("div", { class: "ac__inner", children: [body] })]
      });

      var item = h("article", {
        class: "ac__item glass reveal",
        attrs: { style: "--i:" + Math.min(i, 4) },
        children: [h("h3", { children: [btn] }), panel]
      });

      btn.addEventListener("click", function () { toggle(i); });
      wrap.appendChild(item);
      items.push({ item: item, btn: btn });
    });

    function toggle(i) {
      var o = items[i];
      if (!o) return;
      var aktif = !o.item.classList.contains("is-open");
      o.item.classList.toggle("is-open", aktif);
      o.btn.setAttribute("aria-expanded", aktif ? "true" : "false");
    }
    if (items.length) toggle(0);
  }
  /* ---------- 8. Galeri + lightbox ---------- */
  var lbIndex = 0, lbPembuka = null;

  function renderGaleri() {
    var grid = $("#galeri-grid");
    if (!grid) return;
    (D.galeri || []).forEach(function (g, i) {
      var btn = h("button", {
        class: "gallery__item reveal" + (g.ratio === "tall" ? " gallery__item--tall" : ""),
        attrs: { type: "button", style: "--i:" + (i % 3), "aria-label": "Perbesar foto: " + (g.caption || "") }
      });
      btn.appendChild(guard(h("img", {
        attrs: { src: g.src, alt: g.alt || g.caption || "", loading: "lazy", decoding: "async" }
      })));
      btn.appendChild(h("span", { class: "gallery__cap", text: g.caption || "" }));
      btn.addEventListener("click", function () { lbBuka(i); });
      grid.appendChild(btn);
    });
    var cnt = $("#galeri-count");
    if (cnt) cnt.textContent = (D.galeri || []).length + " momen";
  }

  function lbTampil(i) {
    var g = D.galeri[i];
    if (!g) return;
    lbIndex = i;
    var img = $("#lb-img");
    img.src = g.src;
    img.alt = g.alt || g.caption || "";
    $("#lb-cap").textContent = g.caption || "";
  }
  function lbBuka(i) {
    lbPembuka = document.activeElement;
    lbTampil(i);
    $("#lightbox").hidden = false;
    document.body.style.overflow = "hidden";
    $(".lb__btn--close").focus();
  }
  function lbTutup() {
    $("#lightbox").hidden = true;
    document.body.style.overflow = "";
    if (lbPembuka && lbPembuka.focus) lbPembuka.focus();
  }
  function lbGeser(step) {
    var n = D.galeri.length;
    lbTampil((lbIndex + step + n) % n);
  }
  function initLightbox() {
    var lb = $("#lightbox");
    if (!lb) return;
    $$("#lightbox [data-lb]").forEach(function (n) {
      n.addEventListener("click", function () {
        var a = n.dataset.lb;
        if (a === "close") lbTutup();
        else if (a === "prev") lbGeser(-1);
        else if (a === "next") lbGeser(1);
      });
    });
    document.addEventListener("keydown", function (e) {
      if ($("#lightbox").hidden) return;
      if (e.key === "Escape") lbTutup();
      else if (e.key === "ArrowLeft") lbGeser(-1);
      else if (e.key === "ArrowRight") lbGeser(1);
    });
  }
  /* ---------- 9. Animasi masuk viewport ---------- */
  function initReveal() {
    var target = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      target.forEach(function (n) { n.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
        // Lepas will-change setelah transisi kelar (lihat .is-done di CSS).
        setTimeout(function () { e.target.classList.add("is-done"); }, 1300);
      });
    }, { threshold: .12, rootMargin: "0px 0px -8% 0px" });
    target.forEach(function (n) { io.observe(n); });
  }

  /* ---------- 10. Scrollspy: tandai menu aktif ---------- */
  function initScrollspy() {
    var links = $$(".navpill__list a, .tabbar a");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var peta = {};
    links.forEach(function (a) {
      var id = (a.getAttribute("href") || "").replace("#", "");
      if (!id) return;
      (peta[id] = peta[id] || []).push(a);
    });

    function aktifkan(id) {
      links.forEach(function (a) { a.removeAttribute("aria-current"); });
      (peta[id] || []).forEach(function (a) { a.setAttribute("aria-current", "true"); });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) aktifkan(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });

    Object.keys(peta).forEach(function (id) {
      var s = document.getElementById(id);
      if (s) io.observe(s);
    });
  }

  /* ---------- 11. Gerak scroll halus ----------
     Dua bagian: (a) tween sendiri untuk klik anchor, jauh lebih landai
     daripada scroll-behavior:smooth bawaan Chrome yang pendek dan patah;
     (b) inertia roda mouse bergaya lerp, hanya untuk pointer halus.
     Di layar sentuh momentum bawaan OS sudah bagus, jadi tidak diganggu. */
  function initSmoothScroll() {
    var kurangiGerak = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    var animasi = null;

    function batasBawah() {
      return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    }
    function jepit(y) { return Math.min(Math.max(y, 0), batasBawah()); }
    function batalTween() {
      if (animasi) { cancelAnimationFrame(animasi); animasi = null; }
    }

    /* easeOutQuart: cepat di awal, mengendap panjang di akhir. */
    function pelan(t) { return 1 - Math.pow(1 - t, 4); }

    function tweenKe(hitungTujuan) {
      batalTween();
      // Inertia roda dimatikan dulu, kalau tidak keduanya menulis scrollY di
      // frame yang sama dan halaman bergetar tarik-menarik.
      hentikanInertia();
      var awal = window.scrollY;
      var jarak = jepit(hitungTujuan()) - awal;
      if (Math.abs(jarak) < 2) return;
      // Jarak jauh butuh waktu lebih lama, tapi dibatasi 1,4 detik.
      var durasi = Math.min(1400, Math.max(620, Math.abs(jarak) * 0.55));
      var mulai = performance.now();
      animasi = requestAnimationFrame(function langkah(kini) {
        var p = Math.min(1, (kini - mulai) / durasi);
        // Tujuan dihitung ulang tiap frame: kalau tinggi halaman bergeser di
        // tengah jalan (font baru selesai dimuat, gambar masuk), pendaratan
        // tetap persis di sasaran, tidak melenceng beberapa puluh piksel.
        var akhir = jepit(hitungTujuan());
        window.scrollTo(0, awal + (akhir - awal) * pelan(p));
        animasi = p < 1 ? requestAnimationFrame(langkah) : null;
      });
    }

    /* (a) Klik anchor mana pun di halaman. */
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a || a.hasAttribute("data-lb")) return;
      var id = a.getAttribute("href").slice(1);
      var sasaran = id && document.getElementById(id);
      if (!sasaran) return;
      e.preventDefault();
      var posisi = function () {
        var sisa = parseFloat(getComputedStyle(sasaran).scrollMarginTop) || 0;
        return sasaran.getBoundingClientRect().top + window.scrollY - sisa;
      };
      if (kurangiGerak) window.scrollTo(0, jepit(posisi()));
      else tweenKe(posisi);
      history.replaceState(null, "", "#" + id);
      // Pindahkan fokus supaya pembaca layar ikut, tanpa memicu lompatan.
      sasaran.setAttribute("tabindex", "-1");
      sasaran.focus({ preventScroll: true });
    });

    /* (b) Inertia roda mouse. */
    if (kurangiGerak || !window.matchMedia("(pointer:fine)").matches) return;
    document.documentElement.classList.add("js-scroll");

    var tujuan = window.scrollY;
    var berjalan = false;
    var ditulis = -1;     // posisi terakhir yang ditulis loop ini sendiri
    var lalu = 0;
    var LERP = 0.12;      // per frame 60fps; di bawah dinormalkan ke waktu nyata
    var lightbox = $("#lightbox");

    function hentikanInertia() { berjalan = false; ditulis = -1; }

    function loop(kini) {
      if (!berjalan) return;
      var sekarang = window.scrollY;
      /* Kalau posisi berpindah bukan karena kita — user menarik scrollbar,
         menekan panah/PageDown, find-in-page, atau tween anchor mengambil alih —
         loop mundur dan menyerahkan kendali. Tanpa pemeriksaan ini loop bisa
         "lari": ia terus menarik halaman ke tujuan basi dan menimpa siapa pun. */
      if (ditulis >= 0 && Math.abs(sekarang - ditulis) > 2) {
        tujuan = sekarang;
        hentikanInertia();
        return;
      }
      var dt = Math.min(50, kini - lalu);
      lalu = kini;
      var delta = tujuan - sekarang;
      if (Math.abs(delta) < 0.4) {
        window.scrollTo(0, tujuan);
        hentikanInertia();
        return;
      }
      // Faktor bergantung dt, jadi kecepatan sama di monitor 60Hz maupun 144Hz.
      var f = 1 - Math.pow(1 - LERP, dt / 16.667);
      window.scrollTo(0, sekarang + delta * f);
      ditulis = window.scrollY;
      requestAnimationFrame(loop);
    }

    window.addEventListener("wheel", function (e) {
      if (e.ctrlKey) return;                              // biarkan zoom
      if (lightbox && !lightbox.hidden) return;           // overlay pakai scroll bawaan
      var d = e.deltaY;
      if (e.deltaMode === 1) d *= 16;                     // satuan baris
      else if (e.deltaMode === 2) d *= window.innerHeight; // satuan halaman
      e.preventDefault();
      batalTween();
      /* Saat loop menganggur, mulai dari posisi nyata — jangan mengandalkan
         event scroll yang datangnya asinkron. Kalau loop sedang jalan, delta
         ditumpuk ke tujuan supaya putaran roda beruntun terasa menambah laju. */
      if (!berjalan) tujuan = window.scrollY;
      tujuan = jepit(tujuan + d);
      if (!berjalan) {
        berjalan = true;
        ditulis = -1;
        lalu = performance.now();
        requestAnimationFrame(loop);
      }
    }, { passive: false });

    // Selaraskan lagi setiap kali posisi berubah di luar loop.
    window.addEventListener("scroll", function () {
      if (!berjalan) tujuan = window.scrollY;
    }, { passive: true });
    window.addEventListener("resize", function () { tujuan = jepit(tujuan); });

    /* Tab disembunyikan: requestAnimationFrame dibekukan browser, jadi animasi
       yang sedang jalan akan tersangkut di tengah dan menyentak saat tab dibuka
       lagi. Lebih baik dihentikan dan disinkronkan ulang. */
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) return;
      batalTween();
      hentikanInertia();
      tujuan = window.scrollY;
    });
  }

  /* ---------- 12. Jalankan ---------- */
  bindText();
  renderFoto();
  renderChips("#hero-kata", D.profil.tigaKata);
  renderIdentitas();
  renderChips("#hobi-list", D.profil.hobi);
  renderSwot();
  renderKelompok();
  renderResume();
  renderGaleri();
  initLightbox();
  initReveal();
  initScrollspy();
  initSmoothScroll();
})();
