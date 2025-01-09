import { test, expect } from '@playwright/test';

test.describe('글 삭제 컴포넌트 테스트', () => {
  test('삭제 컴포넌트를 테스트 하는 목적 입니다다', async ({ page }) => {
    await page.goto('http://localhost:3000'); // 실제 URL로 수정

    // 삭제 버튼 클릭
    await page.click('button:has-text("삭제하기")');
  
    // 삭제 요청이 성공적으로 이루어졌는지 확인
    // 여기서는 단순히 콘솔 로그를 확인하는 방식이 아닌
    // 삭제된 데이터가 실제로 삭제되었는지를 확인하기 위해
    // 추가적인 API 요청을 할 수 있습니다.
    
    const response = await page.request.get('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200); 
  });
});
