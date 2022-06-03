import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Cv } from './Cv';
import type { RefObject } from 'react';
import type { ReactZoomPanPinchRef } from 'react-zoom-pan-pinch';
import type { ICvConfig } from '../../types';

interface PreviewProps {
  cvConfig: ICvConfig;
  transformRef: RefObject<ReactZoomPanPinchRef>;
  getCvScale: () => number;
}

export function Preview({ cvConfig, transformRef, getCvScale }: PreviewProps) {
  const { minScale, maxScale } = cvConfig;
  return (
    <div>
      <TransformWrapper
        ref={transformRef}
        minScale={minScale}
        maxScale={maxScale}
        initialScale={getCvScale()}
        wheel={{ step: 0.1 }}
        centerOnInit
      >
        <TransformComponent
          wrapperClass='h-screen max-w-[55vw] min-w-[55vw]'
          contentClass='[padding-block:20px]'
        >
          <Cv />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
