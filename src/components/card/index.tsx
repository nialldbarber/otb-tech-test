import { useRef, useState } from "react";
import { Button } from "react-aria-components";
import { moneyFormat, pluralise } from "../../lib/formatting";
import { Hotels } from "../../types";
import styles from "./styles.module.css";

import { DownOutlined, RightOutlined, StarFilled } from "@ant-design/icons";

type Props = {
	hotelCard: Hotels;
};

export function Card({
	hotelCard: {
		hotel,
		location,
		price,
		rating,
		hotelImage,
		overview,
		bookingDetails: {
			adults,
			children,
			infants,
			departureAirport,
			departureDate,
			durationDays,
		},
	},
}: Props) {
	const [isActive, setIsActive] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	return (
		<div className={styles.card} role="contentinfo">
			<div className={styles.cardContainer}>
				<div className={styles.imageContainer}>
					<img src={hotelImage} alt={hotel} className={styles.hotelImage} />
					<Button
						onPress={() => setIsActive(!isActive)}
						className={styles.seeMoreButton}
						aria-label="see full overview of hotel"
						aria-pressed={isActive}
					>
						<span className={styles.overviewText}>
							<span className={styles.bold}>
								Read {isActive ? "less" : "more"}
							</span>{" "}
							about this hotel{" "}
						</span>
						{isActive ? (
							<DownOutlined className={styles.overviewButton} />
						) : (
							<RightOutlined className={styles.overviewButton} />
						)}
					</Button>
				</div>
				<div className={styles.hotelInfoContainer}>
					<h3>{hotel}</h3>
					<p className={styles.hotelInfoLocation}>{location}</p>
					<div className={styles.ratingsContainer}>
						{Array.from({ length: rating }).map((_, index) => (
							<div key={`rating-${index}`} className={styles.rating}>
								<StarFilled className={styles.ratingStar} />
							</div>
						))}
					</div>

					<div className={styles.detailsContainer}>
						<div>
							<p className={styles.details}>
								<span>
									<span className={styles.bold}>{adults}</span>{" "}
									{pluralise("adult", adults)}
								</span>
								{children ? (
									<span>
										, <span className={styles.bold}>{children}</span>{" "}
										{pluralise("child", children, "ren")}
									</span>
								) : null}
								{infants ? (
									<span>
										{" "}
										& <span className={styles.bold}>{infants}</span>{" "}
										{pluralise("infant", infants)}
									</span>
								) : null}
							</p>
						</div>

						<div>
							<p className={styles.details}>
								<span className={styles.bold}>{departureDate}</span>
								<span> for </span>
								<span className={styles.bold}>{durationDays} days</span>
							</p>
						</div>

						<div>
							<p className={styles.details}>
								departing from{" "}
								<span className={styles.bold}>{departureAirport}</span>
							</p>
						</div>
					</div>

					<div>
						<Button className={styles.bookNowButton}>
							<span>Book now</span>
							<span>{moneyFormat.format(price)}</span>
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.descriptionContainer}>
				<div
					style={{ height: isActive ? ref.current?.offsetHeight : 0 }}
					aria-expanded={isActive}
				>
					<div ref={ref} className={styles.overviewContainer}>
						<h3 className={styles.overviewInnerTitle}>Overview</h3>
						<p className={styles.overviewInnerText}>{overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
