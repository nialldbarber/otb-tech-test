import { describe, expect, it } from "vitest";
import { moneyFormat, pluralise } from "./formatting";

describe("moneyFormat", () => {
	it("should format number to GBP currency", () => {
		const result = moneyFormat.format(1234.56);
		expect(result).toBe("£1,234.56");
	});
});

describe("pluralise", () => {
	it("should add 's' to the end of the string if quantity is more than 1", () => {
		const result = pluralise("apple", 2);
		expect(result).toBe("apples");
	});

	it("should not add 's' to the end of the string if quantity is 1", () => {
		const result = pluralise("apple", 1);
		expect(result).toBe("apple");
	});

	it("should use override string if provided and quantity is more than 1", () => {
		const result = pluralise("box", 2, "es");
		expect(result).toBe("boxes");
	});

	it("should not use override string if quantity is 1", () => {
		const result = pluralise("box", 1, "es");
		expect(result).toBe("box");
	});
});
