import { useContext } from 'react';
import { Navigator } from './Navigator';
import { Input } from './Input';
import { Skill } from './Skill';
import { Button } from '../../Utils';
import { EditorContext, RiAddLine, RiDeleteBinLine } from '../../../common';
import type {
  ISkill,
  ICvData,
  IFormLists,
  IInputField,
  SectionsName,
  IListFormNames
} from '../../../types';

interface FormProps {
  editorName: SectionsName | IListFormNames;
  inputFields: IInputField[];
}

export function Form({ editorName, inputFields }: FormProps) {
  const {
    cvData,
    formsIndex,
    aniDirection,
    addSkill,
    deleteForm,
    deleteSkill,
    handleCvDataChange
  } = useContext(EditorContext);
  const sectionFormData = cvData[editorName];

  const useNavigator =
    Array.isArray(sectionFormData) && editorName !== 'skills';

  const indexForm = useNavigator
    ? formsIndex[editorName as IListFormNames]
    : null;

  return (
    <>
      {!!(
        ['education', 'experience'].includes(editorName) &&
        (sectionFormData as IFormLists).length > 1
      ) && (
        <Button
          Icon={RiDeleteBinLine}
          className='absolute top-8 right-8 h-10 w-10'
          onClick={deleteForm(editorName as IListFormNames, indexForm!)}
        />
      )}
      {editorName === 'skills' && (sectionFormData as ISkill[]).length < 10 && (
        <Button
          Icon={RiAddLine}
          label='New'
          className='absolute top-6 right-8 w-24'
          onClick={addSkill}
        />
      )}
      <form
        className={`${
          editorName !== 'skills'
            ? 'grid grid-cols-2 [grid-template-rows:auto_auto_1fr]'
            : 'flex flex-col overflow-y-auto pt-1 pr-1'
        } ${
          aniDirection === 'left' ? 'animate-left' : 'animate-right'
        } col-span-2 gap-4`}
        key={indexForm || editorName}
      >
        {editorName !== 'skills'
          ? inputFields.map((inputField, index) => (
              <Input
                {...inputField}
                handleChange={handleCvDataChange(editorName, indexForm)}
                value={
                  useNavigator
                    ? sectionFormData[indexForm!][
                        inputField.id as keyof ICvData[SectionsName]
                      ]
                    : sectionFormData[
                        inputField.id as keyof ICvData[SectionsName]
                      ]
                }
                key={index}
              />
            ))
          : (sectionFormData as ISkill[]).map(
              ({ skill, key, placeholder }, index) => (
                <Skill
                  {...inputFields[0]}
                  placeholder={placeholder}
                  value={skill}
                  key={index}
                  deleteSkill={deleteSkill(key)}
                  sectionLength={(sectionFormData as ISkill[]).length}
                  handleChange={handleCvDataChange(editorName, index)}
                />
              )
            )}
      </form>
      {useNavigator && (
        <Navigator
          items={sectionFormData}
          formName={editorName as IListFormNames}
          manyForms={3}
          currentIndex={indexForm!}
          inFormSection
        />
      )}
    </>
  );
}
