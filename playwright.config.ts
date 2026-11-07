import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  fullyParallel: false,
  //reporter: 'html',
reporter:[['html', { open: 'never' }]],
  use: {
    headless: process.env.CI?true:false,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});