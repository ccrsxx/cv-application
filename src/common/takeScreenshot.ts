import htmlToCanvas from 'html2canvas';

export async function takeScreenshot() {
  const node = document.getElementById('cv') as HTMLDivElement;
  const canvas = await htmlToCanvas(node);
  const dataUrl = canvas.toDataURL('image/png');

  return dataUrl;
}
