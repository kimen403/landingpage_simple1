const featureItems = [
  {
    title: '🛍️ Toko Online Instan',
    description: 'Buat etalase digital dalam hitungan menit dengan template siap pakai.'
  },
  {
    title: '📣 Promosi Otomatis',
    description: 'Jadwalkan konten promo ke kanal sosial media untuk tingkatkan jangkauan.'
  },
  {
    title: '📊 Analitik Penjualan',
    description: 'Pantau produk terlaris, waktu ramai, dan performa kampanye dalam dashboard ringkas.'
  }
];

const benefitItems = [
  {
    title: '💰 Biaya terjangkau',
    description: 'Mulai dari paket gratis untuk usaha yang baru berkembang.'
  },
  {
    title: '🗺️ Bahasa & konteks lokal',
    description:
      'Format harga rupiah, ongkir domestik, dan panduan sesuai kebutuhan pasar Indonesia.'
  },
  {
    title: '🎓 Didampingi mentor',
    description: 'Akses webinar, kelas singkat, dan komunitas untuk percepat pertumbuhan bisnis.'
  }
];

const impactItems = [
  {
    value: '12K+',
    label: 'Produk aktif dipasarkan'
  },
  {
    value: '34',
    label: 'Kota dalam ekosistem pembinaan'
  },
  {
    value: '89%',
    label: 'UMKM menyatakan operasional lebih rapi'
  }
];

const testimonials = [
  {
    quote: '⭐ “Sejak pakai platform ini, pesanan online kami naik signifikan dalam 2 bulan.”',
    author: 'Rina, Pemilik Brand Kuliner Rumahan'
  },
  {
    quote: '⭐ “Saya tidak paham teknis, tapi set up tokonya cepat dan gampang dipakai.”',
    author: 'Deni, Pengrajin Tas Kulit'
  }
];

const localBadges = ['Bandung', 'Yogyakarta', 'Surabaya', 'Makassar'];

const metrics = [
  {
    value: '+42%',
    label: 'Rata-rata peningkatan transaksi'
  },
  {
    value: '24/7',
    label: 'Dukungan chatbot pelanggan'
  },
  {
    value: '3x',
    label: 'Proses order lebih cepat'
  },
  {
    value: '98%',
    label: 'Kepuasan pengguna aktif'
  }
];

export default function Home() {
  return (
    <div>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

      <header className="site-header">
        <div className="container nav-wrapper">
          <a href="#" className="brand" aria-label="Beranda UMKM Naik Kelas">
            <span className="brand-mark" aria-hidden="true">
              U
            </span>
            <span className="brand-text">UMKM Naik Kelas</span>
          </a>

          <nav aria-label="Navigasi utama">
            <ul className="nav-list">
              <li>
                <a href="#fitur">Fitur</a>
              </li>
              <li>
                <a href="#manfaat">Manfaat</a>
              </li>
              <li>
                <a href="#dampak">Dampak</a>
              </li>
              <li>
                <a href="#testimoni">Testimoni</a>
              </li>
            </ul>
          </nav>

          <a className="btn btn-primary" href="#daftar">
            Mulai Gratis
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Platform untuk pelaku usaha lokal</p>
              <h1>Bantu UMKM Indonesia tumbuh lebih cepat di era digital</h1>
              <p className="lead">
                Kelola katalog produk, terima pesanan, dan jangkau pelanggan baru dengan tampilan
                profesional yang mudah dipakai.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#daftar">
                  Daftar Sekarang
                </a>
                <a className="btn btn-secondary" href="#fitur">
                  Lihat Fitur
                </a>
              </div>
              <ul className="trust-list" aria-label="Poin kepercayaan">
                <li>Dipakai 5.000+ UMKM</li>
                <li>Support onboarding bahasa Indonesia</li>
                <li>Integrasi pembayaran lokal</li>
              </ul>
              <div className="local-badges" aria-label="Sebaran dukungan daerah">
                {localBadges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className="hero-svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 0.18 }} />
                    <stop offset="100%" style={{ stopColor: '#0ea5e9', stopOpacity: 0.1 }} />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="160" r="130" fill="url(#grad1)" />
                <circle
                  cx="200"
                  cy="160"
                  r="90"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="1.5"
                  strokeDasharray="8 6"
                  opacity="0.35"
                />
                <circle cx="200" cy="160" r="52" fill="none" stroke="#16a34a" strokeWidth="2" opacity="0.25" />
                <rect x="152" y="112" width="96" height="96" rx="18" fill="#16a34a" opacity="0.12" />
                <text x="200" y="172" textAnchor="middle" fontSize="40" fill="#16a34a" opacity="0.5">
                  🏪
                </text>
                <circle cx="100" cy="80" r="22" fill="#f97316" opacity="0.13" />
                <circle cx="310" cy="240" r="18" fill="#22c55e" opacity="0.15" />
                <circle cx="330" cy="90" r="12" fill="#fbbf24" opacity="0.18" />
                <circle cx="80" cy="230" r="14" fill="#0ea5e9" opacity="0.13" />
              </svg>
            </div>

            <aside className="hero-card hero-card--dark" aria-label="Ringkasan performa UMKM">
              <h2>Ringkas dan terukur</h2>
              <div className="metric-grid">
                {metrics.map((metric) => (
                  <article key={metric.label}>
                    <p className="metric-value">{metric.value}</p>
                    <p className="metric-label">{metric.label}</p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="fitur" className="section">
          <div className="container">
            <h2>Fitur utama untuk UMKM</h2>
            <p className="section-subtitle">
              Dibuat sederhana agar pemilik usaha fokus pada penjualan, bukan teknis yang rumit.
            </p>

            <div className="feature-grid">
              {featureItems.map((item) => (
                <article key={item.title} className="card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="manfaat" className="section alt-bg">
          <div className="container">
            <h2>Kenapa cocok untuk UMKM Indonesia?</h2>
            <div className="benefit-grid">
              {benefitItems.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="dampak" className="section">
          <div className="container">
            <h2>Dampak nyata untuk usaha lokal</h2>
            <p className="section-subtitle">
              Dari kuliner rumahan sampai kerajinan, UMKM dapat mengukur pertumbuhan bisnis secara
              konsisten dari minggu ke minggu.
            </p>
            <div className="impact-strip" role="list" aria-label="Statistik dampak">
              {impactItems.map((item) => (
                <article key={item.label} role="listitem" className="impact-item">
                  <p className="impact-number">{item.value}</p>
                  <p className="impact-label">{item.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimoni" className="section">
          <div className="container">
            <h2>Testimoni pelaku UMKM</h2>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote key={item.author} className="card quote">
                  {item.quote}
                  <cite>— {item.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="daftar" className="section cta">
          <div className="container cta-box">
            <h2>Siap membawa UMKM Anda naik kelas?</h2>
            <p>
              Daftarkan usaha Anda hari ini dan mulai bangun kehadiran digital yang lebih kuat.
            </p>
            <form className="cta-form" action="#" method="post">
              <label htmlFor="email">Email bisnis</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="nama@bisnisanda.id"
              />
              <button className="btn btn-primary" type="submit">
                Dapatkan Demo
              </button>
              <small className="form-note">Tanpa kartu kredit, gratis konsultasi awal 15 menit.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 UMKM Naik Kelas. Untuk ekonomi lokal yang lebih kuat.</p>
        </div>
      </footer>
    </div>
  );
}