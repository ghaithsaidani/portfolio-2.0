import { Skills, Studies, CertificationsAssociativeLife, Experiences } from '@/views/about';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: false });

  return (
    <section className={'about flex flex-col gap-20'}>
      <article className={'flex flex-col gap-10 lg:gap-0 lg:flex-row h-full'} ref={ref}>
        <motion.article className={'flex-1'} style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
          <Studies />
        </motion.article>
        <motion.article className={'flex-1'} style={{
          transform: isInView ? 'none' : 'translateX(200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
          <Skills />
        </motion.article>
      </article>
      <article className={'flex flex-col gap-10 lg:gap-0 lg:flex-row h-full\''} ref={ref1}>
        <motion.article className={'flex-1'} style={{
          transform: isInView1 ? 'none' : 'translateX(-200px)',
          opacity: isInView1 ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
          <CertificationsAssociativeLife />
        </motion.article>
        <motion.article className={'flex-1'} style={{
          transform: isInView1 ? 'none' : 'translateX(200px)',
          opacity: isInView1 ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
        }}>
          <Experiences /></motion.article>
      </article>

    </section>
  );
}

export default About;
