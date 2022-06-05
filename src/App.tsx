import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Editor, Preview } from './components';
import {
  cvConfig,
  defaultCvData,
  useWindowSize,
  EditorContext,
  editorSections,
  PreviewContext,
  takeScreenshot
} from './common';
import type { ReactZoomPanPinchRef, ICvData, SectionsName } from './types';

export function App() {
  const [editorIndex, setEditorIndex] = useState(0);
  const [windowWidth, windowHeight] = useWindowSize();
  const [currentEditor, setCurrentEditor] = useState('info');
  const [cvData, setCvData] = useState<ICvData>(defaultCvData);

  const transformRef = useRef<ReactZoomPanPinchRef>(null);

  useEffect(() => {
    transformRef.current?.centerView(getCvScale());
  }, [windowWidth, windowHeight]);

  const getScreenshot = async () => {
    const a = document.createElement('a');
    a.href = await takeScreenshot();
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

  const handleSectionChange = useCallback(
    (index: number) => () => {
      if (index < 0 || index === editorSections.length) return;
      setEditorIndex(index);
      setCurrentEditor(editorSections[index]);
    },
    []
  );

  const handleCvDataChange = useCallback(
    (sectionName: SectionsName) =>
      ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
        setCvData({
          ...cvData,
          [sectionName]: {
            ...cvData[sectionName],
            [name]: value
          }
        });
      },
    []
  );

  const [prevSection, nextSection] = useMemo(
    () =>
      [-1, 1].map((parameter) => handleSectionChange(editorIndex + parameter)),
    [editorIndex]
  );

  const [zoomOut, zoomIn] = useMemo(
    () => [true, false].map((parameter) => handleZoom(parameter)),
    []
  );

  return (
    <div className='flex min-h-screen items-center justify-center gap-4'>
      <EditorContext.Provider
        value={{
          cvData,
          handleSectionChange,
          handleCvDataChange,
          prevSection,
          nextSection
        }}
      >
        <Editor editorIndex={editorIndex} editorSections={editorSections} />
      </EditorContext.Provider>
      <PreviewContext.Provider value={{ zoomOut, zoomIn }}>
        <Preview
          cvConfig={cvConfig}
          transformRef={transformRef}
          getCvScale={getCvScale}
        />
      </PreviewContext.Provider>
    </div>
  );
}
