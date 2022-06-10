import { useContext } from 'react';
import { Dots } from './Dots';
import { Button } from '../../Utils';
import {
  RiAddLine,
  RiEditLine,
  RiSaveLine,
  EditorContext,
  RiArrowLeftSLine,
  RiArrowRightSLine
} from '../../../common';
import type {
  IEditorSections,
  IListFormNames,
  IIterableForms,
  SectionsName
} from '../../../types';

interface NavigatorProps {
  items: IEditorSections | IIterableForms;
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
    autofillData,
    getScreenshot,
    handleSectionChange,
    handleFormsIndexChange
  } = useContext(EditorContext);

  const [prevIndex, nextIndex] = [currentIndex - 1, currentIndex + 1];
  const [prevValue, nextValue] = [items[prevIndex], items[nextIndex]];

  return (
    <nav
      className={`${
        inFormSection ? 'mb-auto' : 'pt-2'
      } col-span-2 flex justify-between`}
    >
      {prevValue ? (
        <Button
          Icon={RiArrowLeftSLine}
          label={inEditorSection ? (prevValue as SectionsName) : 'Previous'}
          onClick={
            inEditorSection
              ? handleSectionChange(prevIndex)
              : handleFormsIndexChange(formName!, prevIndex)
          }
        />
      ) : inEditorSection ? (
        <Button
          Icon={RiEditLine}
          onClick={autofillData}
          label='Autofill'
          highlight
        />
      ) : (
        <Button className='invisible transition-none' />
      )}
      <Dots items={items} formName={formName} currentIndex={currentIndex} />
      {nextValue ? (
        <Button
          Icon={RiArrowRightSLine}
          label={inEditorSection ? (nextValue as SectionsName) : 'Next'}
          onClick={
            inEditorSection
              ? handleSectionChange(nextIndex)
              : handleFormsIndexChange(formName!, nextIndex)
          }
          flip
        />
      ) : inEditorSection ? (
        <Button
          Icon={RiSaveLine}
          label='Save'
          onClick={getScreenshot}
          highlight
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
