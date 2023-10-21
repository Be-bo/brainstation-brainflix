import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import VideoDetails from "./components/Video/VideoDetails";
import Comments from "./components/Comment/Comments";
import NextVideos from "./components/Video/NextVideos";
import VideosData from './data/videos.json';
import VideosDetails from './data/video-details.json'
import { useState } from "react";

function App() {
	const [selectedVideoDetails, setSelectedVideoDetails] = useState(VideosDetails[0]);
	const handleVideoClick = (video) => {
		const newVideoDetails = VideosDetails.find((videoDetails) => videoDetails.id == video.id);
		setSelectedVideoDetails(newVideoDetails);
	};
	const filteredVideos = VideosData.filter((video) => video.id != selectedVideoDetails.id);

	return (
		<div>
			<header>
				<NavBar />
				<Hero thumbnail={selectedVideoDetails.image} />
			</header>
			<main>
				<div>
					<VideoDetails selectedVideoDetails={selectedVideoDetails} />
					<Comments />
				</div>
				<NextVideos filteredVideos={filteredVideos} videoClick={handleVideoClick} />
			</main>
		</div>
	);
}

export default App;
