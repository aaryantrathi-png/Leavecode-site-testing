const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // 🔥 GLOBAL TEST TIMEOUT (env-based)
  timeout: process.env.TEST_TIMEOUT
    ? parseInt(process.env.TEST_TIMEOUT)
    : 30000, // default = 30s (strict)

  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL: 'https://leavecode.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // 🔥 ACTION / NAVIGATION TIMEOUT
    actionTimeout: process.env.ACTION_TIMEOUT
      ? parseInt(process.env.ACTION_TIMEOUT)
      : 15000,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
  ],
});
