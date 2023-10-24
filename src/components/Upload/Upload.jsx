import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Upload.scss";
import { useDropzone } from "react-dropzone";
import axios from 'axios';
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

function Upload() {

	// TODO: move to a JS file
	const onDrop = (filesSelected) => {
		console.log(filesSelected);
		const formData = new FormData();
		formData.append('image', filesSelected[0]);

		axios.post('http://3.145.198.110:80/upload', formData, {
			Headers:{
				'Content-Type': 'multipart/form-data',
			},
		})
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.error(err.message);
		})
	};
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div>
			<NavBar />

			<form className="upload-form" action="submit">
				<h1 className="upload-form__page-title upload-form__title">Upload Video</h1>

				<div className="upload-form__input-layer">
					<div className="upload-form__thumbnail-div" {...getRootProps({ className: "dropzone" })}>
						<input {...getInputProps()} />
						<h3 className="upload-form__title upload-form__label">Video Thumbnail</h3>
						<img className="upload-form__thumbnail" src={thumbnail} />
					</div>

					<div className="upload-form__title-desc-div">
						<h3 className="upload-form__video-title upload-form__title upload-form__label">
							Title Your Video
						</h3>
						<input
							className="upload-form__name"
							type="text"
							placeholder="Add a title to your video"
						/>

						<h3 className="upload-form__description-title upload-form__title upload-form__label">
							Add a Video Description
						</h3>
						<textarea
							className="upload-form__description"
							placeholder="Add a description to your video"
						/>
					</div>
				</div>

				<div className="upload-form__btn-div">
					<div className="upload-form__btn-container">
						<i className="upload-form__btn-icon" />
						<button className="upload-form__btn" type="submit">
							Publish
						</button>
					</div>

					<Link className="upload-form__cancel-btn" to="/">
						Cancel
					</Link>
				</div>
			</form>
		</div>
	);
}

export default Upload;
