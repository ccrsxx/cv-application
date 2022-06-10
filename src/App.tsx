import { useState, useRef, useEffect } from 'react';
import { Editor, Preview, Toggle } from './components';
import {
  cvConfig,
  formData,
  parseCvData,
  generateData,
  defaultCvData,
  useWindowSize,
  EditorContext,
  PreviewContext,
  takeScreenshot,
  getTwoSentences,
  defaultFormsIndex
} from './common';
import type {
  ICvData,
  IFormList,
  IFormLists,
  IFormsIndex,
  SectionsName,
  IListFormNames,
  IEditorSections,
  ReactZoomPanPinchRef
} from './types';

export function App() {
  const [editorIndex, setEditorIndex] = useState(0);
  const [windowWidth, windowHeight] = useWindowSize();
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [cvData, setCvData] = useState<ICvData>(defaultCvData);
  const [aniDirection, setAniDirection] = useState<'left' | 'right'>('right');
  const [formsIndex, setFormsIndex] = useState<IFormsIndex>(defaultFormsIndex);

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

  const handleZoom = (zoomOut: boolean) => () =>
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

  const changeAniDirection = (
    navName: 'editor' | IListFormNames,
    indexNumber: number
  ) => {
    let direction: 'left' | 'right';

    if (navName === 'editor') {
      if (indexNumber === editorIndex + 1 || indexNumber === 4)
        direction = 'right';
      else direction = 'left';
    } else if (indexNumber === formsIndex[navName] + 1) direction = 'right';
    else direction = 'left';

    setAniDirection(direction);
  };

  const handleSectionChange = (index: number) => () => {
    changeAniDirection('editor', index);
    setEditorIndex(index);
  };

  const handleFormsIndexChange =
    (sectionName: IListFormNames, index: number) => () => {
      changeAniDirection(sectionName, index);
      setFormsIndex((prevCvData) => ({
        ...prevCvData,
        [sectionName]: index
      }));
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
    setCvData((prevCvData) => ({
      ...prevCvData,
      [sectionName]: [
        ...prevCvData[sectionName],
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
            }
      ]
    }));
    handleFormsIndexChange(sectionName, formsIndex[sectionName] + 1)();
  };

  const deleteForm =
    (sectionName: IListFormNames, targetIndex: number) => () => {
      const newFormData = cvData[sectionName] as IFormLists;

      if (targetIndex === newFormData.length - 1)
        handleFormsIndexChange(sectionName, targetIndex - 1)();
      else changeAniDirection(sectionName, targetIndex + 1);

      setCvData((prevCvData) => ({
        ...prevCvData,
        [sectionName]: newFormData.filter((_, index) => index !== targetIndex)
      }));
    };

  const addSkill = () => {
    setCvData((prevCvData) => ({
      ...prevCvData,
      skills: [
        ...prevCvData.skills,
        {
          skill: '',
          key: Math.random(),
          placeholder: getTwoSentences()
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

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };

  const autofillData = () => {
    const randomizedCvData = generateData();
    setCvData(randomizedCvData);
    handleSectionChange(4)();
  };

  const editorSections = Object.keys(cvData) as IEditorSections;
  const editorName = editorSections[editorIndex] as SectionsName;
  const { inputFields } = formData[editorName as keyof ICvData];

  const [headerData, asideData, mainData] = parseCvData(cvData);

  return (
    <div className='flex min-h-screen items-center justify-center gap-4'>
      <EditorContext.Provider
        value={{
          cvData,
          formsIndex,
          aniDirection,
          handleFormsIndexChange,
          handleSectionChange,
          handleCvDataChange,
          getScreenshot,
          autofillData,
          deleteSkill,
          deleteForm,
          addSkill,
          addForm
        }}
      >
        <Editor
          editorName={editorName}
          editorIndex={editorIndex}
          inputFields={inputFields}
          isPreviewMode={isPreviewMode}
          editorSections={editorSections}
        />
      </EditorContext.Provider>
      <PreviewContext.Provider
        value={{
          headerData,
          asideData,
          mainData,
          handleZoom
        }}
      >
        <Preview
          cvConfig={cvConfig}
          transformRef={transformRef}
          isPreviewMode={isPreviewMode}
          getCvScale={getCvScale}
        />
      </PreviewContext.Provider>
      <Toggle isPreviewMode={isPreviewMode} onClick={togglePreview} />
    </div>
  );
}
