// tests/Fetchs.spec.ts

import { test, expect } from '@playwright/test';

test('Fetchs 컴포넌트 테스트', async ({ page }) => {
    // Mocking API 응답 -> 요청을 가로 채는 역할 -> route가 그 역할을 담당
    await page.route('https://jsonplaceholder.typicode.com/posts', (route) => {
        // Mock 데이터 -> 실제 URL에 요청하고 응답값을 받을때 -> 이 부분이 대체 투입
        const mockData = [
            { id: 1, userId: 1, title: 'Mock Title 1', body: 'Mock Body 1' },
            { id: 2, userId: 1, title: 'Mock Title 2', body: 'Mock Body 2' },
            { id: 3, userId: 1, title: 'Mock Title 3', body: 'Mock Body 3' },
        ];
        // 응답을 JSON 형식으로 반환
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockData),
        });
    });

    // 페이지를 열기 (여기서는 로컬 서버 주소를 사용하세요)
    await page.goto('http://localhost:3000'); // 실제 URL로 변경하세요

    // 데이터가 로드될 때까지 기다립니다
    await page.waitForSelector('h1');

    // h1 요소가 존재하는지 확인합니다
    const titles = await page.locator('h1').allTextContents();
    expect(titles.length).toBeGreaterThan(0); // 데이터가 하나 이상 존재해야 합니다

    // Mock 데이터의 제목이 올바르게 표시되는지 확인합니다
    expect(titles).toEqual(['Mock Title 1', 'Mock Title 2', 'Mock Title 3']);

	const ids = await page.locator('p.text-red-600').allTextContents(); // ID 표시 확인
    expect(ids).toEqual(['1', '2', '3']); // Mock 데이터의 ID가 올바르게 표시되어야 합니다

});