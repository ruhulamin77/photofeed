'use client';

import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog ref={modalRef} onClose={onHide}>
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center backdrop-blur-0">
        <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 relative">
          <button onClick={onHide} className="absolute top-2 right-2">
            <Image src="/xmark.svg" alt="close" width={30} height={30} />
          </button>
          {children}
        </div>
      </div>
    </dialog>,
    document.getElementById('modal-root-content')
  );
};

export default Modal;
