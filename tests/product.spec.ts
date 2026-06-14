import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductsPage';
import { loginAs } from '../utils/testHelpers';
test.describe('Product Functionality', () => {
  test('TC_005 - Product list should be visible after login @smoke', async ({ page }) => {
        const productsPage = new ProductPage(page);
        await loginAs(page);
        await expect(productsPage.pageTitle).toBeVisible();
        await expect(productsPage.cartLink).toBeVisible();
    });

});
