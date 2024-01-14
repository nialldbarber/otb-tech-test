import { expect, test } from "@playwright/test";

test("that `price` is the default sort value", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByLabel("filter-price")).toHaveAttribute(
		"aria-pressed",
		"true",
	);
});

test("when the alphabetical filter item is clicked, the list changes to reflect that", async ({
	page,
}) => {
	await page.goto("/");
	const initialOrder = await page.$$eval("[role='contentinfo']", (items) =>
		items.map((item) => item.textContent),
	);

	page.on("console", () => console.log(initialOrder));

	await page.click(".filter-alphabetically");
	await expect(page.getByLabel("filter-alphabetically")).toHaveAttribute(
		"aria-pressed",
		"true",
	);
	await expect(page.getByLabel("filter-price")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
	await expect(page.getByLabel("filter-rating")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
	const newOrder = await page.$$eval("[role='contentinfo']", (items) =>
		items.map((item) => item.textContent),
	);

	page.on("console", () => console.log(newOrder));

	const alphabeticallySortedOrder = [...newOrder].sort();
	expect(newOrder).toEqual(alphabeticallySortedOrder);
	expect(initialOrder).not.toEqual(newOrder);
});

test("when the ratings is clicked, the list changes to reflect that", async ({
	page,
}) => {
	await page.goto("/");
	const initialOrder = await page.$$eval("[role='contentinfo']", (items) =>
		items.map((item) => item.textContent),
	);

	await page.click(".filter-rating");

	await expect(page.getByLabel("filter-rating")).toHaveAttribute(
		"aria-pressed",
		"true",
	);
	await expect(page.getByLabel("filter-price")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
	await expect(page.getByLabel("filter-alphabetically")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
	const newOrder = await page.$$eval("[role='contentinfo']", (items) =>
		items.map((item) => item.textContent),
	);
	const ratingsSortedOrder = [...newOrder].sort((a, b) => {
		if (a === null || b === null) {
			return 0;
		}
		return Number(a) - Number(b);
	});
	expect(newOrder).toEqual(ratingsSortedOrder);
	expect(initialOrder).not.toEqual(newOrder);
});

test("when the price filter item is clicked, the list changes to reflect that", async ({
	page,
}) => {
	await page.goto("/");
	const initialOrder = await page.$$eval("[role='contentinfo']", (items) =>
		items.map((item) => item.textContent),
	);

	await page.click(".filter-price");
	await expect(page.getByLabel("filter-price")).toHaveAttribute(
		"aria-pressed",
		"true",
	);
	await expect(page.getByLabel("filter-rating")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
	await expect(page.getByLabel("filter-alphabetically")).toHaveAttribute(
		"aria-pressed",
		"false",
	);
	const newOrder = await page.$$eval("[role='contentinfo']", (items) =>
		items.map((item) => item.textContent),
	);

	const priceSortedOrder = [...newOrder].sort((a, b) => {
		if (a === null || b === null) {
			return 0;
		}
		return Number(b) - Number(a);
	});
	expect(newOrder).toEqual(priceSortedOrder);
	expect(initialOrder).toEqual(newOrder);
});
