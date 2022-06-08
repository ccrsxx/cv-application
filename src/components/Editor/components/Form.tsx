import { useContext } from 'react';
import { Input } from './Input';
import { Skill } from './Skill';
import { Navigator } from './Navigator';
import { Button } from '../../Utils';
import { EditorContext, RiAddLine } from '../../../common';
import type {
  ISkill,
  ICvData,
  IInputField,
  SectionsName,
  IListFormNames
} from '../../../types';

interface FormProps {
  editorName: SectionsName | IListFormNames;
  inputFields: IInputField[];
}

export function Form({ editorName, inputFields }: FormProps) {
  const { cvData, formIndexes, addSkill, deleteSkill, handleCvDataChange } =
    useContext(EditorContext);
  const sectionFormData = cvData[editorName];

  const useNavigator =
    Array.isArray(sectionFormData) && editorName !== 'skills';

  const indexForm = useNavigator
    ? formIndexes[editorName as IListFormNames]
    : null;

  return (
    <form
      className={`${
        editorName !== 'skills'
          ? 'grid grid-cols-2 [grid-template-rows:auto_auto_1fr]'
          : 'flex flex-col overflow-y-auto'
      } flex-1 gap-4`}
    >
      {editorName === 'skills' && (sectionFormData as ISkill[]).length < 10 && (
        <Button
          Icon={RiAddLine}
          label='New'
          className='absolute top-6 right-8 w-24'
          onClick={addSkill}
        />
      )}
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
      {useNavigator && (
        <Navigator
          items={sectionFormData}
          formName={editorName as IListFormNames}
          manyForms={3}
          currentIndex={indexForm as number}
          inFormSection
        />
      )}
    </form>
  );
}
