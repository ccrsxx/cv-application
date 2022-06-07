import { useContext } from 'react';
import { Button } from '../../Utils';
import { PreviewContext, RiZoomInLine, RiZoomOutLine } from '../../../common';

export function Zoom() {
  const { zoomIn, zoomOut } = useContext(PreviewContext);

  return (
    <div className='absolute left-0 right-0 bottom-5 z-10 flex justify-center gap-2'>
      <Button className='h-10 w-10' Icon={RiZoomOutLine} onClick={zoomOut} />
      <Button className='h-10 w-10' Icon={RiZoomInLine} onClick={zoomIn} />
    </div>
  );
}
