import styles from './about.module.scss';
import { Skills, Studies } from '@/views/about';


/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <section>
      <article className={"flex h-screen"}>
        <Studies/>
        <Skills/>
      </article>
    </section>
  );
}

export default About;
