interface EducationProps {
  degree: string;
  university: string;
  from: string;
  to: string;
}

export function Education({ degree, university, from, to }: EducationProps) {
  const yearDivider = from && to ? '-' : '';

  return (
    <div className='flex flex-col gap-1'>
      <h4 className='text-lg font-medium text-white'>{degree}</h4>
      <h5 className='text-base font-normal'>{university}</h5>
      <h6 className='text-sm'>{`${from} ${yearDivider} ${to}`}</h6>
    </div>
  );
}
