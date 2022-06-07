import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Editor, Preview } from './components';
import {
  cvConfig,
  parseCvData,
  defaultCvData,
  useWindowSize,
  EditorContext,
  editorSections,
  PreviewContext,
  takeScreenshot,
  defaultFormIndexes
} from './common';
import type {
  ICvData,
  IFormList,
  IFormLists,
  SectionsName,
  IFormIndexes,
  IListFormNames,
  ReactZoomPanPinchRef
} from './types';

export function App() {
  const [editorIndex, setEditorIndex] = useState(0);
  const [formIndexes, setFormIndexes] =
    useState<IFormIndexes>(defaultFormIndexes);
  const [windowWidth, windowHeight] = useWindowSize();
  const [cvData, setCvData] = useState<ICvData>(defaultCvData);

  const transformRef = useRef<ReactZoomPanPinchRef>(null);

  useEffect(() => {
    transformRef.current?.centerView(getCvScale());
  }, [windowWidth, windowHeight]);

  const getScreenshot = async () => {
    const a = document.createElement('a');
    a.href = await takeScreenshot(transformRef);
    a.download = 'screenshot.png';
    a.click();
  };

  const handleZoom =
    (zoomOut = false) =>
    () =>
      zoomOut
        ? transformRef.current?.zoomOut(0.25)
        : transformRef.current?.zoomIn(0.25);

  const getCvScale = () => {
    const {
      previewWidthPercent,
      resumeWidth,
      resumeHeight,
      minScale,
      maxScale
    } = cvConfig;
    const isBigScreen = windowWidth > 1000;
    const baseScale = windowWidth * (isBigScreen ? previewWidthPercent : 1);
    const scaleBasedOnWidth = baseScale / resumeWidth;
    const scaleBasedOnHeight = windowHeight / resumeHeight;
    const scale = Math.min(scaleBasedOnWidth, scaleBasedOnHeight);
    return Math.max(minScale, Math.min(scale, maxScale));
  };

  const handleFormIndexesChange =
    (sectionName: IListFormNames, index: number) => () => {
      setFormIndexes({
        ...formIndexes,
        [sectionName]: index
      });
    };

  const handleSectionChange = useCallback(
    (index: number) => () => {
      setEditorIndex(index);
    },
    []
  );

  const handleCvDataChange = useCallback(
    (sectionName: SectionsName, formIndex: null | number) =>
      ({
        target: { name, value }
      }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setCvData((prevCvData) => {
          if (formIndex === null)
            return {
              ...prevCvData,
              [sectionName]: {
                ...prevCvData[sectionName],
                [name]: value
              }
            };

          const newCvData = { ...prevCvData };
          const newFormData = newCvData[sectionName] as IFormLists;
          newFormData[formIndex][name as keyof IFormList] = value;

          return { ...newCvData, newFormData };
        }),
    []
  );

  const addForm = (sectionName: IListFormNames) => () => {
    const defaultForm =
      sectionName === 'education'
        ? {
            degree: '',
            university: '',
            from: '',
            to: ''
          }
        : {
            title: '',
            company: '',
            from: '',
            to: '',
            description: ''
          };
    setCvData((prevCvData) => ({
      ...prevCvData,
      [sectionName]: [...prevCvData[sectionName], defaultForm]
    }));

    handleFormIndexesChange(sectionName, formIndexes[sectionName] + 1)();
  };

  const deleteForm =
    (sectionName: IListFormNames, targetIndex: number) => () => {
      const newFormData = cvData[sectionName] as IFormLists;

      if (targetIndex === newFormData.length - 1)
        handleFormIndexesChange(sectionName, targetIndex - 1)();

      setCvData({
        ...cvData,
        [sectionName]: newFormData.filter((_, index) => index !== targetIndex)
      });
    };

  const [zoomOut, zoomIn] = useMemo(
    () => [true, false].map((parameter) => handleZoom(parameter)),
    []
  );

  const [headerData, asideData, mainData] = parseCvData(cvData);

  return (
    <div className='flex min-h-screen items-center justify-center gap-4'>
      <EditorContext.Provider
        value={{
          cvData,
          formIndexes,
          handleFormIndexesChange,
          handleSectionChange,
          handleCvDataChange,
          getScreenshot,
          deleteForm,
          addForm
        }}
      >
        <Editor editorIndex={editorIndex} editorSections={editorSections} />
      </EditorContext.Provider>
      <PreviewContext.Provider
        value={{
          headerData,
          asideData,
          mainData,
          zoomOut,
          zoomIn
        }}
      >
        <Preview
          cvConfig={cvConfig}
          transformRef={transformRef}
          getCvScale={getCvScale}
        />
      </PreviewContext.Provider>
    </div>
  );
}
