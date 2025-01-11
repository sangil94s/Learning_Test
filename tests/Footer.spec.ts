import { test, expect } from '@playwright/test';

test('Footer', async ({page}) => {
	await page.goto('http://localhost:3000');

	await page.waitForSelector('h1');

	const titles = await page.locator('h1.text-red-600').allTextContents();
	expect(titles.length).toBeGreaterThan(0);
	expect(titles).toContain("Footer")

})