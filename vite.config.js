import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression(), ViteMinifyPlugin({})],
});
