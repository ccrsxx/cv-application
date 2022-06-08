import { useContext } from 'react';
import { Section } from './Section';
import { Education } from './Education';
import { IconDetails } from './IconDetails';
import {
  PreviewContext,
  RiMapPin2Line,
  RiGlobalLine,
  RiPhoneLine,
  RiAtLine
} from '../../../common';

export function Aside() {
  const { asideData } = useContext(PreviewContext);
  const { contact, education, skills } = asideData;

  return (
    <aside
      className='flex h-full flex-col gap-16 rounded-bl-lg bg-main-color
                 px-10 py-11 text-gray-color'
    >
      <Section name='contact'>
        {contact.map(([key, value], index) => {
          let Icon;

          switch (key) {
            case 'website':
              Icon = RiGlobalLine;
              break;
            case 'email':
              Icon = RiAtLine;
              break;
            case 'address':
              Icon = RiMapPin2Line;
              break;
            default:
              Icon = RiPhoneLine;
              break;
          }

          return <IconDetails Icon={Icon} label={value} key={index} />;
        })}
      </Section>
      <Section name='education' gapLength={8}>
        {education.map((item, index) => (
          <Education {...item} key={index} />
        ))}
      </Section>
      <Section name='skills'>
        {skills.map(({ skill }, index) => (
          <IconDetails label={skill} key={index} />
        ))}
      </Section>
    </aside>
  );
}
