import React from "react";
import { useDropzone } from "react-dropzone";

function UploadDialog() {
	const onDrop = (acceptedFiles) => {
		console.log(acceptedFiles);
	};

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div>
			<h1>Select a File</h1>
			<div {...getRootProps({ className: "dropzone" })}>
				<input {...getInputProps()} />
				<p>Drag & drop a file here, or click to select a file</p>
			</div>
		</div>
	);
}

export default UploadDialog;
