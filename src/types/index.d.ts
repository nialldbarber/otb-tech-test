export type Hotels = {
	id: number;
	hotel: string;
	hotelImage: string;
	location: string;
	rating: number;
	bookingDetails: {
		adults: number;
		children: number;
		infants: number;
		departureDate: string;
		durationDays: number;
		departureAirport: string;
	};
	price: number;
	overview: string;
};

type Method = "alphabetically" | "price" | "rating";
