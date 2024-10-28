import { expect, Locator, Page } from "@playwright/test"

export class ProductsPage {
  readonly page: Page
  readonly casinoGuideHeading: Locator
  readonly siteIcon: Locator

  constructor(page: Page) {
    this.page = page
    this.casinoGuideHeading = page.getByRole('heading', { name: 'Casinoguide' })
    this.siteIcon = page.locator('.bottom_meta').getByRole('link').first()
  }

  async clickProduct() {
    await this.casinoGuideHeading.click()
  }
  
  async clickSiteRedirectIcon() {
    await this.siteIcon.click()
  }
}