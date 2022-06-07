import type { ICvData } from './ICvData';
import type { IFormIndexes } from './IFormIndexes';
import type { IListFormNames, SectionsName } from './Utils';

export interface IEditorContext {
  cvData: ICvData;
  formIndexes: IFormIndexes;
  handleFormIndexesChange: (
    sectionName: IListFormNames,
    index: number
  ) => () => void;
  handleSectionChange: (index: number) => () => void;
  handleCvDataChange: (
    sectionName: SectionsName,
    formIndex: null | number
  ) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  getScreenshot: () => void;
  deleteForm: (sectionName: IListFormNames, targetIndex: number) => () => void;
  addForm: (sectionName: IListFormNames) => () => void;
}
