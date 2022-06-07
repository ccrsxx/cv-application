import type { IInputField } from './IInputField';

export interface IFormData {
  info: { inputFields: IInputField[] };
  contact: any;
  education: any;
  experience: any;
  skills: any;
}
