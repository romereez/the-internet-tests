const { test, expect } = require("@playwright/test");

test("disappearing element", async ({ page }) => {
  await page.goto("/disappearing_elements", { waitUntil: "load" });

  await expect(page.locator("h3")).toHaveText("Disappearing Elements");

  const links = page.locator("a");
  const count = await links.count();

  for (let i = 0; i < count; i++) {
    const link = links.nth(i);
    const text = await link.textContent();
    console.log(`Link ${i + 1}: ${text}`);
  }

  await page.reload();
  const linksAfterReload = page.locator("a");
  const countAfterReload = await linksAfterReload.count();
  for (let i = 0; i < countAfterReload; i++) {
    const link = linksAfterReload.nth(i);
    const text = await link.textContent();
    console.log(`After reload ${i + 1}: ${text}`);
  }
});
