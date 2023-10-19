import React from "react";
import "./VideoDetails.scss";

export default function VideoDetails() {
	return (
		<div className="details">
			<h1>BMX Rampage: 2021 Highlights</h1>

			<div className="details__info">
				<h2 className="details__info-text">By Red Crow</h2>
				<div className="details__views-container">
					<i className="details__views-icon"></i>
					<p className="details__info-text details__views-count">1,001,023</p>
				</div>
				<p className="details__info-text">07/11/2021</p>

				<div className="details__likes-container">
					<i className="details__likes-icon"></i>
					<p className="details__info-text details__likes-count">110,985</p>
				</div>
			</div>

			<p>
				On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew
				the doors off what is possible on two wheels, unleashing some of the biggest
				moments the sport has ever seen. While mother nature only allowed for one
				full run before the conditions made it impossible to ride, that was all that
				was needed for event veteran Kyle Strait, who won the event for the second
				time -- eight years after his first Red Cow Rampage title
			</p>
		</div>
	);
}
