import React from 'react';
import { Image } from 'antd';
import { GALLERY_PHOTO_FILENAMES, urlPhotoInGallery } from './siteMedia';

const Gallery: React.FC = () => (
  <div className="couture-gallery">
    <Image.PreviewGroup>
      {GALLERY_PHOTO_FILENAMES.map((file) => (
        <div className="couture-gallery__cell" key={file}>
          <Image
            src={urlPhotoInGallery(file)}
            alt={file.replace(/\.[^.]+$/, '').replace(/_/g, ' ')}
            className="couture-gallery__item"
          />
        </div>
      ))}
    </Image.PreviewGroup>
  </div>
);

export default Gallery;
