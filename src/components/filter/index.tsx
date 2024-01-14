import {
	FileWordFilled,
	PoundCircleFilled,
	StarFilled,
} from "@ant-design/icons";
import clsx from "clsx";
import { useState } from "react";
import { Button } from "react-aria-components";
import type { Method } from "../../types";
import styles from "./styles.module.css";

type Props = {
	handleFilterChange: (method: Method) => void;
};

const FILTER_TEXT: Record<Method, string> = {
	alphabetically: "alphabetically",
	price: "price",
	rating: "star rating",
};

function FilterButton({
	method,
	isActive,
	handleSetActive,
}: {
	method: Method;
	isActive: Method | null;
	handleSetActive: (method: Method) => void;
}) {
	return (
		<Button
			onPress={() => handleSetActive(method)}
			aria-label={`filter-${method}`}
			aria-pressed={isActive === method}
			className={clsx(
				styles.button,
				{ [styles.isActive]: isActive === method },
				`filter-${method}`,
			)}
		>
			<div>
				sort {method === "price" || method === "rating" ? "by" : null}{" "}
				<span className={styles.filterText}>{FILTER_TEXT[method]}</span>
			</div>
			{method === "price" ? (
				<PoundCircleFilled />
			) : method === "rating" ? (
				<StarFilled />
			) : method === "alphabetically" ? (
				<FileWordFilled />
			) : null}
		</Button>
	);
}

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
