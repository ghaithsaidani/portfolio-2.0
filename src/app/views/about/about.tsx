import styles from './about.module.scss';
import { Skills, Studies } from '@/views/about';
import CertificationsAssociativeLife
  from '@/views/about/certifications-associative-life/certifications-associative-life';
import Experiences from '@/views/about/experiences/experiences';


/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <section>
      <article className={"flex h-screen"}>
        <Studies/>
        <Skills/>
      </article>
      <article className={"flex h-screen"}>
        <CertificationsAssociativeLife/>
        <Experiences/>
      </article>
    </section>
  );
}

export default About;
