import FirstProject from '@/views/work/first-project/first-project';
import SecondProject from '@/views/work/second-project/second-project';
import ThirdProject from '@/views/work/third-project/third-project';
import React from 'react';
import Others from '@/views/work/others/others';

/* eslint-disable-next-line */
export interface WorkProps {
}

export function Work(props: WorkProps) {
  return (
    <section className={'work'}>

      <FirstProject />
      <SecondProject/>
      <ThirdProject/>
      <Others/>
    </section>
  );
}

export default Work;
