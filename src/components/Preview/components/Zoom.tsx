import { useContext } from 'react';
import { Button } from '../../Utils';
import { PreviewContext, RiZoomInLine, RiZoomOutLine } from '../../../common';

export function Zoom() {
  const { handleZoom } = useContext(PreviewContext);

  return (
    <div className='absolute left-0 right-0 top-5 z-10 flex justify-center gap-2 lg:bottom-5 lg:top-auto'>
      <Button
        className='h-10 w-10'
        Icon={RiZoomOutLine}
        onClick={handleZoom(true)}
      />
      <Button
        className='h-10 w-10'
        Icon={RiZoomInLine}
        onClick={handleZoom(false)}
      />
    </div>
  );
}
