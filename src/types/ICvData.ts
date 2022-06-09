export interface IInfoPart {
  firstName: string;
  lastName: string;
  profession: string;
  profile: string;
}

export interface IContactPart {
  website: string;
  email: string;
  address: string;
  phone: string;
}

export interface IEducationPart {
  degree: string;
  university: string;
  from: string;
  to: string;
}

export interface IExperiencePart {
  title: string;
  company: string;
  from: string;
  to: string;
  description: string;
}

export interface ISkill {
  skill: string;
  key: number;
  placeholder: string;
}

export type IFormList = IEducationPart | IExperiencePart;
export type IFormLists = Array<IEducationPart | IExperiencePart>;
export type IIterableForms = Array<IEducationPart | IExperiencePart | ISkill>;

export interface ICvData {
  info: IInfoPart;
  contact: IContactPart;
  education: IEducationPart[];
  experience: IExperiencePart[];
  skills: ISkill[];
}
