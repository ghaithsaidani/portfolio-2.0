import styles from './about.module.scss';
import { Skills, Studies } from '@/views/about';
import CertificationsAssociativeLife
  from '@/views/about/certifications-associative-life/certifications-associative-life';
import Experiences from '@/views/about/experiences/experiences';
import { AmanaInsurance } from '../../../assets/images';
import { Tabs } from '@/components/ui/tabs';
import ParticlesBg from 'particles-bg';
import React from 'react';


/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  const tabs = [
    {
      title: "Studies",
      value: "studies",
      content: (

        <article className={"flex h-[840px]"}>
          <Studies/>
        </article>

      ),
    },
    {
      title: "Skills",
      value: "skills",
      content: (
        <article className={'flex h-[840px]'}>
          <Skills />
        </article>

      ),
    },
    {
      title: "certifications & associative life",
      value: "certifications-associative-life",
      content: (
        <article className={'flex h-[840px]'}>
          <CertificationsAssociativeLife />
        </article>

      ),
    },
    {
      title: "Experiences",
      value: "experiences",
      content: (
        <article className={'flex h-[840px]'}>
          <Experiences />
        </article>

      ),
    },
  ];

  return (
    <section className={'about flex flex-col'}>
      <article className={"flex h-screen"}>
        <Studies/>
        <Skills/>
      </article>
      <article className={"flex h-screen"}>
        <CertificationsAssociativeLife/>
        <Experiences/>
      </article>
      {/*<div
        className="h-screen relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-5">
        <Tabs tabs={tabs} tabClassName={'tab1'}/>
      </div>*/}
    </section>
  );
}

export default About;
