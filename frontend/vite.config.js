import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allow connections from LAN devices (e.g. your phone)
    port: 5173, // Optional: force specific port
  },
});
