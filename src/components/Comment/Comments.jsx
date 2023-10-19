import React from 'react';
import './Comments.scss';
import InputComment from './InputComment';
import Comment from './Comment';

export default function Comments() {
  return (
    <div className='comments'>
      <h2 className='comments__title'>3 Comments</h2>
      <InputComment />
      <Comment />
      <Comment />
    </div>
  )
}
