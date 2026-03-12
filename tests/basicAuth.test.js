const { test, expect } = require("@playwright/test");

test("Basic Auth", async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });
  const page = await context.newPage();
  await page.goto("/basic_auth", { waitUntil: "load" });
  await expect(page).toHaveURL("/basic_auth");
  await expect(page.locator("p")).toHaveText(
    "Congratulations! You must have the proper credentials.",
  );
});
