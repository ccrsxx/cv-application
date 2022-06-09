import type { IEducationPart, IExperiencePart, ISkill } from './ICvData';

export interface IMainData {
  profile: string;
  experience: IExperiencePart[];
}

export interface IAsideData {
  contact: [string, string][];
  education: IEducationPart[];
  skills: ISkill[];
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
  handleZoom: (zoomOut: boolean) => () => void;
}
