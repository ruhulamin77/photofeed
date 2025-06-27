import PhotoDetails from '@/components/PhotoDetails';
import React from 'react';

export default function page({ params: { id, lang } }) {
  return <PhotoDetails id={id} lang={lang} />;
}
