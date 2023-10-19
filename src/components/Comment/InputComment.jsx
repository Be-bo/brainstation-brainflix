import React from "react";
import "./InputComment.scss";

export default function InputComment() {
	return (
		<div className="comment-input-container">
			<div className="comment-input-container__avatar" />

			<div className="comment-input-container__field-container">
				<h3 className="comment-input-container__field-title">
					Join the Conversation
				</h3>
				<textarea
					className="comment-input-container__text-field"
					placeholder="Add a new comment"></textarea>

				<div className="comment-input-container__btn-container">
					<i className="comment-input-container__btn-icon"></i>
					<button className="comment-input-container__btn">Comment</button>
				</div>
			</div>
		</div>
	);
}
