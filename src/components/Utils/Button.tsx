import type { IconType } from '../../types';

interface ButtonProps {
  Icon: IconType;
  label?: string;
  flip?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({ Icon, label, flip, className, onClick }: ButtonProps) {
  return (
    <button
      className={`${className} flex w-full items-center justify-center gap-4 rounded-lg
                  bg-btn-color px-4 py-2 text-gray-color transition-all duration-300 
                  hover:text-accent-color hover:brightness-125 focus:ring-offset-transparent
                  focus-visible:outline-none focus-visible:ring focus-visible:ring-accent-color
                  active:scale-90 active:duration-150`}
      type='button'
      onClick={onClick}
    >
      {!flip && <Icon className='text-lg' />}
      {label}
      {flip && <Icon className='text-lg' />}
    </button>
  );
}
