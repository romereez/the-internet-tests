const {test , expect } = require('@playwright/test');

test("Add/Remove Element", async ({page}) => {
    await page.goto("/add_remove_elements/" , {waitUntil: 'load'});
    await expect(page).toHaveURL("/add_remove_elements/");
    await page.click("button:has-text('Add Element')");
    await expect(page.locator("button:has-text('Delete')")).toBeVisible();
    await page.click("button:has-text('Delete')");
    await expect(page.locator("button:has-text('Delete')")).toBeHidden();
});