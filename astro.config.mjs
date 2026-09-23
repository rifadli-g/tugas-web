import { defineConfig } from 'astro/config';

// Output statis biasa — Vercel otomatis mendeteksi project Astro,
// tidak perlu adapter tambahan untuk landing page statis seperti ini.
export default defineConfig({
  output: 'static',
});
