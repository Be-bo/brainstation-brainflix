import React from "react";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "./NavBar.scss";

export default function NavBar() {
	return (
		<nav className="nav-bar">
			<img className="nav-bar__logo" alt="BrainFlix logo" src={logo} />
			
			<div className="nav-bar__search-container">
				<input className="nav-bar__search-field" type="text" placeholder="Search" />
				<i className="nav-bar__search-icon"></i>
			</div>

			<div className="nav-bar__avatar" alt="Avatar of the current user" />

			<div className="nav-bar__btn-container">
				<button className="nav-bar__btn">Upload</button>
				<i className="nav-bar__upload-icon"></i>
			</div>
		</nav>
	);
}
