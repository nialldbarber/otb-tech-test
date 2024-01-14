import { useMemo, useState } from "react";
import styles from "./app.module.css";
import hotel from "./data/hotels.json";
import { invokeSortBy } from "./lib/sorting";
import type { Method } from "./types";

function App() {
	const [filter, setFilter] = useState<Method>("price");
	const handleFilterChange = (method: Method) => setFilter(method);
	const filteredHotels = useMemo(() => invokeSortBy(hotel, filter), [filter]);

	return (
		<main>
			<div className={styles.container}>
				<p>filter goes here</p>
				<section>
					{filteredHotels.map((hotelCard) => (
						<p key={hotelCard.id}>cards</p>
					))}
				</section>
			</div>
		</main>
	);
}

export default App;
