// tests/Fetchs.spec.ts

import { test, expect } from '@playwright/test';

test('Fetchs 컴포넌트 테스트', async ({ page }) => {
    // Mocking API 응답 -> 요청을 가로 채는 역할 -> route가 그 역할을 담당
    await page.route('https://jsonplaceholder.typicode.com/posts', async (route) => {
		const response = await route.fetch(); // API 요청청
        // 응답을 JSON 형식으로 반환
        route.fulfill({
            status: response.status(),
            contentType: response.headers()['content-type'],
            body: await response.body(),
        });
    });

    // 페이지를 열기 (여기서는 로컬 서버 주소를 사용하세요)
    await page.goto('http://localhost:3000'); // 실제 URL로 변경하세요

    // 데이터가 로드될 때까지 기다립니다
    await page.waitForSelector('h1');

    // h1 요소가 존재하는지 확인합니다
    const titles = await page.locator('h1').allTextContents();
    expect(titles.length).toBeGreaterThan(0); // 데이터가 하나 이상 존재해야 합니다

	expect(titles).toContain("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
	expect(titles).toContain("qui est esse")

	const ids = await page.locator('p.text-red-600').allTextContents(); // ID 표시 확인
	expect(ids.length).toBeGreaterThan(0)
	expect(ids).toContain("1")
	expect(ids).toContain("2")
});