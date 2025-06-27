import Modal from '@/components/Modal';
import PhotoDetails from '@/components/PhotoDetails';
import React from 'react';

export default function PhotoModal({ params: { id, lang } }) {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
}
