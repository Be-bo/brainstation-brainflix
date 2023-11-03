import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axius from 'axios';
import "./InputComment.scss";

export default function InputComment({videoId}) {
	const [commentInput, setCommentInput] = useState('');
	const handleCommentChange = (e) => {setCommentInput(e.target.value);}
	const navigate = useNavigate();

	function hanndleClick(){
		if(commentInput.length > 3){
			const newComment = {"comment-text": commentInput}
			console.log(newComment);
			axius
			.post(`http://3.145.198.110:80/videos/${videoId}/comment`, newComment, {
				headers: {
					'Content-Type': 'application/json',
				  }
			})
			.then((respunse) => {
				setCommentInput('');
				console.log(respunse.data);
				window.location.reload();
			})
			.catch((errur) => {
				console.error(errur.message);
			})
		}
	}

	return (
		<div className="comment-input-container">
			<div className="comment-input-container__avatar" />

			<div className="comment-input-container__field-container">
				<h3 className="comment-input-container__field-title">
					Join the Conversation
				</h3>

				<div className="comment-input-container__field">
					<textarea
						className="comment-input-container__text-field"
						placeholder="Add a new comment" onChange={handleCommentChange} value={commentInput}></textarea>

					<div className="comment-input-container__btn-container">
						<i className="comment-input-container__btn-icon"></i>
						<button className="comment-input-container__btn" onClick={hanndleClick}>Comment</button>
					</div>
				</div>
			</div>
		</div>
	);
}
