import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Upload.scss";
import thumbnail from '../../assets/Images/Upload-video-preview.jpg';

function Upload() {
	return (
		<div>
			<NavBar />

			<form className="upload-form" action="submit">
				<h1 className="upload-form__title">Upload Video</h1>
				<h3 className="upload-form__thumbnail-title upload-form__title upload-form__label">Video Thumbnail</h3>
				<img className="upload-form__thumbnail" src={thumbnail}/>

				<h3 className="upload-form__video-title upload-form__title upload-form__label">Title Your Video</h3>
				<input className="upload-form__name" type="text" placeholder="Add a title to your video" />

				<h3 className="upload-form__description-title upload-form__title upload-form__label">Add a Video Description</h3>
				<textarea className="upload-form__description" placeholder="Add a description to your video" />

				<div className="upload-form__btn-container">
					<i className="upload-form__btn-icon"/>
					<button className="upload-form__btn" type="submit">Publish</button>
				</div>

				<Link className="upload-form__cancel-btn" to='/'>Cancel</Link>
			</form>
		</div>
	);
}

export default Upload;
