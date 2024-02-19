import styles from './second-project.module.scss';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { MondeEnBouche } from '../../../../assets/images';

/* eslint-disable-next-line */
export interface SecondProjectProps {}

export function SecondProject(props: SecondProjectProps) {
  return (
    <article className={'second-project overflow-hidden dark:bg-[#0B0B0F] bg-white w-full'}>
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        src={MondeEnBouche}
        showGradient={false}
      />
    </article>
  );
}

export default SecondProject;
