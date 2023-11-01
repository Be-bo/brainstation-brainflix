import React from "react";
import "./VideoDetails.scss";
import { getFormattedDate } from "../../helpers";

export default function VideoDetails({selectedVideoDetails}) {
	return (
		<div className="details">
			<h1>{selectedVideoDetails.title}</h1>

			<div className="details__info">
				<h2 className="details__info-text">By {selectedVideoDetails.channel}</h2>
				<div className="details__views-container">
					<i className="details__views-icon"></i>
					<p className="details__info-text details__views-count">{selectedVideoDetails.views}</p>
				</div>
				<p className="details__info-text details__date">{getFormattedDate(selectedVideoDetails.timestamp)}</p>

				<div className="details__likes-container">
					<i className="details__likes-icon"></i>
					<p className="details__info-text details__likes-count">{selectedVideoDetails.likes}</p>
				</div>

				<div className="details__spacer"></div>
			</div>

			<p className="details__description">{selectedVideoDetails.description}</p>
		</div>
	);
}
