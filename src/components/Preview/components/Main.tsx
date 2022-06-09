import { useContext } from 'react';
import { Section } from './Section';
import { Experience } from './Experience';
import { PreviewContext } from '../../../common';

export function Main() {
  const { mainData } = useContext(PreviewContext);
  const { profile, experience } = mainData;

  return (
    <main className='flex flex-col gap-8 rounded-br-lg bg-white px-10 py-11'>
      <Section name='profile' profile={profile} gapLength={8} />
      <Section name='work experience' gapLength={8}>
        {experience.map((item, index) => (
          <Experience {...item} key={index} />
        ))}
      </Section>
    </main>
  );
}
