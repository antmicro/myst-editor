import { defineConfig } from "@playwright/test";
export default defineConfig({
  use: {
    baseURL: "http://localhost:4173",
    video: "retain-on-failure",
  },
});
