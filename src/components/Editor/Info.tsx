import { useContext } from 'react';
import { Input } from './Input';
import { EditorContext } from '../../common';

export function Info() {
  const { handleCvDataChange } = useContext(EditorContext);

  return (
    <form className='grid flex-1 grid-cols-2 gap-4 [grid-template-rows:auto_auto_1fr]'>
      <Input
        id='firstName'
        type='text'
        label='First Name'
        placeholder='Makise'
        handleChange={handleCvDataChange('info')}
      />
      <Input id='lastName' type='text' label='Last Name' placeholder='Kurisu' />
      <Input
        id='profession'
        wide
        type='text'
        label='Professional Title'
        placeholder='Quantum Physicist'
      />
      <Input
        id='profileText'
        wide
        label='Profile'
        textarea
        placeholder='I am a software engineer that can build complex software systems.'
      />
    </form>
  );
}
