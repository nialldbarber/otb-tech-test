import type { Hotels, Method } from "../types";

export function invokeSortBy(data: Array<Hotels>, method: Method) {
	const sortedData = [...data];
	// sorted from A-B
	if (method === "alphabetically") {
		return sortedData.sort((a, b) => a.hotel.localeCompare(b.hotel));
	}
	// sorted from 5-1
	if (method === "rating") {
		return sortedData.sort((a, b) => b.rating - a.rating);
	}
	// sorted from lowest to highest
	return sortedData.sort((a, b) => a.price - b.price);
}
