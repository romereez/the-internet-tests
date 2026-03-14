const { test, expect } = require("@playwright/test");

test("Check all checkboxes", async ({ page }) => {

  await page.goto("/checkboxes", { waitUntil: "load" });

  const checkboxes = page.getByRole("checkbox");
  const count = await checkboxes.count();

  for (let i = 0; i < count; i++) {
    const checked = await checkboxes.nth(i).isChecked();
    console.log(`Checkbox ${i} checked: ${checked}`);
  }

  await checkboxes.first().check();
  await checkboxes.nth(1).check();

});