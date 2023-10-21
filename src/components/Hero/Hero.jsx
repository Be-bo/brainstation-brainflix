import React from "react";
import PlaceholderVideo from '../../assets/video.mp4';
import "./Hero.scss";

export default function Hero({thumbnail}) {
	return (
		<div className="hero" >
			<video className="hero__video" controls poster={thumbnail} src={PlaceholderVideo}> 
			</video>
		</div>
	);
}
