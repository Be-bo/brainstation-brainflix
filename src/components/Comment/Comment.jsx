import React from 'react';
import './Comment.scss';

export default function Comment() {
  return (
    <div className='comment'>
      <img className='comment__avatar'/>
      <div className='comment__text-container'>
        <div className='comment__header'>
          <p>Michael Lyons</p>
          <p>08/09/2021</p>
        </div>
        <p>They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.</p>
      </div>
    </div>
  )
}
