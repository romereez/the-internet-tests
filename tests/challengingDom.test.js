const { test, expect } = require("@playwright/test");


test("Challenging DOM", async ({ page }) => {
    await page.goto("/challenging_dom", { waitUntil: "load" });
    await expect(page.locator("h3")).toHaveText("Challenging DOM");

});