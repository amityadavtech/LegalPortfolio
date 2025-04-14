import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

// Get the current file's path and directory (for proper aliasing)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    themePlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      // Adjust the alias paths for 'client' structure
      "@": path.resolve(__dirname, "client", "src"), // Corrected for client folder
      "@shared": path.resolve(__dirname, "shared"), // Adjust path for shared folder
      "@assets": path.resolve(__dirname, "attached_assets"), // Adjust path for assets
    },
  },
  root: path.resolve(__dirname, "client"), // Ensure 'client/' is the root directory for Vite
  build: {
    outDir: path.resolve(__dirname, "dist"), // Build output to 'dist' folder
    emptyOutDir: true, // Clear the output folder before every build
  },
});
