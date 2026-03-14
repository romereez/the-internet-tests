const { test, expect } = require("@playwright/test");

test("Digest auth test", async ({ browser }) => {
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });

  const page = await context.newPage();

  await page.goto("/digest_auth");

  await expect(page.locator("p")).toContainText("Congratulations");
  console.log("Test Passed");
});
