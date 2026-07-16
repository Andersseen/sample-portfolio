import { expect, test } from "@playwright/test";

test("desktop navbar morphs from a stable avatar anchor", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.locator(".site-header--desktop .site-header__trigger--avatar").waitFor();

  const trigger = page.locator(".site-header__trigger--avatar");
  const nav = page.locator(".site-nav");

  await expect(trigger).toBeVisible();

  const closedTrigger = await trigger.boundingBox();
  const closedNav = await nav.boundingBox();

  await trigger.click();
  await page.mouse.move(20, 20);
  await expect(nav).toHaveCSS("visibility", "visible");
  await page.waitForTimeout(650);

  const openTrigger = await trigger.boundingBox();
  const openNav = await nav.boundingBox();

  expect(Math.abs((openTrigger?.x ?? 0) - (closedTrigger?.x ?? 0))).toBeLessThan(
    1,
  );
  expect(Math.abs((openTrigger?.y ?? 0) - (closedTrigger?.y ?? 0))).toBeLessThan(
    1,
  );
  expect((openNav?.width ?? 0) > (closedNav?.width ?? 0)).toBeTruthy();

  await page.screenshot({
    path: "test-results/navbar-open.png",
    fullPage: false,
  });

  await trigger.click();
  await page.mouse.move(20, 20);
  await page.waitForTimeout(650);

  const closedAgainTrigger = await trigger.boundingBox();
  expect(
    Math.abs((closedAgainTrigger?.x ?? 0) - (closedTrigger?.x ?? 0)),
  ).toBeLessThan(1);
  expect(
    Math.abs((closedAgainTrigger?.y ?? 0) - (closedTrigger?.y ?? 0)),
  ).toBeLessThan(1);
});
