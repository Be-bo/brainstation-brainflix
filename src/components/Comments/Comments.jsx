import React from 'react';
import './Comments.scss';
import InputComment from '../InputComment/InputComment';
import Comment from '../Comment/Comment';

export default function Comments({ selectedVideoDetails }) {
  selectedVideoDetails.comments?.sort((a, b) => b.timestamp - a.timestamp);
  return (
    <div className="comments">
      <h2 className="comments__title">
        {selectedVideoDetails.comments?.length} Comments
      </h2>
      <InputComment videoId={selectedVideoDetails.id} />
      <Comment />
      {selectedVideoDetails.comments?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
