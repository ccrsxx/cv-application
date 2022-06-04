interface CvProps {
  children: React.ReactNode;
}

export function Cv({ children }: CvProps) {
  return (
    <div
      id='cv'
      className='grid h-[1250px] w-[900px] font-work-sans [grid-template-columns:290px_1fr] 
                 [grid-template-rows:220px_1fr]'
    >
      {children}
    </div>
  );
}
