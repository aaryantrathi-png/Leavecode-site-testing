// Reusable helper functions
const { expect } = require('@playwright/test');

module.exports = {
  // Wait for a specific amount of time
  async wait(page, ms) {
    await page.waitForTimeout(ms);
  },

  // Get text from an element
  async getText(page, selector) {
    return await page.textContent(selector);
  },

  // Check if element is visible
  async isVisible(page, selector) {
    return await page.isVisible(selector);
  }
};
