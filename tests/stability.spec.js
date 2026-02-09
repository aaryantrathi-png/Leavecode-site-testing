const { test, expect } = require('@playwright/test');

test.describe('Stability Tests', () => {
  test('Check for console errors and failed network requests', async ({ page }) => {
    const consoleErrors = [];
    const failedRequests = [];

    // Listen for console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Listen for failed network requests
    page.on('requestfailed', request => {
      failedRequests.push(request.url());
    });

    await page.goto('/');

    // Assert no errors
    expect(consoleErrors).toEqual([]);
    expect(failedRequests).toEqual([]);
  });
});
