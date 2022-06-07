import htmlToCanvas from 'html2canvas';
import type { ReactZoomPanPinchRef } from '../types';

export async function takeScreenshot(
  transformRef: React.RefObject<ReactZoomPanPinchRef>
) {
  transformRef.current?.centerView(1, 0);

  const node = document.getElementById('cv') as HTMLDivElement;
  const canvas = await htmlToCanvas(node);

  transformRef.current?.centerView(0.62, 0);
  const dataUrl = canvas.toDataURL('image/png');

  return dataUrl;
}
