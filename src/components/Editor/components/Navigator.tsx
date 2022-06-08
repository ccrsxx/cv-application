import { useContext } from 'react';
import { Dots } from './Dots';
import { Button } from '../../Utils';
import {
  RiAddLine,
  RiEditLine,
  RiSaveLine,
  EditorContext,
  RiDeleteBinLine,
  RiArrowLeftSLine,
  RiArrowRightSLine
} from '../../../common';
import type { IListFormNames } from '../../../types';

interface NavigatorProps {
  items: any[];
  formName?: IListFormNames;
  manyForms?: number;
  currentIndex: number;
  inFormSection?: boolean;
  inEditorSection?: boolean;
}

export function Navigator({
  items,
  formName,
  manyForms,
  currentIndex,
  inFormSection,
  inEditorSection
}: NavigatorProps) {
  const {
    addForm,
    deleteForm,
    getScreenshot,
    handleSectionChange,
    handleFormIndexesChange
  } = useContext(EditorContext);

  const [prevIndex, nextIndex] = [currentIndex - 1, currentIndex + 1];
  const [prevValue, nextValue] = [items[prevIndex], items[nextIndex]];

  return (
    <nav
      className={`${
        inFormSection ? 'col-span-2 mb-auto' : 'mt-auto pt-4'
      } flex justify-between`}
    >
      {!!(inFormSection && items.length > 1) && (
        <Button
          Icon={RiDeleteBinLine}
          className='absolute top-8 right-8 h-10 w-10'
          onClick={deleteForm(formName!, currentIndex)}
        />
      )}
      {prevValue ? (
        <Button
          Icon={RiArrowLeftSLine}
          label={typeof prevValue === 'string' ? prevValue : 'Previous'}
          onClick={
            inEditorSection
              ? handleSectionChange(prevIndex)
              : handleFormIndexesChange(formName!, prevIndex)
          }
        />
      ) : inEditorSection ? (
        <Button
          Icon={RiEditLine}
          label='Autofill'
          className='bg-accent-color text-dark-color hover:text-black focus:!ring-white'
        />
      ) : (
        <Button className='invisible transition-none' />
      )}
      <Dots items={items} formName={formName} currentIndex={currentIndex} />
      {nextValue ? (
        <Button
          Icon={RiArrowRightSLine}
          label={typeof nextValue === 'string' ? nextValue : 'Next'}
          onClick={
            inEditorSection
              ? handleSectionChange(nextIndex)
              : handleFormIndexesChange(formName!, nextIndex)
          }
          flip
        />
      ) : inEditorSection ? (
        <Button
          Icon={RiSaveLine}
          label='Save'
          className='bg-accent-color text-dark-color hover:text-black focus:!ring-white'
          onClick={getScreenshot}
          flip
        />
      ) : manyForms &&
        currentIndex === items.length - 1 &&
        currentIndex < manyForms - 1 ? (
        <Button Icon={RiAddLine} onClick={addForm(formName!)} label='New' />
      ) : (
        <Button className='invisible transition-none' />
      )}
    </nav>
  );
}
