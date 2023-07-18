'use client';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from '@/styles/Modal.module.css';
import { useSetModalOpen } from '@/lib/store';
import Google from '../public/google.png';
import Facebook from '../public/facebook.png';
import Image from 'next/image';

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
            className={`${styles.modalContent} bg-gray-300 p-7 absolute z-50 rounded-md flex flex-col justify-center items-center`}
          >
            <div>Sign in to</div>
            <div className="text-3xl font-bold">Olympus Built</div>
            <div className="flex bg-gray-500 p-3 rounded-lg mt-8 w-12 hover:cursor-pointer">
              <Image
                className={`${styles.image} w-auto rounded-xl h-5`}
                src={Google}
                alt="Gradient"
                priority
              />
              <div className="ml-[70px]">Google</div>
            </div>
            <div className="flex bg-gray-500 p-3 rounded-lg mt-2 w-12 hover:cursor-pointer">
              <Image
                className={`${styles.image} w-auto rounded-xl h-5`}
                src={Facebook}
                alt="Gradient"
                priority
              />
              <div className="ml-[60px]">Facebook</div>
            </div>
          </div>
        </div>,
        modalRoot
      )
    : null;
}
