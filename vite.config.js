import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { Button } from "@/components/ui/button"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
