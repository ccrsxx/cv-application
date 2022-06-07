import type { IconType } from '../../types';

interface ButtonProps {
  Icon?: IconType;
  label?: string;
  flip?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({
  Icon,
  label,
  flip,
  disabled,
  className,
  onClick
}: ButtonProps) {
  return (
    <button
      className={`${className} flex w-full max-w-[128px] items-center justify-center gap-4 rounded-lg
                  bg-btn-color px-4 py-2 font-medium capitalize text-gray-color
                  transition-all duration-300 hover:text-accent-color hover:brightness-125
                  focus:ring-offset-transparent focus-visible:outline-none focus-visible:ring
                  focus-visible:ring-accent-color active:scale-90 active:duration-150`}
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
