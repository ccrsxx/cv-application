import type { ICvData } from './ICvData';
import type { IFormsIndex } from './IFormsIndex';
import type { IListFormNames, SectionsName } from './Utils';

export interface IEditorContext {
  cvData: ICvData;
  formsIndex: IFormsIndex;
  aniDirection: 'left' | 'right';
  handleFormsIndexChange: (
    sectionName: IListFormNames,
    index: number
  ) => () => void;
  handleSectionChange: (index: number) => () => void;
  handleCvDataChange: (
    sectionName: SectionsName,
    formIndex: null | number
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  getScreenshot: () => void;
  autofillData: () => void;
  deleteSkill: (key: number) => () => void;
  deleteForm: (sectionName: IListFormNames, targetIndex: number) => () => void;
  addSkill: () => void;
  addForm: (sectionName: IListFormNames) => () => void;
}
