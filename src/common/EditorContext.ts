import { createContext } from 'react';
import type { IEditorContext } from '../types';

export const EditorContext = createContext<IEditorContext>(
  {} as IEditorContext
);
