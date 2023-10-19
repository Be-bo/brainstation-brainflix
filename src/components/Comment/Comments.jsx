import React from 'react';
import './Comments.scss';
import InputComment from './InputComment';
import Comment from './Comment';

export default function Comments() {
  return (
    <div>
      <p>3 Comments</p>
      <InputComment />
      <Comment />
    </div>
  )
}
