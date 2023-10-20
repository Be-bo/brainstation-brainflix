import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import VideoDetails from "./components/Video/VideoDetails";
import Comments from "./components/Comment/Comments";
import NextVideos from "./components/Video/NextVideos";

function App() {
	return (
		<div>
			<header>
				<NavBar />
				<Hero />
			</header>
			<main>
				<div>
					<VideoDetails />
					<Comments />
				</div>
				<NextVideos />
			</main>
		</div>
	);
}

export default App;
