import React from 'react';
import './VideoPreview.scss';

export default function VideoPreview({video, videoClick}) {
  return (
    <div className='video-preview'>
      <img className='video-preview__thumbnail' alt='Video thumbnail' src={video.image} onClick={()=>videoClick(video)}/>
      <div className='video-preview__info'>
        <h2 className='video-preview__text'>{video.title}</h2>
        <p className='video-preview__text'>{video.channel}</p>
      </div>
    </div>
  )
}
