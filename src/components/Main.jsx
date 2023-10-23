import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import VideoDetails from "./Video/VideoDetails";
import Comments from "./Comment/Comments";
import NextVideos from "./Video/NextVideos";
import VideosData from "../data/videos.json";
import VideosDetails from "../data/video-details.json";

function Main() {
	const [selectedVideoDetails, setSelectedVideoDetails] = useState(
		VideosDetails[0]
	);
	const handleVideoClick = (video) => {
		const newVideoDetails = VideosDetails.find(
			(videoDetails) => videoDetails.id == video.id
		);
		setSelectedVideoDetails(newVideoDetails);
	};
	const filteredVideos = VideosData.filter(
		(video) => video.id != selectedVideoDetails.id
	);

	return (
		<div>
			<header>
				<NavBar />
				<Hero thumbnail={selectedVideoDetails.image} />
			</header>
			<main>
				<div>
					<VideoDetails selectedVideoDetails={selectedVideoDetails} />
					<Comments selectedVideoDetails={selectedVideoDetails} />
				</div>
				<NextVideos filteredVideos={filteredVideos} videoClick={handleVideoClick} />
			</main>
		</div>
	);
}

export default Main;
