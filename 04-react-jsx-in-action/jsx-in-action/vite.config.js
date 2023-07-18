import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    //css소스맵 활성화
    //vite에서 hidden 사용시 display:none 활성화시키는 방법
    devSourcemap: true,
  },
});
