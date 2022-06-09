import { toPng } from 'html-to-image';
import type { ReactZoomPanPinchRef } from '../types';

export async function takeScreenshot(
  transformRef: React.RefObject<ReactZoomPanPinchRef>
) {
  transformRef.current?.centerView(1);

  const node = document.getElementById('cv') as HTMLDivElement;
  const dataUrl = await toPng(node);

  transformRef.current?.centerView(0.62);

  return dataUrl;
}
