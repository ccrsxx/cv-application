interface ExperienceProps {
  title: string;
  year: { start: number; end: number };
  info: string;
  company?: string;
}

export function Experience({
  title,
  year: { start, end },
  info,
  company
}: ExperienceProps) {
  return (
    <div className='flex flex-col gap-1'>
      <h4
        className={`${
          company ? 'text-black' : 'text-white'
        } text-lg font-medium`}
      >
        {title}
      </h4>
      <h5 className='text-base font-normal'>
        {company ? `${company} | ${start} - ${end}` : `${start} - ${end}`}
      </h5>
      <h6 className='text-sm'>{info}</h6>
    </div>
  );
}
