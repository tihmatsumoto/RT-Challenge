import { test } from '@playwright/test';

import { HomePage } from '../../pages/HomePage';
import { ProductsPage } from '../../pages/ProductsPage';

test.describe('New Tabs Flow', () => {

  let homePage: HomePage
  let productsPage: ProductsPage

  test('Should redirect open new tab to CasinoGuide', async ({ page }) => {

    homePage = new HomePage(page)
    productsPage = new ProductsPage(page)

    await homePage.visit('https://raketech.com/')

    await homePage.hoverWhatWeDoMenuOption()

    await homePage.clickProductMenu()

    await productsPage.clickProduct()

    await productsPage.clickSiteRedirectIcon()

    await homePage.verifyNewTabUrl('https://www.casinoguide.se/')
  });
})

