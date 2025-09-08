// tests/playwright/ui.spec.js
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  // Reset test DB so tests are repeatable
  const base = process.env.BASE_URL || 'http://localhost:3000';
  await page.request.post(`${base}/api/test-reset`);
  await page.goto('/');
});

test('loads and displays the app header and at least one book', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('SmartLibrary');
  await expect(page.locator('.book').first()).toBeVisible();
});

test('adds a new book and the UI shows it', async ({ page }) => {
  const title = 'Test Driven Dev';
  const author = 'Kent Beck';

  await page.fill('#title', title);
  await page.fill('#author', author);
  await page.click('#add');

  const newBook = page.locator('.book', { hasText: title });
  await expect(newBook).toBeVisible({ timeout: 3000 });
  await expect(newBook).toContainText(author);
});
