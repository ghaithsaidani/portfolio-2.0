import styles from './contacts2.module.scss';

/* eslint-disable-next-line */
export interface Contacts2Props {}

export function Contacts2(props: Contacts2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Contacts2!</h1>
    </div>
  );
}

export default Contacts2;
