//1

import { test, expect } from '@playwright/test';

test('포스트 생성 버튼 클릭 시 응답 데이터 표시', async ({ page }) => {
  // 테스트할 페이지로 이동
  await page.goto('http://localhost:3000'); // 개발 서버 주소로 변경하세요.

  // 버튼 클릭
  await page.click('text=포스트 생성하기');

  // 응답 데이터가 화면에 나타나는지 확인
  const responseData = await page.locator('text=응답 데이터:');
  await expect(responseData).toBeVisible();

  // 응답 데이터의 내용 확인 (예: id가 101인지)
  const pre = await page.locator('pre');
  const preText = await pre.innerText();
  expect(preText).toContain('"id": 101');
});