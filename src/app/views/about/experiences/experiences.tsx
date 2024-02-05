import styles from './experiences.module.scss';

/* eslint-disable-next-line */
export interface ExperiencesProps {}

export function Experiences(props: ExperiencesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Experiences!</h1>
    </div>
  );
}

export default Experiences;
