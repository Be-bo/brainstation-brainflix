import React from 'react';
import './Comments.scss';
import InputComment from '../InputComment/InputComment';
import Comment from '../Comment/Comment';

export default function Comments({ selectedVideoDetails }) {
  return (
    <div className="comments">
      <h2 className="comments__title">
        {selectedVideoDetails.comments?.length} Comments
      </h2>
      <InputComment />
      <Comment />
      {selectedVideoDetails.comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
