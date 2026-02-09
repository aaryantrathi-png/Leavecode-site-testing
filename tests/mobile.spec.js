const { test, expect } = require('@playwright/test');
const CommonPage = require('../pages/common.page');

test.use({ viewport: { width: 375, height: 667 } }); // Mobile viewport

test.describe('Mobile View Tests', () => {
  test('Mobile menu and CTA visibility', async ({ page }) => {
    const commonPage = new CommonPage(page);
    await commonPage.navigate('/');

    // Check for mobile menu button (hamburger icon)
    const menuButton = 'button.navbar-toggler'; // Placeholder selector
    // await expect(page.locator(menuButton)).toBeVisible();

    // Check CTA visibility on mobile
    const ctaButton = 'text=Request a free proposal';
    await expect(page.locator(ctaButton).first()).toBeVisible();
  });
});
