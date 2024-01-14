import { describe, expect, it } from "vitest";
import { invokeSortBy } from "./sorting";

const aHotel = {
	id: 2,
	hotel: "A Hotel",
	hotelImage: "imageA.jpg",
	location: "Location A",
	rating: 5,
	bookingDetails: {
		adults: 2,
		children: 0,
		infants: 0,
		departureDate: "2022-12-01",
		durationDays: 7,
		departureAirport: "Airport A",
	},
	price: 300,
	overview: "Overview A",
};
const bHotel = {
	id: 1,
	hotel: "B Hotel",
	hotelImage: "imageB.jpg",
	location: "Location B",
	rating: 3,
	bookingDetails: {
		adults: 2,
		children: 0,
		infants: 0,
		departureDate: "2022-12-01",
		durationDays: 7,
		departureAirport: "Airport B",
	},
	price: 200,
	overview: "Overview B",
};
const cHotel = {
	id: 3,
	hotel: "C Hotel",
	hotelImage: "imageC.jpg",
	location: "Location C",
	rating: 4,
	bookingDetails: {
		adults: 2,
		children: 0,
		infants: 0,
		departureDate: "2022-12-01",
		durationDays: 7,
		departureAirport: "Airport C",
	},
	price: 100,
	overview: "Overview C",
};

const data = [aHotel, bHotel, cHotel];

describe("invokeSortBy", () => {
	it("should sort hotels alphabetically", () => {
		const result = invokeSortBy(data, "alphabetically");
		expect(result).toEqual([aHotel, bHotel, cHotel]);
	});

	it("should sort hotels by rating", () => {
		const result = invokeSortBy(data, "rating");
		expect(result).toEqual([aHotel, cHotel, bHotel]);
	});

	it("should sort hotels by price", () => {
		const result = invokeSortBy(data, "price");
		expect(result).toEqual([cHotel, bHotel, aHotel]);
	});
});
