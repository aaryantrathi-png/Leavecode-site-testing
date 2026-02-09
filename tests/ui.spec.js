const { test, expect } = require('@playwright/test');
const CommonPage = require('../pages/common.page');

test.describe('UI Tests', () => {
  let commonPage;

  test.beforeEach(async ({ page }) => {
    commonPage = new CommonPage(page);
    await commonPage.navigate('/');
  });

  test('Homepage loads correctly', async ({ page }) => {
    await expect(page).toHaveTitle(/Leavecode/i);
  });

  test('Navigation links are visible', async ({ page }) => {
    // Placeholder selector for navigation menu
    const navMenu = 'nav:visible'; 
    await expect(page.locator(navMenu).first()).toBeVisible();
  });

  test('CTA buttons are present', async ({ page }) => {
    // Placeholder for CTA button
    const ctaButton = 'text=Request a free proposal'; 
    await expect(page.locator(ctaButton).first()).toBeVisible();
  });

  test('Verify Pricing/Services section', async ({ page }) => {
    // Placeholder for Services section
    const servicesSection = 'text=What We Do'; 
    await expect(page.locator(servicesSection)).toBeVisible();
  });
});
