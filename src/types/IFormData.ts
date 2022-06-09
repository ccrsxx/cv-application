import type { IInputField } from './IInputField';

export interface IFormData {
  info: { inputFields: IInputField[] };
  contact: { inputFields: IInputField[] };
  education: { inputFields: IInputField[] };
  experience: { inputFields: IInputField[] };
  skills: { inputFields: IInputField[] };
}
