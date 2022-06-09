import { useContext } from 'react';
import { Button } from '../../Utils';
import { EditorContext } from '../../../common';
import type {
  IListFormNames,
  IIterableForms,
  IEditorSections
} from '../../../types';

interface DotsProps {
  items: IEditorSections | IIterableForms;
  formName?: IListFormNames;
  currentIndex: number;
}

export function Dots({ items, formName, currentIndex }: DotsProps) {
  const {
    handleSectionChange,
    handleFormsIndexChange: handleFormIndexesChange
  } = useContext(EditorContext);

  return (
    <div className='flex items-center gap-2'>
      {items.map((_, index) => (
        <Button
          disabled={index === currentIndex}
          className={`${
            index === currentIndex && 'scale-150 !bg-accent-color'
          } h-1.5 w-1.5 rounded-full bg-neutral-500 !p-0 duration-500 
            ease-in-out hover:!scale-125 sm:h-2 sm:w-2`}
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
