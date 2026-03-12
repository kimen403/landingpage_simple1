# UMKM Naik Kelas — Landing Page

Landing page untuk platform pendamping UMKM Indonesia, dibangun dengan **Next.js** dan di-deploy ke **GitHub Pages** secara otomatis.

## Stack

- **Next.js 16** (static export)
- **TypeScript**
- **GitHub Actions** untuk CI/CD dan automation

## Struktur Folder

```
├── app/
│   ├── layout.tsx        # Root layout (font, metadata)
│   ├── page.tsx          # Halaman utama
│   └── globals.css       # Stylesheet global
├── next.config.mjs       # Konfigurasi Next.js (output: export)
├── .github/
│   ├── workflows/
│   │   ├── nextjs.yml           # Deploy ke GitHub Pages
│   │   └── auto-assign-agent.yml # Auto-assign issue ke agent
│   └── agents/                  # Definisi custom Copilot agents
└── tsconfig.json
```

## Deploy ke GitHub Pages

Setiap push ke branch `main` akan men-trigger workflow **Deploy Next.js site to Pages** secara otomatis.

### Setup awal

1. Pastikan **GitHub Pages** diaktifkan di Settings → Pages → Source: **GitHub Actions**
2. Workflow akan otomatis build dan deploy

### Build lokal

```bash
npm ci
npm run build   # Output di folder ./out
npm run dev     # Development server
```

## Automation Agent

### Auto-assign Issue

Workflow `auto-assign-agent.yml` secara otomatis mengarahkan issue ke agent yang tepat berdasarkan label:

| Label      | Agent           | Folder          |
|------------|-----------------|-----------------|
| `frontend` | frontend-dev    | `/frontend`     |
| `backend`  | backend-dev     | `/backend`      |
| `db`       | database-dev    | `/prisma`       |
| `qa`       | qa-review       | Seluruh codebase |

### Cara menggunakan

1. Buat issue baru di repository ini
2. Tambahkan label sesuai area kerja (`frontend`, `backend`, `db`, atau `qa`)
3. Workflow akan otomatis menambahkan komentar berisi routing agent dan (opsional) menambahkan assignee

### Konfigurasi assignee otomatis

Tambahkan repository variables berikut di **Settings → Secrets and variables → Actions → Variables**:

| Variable           | Nilai                          |
|--------------------|--------------------------------|
| `FRONTEND_ASSIGNEE`| GitHub username untuk frontend |
| `BACKEND_ASSIGNEE` | GitHub username untuk backend  |
| `DB_ASSIGNEE`      | GitHub username untuk database |
| `QA_ASSIGNEE`      | GitHub username untuk QA       |

### Custom Copilot Agents

File definisi agent tersedia di `.github/agents/`:

- `frontend-dev.md` — Agent untuk perubahan Next.js
- `backend-dev.md` — Agent untuk Hapi.js backend
- `database-dev.md` — Agent untuk Prisma/PostgreSQL
- `qa-review.md` — Agent untuk review dan testing
- `landingpage-builder.md` — Agent untuk landing page statis
