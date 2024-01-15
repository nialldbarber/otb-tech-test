import { FilterButton } from "@/components/filter/filter-button";
import styles from "@/components/filter/styles.module.css";
import type { Method } from "@/types";
import { useState } from "react";

type Props = {
	handleFilterChange: (method: Method) => void;
};

export function Filter({ handleFilterChange }: Props) {
	const [isActive, setIsActive] = useState<Method | null>("price");

	function handleSetActive(method: Method) {
		handleFilterChange(method);
		setIsActive(method);
	}

	return (
		<section className={styles.filter}>
			<FilterButton
				method="alphabetically"
				isActive={isActive}
				handleSetActive={handleSetActive}
			/>
			<FilterButton
				method="price"
				isActive={isActive}
				handleSetActive={handleSetActive}
			/>
			<FilterButton
				method="rating"
				isActive={isActive}
				handleSetActive={handleSetActive}
			/>
		</section>
	);
}
