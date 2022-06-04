interface EditorProps {
  editorName: string;
}

export function Editor({ editorName }: EditorProps) {
  return (
    <div className='h-[540px] w-full max-w-lg rounded-xl bg-main-bg p-6'>
      <h3 className='text-xl font-bold text-white'>{editorName}</h3>
    </div>
  );
}
