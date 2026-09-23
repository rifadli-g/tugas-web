# Landing Page — Nama

Landing page satu halaman (mirip CV minimal) dibuat dengan [Astro](https://astro.build), siap deploy ke Vercel.

## Edit isi halaman

Buka `src/pages/index.astro`, lalu ubah 3 baris di bagian atas:

```astro
const name = "Nama Anda";
const tagline = "Jabatan / Profesi — Kota, Negara";
const email = "nama@email.com";
```

Warna, font, dan layout diatur lewat CSS di bagian `<style>` pada file yang sama — ubah nilai `--accent` / `--accent-2` di `:root` kalau ingin ganti skema warna.

## Jalankan di lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:4321`.

## Deploy ke Vercel

**Opsi 1 — lewat CLI**
```bash
npm install -g vercel
vercel
```
Ikuti instruksi di terminal (login, pilih scope, konfirmasi project). Vercel otomatis mendeteksi ini sebagai project Astro, tidak perlu setting build command manual.

**Opsi 2 — lewat dashboard Vercel**
1. Push folder ini ke repo GitHub/GitLab/Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new), import repo tersebut.
3. Framework Preset akan otomatis terdeteksi sebagai "Astro" — biarkan default (`npm run build`, output `dist/`).
4. Klik **Deploy**.

Setelah deploy pertama, setiap push ke branch utama akan otomatis redeploy.
