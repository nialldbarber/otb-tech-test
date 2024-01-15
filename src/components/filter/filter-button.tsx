import styles from "@/components/filter/styles.module.css";
import type { Method } from "@/types";
import {
	FileWordFilled,
	PoundCircleFilled,
	StarFilled,
} from "@ant-design/icons";
import clsx from "clsx";
import type { ComponentType } from "react";
import { Button } from "react-aria-components";

type Props = {
	method: Method;
	isActive: Method | null;
	handleSetActive: (method: Method) => void;
};

const FILTER_TEXT: Record<Method, string> = {
	alphabetically: "alphabetically",
	price: "price",
	rating: "star rating",
};

const ICONS: Record<Method, React.ComponentType> = {
	alphabetically: FileWordFilled,
	price: PoundCircleFilled,
	rating: StarFilled,
};

export function FilterButton({ method, isActive, handleSetActive }: Props) {
	const Icon: ComponentType<any> = ICONS[method];

	return (
		<Button
			onPress={() => handleSetActive(method)}
			aria-label={`filter results ${method}`}
			aria-pressed={isActive === method}
			className={clsx(
				styles.button,
				{ [styles.isActive]: isActive === method },
				`filter-${method}`,
			)}
		>
			<div className={styles.filterRow}>
				<p
					className={clsx(styles.filterRowText, {
						[styles.filterRowTextActive]: isActive === method,
					})}
				>
					sort {method === "price" || method === "rating" ? "by" : null}{" "}
					<span className={styles.filterText}>{FILTER_TEXT[method]}</span>
				</p>
				<Icon
					className={clsx(styles.icon, {
						[styles.isActive]: isActive === method,
					})}
				/>
			</div>
		</Button>
	);
}
