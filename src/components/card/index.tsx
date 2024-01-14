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
			<div style={{ display: "flex" }}>
				<img src={hotelImage} alt={hotel} />
				<div>
					<h3 style={{ color: "var(--light-blue)" }}>{hotel}</h3>
					<p>{location}</p>
					<div className={styles.ratingsContainer}>
						{Array.from({ length: rating }).map((_, index) => (
							<div key={`rating-${index}`} className={styles.rating}>
								<StarFilled style={{ color: "var(--brand-yellow)" }} />
							</div>
						))}
					</div>

					<div>
						<p>
							<span>
								{adults} {pluralise("adult", adults)}
							</span>
							{children ? (
								<span>
									, {children} {pluralise("child", children, "ren")}
								</span>
							) : null}
							{infants ? (
								<span>
									{" "}
									& {infants} {pluralise("infant", infants)}
								</span>
							) : null}
						</p>
					</div>

					<div>
						<p>
							<span>{departureDate}</span>
							<span> for </span>
							<span>{durationDays} days</span>
						</p>
					</div>

					<div>
						<p>departing from {departureAirport}</p>
					</div>

					<div>
						<Button
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								backgroundColor: "var(--brand-yellow)",
							}}
						>
							<span>Book now</span>
							<span>{moneyFormat.format(price)}</span>
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.descriptionContainer}>
				<Button
					onPress={() => setIsActive(!isActive)}
					style={{ display: "flex", alignItems: "center" }}
				>
					<span>Read {isActive ? "less" : "more"} about this hotel </span>
					{isActive ? <DownOutlined /> : <RightOutlined />}
				</Button>
				<div style={{ height: isActive ? ref.current?.offsetHeight : 0 }}>
					<div ref={ref}>
						<h3>Overview</h3>
						<p>{overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
