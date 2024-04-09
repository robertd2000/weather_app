import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/weather-app/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      app: "/src/app",
      entities: "/src/entities",
      features: "/src/features",
      pages: "/src/pages",
      shared: "/src/shared",
      widgets: "/src/widgets",
    },
  },
});
