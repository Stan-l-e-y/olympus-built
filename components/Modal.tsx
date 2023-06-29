'use client';
import { useEffect, RefObject, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Modal() {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#modalPortal');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <>
          <div className="bg-red-400 p-4">weed</div>
        </>,
        ref.current
      )
    : null;
}
