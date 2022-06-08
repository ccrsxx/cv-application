import { useState, useRef, useEffect, useMemo } from 'react';
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
  getRandomSkill,
  defaultFormIndexes as defaultFormsIndex
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
  const [formsIndex, setFormsIndex] = useState<IFormIndexes>(defaultFormsIndex);
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
      setFormsIndex({
        ...formsIndex,
        [sectionName]: index
      });
    };

  const handleSectionChange = (index: number) => () => {
    setEditorIndex(index);
  };

  const handleCvDataChange =
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

        return newCvData;
      });

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
    handleFormIndexesChange(sectionName, formsIndex[sectionName] + 1)();
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

  const addSkill = () => {
    setCvData((prevCvData) => ({
      ...prevCvData,
      skills: [
        ...prevCvData.skills,
        {
          skill: '',
          key: Math.random(),
          placeholder: getRandomSkill()
        }
      ]
    }));
  };

  const deleteSkill = (key: number) => () => {
    setCvData((prevCvData) => ({
      ...prevCvData,
      skills: prevCvData.skills.filter((skill) => skill.key !== key)
    }));
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
          formIndexes: formsIndex,
          handleFormIndexesChange,
          handleSectionChange,
          handleCvDataChange,
          getScreenshot,
          deleteSkill,
          deleteForm,
          addSkill,
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
