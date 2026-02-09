const { test, expect } = require('@playwright/test');
const CommonPage = require('../pages/common.page');

test.describe('Crawl Website', () => {
  test('Visit homepage and discover internal pages', async ({ page }) => {
    const commonPage = new CommonPage(page);
    await commonPage.navigate('/');
    
    // Get all links on the homepage
    const links = await page.$$eval('a', (elements) => elements.map(el => el.href));
    
    // Filter internal links
    const internalLinks = links.filter(link => link.includes('leavecode.com'));
    console.log('Discovered internal pages:', internalLinks);
    
    // Verify we found some links
    expect(internalLinks.length).toBeGreaterThan(0);
  });
});
