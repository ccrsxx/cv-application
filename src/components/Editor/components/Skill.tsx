/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '../../Utils';
import { RiDeleteBinLine } from '../../../common';

interface SkillProps {
  id: string;
  wide: boolean;
  type: string;
  label: string;
  value: string;
  textarea: boolean;
  placeholder: string;
  sectionLength: number;
  deleteSkill: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Skill({
  id,
  wide,
  type,
  label,
  value,
  textarea,
  placeholder,
  sectionLength,
  deleteSkill,
  handleChange
}: SkillProps) {
  return (
    <div className='flex gap-4'>
      <input
        className='w-full rounded-lg bg-input-color py-2 px-3 font-poppins text-xs 
                   text-gray-color placeholder-neutral-500 outline-none transition-all
                   duration-300 hover:brightness-110 focus:text-white focus:brightness-[1.15] 
                   active:scale-[0.98] active:duration-150 sm:text-sm'
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete='pussy'
        onChange={handleChange}
        placeholder={placeholder}
      />
      <Button
        Icon={RiDeleteBinLine}
        className={`${sectionLength > 7 && 'mr-5'} h-10 w-10`}
        onClick={deleteSkill}
      />
    </div>
  );
}
