import { Button } from './Button';
import { RiEyeLine, RiEyeOffLine } from '../../common';

interface TogglePreviewProps {
  isPreviewMode: boolean;
  onClick: () => void;
}

export function Toggle({ isPreviewMode, onClick }: TogglePreviewProps) {
  const [Icon, label] = isPreviewMode
    ? [RiEyeOffLine, 'Editor']
    : [RiEyeLine, 'Preview'];

  return (
    <div className='fixed left-0 right-0 bottom-10 z-10 flex justify-center lg:hidden'>
      <Button Icon={Icon} label={label} highlight onClick={onClick} />
    </div>
  );
}
