import React from 'react';
import './NextVideos.scss';
import VideoPreview from './VideoPreview';

export default function NextVideos() {
  return (
    <div className='next-videos'>
      <h3 className='next-videos__title'>Next Videos</h3>
      <VideoPreview />
    </div>
  )
}
