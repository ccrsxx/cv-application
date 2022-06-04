interface SectionProps {
  name: string;
  profile?: string;
  gapLength?: number;
  children?: React.ReactNode;
}

export function Section({ name, profile, gapLength, children }: SectionProps) {
  const isMain = ['profile', 'work'].some((check) => name.includes(check));
  const headerStyle = isMain
    ? `relative after:absolute after:left-0.5 after:-bottom-4 after:block 
       after:h-0.5 after:w-16 after:rounded-sm after:bg-gray-400`
    : 'text-white';

  return (
    <section
      className={`${isMain ? `gap-${gapLength}` : 'gap-4'} flex flex-col`}
    >
      <h3 className={`${headerStyle} text-lg uppercase tracking-[5px]`}>
        {name}
      </h3>
      {profile ? (
        <h4>{profile}</h4>
      ) : (
        <div
          className={`${
            gapLength ? `gap-${gapLength}` : 'gap-3'
          } flex flex-col`}
        >
          {children}
        </div>
      )}
    </section>
  );
}
