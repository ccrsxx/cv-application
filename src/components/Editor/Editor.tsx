import { Form } from './Form';
import { Navigator } from './Navigator';
import type { IFormData, SectionsName } from '../../types';

interface EditorProps {
  editorIndex: number;
  editorSections: string[];
}

const formData = {
  info: {
    inputFields: [
      {
        id: 'firstName',
        wide: false,
        type: 'text',
        label: 'First Name',
        textarea: false,
        placeholder: 'Makise'
      },
      {
        id: 'lastName',
        wide: false,
        type: 'text',
        label: 'Last Name',
        textarea: false,
        placeholder: 'Kurisu'
      },
      {
        id: 'profession',
        wide: true,
        type: 'text',
        label: 'Professional Title',
        textarea: false,
        placeholder: 'Quantum Physicist'
      },
      {
        id: 'profileText',
        wide: true,
        type: 'text',
        label: 'Profile',
        textarea: true,
        placeholder: 'I wanna bang Emilia'
      }
    ],
    styles: 'grid flex-1 grid-cols-2 gap-4 [grid-template-rows:auto_auto_1fr]'
  }
} as IFormData;

export function Editor({ editorIndex, editorSections }: EditorProps) {
  const editorName = editorSections[editorIndex] as SectionsName;
  const sectionFormData = formData[editorName];

  return (
    <div
      className='flex h-[540px] w-full max-w-lg flex-col gap-4 rounded-lg bg-main-color
                 p-8 font-kumbh-san'
    >
      <h3 className='ml-0.5 text-xl font-bold capitalize text-white'>
        {editorName}
      </h3>
      <Form {...sectionFormData} editorName={editorName} />
      <Navigator editorIndex={editorIndex} items={editorSections} />
    </div>
  );
}
