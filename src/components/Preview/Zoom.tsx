import { useContext } from 'react';
import { PreviewContext, RiZoomInLine, RiZoomOutLine } from '../../common';

export function Zoom() {
  const { zoomIn, zoomOut } = useContext(PreviewContext);

  return (
    <div className='absolute left-0 right-0 bottom-5 z-10 flex justify-center gap-2'>
      <button className='btn h-10 w-10' type='button' onClick={zoomOut}>
        <RiZoomOutLine className='text-lg' />
      </button>
      <button className='btn h-10 w-10' type='button' onClick={zoomIn}>
        <RiZoomInLine className='text-lg' />
      </button>
    </div>
  );
}
