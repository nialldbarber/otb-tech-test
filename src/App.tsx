import { useMemo, useState } from "react";
import styles from "./app.module.css";
import { Card } from "./components/card";
import { Filter } from "./components/filter";
import hotel from "./data/hotels.json";
import { invokeSortBy } from "./lib/sorting";
import type { Method } from "./types";

export default function App() {
	const [filter, setFilter] = useState<Method>("price");
	const handleFilterChange = (method: Method) => setFilter(method);
	const filteredHotels = useMemo(() => invokeSortBy(hotel, filter), [filter]);

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<Filter handleFilterChange={handleFilterChange} />
				<section>
					{filteredHotels.map((hotelCard) => (
						<Card key={hotelCard.id} hotelCard={hotelCard} />
					))}
				</section>
			</div>
		</main>
	);
}
