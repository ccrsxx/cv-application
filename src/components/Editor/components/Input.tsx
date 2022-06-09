interface InputProps {
  id: string;
  wide: boolean;
  type: string;
  label: string;
  value: string;
  textarea: boolean;
  placeholder: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
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
  const inputStyle = `${
    textarea && 'h-full resize-none'
  } rounded-lg bg-input-color py-2 px-3 font-poppins sm:text-sm 
    text-gray-color placeholder-neutral-500 outline-none text-xs
    transition-all duration-300 hover:brightness-110 focus:text-white 
    focus:brightness-[1.15] active:scale-[0.98] active:duration-150`;

  return (
    <div className={`${wide && 'col-span-2'} flex flex-col gap-2`}>
      <label
        className='ml-1 text-sm text-gray-color sm:text-[15px]'
        htmlFor={id}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          className={inputStyle}
          id={id}
          name={id}
          value={value}
          autoComplete='pussy'
          placeholder={placeholder}
          onChange={handleChange}
        />
      ) : (
        <input
          className={inputStyle}
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
