import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="nav-bar">
			<div className="nav-bar__search-container">
				<input type="text" placeholder="Search" />
        <img className="nav-bar__avatar"/>
			</div>
      <button className="nav-bar__btn">Upload</button>
		</nav>
	);
}
