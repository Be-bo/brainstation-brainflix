import React from 'react';
import './VideoPreview.scss';

export default function VideoPreview() {
  return (
    <div className='video-preview'>
      <img className='video-preview__thumbnail'/>
      <div className='video-preview__info'>
        <h2>Become A Travel Pro In One Easy Lesson</h2>
        <h2>Todd Welch</h2>
      </div>
    </div>
  )
}
