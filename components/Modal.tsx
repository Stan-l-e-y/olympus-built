'use client';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from '@/styles/Modal.module.css';
import { useSetModalOpen } from '@/lib/store';

export default function Modal({ content }: { content: JSX.Element }) {
  const ref = useRef<HTMLDivElement | null>(null);

  const setModalOpen = useSetModalOpen();

  const modalRoot = document.getElementById('modalPortal') as HTMLElement;

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [setModalOpen]);

  return modalRoot
    ? createPortal(
        <div className="bg-blue-50">
          <div
            ref={ref}
            className={`${styles.modalContent} bg-gray-300 p-7 absolute z-50 rounded-md flex flex-col justify-center items-center`}
          >
            {content}
          </div>
        </div>,
        modalRoot
      )
    : null;
}
