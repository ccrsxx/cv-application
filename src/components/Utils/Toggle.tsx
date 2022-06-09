import { Button } from './Button';
import { RiEyeLine } from '../../common';

interface TogglePreviewProps {
  onClick: () => void;
}

export function Toggle({ onClick }: TogglePreviewProps) {
  return (
    <div className='fixed left-0 right-0 bottom-10 z-10 flex justify-center lg:hidden'>
      <Button Icon={RiEyeLine} label='preview' highlight onClick={onClick} />
    </div>
  );
}
