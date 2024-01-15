import { expect, test } from "@playwright/test";

test("that `price` is the default sort value", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByLabel("filter results price")).toHaveAttribute(
		"aria-pressed",
		"true",
	);
});

test("when the alphabetical filter item is clicked, the list changes to reflect that", async ({
	page,
}) => {
	await page.goto("/");
	page.locator(".filter-alphabetically").click();
	await expect(
		page.getByLabel("filter results alphabetically"),
	).toHaveAttribute("aria-pressed", "true");
	await expect(page.getByLabel("filter results price")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
	await expect(page.getByLabel("filter results rating")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
});

test("when the ratings is clicked, the list changes to reflect that", async ({
	page,
}) => {
	await page.goto("/");
	page.locator(".filter-rating").click();
	await expect(page.getByLabel("filter results rating")).toHaveAttribute(
		"aria-pressed",
		"true",
	);
	await expect(page.getByLabel("filter results price")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
	await expect(
		page.getByLabel("filter results alphabetically"),
	).toHaveAttribute("aria-pressed", "false");
});

test("when the price filter item is clicked, the list changes to reflect that", async ({
	page,
}) => {
	await page.goto("/");
	page.locator(".filter-price").click();
	await expect(page.getByLabel("filter results price")).toHaveAttribute(
		"aria-pressed",
		"true",
	);
	await expect(page.getByLabel("filter results rating")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
	await expect(
		page.getByLabel("filter results alphabetically"),
	).toHaveAttribute("aria-pressed", "false");
});
