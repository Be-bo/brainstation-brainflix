import React from 'react';
import './Comment.scss';
import { getFormattedDate } from '../../helpers';

export default function Comment({comment}) {
  
  if(!comment) return null;

  return (
    <div className='comment'>
      <img className='comment__avatar' alt='User avatar'/>
      <div className='comment__text-container'>
        <div className='comment__header'>
          <h2 className='comment__text'>{comment.name ? comment.name : 'No name available'}</h2>
          <p className='comment__text'>{comment.timestamp ? getFormattedDate(comment.timestamp) : 'No timestamp available'}</p>
        </div>
        <p className='comment__text comment__text-content'>{comment.comment ? comment.comment : 'No comment available'}</p>
      </div>
    </div>
  )
}
