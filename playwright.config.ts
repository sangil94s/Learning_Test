import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // 테스트 파일이 위치할 디렉토리
  use: {
    browserName: 'chromium',
  },
});