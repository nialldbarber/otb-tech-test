export const moneyFormat = Intl.NumberFormat("en-GB", {
	style: "currency",
	currency: "GBP",
});

export function pluralise(str: string, quantity: number, override?: string) {
	if (override?.length) {
		return `${str}${quantity > 1 ? override : ""}`;
	}
	return `${str}${quantity > 1 ? "s" : ""}`;
}
