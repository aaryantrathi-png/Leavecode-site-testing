const { test, expect } = require('@playwright/test');

test.describe('Performance Tests', () => {
  test('Page load under 3 seconds', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const endTime = Date.now();
    const loadTime = endTime - startTime;

    console.log(`Page load time: ${loadTime}ms`);
    expect(loadTime).toBeLessThan(3000);
  });
});
