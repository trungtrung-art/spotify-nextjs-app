import { getProviders, signIn } from "next-auth/react"
import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';

function login({ providers }) {
  return (
    <div
      className="text-center h-screen w-screen flex items-center justify-center relative"
      style={{ backgroundColor: 'whitesmoke' }}
    >

      <div className="bg-black w-screen h-40 flex items-center justify-center relative">
      <img
          className="w-16 md-20 lg:w-24 bg-white rounded-full mr-7 md:mr-12 "
          src="https://links.papareact.com/9xl"
          alt="spotify logo"
        />
        <h1
          className="text-4xl lg:text-9xl md:text-7xl  uppercase font-bold"
          style={{
            color: '#1ed760',
          }}
        >
          spotify
        </h1>
        <small className="absolute top-[6.5rem] right-[24rem] font-extrabold uppercase text-lg text-white hidden lg:block">
          NextJS App
        </small>
        <div
          className="absolute top-auto w-20 h-20 bg-transparent right-10 cursor-pointer"
        >
          <ChevronDoubleRightIcon
            onClick={() => signIn('spotify', { callbackUrl: '/' })}
            className="w-20 h-20 animate-pulse"
            style={{ color: '#1ed760' }}
          />
        </div>
      </div>
      <footer
        className="absolute bottom-0 w-40 h-16 bg-gray-300 rounded-t-md"
        style={{
          textAlign: 'center',
          display: 'flex',
          marginTop: '1rem',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <a
          href="https://github.com/trungtrung-art/spotify-nextjs-app"
          target="_blank noreferrer"
        >
          <Image src="/icons8-github.svg" alt="github" height={40} width={40} />
        </a>
      </footer>
    </div>

  )
};

export default login;

export async function getServerSiteProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    },
  };
};