import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // barcha hostinglarda (Vercel, Netlify, GitHub Pages) xatosiz ishlaydi
  plugins: [react()],
});