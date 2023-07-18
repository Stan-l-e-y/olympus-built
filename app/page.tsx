'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import Gradient from '../public/gradient.png';
import EmailIcon from '@/icons/EmailIcon';
import Home1 from '@/icons/svgs/Home1';
import Home2 from '@/icons/svgs/Home2';
import Home3 from '@/icons/svgs/Home3';
import Home4 from '@/icons/svgs/Home4';
import Home5 from '@/icons/svgs/Home5';
import Home6 from '@/icons/svgs/Home6';
import Home7 from '@/icons/svgs/Home7';
import Home8 from '@/icons/svgs/Home8';
import Home9 from '@/icons/svgs/Home9';
import Modal from '@/components/Modal';
import { useIsModalOpen, useSetModalOpen } from '@/lib/store';
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
const DynamicModal = dynamic(() => import('../components/Modal'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

//TODO: add larger svgs for bigger screen size
//TODO: media query the modal position
export default function Home() {
  const setModalOpen = useSetModalOpen();
  const isModalOpen = useIsModalOpen();

  return (
    <main className={styles.layout}>
      {isModalOpen ? <DynamicModal /> : ''}

      <div className="col-start-4 col-end-5 row-start-1 row-end-3 flex relative z-10">
        <Home2 className=" absolute " />
        <Home1 className="  absolute left-[25px] " />
        <Home3 className="  absolute left-[55px] " />
        <Home7 className="  absolute left-[405px] " />
        <Home8 className="  absolute left-[805px]  " />
        <Home9 className="  absolute left-[955px] top-[100px]  " />
      </div>
      <div className="col-start-1 col-end-3 row-start-2 row-end-3 flex relative">
        <Home4 className="  absolute left-[15px] " />
        <Home5 className="  absolute top-[150px] " />
        <Home6 className="  absolute top-[150px] " />
      </div>

      <div className={`${styles.layoutNav} mt-8 flex justify-between z-40`}>
        <div className="mr-7 text-red font-semibold">
          <div>Home</div>
          <div className="border-t-2 mt-3 border-red-700  "></div>
        </div>
        <div className="mr-10 font-semibold">Products</div>
        <div
          className="bg-red-700 py-2 px-5 rounded-3xl text-white font-bold hover:cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Login
        </div>
      </div>
      <div className={`${styles.main} ${styles.layoutMain}  z-40`}>
        <div className={`${styles.mainChild}  relative`}>
          <div className="text-5xl font-bold">
            A massive library of<br></br> free 3D{' '}
            <span className="text-red-700">shapes</span>
          </div>
          <div className="mt-5 text-gray-600 text-xl">
            Lorem ipsum is placeholder text commonly used in the<br></br>{' '}
            graphic, print, and publishing industries
          </div>
          <div className={`${styles.emailGrid} hover:cursor-pointer`}>
            <input
              type="email"
              className={`${styles.emailInput}
                          w-[455px]
                          py-4
                          pl-6
                          self-start
                          text-base
                          font-normal                         
                          placeholder:opacity-80
                          rounded-3xl
                          transition
                          ease-in-out
                          focus:outline-red-300
                          m-0
                          mt-8
                          focus:outline-none
                          placeholder:italic
                          flex-1`}
              placeholder="Your email address"
            ></input>
            <div
              className={`${styles.buttonInput} col-start-2 col-end-3 bg-gradient-to-r from-red-200 via-red-500 to-red-500 p-2 rounded-3xl w-[168px] text-red-100 text-sm font-semibold h-[36px] flex self-end mb-[10px] ml-7 justify-between`}
            >
              <div className="ml-4">Download</div>
              <EmailIcon className="mr-2 mt-[1px]" />
            </div>
          </div>
        </div>

        <Image
          className={`${styles.image} w-auto rounded-xl h-12 row-start-3 row-end-5 col-start-8 col-end-10`}
          src={Gradient}
          alt="Gradient"
          priority
        />
      </div>
    </main>
  );
}
