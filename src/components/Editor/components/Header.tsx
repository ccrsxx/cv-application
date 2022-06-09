import type { SectionsName } from '../../../types';

interface HeaderProps {
  editorName: SectionsName;
}

export function Header({ editorName }: HeaderProps) {
  return (
    <h3 className='col-span-2 ml-0.5 text-xl font-bold capitalize text-white'>
      {editorName}
    </h3>
  );
}
