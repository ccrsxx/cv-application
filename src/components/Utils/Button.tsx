import type { IconType } from '../../types';

interface ButtonProps {
  Icon?: IconType;
  label?: string;
  flip?: boolean;
  disabled?: boolean;
  className?: string;
  highlight?: boolean;
  onClick?: () => void;
}

export function Button({
  Icon,
  label,
  flip,
  disabled,
  className,
  highlight,
  onClick
}: ButtonProps) {
  return (
    <button
      className={`${className} ${
        highlight &&
        '!bg-accent-color !text-dark-color hover:!text-black focus:!ring-white'
      } flex w-full max-w-[110px] items-center justify-center gap-4 rounded-lg bg-btn-color py-2 px-3 
        text-sm font-medium capitalize text-gray-color transition-all duration-300 hover:text-accent-color
        hover:brightness-125 hover:duration-300 focus:ring-offset-transparent focus-visible:outline-none 
        focus-visible:ring focus-visible:ring-accent-color active:scale-90 active:duration-150
        sm:max-w-[128px] sm:px-4 sm:text-base`}
      type='button'
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && !flip && <Icon />}
      {label}
      {Icon && flip && <Icon />}
    </button>
  );
}
