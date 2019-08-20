import React from 'react';
import VideoListItem from '../components/VideoListItem';

const VideoList = () => {
  const movies = ['film1', 'film2', 'film3'];
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <VideoListItem key={movie} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
