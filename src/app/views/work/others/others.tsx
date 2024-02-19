import styles from './others.module.scss';

/* eslint-disable-next-line */
export interface OthersProps {}

export function Others(props: OthersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Others!</h1>
    </div>
  );
}

export default Others;
