import { photos } from '@/data/image-data';

const getAllPhotos = () => {
  const concisePhotos = photos.map((photo) => ({
    id: photo.id,
    title: photo.title,
    url: photo.url,
  }));

  return concisePhotos;
};

const getPhotoById = (id) => {
  return photos.find((photo) => photo.id === id);
};

export { getAllPhotos, getPhotoById };
