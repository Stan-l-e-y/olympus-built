'use client';
import {
  useEffect,
  RefObject,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import { createPortal } from 'react-dom';
import styles from '@/styles/Modal.module.css';
import { useIsModalOpen, useSetModalOpen } from '@/lib/store';

export default function Modal() {
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
            className={`${styles.modalContent} bg-red-400 p-4 absolute z-50 `}
          >
            weed
          </div>
        </div>,
        modalRoot
      )
    : null;
}
