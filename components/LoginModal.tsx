import Google from '../public/google.png';
import Facebook from '../public/facebook.png';
import Image from 'next/image';
import styles from '@/styles/Modal.module.css';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function LoginModal() {
  const supabase = createClientComponentClient();

  return (
    <>
      <div>Sign in to</div>
      <div className="text-3xl font-bold">Olympus Built</div>
      <div
        className="flex hover:bg-gray-600 bg-gray-500 p-3 rounded-lg mt-8 w-12 hover:cursor-pointer"
        onClick={() => supabase.auth.signInWithOAuth({ provider: 'google' })}
      >
        <Image
          className={`${styles.image} w-auto rounded-xl h-5`}
          src={Google}
          alt="Gradient"
          priority
        />
        <div className="ml-[70px]">Google</div>
      </div>
      <div className="flex hover:bg-gray-600 bg-gray-500 p-3 rounded-lg mt-4 w-12 hover:cursor-pointer">
        <Image
          className={`${styles.image} w-auto rounded-xl h-5`}
          src={Facebook}
          alt="Gradient"
          priority
        />
        <div className="ml-[60px]">Facebook</div>
      </div>
    </>
  );
}
