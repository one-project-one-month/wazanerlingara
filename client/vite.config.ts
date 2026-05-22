import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.svg"],
      manifest: {
        name: "Wazanalingara",
        id: "/",
        short_name: "Wazanalingara",
        description: "Refine version of imposter who? game",
        theme_color: "#111111",
        background_color: "#000000",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/logo.svg",
            sizes: "any",
            type: "image/svg+xml",
          },

          {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/maskable_logo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/home.png",
            sizes: "430x932",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/result-1.png",
            sizes: "430x932",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/result-2.png",
            sizes: "430x932",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/screenshots/role-reveal.png",
            sizes: "430x932",
            type: "image/png",
            form_factor: "narrow",
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,mp3,wav,json,ttf,woff,woff2}",
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
