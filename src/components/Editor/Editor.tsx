import { Header, Form, Navigator } from './components';
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
        id: 'profile',
        wide: true,
        type: 'text',
        label: 'Profile',
        textarea: true,
        placeholder: 'I wanna bang Emilia'
      }
    ]
  },
  contact: {
    inputFields: [
      {
        id: 'website',
        wide: true,
        type: 'text',
        label: 'Website',
        textarea: false,
        placeholder: 'kurisu.jp'
      },
      {
        id: 'email',
        wide: true,
        type: 'text',
        label: 'Email',
        textarea: false,
        placeholder: 'makise@kurisu.jp'
      },
      {
        id: 'address',
        wide: false,
        type: 'text',
        label: 'Address',
        textarea: false,
        placeholder: 'Tokyo, Japan'
      },
      {
        id: 'phone',
        wide: false,
        type: 'text',
        label: 'Phone',
        textarea: false,
        placeholder: '555-555-5555'
      }
    ]
  },
  education: {
    inputFields: [
      {
        id: 'degree',
        wide: false,
        type: 'text',
        label: 'Degree',
        textarea: false,
        placeholder: 'Bachelor of Science'
      },
      {
        id: 'university',
        wide: false,
        type: 'text',
        label: 'University',
        textarea: false,
        placeholder: 'University of Tokyo'
      },
      {
        id: 'from',
        wide: false,
        type: 'text',
        label: 'From',
        textarea: false,
        placeholder: '2010'
      },
      {
        id: 'to',
        wide: false,
        type: 'text',
        label: 'To',
        textarea: false,
        placeholder: '2014'
      }
    ]
  },
  experience: {
    inputFields: [
      {
        id: 'title',
        wide: false,
        type: 'text',
        label: 'Title',
        textarea: false,
        placeholder: 'Software Engineer'
      },
      {
        id: 'company',
        wide: false,
        type: 'text',
        label: 'Company',
        textarea: false,
        placeholder: 'Google'
      },
      {
        id: 'from',
        wide: false,
        type: 'text',
        label: 'From',
        textarea: false,
        placeholder: '2020'
      },
      {
        id: 'to',
        wide: false,
        type: 'text',
        label: 'To',
        textarea: false,
        placeholder: 'Present'
      },
      {
        id: 'description',
        wide: true,
        type: 'text',
        label: 'Description',
        textarea: true,
        placeholder: 'I was a Software Engineer at Google'
      }
    ]
  }
} as IFormData;

export function Editor({ editorIndex, editorSections }: EditorProps) {
  const editorName = editorSections[editorIndex] as SectionsName;
  const sectionInputFields = formData[editorName];

  return (
    <div
      className='relative flex h-[540px] w-full max-w-lg flex-col gap-4 rounded-lg
                 bg-main-color p-8 font-kumbh-san'
    >
      <Header editorName={editorName} />
      <Form {...sectionInputFields} editorName={editorName} />
      <Navigator
        currentIndex={editorIndex}
        items={editorSections}
        inEditorSection
      />
    </div>
  );
}
