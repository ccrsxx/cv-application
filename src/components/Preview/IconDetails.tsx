import type { IconType } from 'react-icons';

interface IconDetailsProps {
  Icon?: IconType;
  label: string;
}

export function IconDetails({ Icon, label }: IconDetailsProps) {
  return (
    <div className='flex items-center gap-2'>
      {Icon ? <Icon /> : <span className='scale-150'>•</span>}
      {label}
    </div>
  );
}
