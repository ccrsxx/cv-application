import { useContext } from 'react';
import { Button } from '../../Utils';
import { EditorContext } from '../../../common';
import type { IListFormNames } from '../../../types';

interface DotsProps {
  items: string[];
  formName?: IListFormNames;
  currentIndex: number;
}

export function Dots({ items, formName, currentIndex }: DotsProps) {
  const { handleSectionChange, handleFormIndexesChange } =
    useContext(EditorContext);

  return (
    <div className='flex items-center gap-2'>
      {items.map((_, index) => (
        <Button
          disabled={index === currentIndex}
          className={`${
            index === currentIndex && 'scale-150 !bg-accent-color'
          } h-2 w-2 rounded-full bg-neutral-500 !p-0 transition-all hover:!scale-125`}
          key={index}
          onClick={
            formName
              ? handleFormIndexesChange(formName, index)
              : handleSectionChange(index)
          }
        />
      ))}
    </div>
  );
}
