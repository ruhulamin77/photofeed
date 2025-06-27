import React from 'react';
import PhotoCard from './PhotoCard';

export default function PhotoList({ photos }) {
  return (
    <div className="img-grid container">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
