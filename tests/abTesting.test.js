const {test , expect } = require('@playwright/test');

test("A/B Test Variator 1", async ({page}) => {
    await page.goto("/abtest" , {waitUntil: 'load'});
    await expect(page).toHaveURL("/abtest");
    await expect(page.locator("h3")).toHaveText("A/B Test Control");

});
