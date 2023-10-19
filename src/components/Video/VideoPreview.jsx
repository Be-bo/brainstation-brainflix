import React from 'react';
import './VideoPreview.scss';

export default function VideoPreview() {
  return (
    <div className='video-preview'>
      <img className='video-preview__thumbnail' alt='Video thumbnail'/>
      <div className='video-preview__info'>
        <h2 className='video-preview__text'>Become A Travel Pro In One Easy Lesson</h2>
        <p className='video-preview__text'>Todd Welch</p>
      </div>
    </div>
  )
}
