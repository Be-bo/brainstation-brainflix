import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./Upload.scss";
import { useDropzone } from "react-dropzone";
import axios from "axios";

function Upload() {
	const [selectedFiles, setSelectedFiles] = useState([]);
	const [videoTitle, setVideoTitle] = useState('');
	const [videoDescription, setVideoDescription] = useState('');
	const [thumbnail, setThumbnail] = useState(null);

	const handleTitleChange = (e) => {setVideoTitle(e.target.value);}
	const handleDescriptionChange = (e) => {setVideoDescription(e.target.value);}

	const formData = new FormData();

	const onDrop = (files) => { 
		setSelectedFiles(files);
		if (files[0]) {
			const reader = new FileReader();
			reader.onload = () => {
			  setThumbnail(reader.result);
			};
			reader.readAsDataURL(files[0]);
		  }
	};
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		accept: {
			'image/png': ['.png'],
			'image/jpeg': ['.jpeg'],
		},
		onDrop
	});

	function uploadFormData() {
		formData.append("json", JSON.stringify({
			title: videoTitle,
			description: videoDescription
		}));
		formData.append("image", selectedFiles[0]);

		axios
			.post("http://3.145.198.110:80/upload", formData, {
				// .post("http://localhost:80/upload", formData, {
				headers: {
					'Content-Type': "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.error(err.message);
			});
	}

	return (
		<div>
			<NavBar />

			<form className="upload-form" action="submit">
				<h1 className="upload-form__page-title upload-form__title">Upload Video</h1>
				<div {...getRootProps({ className: "dropzone" })}>
					<input {...getInputProps()} />

					<div className="upload-form__browse-container">
						<div className="upload-form__btn-container">
							<i className="upload-form__btn-icon" />
							<button className="upload-form__btn" type="button">
								Browse
							</button>
						</div>

						<p>{selectedFiles[0]?.path}</p>
					</div>
				</div>

				<div className="upload-form__input-layer">
					<div className="upload-form__thumbnail-div">
						<h3 className="upload-form__title upload-form__label">Video Thumbnail</h3>
						{thumbnail && <img className="upload-form__thumbnail" src={thumbnail} alt="Selected file thumbnail" />}
					</div>

					<div className="upload-form__title-desc-div">
						<h3 className="upload-form__video-title upload-form__title upload-form__label">
							Title Your Video
						</h3>
						<input
							className="upload-form__name"
							type="text"
							placeholder="Add a title to your video"
							onChange={handleTitleChange}
							value={videoTitle}
						/>

						<h3 className="upload-form__description-title upload-form__title upload-form__label">
							Add a Video Description
						</h3>
						<textarea
							className="upload-form__description"
							placeholder="Add a description to your video"
							onChange={handleDescriptionChange}
							value={videoDescription}
						/>
					</div>
				</div>

				<div className="upload-form__btn-div">
					<div className="upload-form__btn-container">
						<i className="upload-form__btn-icon" />
						<button className="upload-form__btn" type="button" onClick={uploadFormData}>
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
