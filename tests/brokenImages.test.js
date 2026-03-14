const { test, expect } = require("@playwright/test");

test("All images should be loaded", async ({ page }) => {
  await page.goto("/broken_images", { waitUntil: "load" });

  const images = page.locator("img");
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const image = images.nth(i);
    const naturalWidth = await image.evaluate((img) => img.naturalWidth);

    if (naturalWidth > 0) {
      console.log(`Image ${i + 1} loaded`);
    } else {
      console.log(`Image ${i + 1} broken`);
    }
  }
});
