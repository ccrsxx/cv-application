import type {
  ICvData,
  IMainData,
  IAsideData,
  IFormLists,
  IHeaderData,
  IEducationPart,
  IExperiencePart
} from '../types';

function parseArrayData(formList: IFormLists) {
  return formList.filter((item) => Object.values(item).some((value) => value));
}

function parseHeaderData(cvData: ICvData) {
  const {
    info: { firstName, lastName, profession }
  } = cvData;
  return { firstName, lastName, profession };
}

function parseMainData(cvData: ICvData) {
  const {
    info: { profile },
    experience
  } = cvData;

  const filteredExperience = parseArrayData(experience) as IExperiencePart[];

  return {
    profile,
    experience: filteredExperience
  };
}

function parseAsideData(cvData: ICvData) {
  const { contact, education, skills } = cvData;

  const filteredContact = Object.entries(contact).filter(([_, value]) => value);
  const filteredEducation = parseArrayData(education) as IEducationPart[];

  return {
    contact: filteredContact,
    education: filteredEducation,
    skills
  };
}

export function parseCvData(
  cvData: ICvData
): [IHeaderData, IAsideData, IMainData] {
  const headerData = parseHeaderData(cvData);
  const asideData = parseAsideData(cvData);
  const mainData = parseMainData(cvData);

  return [headerData, asideData, mainData];
}
