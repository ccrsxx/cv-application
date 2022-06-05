interface InputProps {
  id: string;
  wide?: boolean;
  type?: string;
  label: string;
  value?: string;
  textarea?: boolean;
  placeholder: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  id,
  wide,
  type,
  label,
  value,
  textarea,
  placeholder,
  handleChange
}: InputProps) {
  return (
    <div className={`${wide && 'col-span-2'} flex flex-col gap-2`}>
      <label className='ml-1 text-[15px] text-gray-color' htmlFor={id}>
        {label}
      </label>
      {textarea ? (
        <textarea
          className='h-32 resize-none rounded-lg bg-input-color py-2 px-3 font-poppins
                     text-sm text-gray-color placeholder-neutral-500 outline-none
                     transition-all duration-300 hover:brightness-110 focus:text-white 
                     focus:brightness-[1.15] active:scale-[0.98] active:duration-150'
          id={id}
          name={id}
          autoComplete='pussy'
          placeholder={placeholder}
        />
      ) : (
        <input
          className='rounded-lg bg-input-color py-2 px-3 font-poppins text-sm 
                     text-gray-color placeholder-neutral-500 outline-none
                     transition-all duration-300 hover:brightness-110 focus:text-white 
                     focus:brightness-[1.15] active:scale-[0.98] active:duration-150'
          id={id}
          name={id}
          type={type}
          value={value}
          autoComplete='pussy'
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
