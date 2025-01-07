import { test, expect } from '@playwright/test';

test('홈페이지가 올바르게 로드되는지 확인', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Next.js 앱의 URL
  const title = await page.title();
  expect(title).toBe('Create Next App'); // 페이지의 제목을 확인
});