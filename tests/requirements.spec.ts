import { test, expect } from "@playwright/test";

test.describe("Portfolio 12 Task Requirements Verification", () => {
  test("1. Navbar - Fully responsive with easy access to all sections", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("banner")).toBeVisible();

    // Verify all 6 section links exist in desktop or mobile nav
    const sectionIds = ["about", "skills", "education", "experience", "projects", "contact"];
    for (const id of sectionIds) {
      const link = page.locator(`header a[href="#${id}"], #mobile-menu a[href="#${id}"]`).first();
      await expect(link).toBeAttached();
    }
  });

  test("1. Navbar (Mobile) - Hamburger menu opens full-screen after scroll and can navigate", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Scroll down first
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(300);

    const menuButton = page.locator('button[aria-controls="mobile-menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu).toBeVisible();

    // Verify the menu fills the viewport height rather than shrinking
    const box = await mobileMenu.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.height).toBeGreaterThanOrEqual(600);

    // Click projects link from mobile menu
    const projectsLink = mobileMenu.locator('a[href="#projects"]');
    await expect(projectsLink).toBeVisible();
    await projectsLink.click();

    // Menu should close
    await expect(mobileMenu).not.toBeVisible();
  });

  test("2. Designation & Introduction - Shows designation & professional photo", async ({ page }) => {
    await page.goto("/");
    // Professional designation in hero
    const role = page.locator("#top").getByText("Full-Stack Web Developer");
    await expect(role).toBeVisible();

    // Professional photo
    const avatar = page.locator('img[alt*="Shahjalal Ahmed Nishat"]').first();
    await expect(avatar).toBeVisible();
  });

  test("3. Resume Download Button - Clearly visible clickable button in hero", async ({ page }) => {
    await page.goto("/");
    const heroResume = page.locator('#top a:has-text("Download resume")');
    await expect(heroResume).toBeVisible();
    const href = await heroResume.getAttribute("href");
    expect(href).toBeTruthy();
  });

  test("4. Social Links - Embedded links to relevant profiles", async ({ page }) => {
    await page.goto("/");
    const github = page.locator('a[href*="github.com/tahxin"]').first();
    const linkedin = page.locator('a[href*="linkedin.com"]').first();
    const facebook = page.locator('a[href*="facebook.com"]').first();
    const whatsapp = page.locator('a[href*="wa.me"]').first();

    await expect(github).toBeAttached();
    await expect(linkedin).toBeAttached();
    await expect(facebook).toBeAttached();
    await expect(whatsapp).toBeAttached();
  });

  test("5. About Me Section - Programming journey, interests, hobbies, personality", async ({ page }) => {
    await page.goto("/#about");
    const aboutSection = page.locator("#about");
    await expect(aboutSection).toBeVisible();

    // Programming journey
    await expect(aboutSection).toContainText("2020");
    await expect(aboutSection).toContainText("React");

    // Hobbies / interests outside of programming
    await expect(aboutSection).toContainText("Hobbies");
    await expect(aboutSection).toContainText("Travelling");
  });

  test("6. Skills Section - Graphical format & categorized", async ({ page }) => {
    await page.goto("/#skills");
    const skillsSection = page.locator("#skills");
    await expect(skillsSection).toBeVisible();

    // Categorized groups
    await expect(skillsSection).toContainText("Frontend");
    await expect(skillsSection).toContainText("Backend");
    await expect(skillsSection).toContainText("Languages");
  });

  test("7. Educational Qualification - Completed education above HSC", async ({ page }) => {
    await page.goto("/#education");
    const eduSection = page.locator("#education");
    await expect(eduSection).toBeVisible();

    await expect(eduSection).toContainText("Jatiya Kabi Kazi Nazrul Islam University");
    await expect(eduSection).toContainText("B.A. (Hons)");
  });

  test("8. Experience - Relevant professional experience & leadership", async ({ page }) => {
    await page.goto("/#experience");
    const expSection = page.locator("#experience");
    await expect(expSection).toBeVisible();

    await expect(expSection).toContainText("Oxygen AHB");
    await expect(expSection).toContainText("Leadership");
  });

  test("9. Projects Section - At least 3 projects with card format, details button & full detail pages", async ({ page }) => {
    await page.goto("/#projects");
    const projectCards = page.locator("#projects article");
    const count = await projectCards.count();
    expect(count).toBeGreaterThanOrEqual(3);

    // Check each card has title, image, and View Details link
    for (let i = 0; i < count; i++) {
      const card = projectCards.nth(i);
      await expect(card.locator("img")).toBeVisible();
      await expect(card.locator("h3")).toBeVisible();
      const detailsBtn = card.locator('a:has-text("View Details")');
      await expect(detailsBtn).toBeVisible();
    }

    // Verify detailed project page contents for all 3 projects
    const slugs = ["jkkniu-research-society", "bazar-dor", "jkkniu-sdc"];
    for (const slug of slugs) {
      await page.goto(`/work/${slug}`);
      await expect(page.locator("h1")).toBeVisible();

      // Main tech stack used
      const stack = page.getByText("Stack", { exact: true });
      await expect(stack).toBeVisible();

      // Live project link
      const liveLink = page.locator('a:has-text("live site"), a:has-text("Live preview")').first();
      await expect(liveLink).toBeVisible();

      // GitHub repository link
      const repoLink = page.locator('a:has-text("Source code")').first();
      await expect(repoLink).toBeVisible();

      // Challenges
      await expect(page.locator("text=Challenges").first()).toBeVisible();

      // Potential improvements and future plans
      await expect(page.locator("text=What I'd improve next").first()).toBeVisible();
    }
  });

  test("10. Contact Information - Email, phone, whatsapp", async ({ page }) => {
    await page.goto("/#contact");
    const contactSection = page.locator("#contact");
    await expect(contactSection).toBeVisible();

    await expect(contactSection.locator('a[href^="mailto:"]').first()).toBeVisible();
    await expect(contactSection.locator('a[href^="tel:"]').first()).toBeVisible();
    await expect(contactSection.locator('a[href*="wa.me"]').first()).toBeVisible();
  });

  test("11. Footer - Simple and elegant footer present", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer).toContainText("Shahjalal Ahmed Nishat");
  });

  test("12. Responsive UI - Clean layout across Tablet and Mobile viewports", async ({ page }) => {
    // Tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/");
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.locator("#top")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();

    // Mobile viewport
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto("/");
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.locator("#top")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
  });
});
