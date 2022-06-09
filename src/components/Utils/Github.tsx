import { Button } from './Button';
import { RiGithubLine } from '../../common';

export function Github() {
  return (
    <a
      className='flex justify-center'
      href='https://github.com/ccrsxx'
      rel='noreferrer'
      target='_blank'
      tabIndex={-1}
    >
      <Button className='normal-case' Icon={RiGithubLine} label='ccrsxx' />
    </a>
  );
}
