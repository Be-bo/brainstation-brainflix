import React from 'react';
import './Comment.scss';

export default function Comment() {
  return (
    <div className='comment'>
      <img className='comment__avatar' alt='User avatar'/>
      <div className='comment__text-container'>
        <div className='comment__header'>
          <h2 className='comment__text'>Michael Lyons</h2>
          <p className='comment__text'>08/09/2021</p>
        </div>
        <p className='comment__text comment__text-content'>They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
      </div>
    </div>
  )
}
