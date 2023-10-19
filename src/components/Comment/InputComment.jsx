import React from 'react'
import './InputComment.scss';

export default function InputComment() {
  return (
    <div className='comment-input-container'>
      <img className='comment-input-container__avatar'/>
      <div className='comment-input-container__field-container'>
        <h2>Join the Conversation</h2>
        <textarea placeholder='Add a new comment'></textarea>
        <button>Comment</button>
      </div>
    </div>
  )
}
