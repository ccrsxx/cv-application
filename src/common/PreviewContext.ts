import { createContext } from 'react';
import type { IPreviewContext } from '../types';

export const PreviewContext = createContext<IPreviewContext>(
  {} as IPreviewContext
);
