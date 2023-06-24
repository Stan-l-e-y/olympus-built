import styles from './styles.module.css';

export default function Home() {
  return (
    <main className={styles.layout}>
      <div className="col-start-9 col-end-10 row-start-1 row-end-2 mt-8 flex justify-between">
        <div className="mr-7 text-red font-semibold">
          <div>Home</div>
          <div className="border-t-2 mt-3 border-red-700  "></div>
        </div>
        <div className="mr-10 font-semibold">Products</div>
        <div>Login</div>
      </div>
      <div
        className={`${styles.main} col-start-4 col-end-10 row-start-2 row-end-3`}
      >
        <div className="row-start-2 row-end-3">
          <div className="text-5xl font-bold">
            A massive library of<br></br> free 3D{' '}
            <span className="text-red-700">shapes</span>
          </div>
          <div className="mt-5 text-gray-600 text-xl">
            Lorem ipsum is placeholder text commonly used in the<br></br>{' '}
            graphic, print, and publishing industries
          </div>
          <input
            type="email"
            className={`${styles.emailInput} 
                        w-[455px]
                        py-2 
                        pl-6
                        self-start
                        text-base
                        font-normal
                        placeholder:text-white
                        placeholder:opacity-80     
                        rounded-2xl
                        transition
                        ease-in-out
                        focus:outline-red-300
                        m-0
                        mt-8
                        focus:outline-none                         
                        flex-1`}
            placeholder="Your email address"
          ></input>
        </div>
      </div>
    </main>
  );
}