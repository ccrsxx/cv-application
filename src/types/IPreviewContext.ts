import type { IEducationPart, IExperiencePart } from './ICvData';

export interface IMainData {
  profile: string;
  experience: IExperiencePart[];
}

export interface IAsideData {
  contact: [string, string][];
  education: IEducationPart[];
  skills: any[];
}

export interface IHeaderData {
  firstName: string;
  lastName: string;
  profession: string;
}

export interface IPreviewContext {
  headerData: IHeaderData;
  asideData: IAsideData;
  mainData: IMainData;
  zoomOut: () => void;
  zoomIn: () => void;
}
