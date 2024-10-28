import { expect, Locator, Page } from "@playwright/test"
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly page: Page
  readonly whatWeDoMenuOption: Locator
  readonly productsOption: Locator

  constructor(page: Page) {
    super(page);
    this.page = page
    this.whatWeDoMenuOption = page.locator('#menu-item-39').getByRole('link', { name: 'What We Do' })
    this.productsOption = page.locator('#menu-item-40').getByRole('link', { name: 'Products' })
  }

  async verifyNewTabUrl(expectedUrl: string): Promise<void> {
    const newTab = await this.waitForNewTab();
    await expect(newTab).toHaveURL(expectedUrl);
  }

  async visit(url: string) {
    await this.page.goto(url)
  }

  async hoverWhatWeDoMenuOption() {
    await this.whatWeDoMenuOption.hover()
  }

  async clickProductMenu() {
    await this.productsOption.click()
  }
}