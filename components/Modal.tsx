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

  const [mounted, setMounted] = useState(false);
  const isModalOpen = useIsModalOpen();
  const setModalOpen = useSetModalOpen();
  // useEffect(() => {
  //   ref.current = document.querySelector<HTMLElement>('#modalPortal');
  //   setMounted(true);
  // }, []);

  useEffect(() => {
    console.log(ref.current);
    const handleOutsideClick = (event: any) => {
      // console.log(ref.current);
      // console.log(event.target);

      if (ref.current && ref.current.contains(event.target)) {
        console.log('tes');
      }

      // if (ref.current && !ref.current.contains(event.target)) {
      //   // setModalOpen(false);
      //   console.log('tset');
      // }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // if (typeof window === 'undefined') {
  //   return null;
  // }
  const modalRoot = document.getElementById('modalPortal') as HTMLElement;

  return modalRoot
    ? createPortal(
        <div ref={ref} className="bg-blue-50">
          <div className={`${styles.modalContent} bg-red-400 p-4 absolute`}>
            weed
          </div>
        </div>,
        modalRoot
      )
    : null;
}
