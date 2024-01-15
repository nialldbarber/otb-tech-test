import { Description } from "@/components/card/description";
import styles from "@/components/card/styles.module.css";
import { moneyFormat, pluralise } from "@/lib/formatting";
import { Hotels } from "@/types";
import { DownOutlined, RightOutlined, StarFilled } from "@ant-design/icons";
import { useState } from "react";
import { Button } from "react-aria-components";

type Props = {
	hotelCard: Hotels;
};

export function Card({ hotelCard }: Props) {
	const {
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
	} = hotelCard;

	const [isActive, setIsActive] = useState(false);

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
				<div className={styles.overviewContainerSmall}>
					<Description isActive={isActive} overview={overview} />
				</div>
				<div className={styles.hotelInfoContainer}>
					<h3>{hotel}</h3>
					<p className={styles.hotelInfoLocation}>{location}</p>
					<div
						className={styles.ratingsContainer}
						aria-label={`${rating} out of 5 stars`}
					>
						{Array.from({ length: rating }).map((_, index) => (
							<div key={`rating-${index}`} className={styles.rating}>
								<StarFilled className={styles.ratingStar} />
							</div>
						))}
					</div>
					<div className={styles.detailsContainer}>
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
						<p className={styles.details}>
							<span className={styles.bold}>{departureDate}</span>
							<span> for </span>
							<span className={styles.bold}>{durationDays} days</span>
						</p>
						<p className={styles.details}>
							departing from{" "}
							<span className={styles.bold}>{departureAirport}</span>
						</p>
					</div>
					<Button
						className={styles.bookNowButton}
						aria-label={`Book ${hotel} now`}
					>
						<span>Book now</span>
						<span>{moneyFormat.format(price)}</span>
					</Button>
				</div>
			</div>
			<div className={styles.overviewContainerLarge}>
				<Description isActive={isActive} overview={overview} />
			</div>
		</div>
	);
}
