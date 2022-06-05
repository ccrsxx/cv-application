import type { IInputField } from './IInputField';

export interface IFormData {
  info: { inputFields: IInputField[]; styles: string };
  contact: any;
  education: any;
  work: any;
  skills: any;
}
