import { test, expect } from "@playwright/test";

test.describe("Mobile Hamburger Menu", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("can open and close the mobile menu and click links", async ({ page }) => {
    await page.goto("/");

    // Check menu button exists and is visible
    const menuButton = page.locator('button[aria-controls="mobile-menu"]');
    await expect(menuButton).toBeVisible();

    // Open menu
    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu).toBeVisible();

    // Check computed bounding box of mobile menu
    const box = await mobileMenu.boundingBox();
    console.log("Mobile menu box when open:", box);

    // Check visibility of menu links
    const aboutLink = mobileMenu.locator('a[href="#about"]');
    await expect(aboutLink).toBeVisible();

    // Scroll down first to see if header backdrop filter breaks the fixed sheet!
    await menuButton.click(); // close menu
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");

    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);

    // Open menu after page is scrolled
    await menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");
    await expect(mobileMenu).toBeVisible();

    const boxAfterScroll = await mobileMenu.boundingBox();
    console.log("Mobile menu box after scroll:", boxAfterScroll);

    // Check if about link can be clicked
    await aboutLink.click();
    await expect(mobileMenu).not.toBeVisible();
  });
});

