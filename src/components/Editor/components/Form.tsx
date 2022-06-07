import { useContext } from 'react';
import { Input } from './Input';
import { Navigator } from './Navigator';
import { EditorContext } from '../../../common';
import type {
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
  const { cvData, formIndexes, handleCvDataChange } = useContext(EditorContext);
  const sectionFormData = cvData[editorName];

  const useNavigator = Array.isArray(sectionFormData);

  const indexForm = useNavigator
    ? formIndexes[editorName as IListFormNames]
    : null;

  return (
    <form className='grid flex-1 grid-cols-2 gap-4 [grid-template-rows:auto_auto_1fr]'>
      {inputFields.map((inputField, index) => (
        <Input
          {...inputField}
          key={index}
          handleChange={handleCvDataChange(editorName, indexForm)}
          value={
            useNavigator
              ? sectionFormData[indexForm!][
                  inputField.id as keyof ICvData[SectionsName]
                ]
              : sectionFormData[inputField.id as keyof ICvData[SectionsName]]
          }
        />
      ))}
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
