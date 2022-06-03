import { useState, useRef, useEffect } from 'react';
import { Preview } from './components';
import { useWindowSize, cvConfig, takeScreenshot } from './common';
import type { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';

export function App() {
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
    <div className='flex min-h-screen items-center justify-center'>
      <Preview
        cvConfig={cvConfig}
        transformRef={transformRef}
        getCvScale={getCvScale}
      />
    </div>
  );
}
