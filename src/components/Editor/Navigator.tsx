import { useContext } from 'react';
import { Dots } from './Dots';
import { Button } from '../Utils';
import {
  EditorContext,
  RiArrowLeftSLine,
  RiArrowRightSLine
} from '../../common';

interface NavigatorProps {
  items: string[];
  editorIndex: number;
}

export function Navigator({ items, editorIndex }: NavigatorProps) {
  const { prevSection, nextSection } = useContext(EditorContext);
  return (
    <nav className='mt-auto flex justify-between'>
      <Button
        className='max-w-[128px]'
        Icon={RiArrowLeftSLine}
        label='Previous'
        onClick={prevSection}
      />
      <Dots items={items} editorIndex={editorIndex} />
      <Button
        className='max-w-[128px]'
        Icon={RiArrowRightSLine}
        label='Next'
        onClick={nextSection}
        flip
      />
    </nav>
  );
}
