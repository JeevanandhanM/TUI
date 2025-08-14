import { defineConfig, devices } from "@playwright/test";
 
// 1. Environment setup
const ENV = process.env.ENV || "staging";
const baseURLs: Record<string, string> = {
  staging: "https://staging.tuiholidays.ie",
  prod: "https://www.tuiholidays.ie",
};
const baseURL = baseURLs[ENV];
 
export default defineConfig({
  testDir: "./tests",
  timeout: 2 * 60 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
 
  // 2. Reporters for CI + HTML
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["junit", { outputFile: `results-${ENV}.xml` }]
  ],
 
  // 3. Global test settings
  use: {
    baseURL,
    trace: process.env.CI ? "retain-on-failure" : "on-first-retry",
    video: process.env.CI ? "on" : "retain-on-failure",
    screenshot: "only-on-failure"
  },
 
  // 4. Projects
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } }
  ]
});