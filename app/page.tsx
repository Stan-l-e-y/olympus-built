import styles from './styles.module.css';
import Image from 'next/image';
import Gradient from '../public/gradient.png';
import EmailIcon from '@/icons/EmailIcon';

//TODO: change to extend in tailwind, default colors not working
export default function Home() {
  return (
    <main className={styles.layout}>
      <div className={`${styles.layoutNav} mt-8 flex justify-between`}>
        <div className="mr-7 text-red font-semibold">
          <div>Home</div>
          <div className="border-t-2 mt-3 border-red-700  "></div>
        </div>
        <div className="mr-10 font-semibold">Products</div>
        <div>Login</div>
      </div>
      <div className={`${styles.main} ${styles.layoutMain}  `}>
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
                          placeholder:text-white
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

{
  /* <div
              className={`${styles.buttonInput} absolute top-[248px] right-[60px] bg-gradient-to-r from-red-200 via-red-500 to-red-500 p-2 rounded-3xl w-[168px] text-red-100 text-sm font-semibold`}
            >
              <div className="ml-4">Download</div>
            </div>
            <EmailIcon className="absolute top-[258px] right-[78px]" /> */
}
