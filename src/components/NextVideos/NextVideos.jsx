import React from 'react';
import './NextVideos.scss';
import VideoPreview from '../VideoPreview/VideoPreview';
import {Link} from 'react-router-dom';

export default function NextVideos({ filteredVideos, videoClick }) {

  return (
    <div className='next-videos'>
      <h3 className='next-videos__title'>Next Videos</h3>
      {filteredVideos.map((video) =>
        <Link key={video.id} to={`/videos/${video.id}`}>
          <VideoPreview video={video} />
        </Link>
      )}
    </div>
  )
}
