import { useState, useRef, useEffect } from 'react';
import { Editor, Preview } from './components';
import {
  useWindowSize,
  PreviewContext,
  cvConfig,
  takeScreenshot
} from './common';
import type { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

export function App() {
  const [currentEditor, setCurrentEditor] = useState('info');
  const [windowWidth, windowHeight] = useWindowSize();

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

  const zoomIn = () => {
    transformRef.current?.zoomIn(0.25);
  };

  const zoomOut = () => {
    transformRef.current?.zoomOut(0.25);
  };

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

  return (
    <div className='flex min-h-screen items-center justify-center gap-4'>
      <Editor editorName='Info' />
      <PreviewContext.Provider value={{ zoomIn, zoomOut }}>
        <Preview
          cvConfig={cvConfig}
          transformRef={transformRef}
          getCvScale={getCvScale}
        />
      </PreviewContext.Provider>
    </div>
  );
}
