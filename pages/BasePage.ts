import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForNewTab(): Promise<Page> {
    const newTab = await this.page.waitForEvent('popup');
    await newTab.waitForLoadState();
    return newTab;
  }
}