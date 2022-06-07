import { useContext } from 'react';
import { PreviewContext } from '../../../common';

export function Header() {
  const { headerData } = useContext(PreviewContext);
  const { firstName, lastName, profession } = headerData;

  return (
    <header className='col-span-2 rounded-t-lg bg-white text-dark-color'>
      <h1
        className='flex h-[170px] items-center justify-center gap-10 p-10
                   text-center text-5xl font-light uppercase tracking-[14px]'
      >
        <span className='font-medium'>{firstName}</span> {lastName}
      </h1>
      <h2
        className='flex h-[50px] w-full items-center justify-center bg-gray-300 
                   text-xl font-light capitalize tracking-[4px]'
      >
        {profession}
      </h2>
    </header>
  );
}
