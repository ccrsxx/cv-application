import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Zoom, Header, Aside, Main } from './components';
import type { RefObject, ReactZoomPanPinchRef, ICvConfig } from '../../types';

interface PreviewProps {
  cvConfig: ICvConfig;
  transformRef: RefObject<ReactZoomPanPinchRef>;
  isPreviewMode: boolean;
  getCvScale: () => number;
}

export function Preview({
  cvConfig,
  transformRef,
  isPreviewMode,
  getCvScale
}: PreviewProps) {
  const { minScale, maxScale } = cvConfig;
  return (
    <div
      className={`${
        isPreviewMode
          ? 'animate-left opacity-100'
          : 'pointer-event-none opacity-0'
      } fixed lg:relative lg:block lg:animate-left lg:opacity-100`}
    >
      <Zoom />
      <TransformWrapper
        ref={transformRef}
        minScale={minScale}
        maxScale={maxScale}
        initialScale={getCvScale()}
        wheel={{ step: 0.1 }}
        centerOnInit
      >
        <TransformComponent
          wrapperClass='!h-screen max-w-[100vw] min-w-[100vw] 
                        lg:max-w-[55vw] lg:min-w-[55vw]'
          contentClass='![padding-block:20px]'
        >
          <div
            className='grid h-[1250px] w-[900px] font-work-sans [grid-template-columns:290px_1fr] 
                       [grid-template-rows:220px_1fr]'
          >
            <Header />
            <Aside />
            <Main />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
