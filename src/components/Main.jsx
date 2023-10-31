import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import './Main.scss';
import NavBar from "./NavBar/NavBar";
import Hero from "./Hero/Hero";
import VideoDetails from "./Video/VideoDetails";
import Comments from "./Comment/Comments";
import NextVideos from "./Video/NextVideos";
import axios from 'axios';


function Main() {
	const [selectedVideoDetails, setSelectedVideoDetails] = useState({});
	const [videos, setVideos] = useState([]);
	const [selectedVideoId, setSelectedVideoId] = useState('');

	useEffect(() => {
		async function fetchVideos(videoId) {
			try {
				const response = await axios.get('http://3.145.198.110:80/videos');
				const parsedVideos = JSON.parse(response.data.data);

				if(videoId == '') videoId = parsedVideos.items[0].id;
				const filteredVideos = parsedVideos.items.filter((item) =>{
					return item.id != videoId;
				});
				
				setVideos(filteredVideos);

				const detailsResponse = await axios.get(`http://3.145.198.110:80/videos/${videoId}`);
				const parsedDetails = JSON.parse(detailsResponse.data.data);
				setSelectedVideoDetails(parsedDetails);
			} catch (error) {
				console.error(error);
			}
		}

		fetchVideos(selectedVideoId);
	}, [selectedVideoId]);


	// get new video that got clicked on
	const handleVideoClick = async (video) => {setSelectedVideoId(video.id);};

	return (
		<div>
			<header>
				<NavBar />
				<Hero thumbnail={selectedVideoDetails.image} />
			</header>
			<main>
				<div className="details-comment-div">
					<VideoDetails selectedVideoDetails={selectedVideoDetails} />
					<Comments selectedVideoDetails={selectedVideoDetails} />
				</div>
				<NextVideos filteredVideos={videos} videoClick={handleVideoClick} />
			</main>
		</div>
	);
}

export default Main;
