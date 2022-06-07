import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Zoom, Header, Aside, Main } from './components';
import type { RefObject, ReactZoomPanPinchRef, ICvConfig } from '../../types';

interface PreviewProps {
  cvConfig: ICvConfig;
  transformRef: RefObject<ReactZoomPanPinchRef>;
  getCvScale: () => number;
}

export function Preview({ cvConfig, transformRef, getCvScale }: PreviewProps) {
  const { minScale, maxScale } = cvConfig;
  return (
    <div className='relative'>
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
                        sm:max-w-[55vw] sm:min-w-[55vw]'
          contentClass='![padding-block:20px]'
        >
          <div
            id='cv'
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
