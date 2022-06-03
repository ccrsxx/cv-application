export function Cv() {
  return (
    <div
      id='cv'
      className='grid h-[1250px] w-[900px] font-work-sans
                 [grid-template-columns:290px_1fr] [grid-template-rows:220px_1fr]'
    >
      <header className='col-span-2 rounded-t-lg bg-white text-dark-text-color'>
        <h1
          className='flex h-[170px] items-center justify-center gap-10
                     text-5xl font-light uppercase tracking-[14px]'
        >
          <span className='font-medium'>Makise</span> Kurisu
        </h1>
        <h2
          className='flex h-[50px] w-full items-center justify-center bg-gray-300 
                     text-xl font-light capitalize tracking-[4px]'
        >
          Quantum Physicist
        </h2>
      </header>
      <div className='h-full rounded-bl-lg bg-main-bg px-10 py-12'></div>
      <main className='rounded-br-lg bg-white'></main>
    </div>
  );
}
