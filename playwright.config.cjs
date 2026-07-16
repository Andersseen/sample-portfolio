/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: "./e2e",
  timeout: 30_000,
  webServer: {
    command: "pnpm run dev -- --host localhost --port 4321",
    url: "http://localhost:4321",
    reuseExistingServer: true,
    timeout: 30_000,
  },
  use: {
    baseURL: "http://localhost:4321",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
      },
    },
  ],
};
