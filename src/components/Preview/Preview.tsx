import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Header } from './Header';
import { Aside } from './Aside';
import { Main } from './Main';
import { Zoom } from './Zoom';
import { Cv } from './Cv';
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
          <Cv>
            <Header />
            <Aside />
            <Main />
          </Cv>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
