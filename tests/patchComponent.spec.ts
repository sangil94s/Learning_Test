import { test, expect } from '@playwright/test';

test.describe('Patch Component', () => {
  test('API가 PATCH를 하는지 확인하는 목적', async ({ page }) => {
    await page.goto('http://localhost:3000'); // 앱이 실행 중이어야 합니다.

    // PATCH 요청을 보내는 버튼을 클릭합니다.
    await page.click('text=포스트 업데이트하기');

    await page.waitForTimeout(500); // 500의 대기 시간 할당

    // 응답 데이터 전체를 가져와서 확인합니다.
    const responseData = await page.locator('div:has-text("응답 데이터:")').locator('pre').innerText();
    expect(responseData).toContain('sunt aut facere repellat provident occaecati excepturi optio reprehenderit'); // 응답값에 이 문자열이 있는지 확인
  });
});
