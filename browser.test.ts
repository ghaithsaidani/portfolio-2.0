import {test} from "@playwright/test";

test("test browser", async ({page}) => {
  await page.goto("http://localhost:4200/");
  await page.pause()
});
