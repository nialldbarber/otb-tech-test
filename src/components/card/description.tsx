import styles from "@/components/card/styles.module.css";
import clsx from "clsx";

type Props = {
	isActive: boolean;
	overview: string;
};

export function Description({ isActive, overview }: Props) {
	return (
		<div
			className={clsx(styles.descriptionContainer, {
				[styles.isActive]: isActive,
			})}
			aria-expanded={isActive}
			aria-label="Hotel overview"
			role={isActive ? "region" : undefined}
		>
			<div className={styles.overviewContainer}>
				<h3 className={styles.overviewInnerTitle}>Overview</h3>
				<p className={styles.overviewInnerText}>{overview}</p>
			</div>
		</div>
	);
}
