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

export interface ICvData {
  info: {
    firstName: string;
    lastName: string;
    profession: string;
    profile: string;
  };
  contact: {
    website: string;
    email: string;
    address: string;
    phone: string;
  };
  education: IEducationPart[];
  experience: IExperiencePart[];
  skills: ISkill[];
}
