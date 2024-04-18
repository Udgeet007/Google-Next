import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <Image
          src="/images/google.png"
          alt='Google Logo'
          width={200}
          height={100}
          priority
          style={{ width: 'auto' }}
        />
        <HomeSearch />
      </div>
    </>
  );
}


 // src="/images/google.png"