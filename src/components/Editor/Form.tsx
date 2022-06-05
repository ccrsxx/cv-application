import { useContext } from 'react';
import { Input } from './Input';
import { EditorContext } from '../../common';
import type { ICvData, IInputField, SectionsName } from '../../types';

interface FormProps {
  styles: string;
  editorName: SectionsName;
  inputFields: IInputField[];
}

export function Form({ styles, editorName, inputFields }: FormProps) {
  const { cvData, handleCvDataChange } = useContext(EditorContext);
  const sectionFormData = cvData[editorName];

  return (
    <form className={styles}>
      {inputFields.map((inputField, index) => (
        <Input
          {...inputField}
          key={index}
          handleChange={handleCvDataChange(editorName)}
          value={sectionFormData[inputField.id as keyof ICvData[SectionsName]]}
        />
      ))}
    </form>
  );
}
