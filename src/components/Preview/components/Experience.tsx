interface ExperienceProps {
  title: string;
  company: string;
  from: string;
  to: string;
  description: string;
}

export function Experience({
  title,
  company,
  from,
  to,
  description
}: ExperienceProps) {
  const yearDivider = from && to ? '-' : '';
  const companyDivider = company ? '|' : '';

  return (
    <div className='flex flex-col gap-1'>
      <h4 className='text-lg font-medium'>{title}</h4>
      <h5 className='text-base font-normal'>
        {`${company} ${companyDivider} ${from} ${yearDivider} ${to}`}
      </h5>
      <h6 className='text-sm'>{description}</h6>
    </div>
  );
}
