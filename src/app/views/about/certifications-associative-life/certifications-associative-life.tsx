import styles from './certifications-associative-life.module.scss';
import { Card, CardContent } from '@/components/ui/card';

/* eslint-disable-next-line */
export interface CertificationsAssociativeLifeProps {
}

export function CertificationsAssociativeLife(
  props: CertificationsAssociativeLifeProps
) {
  return (
    <article className={'flex-1 flex flex-col justify-between align-middle px-24 py-5 gap-5'}>
      <div className={'text-center flex flex-col gap-5'}>
        <h2 className={'font-sfPro font-bold text-2xl'}>Certifications & Associative life</h2>
        <p className={'font-sfPro text-gray-400 text-md px-24'}>Studying is not only a way to learn new information, but
          also a way to develop valuable skills and habits
          that
          can benefit us in life.</p>
      </div>
      <Card className={'text-center h-full py-16'}>
        <CardContent></CardContent>
      </Card>
    </article>
  );
}

export default CertificationsAssociativeLife;
