import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { products } from '../test-data/products';
import { loginAs } from '../utils/testHelpers';
const [firstProduct] = products;
const checkoutUser = {
    firstName: 'Aatmeeya',
    lastName: 'Shetty',
    postalCode: '400054'
};
test.describe('Checkout Tests', () => {
    test('TC_010 - Checkout with valid details @checkout @smoke', async ({ page }) => {
        const productsPage = new ProductPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        await loginAs(page);
        await productsPage.addProductToCart(firstProduct.name);
        await expect(productsPage.cartBadge).toHaveText('1');
        await productsPage.goToCart();
        await cartPage.checkout();
        await checkoutPage.fillCheckoutDetails(
            checkoutUser.firstName,
            checkoutUser.lastName,
            checkoutUser.postalCode
        );
        await checkoutPage.continueCheckout();
        await expect(productsPage.pageTitle).toContainText('Checkout');
    });
    test('TC_011 - Checkout with missing First Name @checkout @negative', async ({ page }) => {
        const productsPage = new ProductPage(page);
        const cartPage = new CartPage(page);
        await loginAs(page);
        await productsPage.addProductToCart(firstProduct.name);
        await productsPage.goToCart();
        await cartPage.checkout();
        await page.locator('[data-test="lastName"]')
            .fill(checkoutUser.lastName);
        await page.locator('[data-test="postalCode"]')
            .fill(checkoutUser.postalCode);
        await page.locator('[data-test="continue"]')
            .click();
        await expect(
            page.locator('[data-test="error"]').first()
        ).toContainText(/First Name is required/i);
    });
    test('TC_012 - Checkout with missing Postal Code @checkout @negative', async ({ page }) => {
        const productsPage = new ProductPage(page);
        const cartPage = new CartPage(page);
        await loginAs(page);
        await productsPage.addProductToCart(firstProduct.name);
        await productsPage.goToCart();
        await cartPage.checkout();
        await page.locator('[data-test="firstName"]')
            .fill(checkoutUser.firstName);
        await page.locator('[data-test="lastName"]')
            .fill(checkoutUser.lastName);
        await page.locator('[data-test="continue"]')
            .click();
        const error = page.locator('[data-test="error"]');
        await expect(error).toBeVisible();
        await expect(error)
            .toContainText(/Postal Code is required/i);
    });

});
