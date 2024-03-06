import styles from './about.module.scss';
import { Skills, Studies } from '@/views/about';
import CertificationsAssociativeLife
  from '@/views/about/certifications-associative-life/certifications-associative-life';
import Experiences from '@/views/about/experiences/experiences';
import { AmanaInsurance } from '../../../assets/images';
import { Tabs } from '@/components/ui/tabs';
import ParticlesBg from 'particles-bg';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';


/* eslint-disable-next-line */
export interface AboutProps {
}

export function About(props: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });

  return (
    <section className={'about flex flex-col gap-20'}>
      <article className={'flex h-full'} ref={ref}>
        <article className={'flex-1'} style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
          <Studies />
        </article>
        <article className={'flex-1'} style={{
          transform: isInView ? 'none' : 'translateX(200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
          <Skills />
        </article>
      </article>
      <article className={'flex h-full'} ref={ref1}>
        <article className={'flex-1'} style={{
          transform: isInView1 ? 'none' : 'translateX(-200px)',
          opacity: isInView1 ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
          <CertificationsAssociativeLife />
        </article>
        <article className={'flex-1'} style={{
          transform: isInView1 ? 'none' : 'translateX(200px)',
          opacity: isInView1 ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
          <Experiences /></article>
      </article>
      {/*<div
        className="h-screen relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-5">
        <Tabs tabs={tabs} tabClassName={'tab1'}/>
      </div>*/}
    </section>
  );
}

export default About;
