import { useContext } from 'react';
import { EditorContext } from '../../common';

interface DotsProps {
  items: string[];
  editorIndex: number;
}

export function Dots({ items, editorIndex }: DotsProps) {
  const { handleSectionChange } = useContext(EditorContext);

  return (
    <div className='flex items-center gap-2'>
      {items.map((_, index) => (
        <button
          className={`${
            editorIndex === index && 'scale-150 bg-accent-color'
          } h-2 w-2 rounded-full bg-neutral-500 transition-all`}
          type='button'
          key={index}
          onClick={handleSectionChange(index)}
        />
      ))}
    </div>
  );
}
