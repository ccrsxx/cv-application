import { Section } from './Section';
import { Experience } from './Experience';

export function Main() {
  return (
    <main className='flex flex-col gap-8 rounded-br-lg bg-white px-10 py-11'>
      <Section
        name='profile'
        profile={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit error
                  perferendis excepturi, assumenda architecto voluptatem obcaecati sit
                  omnis, quos laboriosam incidunt accusamus alias aliquid asperiores
                  sapiente modi neque voluptates dolor.`}
        gapLength={8}
      />
      <Section name='work experience' gapLength={8}>
        <Experience
          title='Software Engineer'
          year={{ start: 2014, end: 2017 }}
          info={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                  quasi voluptatem alias ab hic iste architecto illum unde illo eius,
                  rerum et. Voluptas tempore id eos voluptatibus libero enim aliquam.`}
          company='Google'
        />
        <Experience
          title='Network Engineer'
          year={{ start: 2017, end: 2022 }}
          info={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                 reiciendis fugit commodi ducimus deleniti odio temporibus
                 consequuntur provident eveniet facilis nisi, iste porro et
                 dignissimos dolore fugiat aut, non molestias?`}
          company='Amazon'
        />
      </Section>
    </main>
  );
}
