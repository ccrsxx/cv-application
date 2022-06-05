import { Section } from './Section';
import { Experience } from './Experience';
import { IconDetails } from './IconDetails';
import {
  RiGlobalLine,
  RiAtLine,
  RiMapPin2Line,
  RiPhoneLine
} from '../../common';

export function Aside() {
  return (
    <aside
      className='flex h-full flex-col gap-16 rounded-bl-lg bg-main-color
                 px-10 py-11 text-gray-color'
    >
      <Section name='contact'>
        <IconDetails Icon={RiGlobalLine} label='kurisu.jp' />
        <IconDetails Icon={RiAtLine} label='makise@kurisu.jp' />
        <IconDetails Icon={RiMapPin2Line} label='Tokyo, Japan' />
        <IconDetails Icon={RiPhoneLine} label='555-555-555' />
      </Section>
      <Section name='education' gapLength={8}>
        <Experience
          title='Master of Science'
          year={{ start: 2014, end: 2017 }}
          info='University of California'
        />
        <Experience
          title='Bachelor of Science'
          year={{ start: 2010, end: 2014 }}
          info='University of California'
        />
      </Section>
      <Section name='skills'>
        <IconDetails label='Python' />
        <IconDetails label='JavaScript' />
        <IconDetails label='TypeScript' />
      </Section>
    </aside>
  );
}
