import type { SectionsName } from './Utils';
import type { ICvData } from './ICvData';

export interface IEditorContext {
  cvData: ICvData;
  handleSectionChange: (index: number) => () => void;
  handleCvDataChange: (
    sectionName: SectionsName
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  prevSection: () => void;
  nextSection: () => void;
}
