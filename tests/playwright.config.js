import { defineConfig } from "@playwright/test";
export default defineConfig({
  use: {
    baseURL: "http://localhost:4173",
    video: "retain-on-failure",
  },
  workers: "100%",
  retries: process.env.CI ? 1 : 0,
});
